import { ArrowUpRight, Dumbbell, MapPin, Wallet } from 'lucide-react';
import { Brand, ContactButton } from './components/UI';
import { plans } from './data/plans';
import { modalities } from './data/modalities';
import { mandacaruLocation as location, MANDACARU_DIRECTIONS_URL } from './data/location';
import './overview.css';

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export default function App() {
  const availablePlans = plans.filter(plan => plan.confirmed);
  const availableModalities = modalities.filter(modality => modality.confirmed);

  return <div className="overview">
    <a href="#main" className="skip-link">Pular para o conteúdo</a>
    <header className="overview-header container">
      <a href="#inicio" aria-label="Progressive Academia — início"><Brand /></a>
      <nav aria-label="Navegação principal">
        <a href="#planos">Planos</a><a href="#modalidades">Modalidades</a><a href="#endereco">Endereço</a>
      </nav>
    </header>
    <main id="main" className="container">
      <section id="inicio" className="overview-intro" aria-labelledby="intro-title">
        <div>
          <span className="eyebrow"><i />MANDACARU · JOÃO PESSOA</span>
          <h1 id="intro-title">SEU TREINO.<br /><span>SEU PROGRESSO.</span></h1>
          <p>Planos, modalidades e onde nos encontrar.<br />Tudo o que você precisa para começar.</p>
        </div>
        <img src="/images/treino-01.webp" alt="Espaço de musculação da Progressive Academia" width="600" height="400" fetchPriority="high" />
      </section>
      <div className="overview-grid">
        <section id="planos" className="overview-card" aria-labelledby="plans-title">
          <Wallet className="overview-icon" size={24} aria-hidden="true" />
          <h2 id="plans-title">Planos e valores</h2>
          {availablePlans.length ? <div className="overview-plans">{availablePlans.map(plan => <article className="overview-plan" key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="overview-price">{plan.price != null ? currency.format(plan.price) : 'Valor sob consulta'}{plan.period && <small> / {plan.period}</small>}</p>
            {plan.features.length > 0 && <ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}
          </article>)}</div> : <div className="overview-card-body"><h3>Valores sob consulta</h3><p>Entre em contato para saber os planos e preços disponíveis.</p></div>}
          <ContactButton message="Olá! Gostaria de saber os planos e valores da Progressive Academia.">Consultar planos</ContactButton>
        </section>
        <section id="modalidades" className="overview-card" aria-labelledby="modalities-title">
          <Dumbbell className="overview-icon" size={24} aria-hidden="true" />
          <h2 id="modalities-title">Modalidades</h2>
          <div className="overview-card-body">{availableModalities.map(modality => <article className="overview-modality" key={modality.id}><h3>{modality.name}</h3><p>{modality.description}</p></article>)}</div>
        </section>
        <section id="endereco" className="overview-card" aria-labelledby="address-title">
          <MapPin className="overview-icon" size={24} aria-hidden="true" />
          <h2 id="address-title">Onde estamos</h2>
          <div className="overview-card-body"><h3>Unidade Mandacaru</h3><address>{location.streetAddress}<br />{location.neighborhood} · {location.city}/{location.state}<br />CEP {location.postalCode}</address></div>
          <a className="button button-outline" href={MANDACARU_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">Como chegar<ArrowUpRight size={18} aria-hidden="true" /></a>
        </section>
      </div>
    </main>
    <footer className="overview-footer container"><p>© {new Date().getFullYear()} Progressive Academia</p><span>Seu corpo sempre em progresso.</span></footer>
  </div>;
}
