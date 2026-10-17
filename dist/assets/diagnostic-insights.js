// Optional reading: three general moments and one midpoint for each selected area.
// These messages explain possibilities; they never change diagnostic findings.
export function insightFor(question,answers){
 if(!question)return null;
 const a=answers,has=(key,value)=>Array.isArray(a[key])&&a[key].includes(value);
 const make=(text,approach)=>({section:question.group,text,approach});
 switch(question.id){
 case 'frequencia':
  if(has('sintomas','dependencia'))return make('Quando quase tudo depende do dono, pequenas decisões podem virar uma fila. Vale entender o que precisa da sua participação e o que poderia ter um responsável definido.','Na Speed Nexus, olhamos a rotina antes de propor uma mudança.');
  if(has('sintomas','retrabalho'))return make('Uma tarefa refeita pode indicar uma falha que começou antes: no pedido, na informação recebida ou na passagem entre pessoas. Entender esse caminho ajuda a evitar soluções para o sintoma errado.','A Speed Nexus considera as conexões entre as áreas para investigar o problema.');
  if(has('sintomas','custos'))return make('Custos altos podem estar ligados a desperdícios, compras, precificação ou processos. Saber onde eles se concentram ajuda a escolher o que merece investigação primeiro.','A Speed Nexus pode conectar tecnologia e apoio especializado conforme a necessidade.');
  if(has('sintomas','nenhum'))return make('Mesmo quando a rotina parece funcionar bem, acompanhar informações básicas ajuda a perceber mudanças com antecedência. Não é preciso partir da ideia de que existe um problema.','Nosso diagnóstico começa pela realidade que você relata.');
  return make('Uma dificuldade percebida em uma área pode ter origem em outra. Uma informação que chega incompleta, por exemplo, pode afetar atendimento, operação e financeiro.','A Speed Nexus começa pela visão do conjunto, antes de escolher a solução.');
 case 'tentativas':
  if(a.indicadores==='sim')return make('Ter informações confiáveis é uma boa base. O próximo passo é entender como elas ajudam a decidir e acompanhar o efeito das mudanças.','Na Speed Nexus, a tecnologia entra quando ajuda a executar uma decisão.');
  if(a.integracao==='sempre'||a.integracao==='asvezes')return make('Copiar dados entre ferramentas pode gerar demora e divergências. Uma integração pode ajudar, mas vale verificar primeiro se o caminho da informação está bem definido.','A Speed Nexus avalia o processo e as ferramentas que a empresa já utiliza.');
  return make('Antes de criar um painel ou adotar outro sistema, vale entender quais informações são necessárias e quem mantém os registros atualizados.','Na Speed Nexus, a necessidade orienta a escolha da ferramenta.');
 case 'fin_resultado':
  if(a.fin_controle==='conferido')return make('Registros atualizados ajudam a olhar além do saldo da conta. Entender custos, compromissos e resultado permite uma leitura mais útil da situação financeira.','A Speed Nexus pode envolver apoio financeiro para complementar a análise.');
  return make('Ter dinheiro na conta não explica, sozinho, o resultado do negócio. Organizar os registros pode ajudar a separar faturamento, custos e o que realmente sobra.','A Speed Nexus combina análise dos processos com profissionais da área financeira quando necessário.');
 case 'ven_dor':
  if(a.ven_fluxo==='perdido'||a.ven_fluxo==='irregular')return make('Quando oportunidades se perdem no acompanhamento, o problema pode estar no processo comercial, no CRM ou no ritmo de retorno aos interessados.','A Speed Nexus investiga onde o contato perde continuidade antes de sugerir uma ferramenta.');
  if(a.ven_fluxo==='claro')return make('Um acompanhamento comercial organizado ajuda a enxergar o que acontece entre o primeiro contato e a venda. Esses registros também podem revelar onde melhorar o processo.','A Speed Nexus considera o que já funciona para orientar os próximos ajustes.');
  return make('O caminho de um interessado até a compra pode passar por várias pessoas e canais. Mapear essas etapas ajuda a entender onde faltam informações.','A Speed Nexus pode ajudar a organizar essa visão antes de definir mudanças.');
 case 'ate_prazo':
  if(a.ate_controle==='organizado')return make('Histórico e responsáveis definidos ajudam a manter a continuidade do atendimento. Comparar isso com os prazos combinados pode mostrar ajustes necessários.','A Speed Nexus analisa a experiência do cliente junto com a rotina de quem atende.');
  return make('Quando o histórico fica espalhado em conversas, o cliente pode precisar repetir informações e a equipe pode perder o contexto. Centralizar solicitações é uma possibilidade a avaliar.','A Speed Nexus observa o fluxo de atendimento antes de escolher a solução.');
 case 'est_compra':
  if(a.est_saldo==='sim')return make('Um saldo confiável é uma boa base para decidir compras. O prazo do fornecedor e a demanda dos produtos também ajudam a definir quando repor.','A Speed Nexus conecta o controle do estoque à rotina de compras e vendas.');
  return make('Quando o estoque registrado não acompanha o real, compras e vendas podem ser afetadas. Um controle de entradas e saídas pode ajudar, desde que os movimentos sejam registrados na rotina.','A Speed Nexus investiga onde a informação se perde antes de indicar o controle adequado.');
 case 'ope_fluxo':
  if(a.ope_prazo==='emdia')return make('Cumprir prazos é um sinal positivo. Conhecer as etapas e os responsáveis ajuda a preservar essa organização quando a demanda muda.','A Speed Nexus considera o funcionamento atual antes de propor ajustes.');
  return make('Um atraso pode começar em uma espera por aprovação, material ou informação. Tornar as etapas visíveis ajuda a encontrar onde o trabalho fica parado.','Na Speed Nexus, o processo é analisado antes de decidir se é preciso automatizar.');
 case 'adm_pessoas':
  if(a.adm_rotina==='claro')return make('Responsáveis e prazos definidos dão mais clareza à rotina. Registrar como as atividades são feitas também pode ajudar em ausências e na entrada de novas pessoas.','A Speed Nexus considera pessoas, processos e ferramentas na mesma análise.');
  return make('Uma rotina mantida só por mensagens e pela memória de alguém pode ficar difícil de acompanhar. Organizar tarefas, documentos e responsáveis é um caminho possível.','A Speed Nexus avalia como simplificar o trabalho e envolve parceiros quando necessário.');
 case 'mar_vendas':
  if(a.mar_origem==='sim')return make('Conhecer a origem dos contatos ajuda a avaliar os canais de divulgação. Relacionar esses contatos às vendas torna essa informação mais útil para decidir.','A Speed Nexus conecta a leitura da divulgação ao processo comercial.');
  return make('Curtidas e visualizações mostram apenas parte do caminho. Saber de onde vêm os contatos e o que acontece depois ajuda a avaliar a divulgação.','A Speed Nexus pode combinar organização dos dados e apoio de marketing conforme o desafio.');
 case 'tec_incidente':
  if(a.tec_uso==='sim')return make('Uma ferramenta pode atender bem à rotina e ainda exigir cuidados com acessos, estabilidade e recuperação de informações. São pontos diferentes para observar.','A Speed Nexus avalia tanto o uso das ferramentas quanto sua relação com a operação.');
  return make('Um sistema pouco utilizado pode estar desalinhado com o trabalho ou com a forma como foi implantado. Trocar de ferramenta é uma possibilidade, mas nem sempre é o primeiro passo.','A Speed Nexus avalia a rotina e o uso real antes de recomendar uma mudança.');
 case 'ges_revisao':
  if(a.ges_prioridade==='clara')return make('Prioridades claras ajudam a direcionar o esforço. Acompanhar responsáveis, prazos e resultados permite perceber se as decisões estão saindo do papel.','A Speed Nexus ajuda a conectar a análise ao plano de execução.');
  return make('Quando as prioridades mudam a cada demanda, a equipe pode trabalhar muito sem avançar no que mais importa. Um plano compartilhado pode ajudar a organizar as escolhas.','A Speed Nexus usa o diagnóstico para discutir prioridades junto com a empresa.');
 case 'objetivo':return make('As respostas ajudam a levantar sinais e caminhos possíveis. A análise aprofundada verifica as causas e transforma essa leitura em soluções detalhadas para o contexto da empresa.','Na Speed Nexus, o aprofundamento é combinado com você: alcance, prazo e entregáveis claros.');
 default:return null;
 }
}
