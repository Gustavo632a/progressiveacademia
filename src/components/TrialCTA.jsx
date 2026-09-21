import { trial } from '../data/config';
import { ContactButton } from './UI';
export default function TrialCTA() {
  return <section className="trial-section"><div className="container" data-reveal><div><span className="eyebrow">VEM SENTIR ESSA ENERGIA</span><h2>SEU PRIMEIRO PASSO<br />PODE SER HOJE.</h2><p>Conheça a Progressive, nossa estrutura e as possibilidades de treino.</p></div><ContactButton message={trial.message}>{trial.available ? 'Solicitar aula experimental' : trial.label}</ContactButton></div></section>;
}
