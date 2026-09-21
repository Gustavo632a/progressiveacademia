import { Clock3 } from 'lucide-react';
import { schedule, scheduleNote } from '../data/schedule';
import { SectionHeading } from './UI';
export default function Schedule() {
  return <section id="horarios" className="section container schedule-section"><div data-reveal><SectionHeading eyebrow="ESPAÇO NA SUA ROTINA" title="TREINE NO" accent="SEU HORÁRIO.">Do primeiro movimento do dia ao último desafio da noite.</SectionHeading><p className="schedule-location"><Clock3 size={17} />Unidade Mandacaru</p></div><div className="schedule-table" data-reveal>{schedule.map(row => <div className="schedule-row" key={row.day}><span>{row.day}</span><strong>{row.periods.map(time => <span key={time}>{time}</span>)}</strong></div>)}<p>{scheduleNote}</p></div></section>;
}
