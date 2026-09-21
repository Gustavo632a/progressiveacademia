// Recria as fotos ilustrativas locais e as fontes. Execute com acesso à internet.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
const exec = promisify(execFile);
const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
const download = (url, file, extra = []) => exec(curl, ['-L', '--fail', '--retry', '2', '--max-time', '60', ...extra, url, '-o', file], { windowsHide: true });
await mkdir('public/images', { recursive: true });
await mkdir('public/fonts', { recursive: true });
const photos = [
  ['hero', '1581009146145-b5ef050c2e1e', 1920],
  ['hero-mobile', '1581009146145-b5ef050c2e1e', 1000],
  ['treino-01', '1534438327276-14e5300c3a48', 1000],
  ['treino-02', '1517836357463-d25dfeac3438', 800],
  ['treino-03', '1518611012118-696072aa579a', 800],
  ['estrutura-01', '1534438327276-14e5300c3a48', 1100],
  ['estrutura-02', '1583454110551-21f2fa2afe61', 1100],
  ['estrutura-03', '1571902943202-507ec2618e8f', 800],
  ['estrutura-04', '1517836357463-d25dfeac3438', 800],
  ['progressive-01', '1581009146145-b5ef050c2e1e', 650],
  ['progressive-02', '1583454110551-21f2fa2afe61', 650],
  ['progressive-03', '1518611012118-696072aa579a', 650],
  ['community', '1517836357463-d25dfeac3438', 1600],
];
for (let i = 0; i < photos.length; i += 4) {
  await Promise.all(photos.slice(i, i + 4).map(async ([name, id, width]) => {
    await download(`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${name === 'hero-mobile' ? 65 : 80}&fm=webp`, `public/images/${name}.webp`);
    console.log(`Imagem: ${name}.webp`);
  }));
}
await download('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Inter:wght@100..900&display=swap', 'public/fonts/google-fonts.css', ['-A', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36']);
const css = await readFile('public/fonts/google-fonts.css', 'utf8');
for (const [family, filename] of [['Barlow Condensed', 'barlow-condensed'], ['Inter', 'inter-latin']]) {
  const blocks = [...css.matchAll(/\/\* latin \*\/\s*(@font-face\s*\{[^}]+\})/g)].map(m => m[1]);
  const block = blocks.find(b => b.includes(`font-family: '${family}'`));
  const url = block?.match(/url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error(`Fonte WOFF2 não encontrada: ${family}`);
  await download(url, `public/fonts/${filename}.woff2`);
  console.log(`Fonte: ${filename}.woff2`);
}
await writeFile('public/images/SOURCES.md', '# Fotografias ilustrativas\n\nFotos públicas do Unsplash, usadas como placeholders; não representam instalações ou alunos da Progressive. Substitua por fotos reais autorizadas antes de publicar.\n\n' + photos.map(([name, id]) => `- ${name}.webp: https://images.unsplash.com/photo-${id}`).join('\n') + '\n');
