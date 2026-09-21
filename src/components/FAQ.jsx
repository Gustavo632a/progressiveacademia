import { Plus } from 'lucide-react';
import { faq } from '../data/faq';
import { ContactButton, SectionHeading } from './UI';
export default function FAQ() {
  return <section className="section container faq-layout"><div data-reveal><SectionHeading eyebrow="VAMOS DESCOMPLICAR" title="SUAS DÚVIDAS." accent="NOSSO PRÓXIMO PASSO." /><p className="faq-description">Ficou com alguma dúvida?<br />A nossa equipe está por aqui.</p><ContactButton outline>Falar com a equipe</ContactButton></div><div className="faq-list" data-reveal>{faq.map((item, i) => <details name="faq" key={item.question}><summary><span className="faq-number">0{i + 1}</span><h3>{item.question}</h3><Plus size={19} /></summary><p>{item.answer}</p></details>)}</div></section>;
}
