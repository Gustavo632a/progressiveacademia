# Progressive Academia

Landing page completa em React, Vite, JavaScript, CSS e lucide-react. Layout responsivo, imagens WebP e fontes WOFF2 locais. O build gera HTML estático para exibição imediata e indexação; o React hidrata as interações no navegador.

## Executar

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite (normalmente http://localhost:5173).

```bash
npm run build   # produção em dist/
npm run preview
npm test        # integridade dos dados e links de atendimento
```

## Configuração antes de publicar

- `src/data/config.js`: informe o WhatsApp oficial em `WHATSAPP_URL`, com país e DDD. Enquanto não houver um número válido, os CTAs abrem o Instagram, e o botão flutuante usa o ícone do Instagram. Ao cadastrar o número, todos os CTAs passam a usar WhatsApp com mensagens específicas.
- `src/data/location.js`: endereço e identificadores confirmados no Google Maps em 21/09/2026: Rua Professor Luiz Burity, 82, Mandacaru, João Pessoa/PB. O mapa incorporado marca o estabelecimento pelo CID `3770975431927585236`; os links de localização e rota usam o Place ID `ChIJQW7mvo3nrAcR1NnEBC0yVTQ`. Os dados são compartilhados pela seção de localização e pelo cadastro de unidades. Fonte: https://www.google.com/maps?cid=3770975431927585236.
- `src/data/modalities.js`: musculação é a atividade citada no briefing. As demais modalidades de exemplo estão com `confirmed: false` e não aparecem no site. Publique somente as confirmadas pela academia.
- `src/data/schedule.js`: horários fornecidos no briefing; compartilhados com o FAQ. Revise com a unidade antes da publicação.
- `src/data/units.js`: unidades, status, endereço e imagens. Valentina permanece como “Em breve”.
- `src/data/plans.js`: cadastre dados reais e marque `confirmed: true`. Sem dados, a página oferece consulta à equipe.
- `src/data/config.js`: depoimentos, números, screenshot do aplicativo e disponibilidade da aula experimental. Nenhuma avaliação, quantidade ou funcionalidade de aplicativo é simulada. O elemento visual do aplicativo é uma composição de marca, não uma interface fictícia.
- `src/data/gallery.js`: fotos da estrutura e comunidade; categorias do filtro são derivadas dos dados.
- `public/images/`: substitua as fotos ilustrativas pelas fotos reais autorizadas, preservando os nomes. Fontes e imagens são locais. Os créditos/origens estão em `public/images/SOURCES.md`.
- A logo enviada está em `public/images/logo-progressive.png`, preservada no formato original e compartilhada pelo cabeçalho, rodapé e seção do aplicativo através do componente `Brand`. O favicon usa a mesma imagem: `public/favicon.png` e `public/favicon.svg` (contêiner quadrado que preserva as proporções do PNG original). O nome da academia permanece como texto ao lado do símbolo.
- Após inserir as imagens reais, atualize os textos “imagem ilustrativa” e os atributos alternativos correspondentes. O Instagram não pôde ser consultado durante a criação; a identidade segue a paleta e orientações do briefing.
- `index.html`: configure `og:image` com uma URL absoluta no domínio final, acrescente `og:url` e canonical após definir o endereço de publicação. O JSON-LD contém apenas localização geral; acrescente endereço completo e telefone confirmados quando disponíveis.

## Interações e acessibilidade

Menu mobile com Escape, cabeçalho fixo, navegação por âncoras, FAQ com elementos `details`, galeria filtrável, lightbox com diálogo modal nativo, foco contido e restaurado, navegação pelas setas, retorno ao topo, estados de foco e animações via IntersectionObserver que respeitam `prefers-reduced-motion`.

## Verificação no navegador

Com `npm run dev` em execução e Google Chrome instalado:

```bash
node scripts/check-browser.mjs
```

Verifica larguras de 320 a 1920 px, ausência de rolagem horizontal, menu, teclado, filtros, lightbox, FAQ, imagens, links e acessibilidade com axe. Salva screenshots em `test-results/`. O mapa remoto é substituído por um documento simples apenas durante o teste.

O projeto evita dependências pesadas em produção e usa lazy loading para imagens abaixo da primeira dobra. A nota Lighthouse depende da hospedagem, rede e conteúdo final; não há garantia de pontuação sem a medição no ambiente publicado.

Validação realizada: build de produção concluído, quatro testes de dados aprovados, interações aprovadas no Chrome e nenhuma rolagem horizontal nas larguras de 320, 375, 390, 768, 1024, 1440 e 1920 px. A auditoria axe de WCAG A/AA não encontrou violações nas larguras de 390 e 1440 px; essa verificação automática não substitui uma revisão humana completa.

Lighthouse local, com simulação mobile em 21/09/2026: **95 desempenho, 100 acessibilidade, 100 boas práticas e 100 SEO**. LCP de 2,5 s, TBT de 100 ms e CLS de 0,011. Relatório completo em `test-results/lighthouse.json`. A medição foi concluída e o relatório salvo; o CLI encontrou um erro de permissão do Windows ao limpar sua pasta temporária depois da auditoria. As notas se referem à versão compilada em localhost e podem variar na hospedagem final.

Para baixar novamente as fotos e fontes ilustrativas, execute `node scripts/download-assets.mjs` com conexão à internet e curl instalado.
