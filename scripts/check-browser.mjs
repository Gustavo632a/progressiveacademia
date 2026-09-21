import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

await mkdir('test-results', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--no-proxy-server'] });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
// O mapa externo não faz parte da verificação local e não precisa carregar no teste.
await page.route('https://maps.google.com/**', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<html lang="pt-BR"><title>Mapa</title><body>Mapa externo</body></html>' }));
try {
  console.log('Abrindo a página...');
  await page.goto(process.argv[2] || 'http://localhost:5173', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator('h1').waitFor({ timeout: 60000 });
  console.log('Página carregada. Verificando layouts...');
  await page.evaluate(() => document.fonts.ready);
  for (const img of await page.locator('img').all()) {
    await img.scrollIntoViewIfNeeded();
    await img.evaluate(el => el.decode());
  }
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/desktop-hero.png' });
  await page.screenshot({ path: 'test-results/desktop.png', fullPage: true });
  for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    const dimensions = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
    assert.ok(dimensions.document <= dimensions.viewport, `Rolagem horizontal em ${width}px: ${JSON.stringify(dimensions)}`);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#menu-toggle').click();
  assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'true');
  await page.locator('#main-nav').getByRole('link', { name: 'Horários', exact: true }).click();
  assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');
  assert.equal(new URL(page.url()).hash, '#horarios');
  await page.locator('#menu-toggle').click();
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');

  const photo = page.locator('.structure-photo').first();
  await photo.click();
  await page.locator('dialog[open]').waitFor();
  const firstImage = await page.locator('.lightbox img').getAttribute('src');
  await page.keyboard.press('ArrowRight');
  assert.notEqual(await page.locator('.lightbox img').getAttribute('src'), firstImage);
  await page.keyboard.press('Tab');
  assert.ok(await page.evaluate(() => !!document.activeElement.closest('dialog')));
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('dialog').count(), 0);
  assert.ok(await photo.evaluate(el => document.activeElement === el));

  await page.getByRole('button', { name: 'Estrutura', exact: true }).click();
  assert.equal(await page.locator('.gallery-photo').count(), 2);
  await page.locator('.gallery-photo').first().click();
  assert.match(await page.locator('.lightbox figcaption').innerText(), /1 \/ 2/);
  await page.getByRole('button', { name: 'Fechar galeria' }).click();
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  assert.equal(await page.locator('.gallery-photo').count(), 6);

  await page.locator('.faq-list summary').nth(2).click();
  assert.equal(await page.locator('.faq-list details[open]').count(), 1);
  assert.match(await page.locator('.faq-list details[open]').innerText(), /14:00 – 18:00/);
  await page.locator('.faq-list summary').nth(4).click();
  assert.equal(await page.locator('.faq-list details[open]').count(), 1);

  const links = await page.locator('a').evaluateAll(els => els.map(el => el.getAttribute('href')));
  assert.ok(links.every(link => link && !link.includes('NUMERO') && !link.includes('LINK_DO')));
  for (const id of links.filter(link => link.startsWith('#'))) assert.equal(await page.locator(id).count(), 1, `Âncora inválida: ${id}`);
  for (const img of await page.locator('img').all()) {
    await img.scrollIntoViewIfNeeded();
    await img.evaluate(el => el.decode());
  }
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/mobile-hero.png' });
  await page.screenshot({ path: 'test-results/mobile.png', fullPage: true });
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    await writeFile(`test-results/accessibility-${width}.json`, JSON.stringify(accessibility.violations, null, 2));
    console.log(`Acessibilidade (${width}px):`, accessibility.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })));
    assert.equal(accessibility.violations.length, 0, `Verifique test-results/accessibility-${width}.json`);
  }
  assert.deepEqual(errors, [], 'Erros de JavaScript no navegador');
  console.log('OK: 7 larguras, menu, teclado, lightbox, filtros, FAQ, links, imagens e acessibilidade.');
} catch (error) {
  console.log('URL:', page.url(), 'Erros:', errors);
  await page.screenshot({ path: 'test-results/failure.png' }).catch(() => {});
  throw error;
} finally {
  await browser.close();
}
