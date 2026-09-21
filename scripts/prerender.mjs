// HTML estático para carregamento inicial rápido e indexação; o React hidrata as interações.
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { readFile, writeFile } from 'node:fs/promises';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const markup = renderToString(createElement(App));
  const template = await readFile('dist/index.html', 'utf8');
  await writeFile('dist/index.html', template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
  console.log('HTML estático gerado; conteúdo disponível antes do JavaScript.');
} finally {
  await server.close();
}
