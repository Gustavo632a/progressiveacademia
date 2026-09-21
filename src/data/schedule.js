// Horários fornecidos no briefing. Atualize aqui para refletir a programação oficial.
export const schedule = [
  { day: 'Segunda a sexta', short: 'SEG — SEX', periods: ['05:00 – 23:30'] },
  { day: 'Sábado', short: 'SÁB', periods: ['08:00 – 12:00', '14:00 – 18:00'] },
  { day: 'Domingo', short: 'DOM', periods: ['08:00 – 13:00'] },
];
export const scheduleNote = 'Horários podem sofrer alterações em feriados e datas especiais.';
export const scheduleSummary = () => schedule.map(({ day, periods }) => `${day}: ${periods.join(' e ')}.`).join(' ');
