import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { getContactUrl, hasWhatsApp } from '../data/config';

export function Brand() {
  return <span className="brand"><img className="brand-mark" src="/images/logo-progressive.png" alt="" width="224" height="236" /><span className="brand-name">PROGRESSIVE <span>ACADEMIA</span></span></span>;
}
export function ContactButton({ children = 'Quero treinar na Progressive', message, className = '', outline = false }) {
  return <a className={`button ${outline ? 'button-outline' : 'button-primary'} ${className}`} href={getContactUrl(message)} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
export function ContactIcon(props) { return hasWhatsApp ? <MessageCircle {...props} /> : <Instagram {...props} />; }
export function SectionHeading({ eyebrow, title, accent, children, className = '' }) {
  return <div className={`section-heading ${className}`}><span className="eyebrow"><i />{eyebrow}</span><h2>{title}{accent && <><br /><span>{accent}</span></>}</h2>{children && <p>{children}</p>}</div>;
}
