import { MapPin, ArrowUpRight } from 'lucide-react';
import { mandacaruLocation, MANDACARU_MAPS_URL, MANDACARU_DIRECTIONS_URL, MANDACARU_MAP_EMBED_URL } from '../data/location';
import { SectionHeading } from './UI';
export default function Location() {
  return (
    <section id="contato" className="section section-surface">
      <div className="container location-layout">
        <div data-reveal>
          <SectionHeading eyebrow="A GENTE SE ENCONTRA AQUI" title="ENCONTRE A" accent="PROGRESSIVE." />
          <div className="location-detail">
            <MapPin size={21} />
            <div>
              <h3>Unidade Zona Norte</h3>
              <p>{mandacaruLocation.streetAddress}<br />{mandacaruLocation.neighborhood} — {mandacaruLocation.city}/{mandacaruLocation.state}</p>
            </div>
          </div>
          <a href={MANDACARU_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="button button-primary">
            Como chegar<ArrowUpRight size={17} />
          </a>
          <div className="location-soon">
            <span className="mini-badge">EM BREVE</span><p>Unidade Zona Sul · Valentina</p>
          </div>
        </div>
        <div className="map-panel">
          <iframe
            title="Localização da Progressive Academia — Rua Professor Luiz Burity, 82, Mandacaru, João Pessoa/PB"
            src={MANDACARU_MAP_EMBED_URL}
            width="640"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-caption">
            <MapPin size={16} />
            <span>{mandacaruLocation.name} · {mandacaruLocation.neighborhood}<br /><small>{mandacaruLocation.streetAddress} — {mandacaruLocation.city}/{mandacaruLocation.state}</small></span>
            <a href={MANDACARU_MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="Abrir localização da Progressive Academia no Google Maps">
              <ArrowUpRight size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
