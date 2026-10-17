# Speed Nexus — versão 2

Site institucional curto e diagnóstico gratuito em página própria. HTML, CSS e JavaScript modular, sem instalação de dependências ou build. A identidade e o símbolo foram reaproveitados do projeto original.

## Estrutura

- `dist/index.html`: institucional e novo slogan.
- `dist/diagnostico/index.html`: questionário e resultado, sem campos de digitação.
- `dist/assets/diagnostic-engine.js`: perguntas, ramificações e regras explicáveis.
- `dist/assets/diagnostic.js`: navegação, revisão, retomada na aba e exportação.
- `dist/assets/site.css`: estilos e responsividade.
- `dist/privacidade/` e `dist/termos/`: informações alinhadas ao funcionamento desta versão.
- `tests/diagnostic.test.mjs`: testes da lógica.

## Publicação na Vercel

O projeto já inclui `vercel.json`. Envie a pasta completa para um repositório do GitHub e importe o repositório na Vercel. A plataforma executará os testes e publicará automaticamente a pasta `dist`. Não são necessárias variáveis de ambiente, banco de dados ou serviços externos.

Para testar localmente, execute `npm test`. As URLs internas usam a raiz `/`, portanto sirva a pasta por HTTP em vez de abrir o HTML diretamente por `file://`.

Esta entrega não modifica o site que já está em speednexus.com.br. A nova versão publicada no Sites é separada e privada para revisão.

## Diagnóstico

São 13 perguntas gerais/encerramento, podendo chegar a 40 com todas as ramificações. A pergunta de duplicação só aparece se houver mais de um recurso de registro. Seleções “Nenhuma” e “Não sei” são exclusivas. Remover uma área limpa suas respostas específicas. As respostas ficam em sessionStorage desta aba; o questionário funciona mesmo se esse armazenamento estiver indisponível.

O gratuito sugere possíveis soluções de forma geral, conforme os sinais selecionados: controle de estoque, controle financeiro, organização de tarefas, CRM ou integrações, por exemplo. São hipóteses, sem plano detalhado ou indicação de ferramenta específica. O diagnóstico pago verifica as causas e define a solução detalhada dentro do escopo contratado. Não há nota global ou previsão financeira. Relatos de pagamentos essenciais em atraso, incidentes de dados e interrupção da operação aparecem primeiro, sempre como sinais a verificar. Frequência e impacto observado ajudam a ordenar outros sinais. O prazo para conversar não muda os achados. “Não sei” vira lacuna, sem aumentar gravidade.

O resultado pode ser baixado como TXT ou impresso/salvo como PDF. O WhatsApp recebe apenas um resumo revisável; o envio é feito pelo visitante. Para compartilhar todas as respostas, o visitante pode anexar o TXT. Os botões genéricos alternam os dois números na sessão: primeiro o terminado em 7932, depois o terminado em 0935, repetindo a sequência. Links que mostram explicitamente um número continuam levando ao número exibido.

## Organização do código

- `dist/assets/site.js`: inicialização geral da página.
- `dist/assets/components/layout.js`: cabeçalho e rodapé.
- `dist/assets/components/navigation.js`: menu responsivo e teclado.
- `dist/assets/components/icons.js`: ícones reutilizáveis.
- `dist/assets/components/whatsapp.js`: alternância centralizada dos contatos.
- `dist/assets/diagnostic-engine.js`: perguntas e regras do diagnóstico.
- `dist/assets/diagnostic-insights.js`: insights contextuais.
- `dist/assets/diagnostic.js`: interface e navegação do diagnóstico.

## Contato e serviços

Nesta versão os contatos usam WhatsApp e e-mail. Não há formulário com recebimento em servidor ou assistente Nexa. As rotas de IA e leads do projeto Next original não são necessárias para este fluxo estático e não fazem parte desta versão. Não há simulação de IA nem envio automático de dados. Caso queira restaurar a assistente real, será necessário integrar um backend e configurar o provedor.

Não há preços, depoimentos ou resultados comerciais inventados. O diagnóstico aprofundado é apresentado como pago; escopo e preço são combinados antes da contratação. Implantação e participação de especialistas são etapas com proposta própria.

## Verificação

Execute `node --test tests/*.test.mjs`. A lógica foi verificada por cenários: caixa, segurança, continuidade, desconhecimento, múltiplas áreas, remoção de ramificações e independência do momento de contratação. Foram verificados também sintaxe JS e destinos locais de links/recursos. A interface usa regras responsivas, foco visível e controles nativos, mas não houve validação visual em navegador neste ambiente. Faça a conferência visual e a abertura do WhatsApp no celular antes de substituir o domínio público.

## Ajuste visual

Seleção de texto em lilás com texto roxo escuro em todas as páginas. A abertura usa o slogan centralizado e espaçamento mais simples; o diagrama de conexões foi removido.

## Insights no percurso

O módulo `dist/assets/diagnostic-insights.js` oferece textos contextuais de leitura opcional, sem alterar as respostas ou o resultado. Aparecem em três momentos gerais e uma vez no meio de cada área selecionada: normalmente quatro insights em um percurso com uma área, até doze com todas. Os textos consideram respostas anteriores e evitam afirmar uma dificuldade quando a pessoa relata uma rotina organizada. Não há pop-up, etapa extra ou botão de anúncio.
