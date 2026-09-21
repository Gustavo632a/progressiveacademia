import { Instagram, ArrowUpRight } from 'lucide-react';
import { Brand } from './UI';
import { navigation } from './Header';
import { INSTAGRAM_URL } from '../data/config';
export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a href="#inicio" aria-label="Progressive Academia — início"><Brand /></a><p>SEU CORPO SEMPRE EM PROGRESSO.</p></div><div><span className="footer-title">NOSSAS UNIDADES</span><strong>Zona Norte · Mandacaru</strong><p>João Pessoa/PB</p><strong>Zona Sul · Valentina <span className="footer-soon">Em breve</span></strong></div><div className="footer-navigation"><span className="footer-title">EXPLORE</span><div>{navigation.slice(1).map(([name, id]) => <a href={`#${id}`} key={id}>{name}</a>)}</div></div><div><span className="footer-title">FAÇA PARTE DO TIME</span><a className="footer-social" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={19} />@progressive_academia<ArrowUpRight size={15} /></a><p>O progresso continua por lá.</p></div></div><div className="footer-bottom"><p>© 2026 Progressive Academia. Todos os direitos reservados.</p><span>FEITO PARA EVOLUIR. <ArrowUpRight size={13} /></span></div></div></footer>;
}
