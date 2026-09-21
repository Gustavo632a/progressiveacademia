import { Expand } from 'lucide-react';
import { structure } from '../data/gallery';
import { SectionHeading } from './UI';
export default function Structure({ onOpen }) {
  return <section id="estrutura" className="section container"><div className="section-top" data-reveal><SectionHeading eyebrow="ESPAÇO PARA IR ALÉM" title="UMA ESTRUTURA FEITA" accent="PARA SUA EVOLUÇÃO." /><p className="section-aside">Seu esforço merece um ambiente<br />à altura. Venha conhecer de perto<br />os espaços da Progressive.</p></div><div className="structure-grid">{structure.map((item, i) => <button key={item.src} className={`structure-photo structure-photo-${i}`} onClick={() => onOpen(structure, i)} aria-label={`Ampliar foto: ${item.label}`} data-reveal><img src={item.src} alt={item.alt} loading="lazy" width="900" height="650" /><span className="photo-label"><span>{item.label}</span><Expand size={18} /></span></button>)}</div><p className="image-note">Imagens ilustrativas de treinamento. As fotografias oficiais da Progressive serão adicionadas em breve.</p></section>;
}
