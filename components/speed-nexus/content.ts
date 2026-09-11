import {
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  Clock3,
  GitBranch,
  Handshake,
  LineChart,
  Network,
  Puzzle,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Target,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

export const siteUrl = "https://speednexus.com.br";

export const contact = {
  email: "speed.nexus.br@gmail.com",
  instagramHandle: "@speed.nexus.br",
  instagramUrl: "https://www.instagram.com/speed.nexus.br/",
  whatsapps: [
    { label: "(43) 98445-7932", href: "https://wa.me/5543984457932" },
    { label: "(43) 98474-0935", href: "https://wa.me/5543984740935" },
  ],
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const processSteps = [
  {
    number: "01",
    title: "Entender",
    text: "Compreender o contexto, a rotina da empresa e a dor que está custando tempo ou margem.",
    Icon: SearchCheck,
  },
  {
    number: "02",
    title: "Diagnosticar",
    text: "Identificar gargalos, causas, dependências e prioridades antes de escolher uma solução.",
    Icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Definir",
    text: "Selecionar o caminho mais adequado: ferramenta pronta, integração, automação, dados ou desenvolvimento.",
    Icon: Target,
  },
  {
    number: "04",
    title: "Conectar",
    text: "Orquestrar tecnologia, especialistas e parceiros quando o problema exige mais de uma frente.",
    Icon: Network,
  },
  {
    number: "05",
    title: "Implementar",
    text: "Coordenar a execução para tirar a decisão do papel com clareza de escopo e responsabilidades.",
    Icon: Settings2,
  },
  {
    number: "06",
    title: "Acompanhar",
    text: "Avaliar evolução, indicadores e próximos ajustes de acordo com a necessidade e o plano contratado.",
    Icon: LineChart,
  },
];

export const problemSignals = [
  "Retrabalho constante",
  "Processos manuais",
  "Estoque mal controlado",
  "Sistemas desconectados",
  "Tarefas repetitivas",
  "Decisões sem dados claros",
  "Ferramentas inadequadas",
  "Desperdícios operacionais",
];

export const solutionModes = [
  { title: "Software", Icon: Puzzle },
  { title: "Automação", Icon: Zap },
  { title: "Ferramentas", Icon: Workflow },
  { title: "Dados/BI", Icon: BarChart3 },
  { title: "Especialistas", Icon: UsersRound },
];

export const differentials = [
  {
    title: "Diagnóstico antes da solução",
    text: "A análise vem antes da tecnologia. O objetivo é entender a causa do gargalo, não empurrar uma ferramenta.",
    Icon: SearchCheck,
  },
  {
    title: "Independência tecnológica",
    text: "Quando uma solução de mercado fizer mais sentido, ela pode ser escolhida. Quando não fizer, o caminho pode ser sob medida.",
    Icon: GitBranch,
  },
  {
    title: "Rede multidisciplinar",
    text: "Alguns problemas passam por gestão, operação, vendas, atendimento e tecnologia ao mesmo tempo. A Speed Nexus conecta as frentes necessárias.",
    Icon: Handshake,
  },
  {
    title: "Acompanhamento",
    text: "A proposta não termina na implantação. A evolução pode ser acompanhada com indicadores, ajustes e leitura de resultado.",
    Icon: Clock3,
  },
  {
    title: "Visão integrada",
    text: "Um gargalo raramente vive isolado. A análise considera fluxo, pessoas, dados, ferramentas e decisão.",
    Icon: ShieldCheck,
  },
  {
    title: "Dados, decisão e execução",
    text: "Sempre que possível, informações reais ajudam a decidir melhor e transformar a decisão em ação.",
    Icon: BrainCircuit,
  },
];
