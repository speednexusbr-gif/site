export type NexaLocalAnswer = {
  reply: string;
  action?: "diagnostic" | "solutions" | "process" | "differentials" | "contact";
};

function normalize(text: string) {
  return text
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

export function getLocalNexaAnswer(message: string): NexaLocalAnswer | null {
  const text = normalize(message);

  if (hasAny(text, ["comecar o diagnostico", "fazer diagnostico", "iniciar diagnostico"])) {
    return {
      reply:
        "Perfeito. Vou levar você ao diagnóstico inicial gratuito. Ele faz perguntas rápidas, aponta sinais de gargalo e sugere possíveis caminhos. O resultado é preliminar e não substitui uma análise aprofundada.",
      action: "diagnostic",
    };
  }

  if (
    hasAny(text, [
      "o que e speed nexus",
      "o que e a speed nexus",
      "o que a speed nexus faz",
      "quem e speed nexus",
      "quem sao voces",
      "speednexus",
      "speednet",
      "speednexo",
    ])
  ) {
    return {
      reply:
        "A Speed Nexus ajuda pequenas empresas a identificar gargalos, conectar a solução mais adequada e acompanhar a implementação. Podemos combinar software, automação, ferramentas prontas, integrações, dados/BI e especialistas. A tecnologia é um meio: primeiro entendemos o problema, depois definimos o melhor caminho.",
      action: "solutions",
    };
  }

  if (hasAny(text, ["servico", "solucao", "software", "automacao", "integracao", "dados", "bi"])) {
    return {
      reply:
        "As soluções são definidas depois do diagnóstico. Conforme o gargalo, a Speed Nexus pode desenvolver ou integrar software, automatizar processos, implantar ferramentas existentes, organizar dados e BI ou conectar especialistas. Não empurramos uma tecnologia antes de entender a causa.",
      action: "solutions",
    };
  }

  if (hasAny(text, ["como funciona", "processo", "etapas", "metodo"])) {
    return {
      reply:
        "O trabalho segue seis etapas: entender o contexto, diagnosticar causas e prioridades, definir o caminho, conectar tecnologia e especialistas, implementar com escopo claro e acompanhar indicadores e ajustes.",
      action: "process",
    };
  }

  if (hasAny(text, ["diagnostico", "avaliacao", "gargalo"])) {
    return {
      reply:
        "O diagnóstico inicial é gratuito e começa pela área que mais preocupa: vendas, finanças, administrativo, estoque, atendimento, operações, marketing, tecnologia ou gestão. Ao final, você recebe um nível estimado de gargalo, sinais de alerta e possíveis caminhos. É uma análise preliminar.",
      action: "diagnostic",
    };
  }

  if (hasAny(text, ["diferencial", "por que contratar", "vantagem"])) {
    return {
      reply:
        "Os principais diferenciais são: diagnóstico antes da solução, independência tecnológica, visão integrada de pessoas, processos, dados e ferramentas, rede multidisciplinar e acompanhamento da execução e dos resultados.",
      action: "differentials",
    };
  }

  if (hasAny(text, ["preco", "valor", "quanto custa", "orcamento", "mensalidade"])) {
    return {
      reply:
        "Os valores não são tabelados no site, porque dependem do diagnóstico, do escopo e da solução indicada. O diagnóstico inicial é gratuito; depois dele, a equipe pode preparar uma proposta adequada ao caso, sem inventar custos antes de entender a necessidade.",
      action: "contact",
    };
  }

  if (hasAny(text, ["whatsapp", "telefone", "contato", "email", "instagram", "falar com humano", "atendente"])) {
    return {
      reply:
        "Você pode falar com a Speed Nexus pelo WhatsApp (43) 98445-7932 ou (43) 98474-0935, pelo e-mail speed.nexus.br@gmail.com ou pelo Instagram @speed.nexus.br.",
      action: "contact",
    };
  }

  if (hasAny(text, ["privacidade", "lgpd", "meus dados", "dados pessoais"])) {
    return {
      reply:
        "Os dados informados são usados para contato e continuidade do diagnóstico. Você pode consultar a Política de Privacidade no rodapé do site e nunca deve enviar senhas, dados bancários ou informações pessoais desnecessárias pelo chat.",
    };
  }

  if (hasAny(text, ["onde fica", "onde encontro", "site", "menu", "pagina"])) {
    return {
      reply:
        "No menu do site você encontra Início, Soluções, Como Funciona, Diferenciais, Diagnóstico, Sobre e Contato. Diga qual área procura que eu indico o caminho.",
    };
  }

  if (hasAny(text, ["ola", "oi", "bom dia", "boa tarde", "boa noite"]) && text.length < 35) {
    return {
      reply:
        "Olá! Posso explicar o que a Speed Nexus faz, mostrar como funciona o diagnóstico, orientar você pelas áreas do site ou indicar um canal de contato. O que você precisa resolver?",
    };
  }

  return null;
}
