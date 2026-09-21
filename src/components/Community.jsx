import { ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_URL } from '../data/config';
export default function Community() {
  return <section className="community-section"><img src="/images/community.webp" alt="Atleta treinando em um ambiente de academia — imagem ilustrativa" width="1600" height="1067" loading="lazy" /><div className="community-overlay" /><div className="container community-content" data-reveal><span className="eyebrow"><i />MAIS FORTE, JUNTOS</span><h2>TREINAR FICA DIFERENTE<br />QUANDO VOCÊ FAZ<br /><span>PARTE DE UM TIME.</span></h2><p>Na Progressive, evolução não acontece apenas individualmente. É sobre rotina, disciplina, apoio e uma comunidade que continua avançando.</p><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-link">Conheça o #timeprogressive<ArrowUpRight size={18} /></a></div><span className="community-watermark" aria-hidden="true">#TIMEPROGRESSIVE</span></section>;
}
