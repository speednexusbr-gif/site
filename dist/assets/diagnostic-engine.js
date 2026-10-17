export const areas = [
 ['financeiro','Financeiro'], ['vendas','Vendas'], ['atendimento','Atendimento'],
 ['estoque','Estoque e compras'], ['operacao','Operação e entregas'], ['administrativo','Administrativo e pessoas'],
 ['marketing','Marketing'], ['tecnologia','Tecnologia'], ['gestao','Gestão e decisões']
];
const o=(id,label)=>({id,label});
const q=(id,group,title,help,options,multi=false)=>({id,group,title,help,options:options.map(v=>Array.isArray(v)?o(...v):o(v,v)),multi});
const unknown=['naosei','Não sei avaliar'];
const none=['nenhum','Nenhuma dessas situações'];
export const opening=[
 q('segmento','Contexto','Como sua empresa atua?','Escolha a opção que melhor representa a atividade principal.',[['comercio','Comércio'],['servicos','Serviços'],['industria','Indústria'],['saude','Saúde e bem-estar'],['alimentacao','Alimentação'],['outro','Outro segmento']]),
 q('porte','Contexto','Quantas pessoas trabalham na empresa?','Inclua sócios e equipe fixa.',[['solo','Somente eu'],['2a5','2 a 5'],['6a15','6 a 15'],['16a50','16 a 50'],['51mais','Mais de 50']]),
 q('areas','Visão geral','Onde você percebe dificuldades hoje?','Pode escolher várias. Vamos aprofundar cada uma das áreas selecionadas.',[...areas, ['naosei','Ainda não sei onde está o problema']],true),
 q('sintomas','Visão geral','O que mais atrapalha a rotina?','Selecione todos os sinais que você reconhece.',[['retrabalho','Tarefas precisam ser refeitas'],['atrasos','Atrasos e acúmulo de tarefas'],['custos','Custos altos ou desperdícios'],['informacao','Informações desencontradas'],['clientes','Perda de clientes ou vendas'],['dependencia','Tudo depende do dono'],none,unknown],true),
 q('frequencia','Visão geral','Com que frequência os problemas aparecem?','Pense nas situações que você acabou de selecionar.',[['diaria','Todos os dias'],['semanal','Toda semana'],['mensal','Algumas vezes por mês'],['rara','Raramente'],['nenhum','Não percebo problemas'],unknown]),
 q('impacto','Visão geral','Qual impacto você já percebeu?','Marque efeitos observados. Não precisa estimar valores.',[['tempo','Horas de trabalho perdidas'],['perda','Perda de dinheiro ou oportunidades'],['reclamacoes','Reclamações ou desgaste da equipe'],['parada','Interrupção da operação'],['nenhum','Não identifiquei impacto'],unknown],true),
 q('caixa','Visão geral','Como estão os compromissos financeiros da empresa?','Essa pergunta ajuda a reconhecer situações que merecem atenção, mesmo fora da área escolhida.',[['emdia','Em dia, com previsão para as próximas semanas'],['semvisao','Em dia, mas sem previsão clara do caixa'],['apertado','Caixa apertado; há risco de atrasar pagamentos'],['atrasado','Já há pagamentos essenciais em atraso'],['naosei','Não tenho essa informação']]),
 q('ferramentas','Rotina e informação','Como vocês registram e acompanham o trabalho?','Selecione os recursos que realmente usam.',[['papel','Papel ou anotações avulsas'],['planilhas','Planilhas'],['whatsapp','WhatsApp'],['erp','Sistema de gestão / ERP'],['crm','Sistema comercial / CRM'],['proprio','Sistema próprio ou outras ferramentas'],['nenhum','Não há registro organizado'],unknown],true),
 q('integracao','Rotina e informação','É preciso copiar a mesma informação entre ferramentas?','Considere sistemas, planilhas e outros registros.',[['sempre','Sim, com frequência'],['asvezes','Às vezes'],['nunca','Não; o fluxo funciona sem duplicação'],unknown]),
 q('indicadores','Rotina e informação','As informações para decidir chegam de forma confiável?','Por exemplo: caixa, vendas, prazos ou capacidade de atendimento.',[['sim','Sim, atualizadas e confiáveis'],['parcial','Algumas sim, outras precisam ser conferidas'],['nao','Não; estão espalhadas ou desatualizadas'],unknown]),
 q('tentativas','Rotina e informação','O que já foi tentado para melhorar?','Marque o que se aplica à situação atual.',[['processo','Mudamos processos ou responsabilidades'],['sistema','Adotamos uma ferramenta'],['especialista','Buscamos ajuda especializada'],['continua','Tentamos mudanças, mas o problema continua'],['nenhum','Ainda não tentamos mudanças'],unknown],true),
];
export const branches={
 financeiro:[
 q('fin_controle','Financeiro','Como vocês controlam entradas e saídas?','Considere o que acontece na prática, independentemente da ferramenta.',[['conferido','Registros atualizados e conferidos'],['manual','Registros manuais com conferência demorada'],['incompleto','Registros incompletos ou misturados com contas pessoais'],unknown]),
 q('fin_resultado','Financeiro','Vocês sabem o que sobra depois dos custos?','Pense no resultado da empresa, não apenas no saldo da conta.',[['claro','Sim, custos e resultado são acompanhados'],['estimativa','Temos apenas uma estimativa'],['nao','Não conseguimos identificar'],unknown]),
 q('fin_dor','Financeiro','O que precisa de mais atenção no financeiro?','Pode selecionar mais de uma situação.',[['cobranca','Cobranças e contas a receber'],['conciliacao','Conferência de pagamentos e extratos'],['preco','Custos, margem e formação de preço'],['previsao','Previsão de entradas e saídas'],none,unknown],true)
 ],
 vendas:[
 q('ven_fluxo','Vendas','O que acontece depois que um interessado entra em contato?','Considere o acompanhamento até a decisão de compra.',[['claro','Existe um responsável e acompanhamento registrado'],['irregular','O acompanhamento depende de quem atendeu'],['perdido','Contatos ou propostas acabam esquecidos'],unknown]),
 q('ven_dor','Vendas','Onde aparecem dificuldades para vender?','Selecione os pontos que você reconhece.',[['demora','Demora para enviar propostas'],['retorno','Falta de retorno aos interessados'],['conversao','Muitos contatos e poucas vendas'],['historico','Falta de histórico dos clientes'],none,unknown],true),
 q('ven_medida','Vendas','Vocês sabem por que as vendas são perdidas?','Pense em registros e conversas com clientes.',[['sim','Sim, os motivos são registrados e analisados'],['parcial','Temos percepções, mas poucos registros'],['nao','Não acompanhamos os motivos'],unknown])
 ],
 atendimento:[
 q('ate_controle','Atendimento','Como os pedidos dos clientes são acompanhados?','Considere solicitações recebidas por todos os canais.',[['organizado','Com responsável, histórico e status'],['disperso','Em conversas e anotações separadas'],['perdido','Solicitações se perdem ou ficam sem resposta'],unknown]),
 q('ate_prazo','Atendimento','Como estão os prazos de resposta?','Considere os compromissos feitos com os clientes.',[['cumpre','Normalmente são cumpridos'],['atrasa','Há atrasos e cobranças frequentes'],['semmedida','Não sabemos o tempo de resposta'],unknown]),
 q('ate_dor','Atendimento','O que dificulta atender bem?','Selecione as situações que se aplicam.',[['repeticao','Cliente precisa repetir informações'],['transferencia','Dificuldade de passar o caso para outra pessoa'],['reclamacao','Reclamações recorrentes'],['volume','Equipe não consegue acompanhar o volume'],none,unknown],true)
 ],
 estoque:[
 q('est_saldo','Estoque e compras','O saldo registrado corresponde ao estoque real?','Considere as últimas conferências realizadas.',[['sim','Sim, com conferências regulares'],['diverge','Há diferenças frequentes'],['semconferencia','Não fazemos conferência suficiente para saber'],unknown]),
 q('est_compra','Estoque e compras','Como vocês decidem o que e quando comprar?','Pense na rotina de reposição.',[['planeja','Com base em saldo, demanda e prazo do fornecedor'],['intuicao','Pela experiência ou quando alguém avisa'],['urgencia','Geralmente quando o produto já faltou'],unknown]),
 q('est_dor','Estoque e compras','Quais situações você observa?','Selecione todos os sinais percebidos.',[['falta','Falta de itens importantes'],['parado','Produtos parados ou compras em excesso'],['perda','Perdas, vencimento ou avarias'],['registro','Movimentações sem registro'],none,unknown],true)
 ],
 operacao:[
 q('ope_prazo','Operação e entregas','Como estão os prazos de produção ou entrega?','Considere os compromissos assumidos nas últimas semanas.',[['emdia','Normalmente são cumpridos'],['atrasa','Atrasos frequentes'],['interrompe','Há interrupções que impedem concluir o trabalho'],unknown]),
 q('ope_fluxo','Operação e entregas','As etapas e os responsáveis estão claros?','Pense na passagem de uma tarefa de uma pessoa para outra.',[['claro','Sim, com acompanhamento'],['parcial','Parte do processo depende de acordos informais'],['confuso','Há dúvidas, tarefas duplicadas ou sem responsável'],unknown]),
 q('ope_dor','Operação e entregas','O que interfere na execução?','Pode marcar mais de uma situação.',[['retrabalho','Correções e retrabalho'],['espera','Espera por informação, aprovação ou material'],['qualidade','Falhas de qualidade recorrentes'],['capacidade','Demanda maior do que a capacidade da equipe'],none,unknown],true)
 ],
 administrativo:[
 q('adm_rotina','Administrativo e pessoas','Como as rotinas administrativas são organizadas?','Considere documentos, pagamentos, solicitações e prazos internos.',[['claro','Com responsáveis, prazos e registros'],['informal','Por mensagens e combinados informais'],['acumula','Tarefas se acumulam ou prazos são esquecidos'],unknown]),
 q('adm_pessoas','Administrativo e pessoas','O trabalho continua quando alguém se ausenta?','Pense nas atividades essenciais.',[['continua','Sim, há orientação e substituição'],['depende','Algumas atividades dependem de uma única pessoa'],['para','Atividades importantes param'],unknown]),
 q('adm_dor','Administrativo e pessoas','Quais situações se repetem?','Selecione o que observa na rotina.',[['documento','Dificuldade de encontrar documentos'],['responsavel','Dúvida sobre quem faz o quê'],['treinamento','Falta de orientação para executar tarefas'],['sobrecarga','Sobrecarga e distribuição desigual do trabalho'],none,unknown],true)
 ],
 marketing:[
 q('mar_origem','Marketing','Vocês sabem de onde vêm os interessados?','Considere canais digitais, indicações e ações locais.',[['sim','Sim, com registros por canal'],['parcial','Temos uma ideia, mas não medimos'],['nao','Não identificamos a origem'],unknown]),
 q('mar_vendas','Marketing','Conseguem relacionar divulgação a contatos e vendas?','Curtidas e visualizações, sozinhas, não respondem a essa pergunta.',[['sim','Sim, acompanhamos contatos e vendas geradas'],['parcial','Acompanhamos contatos, mas não as vendas'],['nao','Não fazemos essa relação'],unknown]),
 q('mar_dor','Marketing','Qual dificuldade aparece na divulgação?','Selecione as situações percebidas.',[['publico','Alcançar as pessoas certas'],['consistencia','Manter uma rotina de divulgação'],['mensagem','Explicar o valor do negócio'],['investimento','Entender o retorno do investimento'],none,unknown],true)
 ],
 tecnologia:[
 q('tec_uso','Tecnologia','As ferramentas atendem à rotina da equipe?','Considere uso real, facilidade e adequação ao trabalho.',[['sim','Sim, atendem e são utilizadas'],['limitadas','Atendem parcialmente; há controles paralelos'],['inadequadas','Não atendem ou quase não são utilizadas'],unknown]),
 q('tec_incidente','Tecnologia','Houve algum destes problemas com dados ou sistemas?','Selecione os sinais observados. Não inclua senhas ou dados de clientes.',[['instavel','Falhas ou indisponibilidade frequentes'],['perda','Perda de dados sem recuperação confirmada'],['acesso','Acesso indevido ou suspeita de vazamento'],none,unknown],true),
 q('tec_protecao','Tecnologia','Como são os acessos e as cópias de segurança?','Escolha a opção mais próxima da situação atual.',[['organizado','Acessos individuais e recuperação de backup verificada'],['parcial','Existem alguns controles, mas não são revisados'],['semcontrole','Senhas compartilhadas ou ausência de backup conhecido'],unknown])
 ],
 gestao:[
 q('ges_prioridade','Gestão e decisões','Como vocês definem as prioridades da empresa?','Considere o que orienta a equipe no dia a dia.',[['clara','Metas e prioridades claras, com revisão'],['informal','O dono decide conforme as demandas aparecem'],['conflito','Existem prioridades conflitantes ou pouco claras'],unknown]),
 q('ges_revisao','Gestão e decisões','O que acontece depois de decidir uma mudança?','Pense em responsáveis e acompanhamento.',[['acompanha','Há responsável, prazo e revisão dos resultados'],['irregular','Acompanhamos de maneira irregular'],['seperde','Muitas decisões não se transformam em ação'],unknown]),
 q('ges_dor','Gestão e decisões','O que mais dificulta conduzir o negócio?','Marque as situações que se aplicam.',[['centraliza','Decisões concentradas no dono'],['dados','Falta de informações confiáveis'],['metas','Dificuldade de definir ou acompanhar metas'],['conexao','Áreas que trabalham sem alinhamento'],none,unknown],true)
 ]
};
export const closing=[
 q('objetivo','Próximo passo','Qual mudança teria mais valor para você?','Essa é sua preferência. Ela não altera a leitura dos sinais relatados.',[['tempo','Ter mais tempo para o negócio'],['controle','Ter mais controle e previsibilidade'],['custos','Reduzir custos e desperdícios'],['vendas','Melhorar vendas e atendimento'],['rotina','Organizar a rotina e a equipe'],['entender','Entender primeiro o que está acontecendo']]),
 q('prazo','Próximo passo','Quando você gostaria de conversar sobre melhorias?','Isso indica apenas seu momento. Não aumenta nem diminui a importância dos problemas.',[['agora','Assim que possível'],['mes','Nas próximas semanas'],['trimestre','Nos próximos meses'],['pesquisa','Estou apenas conhecendo as possibilidades']])
];
export function questionsFor(a){
 const chosen=Array.isArray(a.areas)?a.areas:[];
 return [...opening.filter(x=>x.id!=='integracao'||(Array.isArray(a.ferramentas)&&!a.ferramentas.includes('nenhum')&&!a.ferramentas.includes('naosei')&&a.ferramentas.length>1)),...areas.filter(([id])=>chosen.includes(id)).flatMap(([id])=>branches[id]),...closing];
}
export function toggleSelection(current,id){
 const exclusive=['nenhum','naosei'];
 if(exclusive.includes(id))return current.includes(id)?[]:[id];
 const clean=current.filter(x=>!exclusive.includes(x));
 return clean.includes(id)?clean.filter(x=>x!==id):[...clean,id];
}
export function sanitizeAnswers(a){
 const clean={};
 for(const question of questionsFor(a)){
  const allowed=new Set(question.options.map(v=>v.id));
  if(question.multi&&Array.isArray(a[question.id])){
   let values=[...new Set(a[question.id].filter(x=>allowed.has(x)))];
   if(values.some(x=>x==='nenhum'||x==='naosei'))values=[values.find(x=>x==='nenhum'||x==='naosei')];
   if(values.length)clean[question.id]=values;
  }else if(!question.multi&&allowed.has(a[question.id])) clean[question.id]=a[question.id];
 }
 return clean;
}
export function labelFor(id,value,a){const question=questionsFor(a).find(q=>q.id===id);return question?.options.find(o=>o.id===value)?.label??value;}
export function possibleSolution(id,a){
 const has=(key,value)=>Array.isArray(a[key])&&a[key].includes(value);
 const suggestions={
  caixa:'Um controle de fluxo de caixa, com previsão de entradas e saídas, pode ajudar a antecipar compromissos. Um parceiro de finanças pode orientar a organização.',
  previsao:'Uma previsão de caixa pode ajudar a enxergar os compromissos das próximas semanas, usando uma planilha ou ferramenta adequada à rotina.',
  financeiro:a.fin_resultado==='nao'||has('fin_dor','preco')?'Um controle de custos e margens, com apoio financeiro, pode ajudar a entender o resultado e revisar a formação de preços.':'Centralizar entradas, saídas e cobranças em um controle financeiro pode facilitar a conferência e o acompanhamento.',
  vendas:a.ven_fluxo==='perdido'||has('ven_dor','retorno')?'Um controle de oportunidades, com responsável e lembretes de retorno, pode ajudar a acompanhar os interessados. Um CRM é uma das possibilidades.':'Um funil de vendas com histórico dos contatos pode ajudar a acompanhar propostas e entender onde as oportunidades se perdem.',
  atendimento:'Centralizar solicitações e histórico em uma fila de atendimento, com responsáveis e status, pode ajudar a evitar esquecimentos e respostas duplicadas.',
  estoque:a.est_compra==='urgencia'||has('est_dor','falta')?'Um controle de estoque com entradas, saídas e alertas de reposição pode ajudar a acompanhar os saldos e antecipar a falta de produtos.':'Um controle de estoque com registro de entradas e saídas e conferências periódicas pode ajudar a organizar os produtos e acompanhar os saldos.',
  operacao:'Um fluxo de trabalho com etapas, responsáveis e prazos visíveis pode ajudar a organizar a execução e reduzir esperas e retrabalho.',
  continuidade:'Uma alternativa temporária para as atividades afetadas e um plano de continuidade podem ajudar a retomar a operação, com apoio de quem conhece o processo.',
  administrativo:a.adm_pessoas==='para'||a.adm_pessoas==='depende'?'Orientações simples para as rotinas e a definição de substitutos podem reduzir a dependência de uma única pessoa.':'Uma organização compartilhada de documentos, tarefas e responsáveis pode facilitar a rotina administrativa e o cumprimento de prazos.',
  marketing:'Um controle da origem dos contatos e das vendas por canal pode ajudar a direcionar as ações de divulgação, com apoio de um especialista quando necessário.',
  tecnologia:a.tec_protecao==='semcontrole'?'Acessos individuais e uma rotina de cópias de segurança com recuperação verificada podem ajudar a proteger a operação.':'Ajustar o uso das ferramentas existentes ou avaliar uma ferramenta mais adequada pode reduzir os controles paralelos. A necessidade de troca precisa ser confirmada.',
  dados:'A contenção de acessos e a recuperação de dados, conduzidas por um especialista, podem ser caminhos iniciais. A medida adequada depende da verificação do incidente.',
  gestao:'Um plano de prioridades com responsáveis, prazos e revisões periódicas pode ajudar a transformar decisões em ações acompanháveis.',
  integracao:'Uma integração entre ferramentas ou automação da transferência de informações pode reduzir a digitação repetida, se o processo e os sistemas permitirem.',
  indicadores:'Centralizar os indicadores essenciais em um controle ou painel simples pode facilitar as decisões, depois de conferir a qualidade dos registros.',
  rotina:has('sintomas','dependencia')?'Distribuir responsabilidades e registrar as rotinas pode ajudar a reduzir a concentração de tarefas no dono.':has('sintomas','retrabalho')||has('sintomas','atrasos')?'Padronizar as etapas do trabalho e organizar os responsáveis pode ajudar a reduzir tarefas refeitas e atrasos.':has('sintomas','custos')?'Um controle de custos e desperdícios pode ajudar a identificar onde revisar os gastos, com apoio financeiro quando necessário.':'Organizar os registros e o fluxo das tarefas pode ajudar a dar visibilidade à rotina e aos pontos que precisam de melhoria.'
 };
 return suggestions[id]??null;
}
export function buildResult(raw){
 const a=sanitizeAnswers(raw), signals=[], gaps=[], strengths=[];
 const add=(id,area,level,title,evidence,investigate,next)=>signals.push({id,area,level,title,evidence,investigate,next});
 const selected=(id,v)=>Array.isArray(a[id])&&a[id].includes(v);
 if(['apertado','atrasado'].includes(a.caixa))add('caixa','Financeiro',a.caixa==='atrasado'?3:2,'Compromissos financeiros precisam de atenção',labelFor('caixa',a.caixa,a),'Verificar vencimentos, entradas previstas e compromissos essenciais com um profissional de finanças.','Organizar as obrigações e a previsão de caixa; combinar a ordem das ações com apoio financeiro.');
 if(a.caixa==='semvisao')add('previsao','Financeiro',1,'Falta de previsibilidade do caixa','Você relatou pagamentos em dia, mas sem previsão clara.','Conferir os registros e como as entradas e saídas futuras são acompanhadas.','Avaliar uma rotina de previsão antes de escolher uma ferramenta.');
 if(selected('tec_incidente','acesso')||selected('tec_incidente','perda')) add('dados','Tecnologia',3,'Incidente com dados ou acessos relatado',a.tec_incidente.filter(v=>['acesso','perda'].includes(v)).map(v=>labelFor('tec_incidente',v,a)).join('; '),'Confirmar o ocorrido, os acessos envolvidos e a possibilidade de recuperação com um especialista.','Buscar avaliação técnica com prioridade para contenção e recuperação.');
 if(a.ope_prazo==='interrompe'||selected('impacto','parada'))add('continuidade','Operação e entregas',3,'Interrupção da operação relatada','Você indicou interrupções que afetam o funcionamento da empresa.','Localizar o ponto de interrupção, atividades afetadas e alternativas disponíveis.','Revisar a continuidade do trabalho antes de melhorias de menor impacto.');
 const configs=[
 ['financeiro','Financeiro',['fin_controle','fin_resultado','fin_dor'],{fin_controle:['manual','incompleto'],fin_resultado:['estimativa','nao']},'Controles e resultado financeiro a investigar','Conferir registros, separação das contas, custos e rotina de cobrança com apoio financeiro.'],
 ['vendas','Vendas',['ven_fluxo','ven_dor','ven_medida'],{ven_fluxo:['irregular','perdido'],ven_medida:['parcial','nao']},'Acompanhamento comercial a investigar','Seguir contatos reais da entrada até a proposta e verificar onde deixam de receber acompanhamento.'],
 ['atendimento','Atendimento',['ate_controle','ate_prazo','ate_dor'],{ate_controle:['disperso','perdido'],ate_prazo:['atrasa','semmedida']},'Organização do atendimento a investigar','Revisar histórico, responsáveis e tempo de resposta em solicitações reais.'],
 ['estoque','Estoque e compras',['est_saldo','est_compra','est_dor'],{est_saldo:['diverge','semconferencia'],est_compra:['intuicao','urgencia']},'Fluxo de estoque e compras a investigar','Comparar registros e saldo físico e acompanhar compras, recebimentos e saídas.'],
 ['operacao','Operação e entregas',['ope_prazo','ope_fluxo','ope_dor'],{ope_prazo:['atrasa','interrompe'],ope_fluxo:['parcial','confuso']},'Fluxo de execução a investigar','Acompanhar uma entrega, verificar etapas, esperas, responsáveis e capacidade.'],
 ['administrativo','Administrativo e pessoas',['adm_rotina','adm_pessoas','adm_dor'],{adm_rotina:['informal','acumula'],adm_pessoas:['depende','para']},'Rotinas e responsabilidades a investigar','Observar uma rotina administrativa e verificar como prazos, documentos e substituições são organizados.'],
 ['marketing','Marketing',['mar_origem','mar_vendas','mar_dor'],{mar_origem:['parcial','nao'],mar_vendas:['parcial','nao']},'Divulgação e retorno a investigar','Relacionar origem dos contatos, ações de divulgação e vendas antes de ampliar investimentos.'],
 ['tecnologia','Tecnologia',['tec_uso','tec_incidente','tec_protecao'],{tec_uso:['limitadas','inadequadas'],tec_protecao:['parcial','semcontrole']},'Adequação e proteção das ferramentas a investigar','Verificar uso real das ferramentas, estabilidade, permissões e recuperação de backups.'],
 ['gestao','Gestão e decisões',['ges_prioridade','ges_revisao','ges_dor'],{ges_prioridade:['informal','conflito'],ges_revisao:['irregular','seperde']},'Prioridades e execução a investigar','Revisar como uma decisão recebe responsável, prazo e acompanhamento e como as áreas se alinham.']
 ];
 for(const [id,name,ids,rules,title,investigate] of configs){
  if(!selected('areas',id)) continue;
  const evidence=[];
  for(const key of ids){const val=a[key];if(Array.isArray(val))evidence.push(...val.filter(v=>!['nenhum','naosei'].includes(v)&&!(key==='tec_incidente'&&['acesso','perda'].includes(v))).map(v=>labelFor(key,v,a)));else if(rules[key]?.includes(val))evidence.push(labelFor(key,val,a));}
  if(evidence.length)add(id,name,(a.frequencia==='diaria'&&a.impacto?.some(v=>['perda','reclamacoes','tempo'].includes(v)))?2:1,title,evidence.join('; '),investigate,'Validar a causa com a equipe e definir uma melhoria com responsável e critério de sucesso.');
  else if(ids.every(key=>a[key]&&!([a[key]].flat().includes('naosei')))) strengths.push(`${name}: as respostas não apontaram dificuldades nas situações perguntadas. Isso não confirma a ausência de outros problemas.`);
 }
 if(a.integracao==='sempre'||a.integracao==='asvezes')add('integracao','Rotina e informação',a.integracao==='sempre'&&a.frequencia==='diaria'?2:1,'Informação repetida entre ferramentas',labelFor('integracao',a.integracao,a),'Seguir uma informação desde a origem e localizar cópias, conferências e erros.','Revisar o processo e só então avaliar integração ou automação.');
 if(a.indicadores==='nao'||a.indicadores==='parcial')add('indicadores','Gestão e decisões',1,'Informações para decidir a investigar',labelFor('indicadores',a.indicadores,a),'Identificar quais decisões exigem dados e conferir sua origem, atualização e responsabilidade.','Definir controles úteis antes de criar painéis.');
 const routine=(a.sintomas??[]).filter(v=>!['nenhum','naosei'].includes(v));
 if(routine.length)add('rotina','Visão geral',a.frequencia==='diaria'&&a.impacto?.some(v=>['perda','tempo','reclamacoes'].includes(v))?2:1,'Dificuldades relatadas na rotina',routine.map(v=>labelFor('sintomas',v,a)).join('; '),'Confrontar os relatos com exemplos, frequência, impactos e pessoas envolvidas.','Mapear as relações entre os problemas para evitar tratar apenas os sintomas.');
 for(const question of questionsFor(a)){if([a[question.id]].flat().includes('naosei'))gaps.push({title:question.title,context:question.group});}
 if(a.caixa==='emdia')strengths.push('Você relatou compromissos financeiros em dia e previsão para as próximas semanas.');
 if(a.indicadores==='sim')strengths.push('Você relatou informações atualizadas e confiáveis para decidir.');
 if(a.integracao==='nunca')strengths.push('Você não relatou necessidade de duplicar informações entre ferramentas.');
 for(const signal of signals) signal.solution=possibleSolution(signal.id,a);
 signals.sort((x,y)=>y.level-x.level);
 return {signals,gaps,strengths,answers:a,coverage:areas.filter(([id])=>selected('areas',id)).map(([,name])=>name),timing:a.prazo?labelFor('prazo',a.prazo,a):'Não informado',goal:a.objetivo?labelFor('objetivo',a.objetivo,a):'Não informado'};
}
export function resultText(a){const r=buildResult(a);return ['SPEED NEXUS — LEITURA INICIAL',new Date().toLocaleDateString('pt-BR'),'Leitura preliminar baseada em autorrelato. As possíveis soluções são hipóteses iniciais; a análise aprofundada confirma causas e define a solução detalhada.','Áreas aprofundadas: '+(r.coverage.join(', ')||'Nenhuma área específica selecionada'),'',...r.signals.map(s=>`${s.area} — ${s.title}\nRelato: ${s.evidence}\nInvestigar: ${s.investigate}\nPossível solução: ${s.solution}\nPróximo passo: ${s.next}`),'',r.gaps.length?'INFORMAÇÕES A ESCLARECER\n'+r.gaps.map(g=>g.title).join('\n'):'','CONTEXTO PARA A CONVERSA','Objetivo: '+r.goal,'Momento: '+r.timing,'','RESPOSTAS',...questionsFor(r.answers).map(q=>q.title+'\n'+[r.answers[q.id]].flat().filter(Boolean).map(v=>labelFor(q.id,v,r.answers)).join('; '))].filter(Boolean).join('\n\n');}
