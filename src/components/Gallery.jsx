import { useState } from 'react';
import { ArrowUpRight, Expand } from 'lucide-react';
import { gallery } from '../data/gallery';
import { INSTAGRAM_URL } from '../data/config';
import { SectionHeading } from './UI';
export default function Gallery({ onOpen }) {
  const [active, setActive] = useState('Todos');
  const categories = ['Todos', ...new Set(gallery.map(item => item.category))];
  const visible = gallery.filter(item => active === 'Todos' || item.category === active);
  return <section className="section container" id="comunidade"><div className="section-top" data-reveal><SectionHeading eyebrow="ENERGIA QUE CONECTA" title="ISSO É SER" accent="PROGRESSIVE." /><div className="gallery-filters" aria-label="Filtrar galeria">{categories.map(category => <button key={category} className={active === category ? 'active' : ''} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}</div></div><div className="gallery-grid" aria-live="polite">{visible.map((item, i) => <button className="gallery-photo" key={item.src} onClick={() => onOpen(visible, i)} aria-label={`${item.category} - ampliar: ${item.alt}`}><img src={item.src} alt={item.alt} loading="lazy" width="600" height="650" /><span><span>{item.category}</span><Expand size={17} /></span></button>)}</div><div className="gallery-bottom"><p className="image-note">Um olhar sobre o movimento. Fotos ilustrativas, aguardando imagens da nossa comunidade.</p><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-link">Veja a Progressive no Instagram<ArrowUpRight size={16} /></a></div></section>;
}
