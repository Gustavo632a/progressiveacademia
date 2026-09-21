import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { getContactUrl, hasWhatsApp } from '../data/config';
import { ContactIcon } from './UI';
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const update = () => setVisible(window.scrollY > 700); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  return <div className="floating-actions">{visible && <a href="#inicio" className="back-top" aria-label="Voltar ao topo"><ArrowUp size={19} /></a>}<a className="floating-contact" href={getContactUrl()} target="_blank" rel="noopener noreferrer" aria-label={`Começar - Quero treinar — falar pelo ${hasWhatsApp ? 'WhatsApp' : 'Instagram'}`}><ContactIcon size={21} /><span className="floating-desktop">Quero treinar</span><span className="floating-mobile">Começar</span><span className="floating-dot" /></a></div>;
}
