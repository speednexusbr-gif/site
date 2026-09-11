import { z } from "zod";

const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const minute = 60_000;

const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["assistant", "user"]),
        content: z.string().trim().min(1).max(500),
      })
    )
    .max(6),
  diagnosticContext: z.unknown().nullable().optional(),
});

const systemPrompt = `
Você é Nexa, assistente digital da Speed Nexus.

Contexto institucional:
- A Speed Nexus é uma startup brasileira que identifica gargalos empresariais, conecta a solução mais adequada e acompanha a implementação até os resultados.
- Atua como assessoria e integradora de soluções empresariais, com tecnologia como meio para resolver problemas.
- O foco inicial são pequenas empresas.
- A Speed Nexus pode desenvolver software, integrar sistemas, automatizar processos, apoiar análise de dados, implementar ferramentas existentes, conectar especialistas e coordenar a execução quando fizer sentido.
- Diferenciais: diagnóstico antes da solução, independência tecnológica, rede multidisciplinar, acompanhamento, visão integrada, dados para decisão e execução.
- Contato: speed.nexus.br@gmail.com, Instagram @speed.nexus.br, WhatsApp (43) 98445-7932 e (43) 98474-0935.
- Posicionamento: “Identificamos gargalos. Conectamos soluções. Acompanhamos resultados.”
- Processo: entender contexto e dor; diagnosticar causas, dependências e prioridades; definir o caminho; conectar tecnologia, especialistas e parceiros; implementar com escopo claro; acompanhar indicadores e ajustes.
- O diagnóstico inicial gratuito percorre até 13 etapas e pode começar por vendas, finanças, administrativo, estoque, atendimento, operações, marketing, tecnologia, gestão ou pela opção “não sei”. O resultado indica nível estimado de gargalo, sinais de alerta e possíveis caminhos, sem substituir uma análise aprofundada.
- Navegação do site: Início, Soluções, Como Funciona, Diferenciais, Diagnóstico, Sobre e Contato. Há Política de Privacidade e Termos de Uso no rodapé.

Regras:
- Responda em português do Brasil.
- Seja profissional, cordial, objetiva e consultiva.
- Não finja ser humana.
- Responda apenas dentro do escopo da Speed Nexus, diagnóstico inicial, serviços e próximos passos.
- Não invente preços, clientes, cases, estatísticas, prêmios, exclusividades ou promessas de resultado.
- Quando não souber, diga com clareza e sugira contato humano.
- Nunca solicite senha, dados bancários ou dados pessoais desnecessários.
- Ao falar do diagnóstico, deixe claro que é inicial e não substitui análise aprofundada.
- Se o usuário quiser começar o diagnóstico, oriente a usar a seção de diagnóstico do site.
- Limite a resposta a no máximo 3 parágrafos curtos. Vá direto ao ponto e evite repetir a pergunta.
- Se perguntarem preço, explique que depende do diagnóstico e do escopo; não invente valores. O diagnóstico inicial é gratuito.
- Se pedirem algo fora do escopo, recuse brevemente e volte a oferecer ajuda sobre a Speed Nexus.
`.trim();

function getRequestKey(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("user-agent") ||
    "anonymous"
  );
}

function isRateLimited(request: Request, limit: number) {
  const key = getRequestKey(request);
  const now = Date.now();
  const bucket = rateBuckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    rateBuckets.set(key, { count: 1, resetAt: now + minute });
    return false;
  }

  bucket.count += 1;
  return bucket.count > limit;
}

function extractReply(payload: unknown) {
  const content = (
    payload as { choices?: Array<{ message?: { content?: string } }> }
  )?.choices?.[0]?.message?.content;

  return typeof content === "string" ? content.trim() : undefined;
}

export async function POST(request: Request) {
  if (isRateLimited(request, 6)) {
    return Response.json(
      { message: "A Nexa recebeu muitas mensagens em pouco tempo. Tente novamente em instantes." },
      { status: 429 }
    );
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || "openrouter/free";

  try {
    const payload = requestSchema.parse(await request.json());

    if (!apiKey) {
      return Response.json({
        unavailable: true,
        reply:
          "A Nexa está preparada para IA real, mas a chave do OpenRouter ainda não foi configurada. Enquanto isso, você pode fazer o diagnóstico inicial no site ou falar com a Speed Nexus pelo WhatsApp.",
      });
    }

    const diagnosticContext = payload.diagnosticContext
      ? `\n\nContexto autorizado do diagnóstico desta sessão:\n${JSON.stringify(
          payload.diagnosticContext
        ).slice(0, 2500)}`
      : "";

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://speed-nexus.guilhermelimad224341.chatgpt.site",
        "X-OpenRouter-Title": "Speed Nexus - Nexa",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: `${systemPrompt}${diagnosticContext}` },
          ...payload.messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
        temperature: 0.35,
        max_tokens: 260,
      }),
    });

    if (!response.ok) {
      return Response.json(
        { message: "A Nexa não conseguiu acessar a IA agora. Tente novamente em instantes." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = extractReply(data);

    return Response.json({
      reply:
        reply ||
        "Não consegui gerar uma resposta clara agora. Tente reformular a pergunta ou fale com a Speed Nexus pelo WhatsApp.",
    });
  } catch {
    return Response.json(
      { message: "A mensagem não pôde ser processada. Revise o texto e tente novamente." },
      { status: 400 }
    );
  }
}
