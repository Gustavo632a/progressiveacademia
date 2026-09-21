import { Instagram as InstagramIcon, ArrowUpRight } from 'lucide-react';
import { gallery } from '../data/gallery';
import { INSTAGRAM_URL } from '../data/config';
export default function Instagram() {
  return <section className="instagram-section"><div className="container"><div className="instagram-heading"><div><span className="eyebrow"><InstagramIcon size={16} />@progressive_academia</span><h2>CONTINUE ACOMPANHANDO NOSSO PROGRESSO.</h2></div><a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Seguir no Instagram<ArrowUpRight size={18} /></a></div><div className="instagram-grid">{gallery.map(item => <a key={item.src} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Visitar o Instagram da Progressive"><img src={item.src} alt={`${item.alt} — fotografia ilustrativa`} width="300" height="300" loading="lazy" /><InstagramIcon size={22} /></a>)}</div><p className="image-note">Seleção de imagens ilustrativas. Acompanhe nossos registros reais no Instagram.</p></div></section>;
}
