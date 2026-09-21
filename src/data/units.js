import { mapsUrl } from './config';
import { mandacaruLocation } from './location.js';
export const units = [
  { id: 'mandacaru', zone: 'Zona Norte', name: 'Mandacaru', city: 'João Pessoa/PB', status: 'Em funcionamento', soon: false, address: mandacaruLocation.streetAddress, mapsUrl, image: '/images/estrutura-01.webp' },
  { id: 'valentina', zone: 'Zona Sul', name: 'Valentina', city: 'João Pessoa/PB', status: 'Em breve', soon: true, address: null, mapsUrl: null, image: null },
];
