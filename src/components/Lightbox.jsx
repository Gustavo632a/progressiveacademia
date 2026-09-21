import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
export default function Lightbox({ state, setState }) {
  const ref = useRef(null);
  const close = () => setState(null);
  const move = delta => setState(s => ({ ...s, index: (s.index + delta + s.items.length) % s.items.length }));
  useEffect(() => {
    if (!state) return;
    const activeElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current.showModal();
    return () => { document.body.style.overflow = previousOverflow; activeElement?.focus(); };
  }, [!!state]);
  if (!state) return null;
  const item = state.items[state.index];
  return <dialog ref={ref} className="lightbox" aria-label="Galeria de fotografias" onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === ref.current) close(); }} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); move(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); } }}><button className="lightbox-close icon-button" onClick={close} aria-label="Fechar galeria" autoFocus><X /></button><div className="lightbox-content"><button className="lightbox-prev icon-button" onClick={() => move(-1)} aria-label="Foto anterior"><ChevronLeft size={30} /></button><figure><img src={item.src} alt={item.alt} /><figcaption aria-live="polite">{item.label || item.alt}<span>{state.index + 1} / {state.items.length} · Imagem ilustrativa</span></figcaption></figure><button className="lightbox-next icon-button" onClick={() => move(1)} aria-label="Próxima foto"><ChevronRight size={30} /></button></div></dialog>;
}
