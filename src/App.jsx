import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Modalities from './components/Modalities';
import ContactStrip from './components/ContactStrip';
import Structure from './components/Structure';
import Units from './components/Units';
import Schedule from './components/Schedule';
import Community from './components/Community';
import Gallery from './components/Gallery';
import Plans from './components/Plans';
import TrialCTA from './components/TrialCTA';
import Testimonials from './components/Testimonials';
import AppSection from './components/AppSection';
import FAQ from './components/FAQ';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Lightbox from './components/Lightbox';

export default function App() {
  const [lightbox, setLightbox] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: .08 });
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('will-reveal')); };
  }, []);
  const openLightbox = (items, index) => setLightbox({ items, index });
  return <><a href="#main" className="skip-link">Pular para o conteúdo</a><Header /><main id="main"><Hero /><Stats /><Benefits /><Modalities /><ContactStrip /><Structure onOpen={openLightbox} /><Units /><Schedule /><Community /><Gallery onOpen={openLightbox} /><Plans /><TrialCTA /><Testimonials /><AppSection /><FAQ /><Location /><FinalCTA /><Instagram /></main><Footer /><FloatingWhatsApp /><Lightbox state={lightbox} setState={setLightbox} /></>;
}
