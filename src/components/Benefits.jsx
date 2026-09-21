import { Dumbbell, Users, Layers, ShieldCheck } from 'lucide-react';
import { SectionHeading } from './UI';
const benefits = [
  [Dumbbell, 'Estrutura', 'Um ambiente preparado para acompanhar diferentes objetivos e níveis de treinamento.'],
  [ShieldCheck, 'Profissionais', 'Suporte para tornar sua rotina de treino mais segura e eficiente.'],
  [Layers, 'Variedade', 'Modalidades para diferentes objetivos e estilos de treino.'],
  [Users, 'Comunidade', 'Um espaço onde evolução também significa fazer parte de um time.'],
];
export default function Benefits() {
  return <section id="sobre" className="section container"><div className="section-top" data-reveal><SectionHeading eyebrow="POR QUE PROGRESSIVE" title="MAIS QUE TREINAR." accent="É CONTINUAR EVOLUINDO." /><p className="section-aside">Cada pessoa tem um ponto de partida.<br />Aqui, você encontra espaço para<br />construir o seu próximo passo.</p></div><div className="benefits-grid">{benefits.map(([Icon, title, text], i) => <article className="benefit-card" key={title} data-reveal><div className="benefit-top"><Icon size={27} strokeWidth={1.5} /><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}
