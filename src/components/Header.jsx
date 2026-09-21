import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Brand } from './UI';
import { getContactUrl } from '../data/config';

export const navigation = [['Início', 'inicio'], ['Modalidades', 'modalidades'], ['Estrutura', 'estrutura'], ['Unidades', 'unidades'], ['Horários', 'horarios'], ['Planos', 'planos'], ['Contato', 'contato']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = e => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } };
    const resize = () => { if (window.innerWidth >= 1100) setOpen(false); };
    document.addEventListener('keydown', escape); window.addEventListener('resize', resize);
    return () => { document.removeEventListener('keydown', escape); window.removeEventListener('resize', resize); };
  }, [open]);
  return <header className={`header ${scrolled || open ? 'header-solid' : ''}`}><div className="container header-inner"><a href="#inicio" aria-label="Progressive Academia — início" onClick={() => setOpen(false)}><Brand /></a><nav id="main-nav" aria-label="Navegação principal" className={open ? 'navigation is-open' : 'navigation'}>{navigation.map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{name}</a>)}</nav><a className="button button-primary header-cta" href={getContactUrl()} target="_blank" rel="noopener noreferrer">Quero treinar<ArrowUpRight size={16} /></a><button id="menu-toggle" className="icon-button menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}
