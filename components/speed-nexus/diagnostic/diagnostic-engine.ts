export type Answers = Record<string, string>;

export type Question = {
  id: string;
  title: string;
  eyebrow?: string;
  options: string[];
};

export type DiagnosticResult = {
  level: "Controlado" | "Moderado" | "Alto" | "Crítico";
  score: number;
  area: string;
  signals: string[];
  priority: string;
  opportunities: string[];
  nextSteps: string[];
};

export const areaQuestion: Question = {
  id: "area",
  eyebrow: "Pergunta 1",
  title: "Qual área mais preocupa você hoje?",
  options: [
    "Vendas",
    "Financeiro",
    "Administrativo",
    "Estoque",
    "Atendimento",
    "Operações",
    "Marketing",
    "Tecnologia",
    "Gestão",
    "Ainda não sei",
  ],
};

const baseQuestions: Question[] = [
  {
    id: "symptom",
    eyebrow: "Sintoma principal",
    title: "Qual é o principal sintoma?",
    options: [
      "Muito retrabalho",
      "Processos demorados",
      "Falta de informação",
      "Erros frequentes",
      "Custos altos",
      "Dificuldade para decidir",
      "Sistemas que não conversam",
      "Tarefas repetitivas",
      "Perda de clientes/vendas",
      "Outro / ainda não sei",
    ],
  },
  {
    id: "people",
    eyebrow: "Tamanho",
    title: "Quantas pessoas trabalham na empresa?",
    options: ["1-5", "6-10", "11-30", "31-50", "51-100", "100+"],
  },
  {
    id: "manual",
    eyebrow: "Processo",
    title: "Quanto do processo depende de tarefas manuais?",
    options: ["Muito pouco", "Pouco", "Moderado", "Muito", "Quase tudo"],
  },
  {
    id: "systems",
    eyebrow: "Ferramentas",
    title: "Sua empresa utiliza algum sistema de gestão?",
    options: [
      "ERP",
      "CRM",
      "ERP + CRM",
      "Planilhas",
      "Sistemas próprios",
      "Vários sistemas separados",
      "Nenhum",
      "Não sei",
    ],
  },
  {
    id: "systemsShare",
    eyebrow: "Integração",
    title: "Esses sistemas compartilham informações entre si?",
    options: ["Sim", "Parcialmente", "Não", "Não sei"],
  },
  {
    id: "rework",
    eyebrow: "Retrabalho",
    title: "Com que frequência acontecem retrabalhos?",
    options: [
      "Raramente",
      "Algumas vezes por mês",
      "Toda semana",
      "Todos os dias",
      "Várias vezes ao dia",
    ],
  },
  {
    id: "timeLost",
    eyebrow: "Tempo perdido",
    title:
      "Quanto tempo você acredita que sua equipe perde com processos ineficientes?",
    options: [
      "Menos de 2h/semana",
      "2-5h",
      "5-10h",
      "10-20h",
      "Mais de 20h",
      "Não sei",
    ],
  },
  {
    id: "indicators",
    eyebrow: "Indicadores",
    title:
      "Hoje você consegue acompanhar os principais indicadores da empresa facilmente?",
    options: ["Sim", "Parcialmente", "Não", "Não sei quais acompanhar"],
  },
  {
    id: "resolution",
    eyebrow: "Decisão",
    title: "Quando surge um problema operacional, como ele normalmente é resolvido?",
    options: [
      "A equipe resolve internamente",
      "Contratamos um profissional",
      "Contratamos uma empresa",
      "Tentamos ferramentas diferentes",
      "Improvisamos",
      "Normalmente o problema continua",
    ],
  },
  {
    id: "priority",
    eyebrow: "Prioridade",
    title: "Qual é a prioridade?",
    options: [
      "Economizar tempo",
      "Reduzir custos",
      "Aumentar vendas",
      "Melhorar controle",
      "Automatizar",
      "Integrar sistemas",
      "Tomar decisões melhores",
      "Melhorar atendimento",
    ],
  },
  {
    id: "urgency",
    eyebrow: "Urgência",
    title: "Qual a urgência?",
    options: [
      "Quero resolver imediatamente",
      "Nos próximos 30 dias",
      "Nos próximos 3 meses",
      "Estou pesquisando",
      "Ainda não sei",
    ],
  },
];

const branchQuestions: Record<string, Question> = {
  Estoque: {
    id: "branch",
    eyebrow: "Estoque",
    title: "O que mais aparece no controle de estoque?",
    options: [
      "Divergência entre sistema e realidade",
      "Estoque parado",
      "Ruptura de produtos",
      "Inventário manual",
      "Falta de integração com vendas",
      "Ainda não sei",
    ],
  },
  Vendas: {
    id: "branch",
    eyebrow: "Vendas",
    title: "Onde a venda mais perde força?",
    options: [
      "Acompanhamento de leads",
      "Falta de CRM",
      "Perda de oportunidades",
      "Follow-up inconsistente",
      "Baixa conversão",
      "Ainda não sei",
    ],
  },
  Financeiro: {
    id: "branch",
    eyebrow: "Financeiro",
    title: "Qual ponto financeiro exige mais atenção?",
    options: [
      "Fluxo de caixa",
      "Conciliação manual",
      "Contas a pagar/receber",
      "Relatórios demorados",
      "Processos manuais",
      "Ainda não sei",
    ],
  },
  Atendimento: {
    id: "branch",
    eyebrow: "Atendimento",
    title: "Qual situação aparece com mais frequência no atendimento?",
    options: [
      "Tempo de resposta alto",
      "WhatsApp difícil de organizar",
      "Falta de histórico",
      "Solicitações perdidas",
      "Pouca automação",
      "Ainda não sei",
    ],
  },
  Tecnologia: {
    id: "branch",
    eyebrow: "Tecnologia",
    title: "Qual frente tecnológica preocupa mais?",
    options: [
      "Integrações",
      "Sistemas instáveis",
      "Segurança",
      "Ferramentas desalinhadas",
      "Manutenção",
      "Ainda não sei",
    ],
  },
  default: {
    id: "branch",
    eyebrow: "Contexto",
    title: "O que mais ajudaria a entender o gargalo?",
    options: [
      "Mapear processos",
      "Organizar dados",
      "Automatizar tarefas",
      "Integrar ferramentas",
      "Revisar responsabilidades",
      "Ainda não sei",
    ],
  },
};

export function buildQuestions(answers: Answers) {
  const branch = branchQuestions[answers.area] ?? branchQuestions.default;
  const questions = [areaQuestion, baseQuestions[0], branch, ...baseQuestions.slice(1)];

  if (answers.systems === "Nenhum") {
    return questions.filter((question) => question.id !== "systemsShare");
  }

  return questions;
}

function valueScore(value: string | undefined, scores: Record<string, number>) {
  if (!value) return 0;
  return scores[value] ?? 0;
}

function unique(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

export function buildResult(answers: Answers): DiagnosticResult {
  const score = Math.min(
    100,
    18 +
      valueScore(answers.manual, {
        "Muito pouco": 0,
        Pouco: 6,
        Moderado: 12,
        Muito: 20,
        "Quase tudo": 26,
      }) +
      valueScore(answers.systemsShare, {
        Sim: 0,
        Parcialmente: 10,
        Não: 18,
        "Não sei": 12,
      }) +
      valueScore(answers.rework, {
        Raramente: 0,
        "Algumas vezes por mês": 6,
        "Toda semana": 12,
        "Todos os dias": 20,
        "Várias vezes ao dia": 25,
      }) +
      valueScore(answers.timeLost, {
        "Menos de 2h/semana": 0,
        "2-5h": 6,
        "5-10h": 12,
        "10-20h": 18,
        "Mais de 20h": 24,
        "Não sei": 8,
      }) +
      valueScore(answers.indicators, {
        Sim: 0,
        Parcialmente: 8,
        Não: 16,
        "Não sei quais acompanhar": 18,
      }) +
      valueScore(answers.urgency, {
        "Quero resolver imediatamente": 10,
        "Nos próximos 30 dias": 8,
        "Nos próximos 3 meses": 5,
        "Estou pesquisando": 2,
        "Ainda não sei": 3,
      })
  );

  const level =
    score >= 82 ? "Crítico" : score >= 62 ? "Alto" : score >= 38 ? "Moderado" : "Controlado";

  const signals = unique([
    answers.symptom,
    answers.branch,
    answers.manual === "Muito" || answers.manual === "Quase tudo"
      ? "Dependência de tarefas manuais"
      : "",
    answers.systemsShare === "Não" || answers.systemsShare === "Parcialmente"
      ? "Integração incompleta entre sistemas"
      : "",
    answers.indicators === "Não" || answers.indicators === "Não sei quais acompanhar"
      ? "Indicadores pouco acessíveis"
      : "",
  ]).slice(0, 5);

  const opportunities = unique([
    answers.priority === "Automatizar" || answers.manual === "Muito" || answers.manual === "Quase tudo"
      ? "Automação de tarefas repetitivas"
      : "",
    answers.systemsShare === "Não" || answers.systemsShare === "Parcialmente"
      ? "Integração entre ferramentas"
      : "",
    answers.indicators !== "Sim" ? "Dashboards e indicadores de gestão" : "",
    answers.area === "Vendas" ? "Organização do funil e follow-up" : "",
    answers.area === "Estoque" ? "Revisão do fluxo de estoque e inventário" : "",
    answers.area === "Financeiro" ? "Rotina financeira e relatórios" : "",
    answers.area === "Atendimento" ? "Histórico, triagem e tempo de resposta" : "",
    "Revisão do processo antes de escolher tecnologia",
  ]).slice(0, 5);

  return {
    level,
    score,
    area: answers.area || "Ainda não definida",
    signals,
    priority: answers.urgency || "A avaliar",
    opportunities,
    nextSteps: [
      "Revisar o fluxo atual com a equipe envolvida.",
      "Separar exemplos reais do gargalo nos últimos dias.",
      "Conversar com a Speed Nexus para transformar o diagnóstico inicial em análise aprofundada.",
    ],
  };
}

export function getInsight(answers: Answers, currentQuestion?: Question) {
  if (answers.area === "Estoque") {
    return "Estoque parado imobiliza capital. Um bom diagnóstico pode revelar se o problema está na previsão, no processo ou na informação.";
  }
  if (answers.area === "Vendas") {
    return "Quando oportunidades se perdem no acompanhamento, o problema pode estar no processo comercial, no CRM ou no ritmo de follow-up.";
  }
  if (answers.area === "Financeiro") {
    return "Rotinas financeiras manuais costumam atrasar decisões e dificultar uma leitura confiável de caixa.";
  }
  if (answers.area === "Atendimento") {
    return "Tempo de resposta e falta de histórico podem transformar solicitações simples em oportunidades perdidas.";
  }
  if (answers.symptom === "Muito retrabalho") {
    return "Quando uma tarefa precisa ser refeita constantemente, o custo não está apenas no erro: está nas horas acumuladas da equipe.";
  }
  if (answers.symptom === "Sistemas que não conversam" || answers.systemsShare === "Não") {
    return "Informação duplicada entre sistemas costuma gerar trabalho manual e aumentar o risco de inconsistências.";
  }
  if (answers.symptom === "Dificuldade para decidir" || answers.indicators !== undefined) {
    return "Decisões ficam mais difíceis quando os dados existem, mas estão espalhados ou chegam tarde.";
  }
  if (currentQuestion?.id === "manual") {
    return "Processos manuais não são necessariamente ruins, mas precisam ser intencionais. O problema aparece quando viram dependência invisível.";
  }
  return "Vamos entender onde sua empresa pode estar perdendo eficiência sem presumir que a resposta seja um software novo.";
}
