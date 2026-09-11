import { z } from "zod";

const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const minute = 60_000;

const leadSchema = z.object({
  lead: z.object({
    name: z.string().trim().min(2).max(120),
    company: z.string().trim().min(2).max(140),
    whatsapp: z.string().trim().min(8).max(40),
    email: z.string().trim().email().max(160),
    consent: z.literal(true),
  }),
  answers: z.record(z.string(), z.string()).default({}),
  result: z.object({
    level: z.string().max(40),
    score: z.number().int().min(0).max(100),
    area: z.string().max(80),
    signals: z.array(z.string()).max(8),
    priority: z.string().max(80),
    opportunities: z.array(z.string()).max(8),
    nextSteps: z.array(z.string()).max(8),
  }),
});

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

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export async function POST(request: Request) {
  if (isRateLimited(request, 6)) {
    return Response.json(
      { message: "Muitas tentativas em pouco tempo. Tente novamente em instantes." },
      { status: 429 }
    );
  }

  try {
    const payload = leadSchema.parse(await request.json());
    const webhookUrl = process.env.LEADS_WEBHOOK_URL;

    if (!webhookUrl) {
      return Response.json(
        {
          message:
            "O envio automático ainda não foi configurado. Fale com a Speed Nexus pelo WhatsApp.",
        },
        { status: 503 }
      );
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        lead: {
          ...payload.lead,
          name: clean(payload.lead.name),
          company: clean(payload.lead.company),
          whatsapp: clean(payload.lead.whatsapp),
          email: clean(payload.lead.email.toLowerCase()),
        },
        submittedAt: new Date().toISOString(),
        source: "speed-nexus-site",
      }),
      signal: AbortSignal.timeout(8_000),
    });

    if (!webhookResponse.ok) {
      throw new Error("Lead webhook rejected the request");
    }

    return Response.json(
      {
        ok: true,
        message:
          "Diagnóstico enviado. A Speed Nexus poderá entrar em contato para aprofundar a análise.",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { message: "Revise os dados de contato e o consentimento antes de enviar." },
        { status: 400 }
      );
    }

    return Response.json(
      {
        message:
          "Não foi possível salvar o diagnóstico agora. Você ainda pode chamar a Speed Nexus pelo WhatsApp.",
      },
      { status: 500 }
    );
  }
}
