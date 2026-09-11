# Speed Nexus — publicação na Vercel

Este projeto usa Next.js e está preparado para publicação na Vercel.

## Publicar

1. Extraia o arquivo compactado.
2. Envie a pasta para um repositório no GitHub.
3. Na Vercel, clique em **Add New > Project** e importe o repositório.
4. Em **Environment Variables**, adicione as variáveis abaixo.
5. Clique em **Deploy**.

## Variáveis de ambiente

```env
OPENROUTER_API_KEY=sua_chave_do_openrouter
OPENROUTER_MODEL=openrouter/free
LEADS_WEBHOOK_URL=https://seu-webhook-opcional
```

- `OPENROUTER_API_KEY`: necessária para perguntas personalizadas da Nexa. Nunca coloque a chave no código ou no navegador.
- `OPENROUTER_MODEL`: pode permanecer como `openrouter/free`.
- `LEADS_WEBHOOK_URL`: opcional. Recebe os diagnósticos por `POST` em JSON. Pode ser um webhook do Make, n8n, Zapier ou outro serviço. Sem essa variável, o diagnóstico continua funcionando, mas o envio do formulário orienta o visitante a usar o WhatsApp.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificação antes de publicar

```bash
npm run build
npm start
```

## Organização

- `app/`: páginas e rotas de API.
- `components/speed-nexus/sections/`: uma seção da página por arquivo.
- `components/speed-nexus/diagnostic/`: interface e regras do diagnóstico separadas.
- `components/speed-nexus/alternating-whatsapp-link.tsx`: regra central que alterna os dois WhatsApps a cada clique.
- `components/ui/`: componentes visuais reutilizáveis.
- `public/`: logos e arquivos públicos.
