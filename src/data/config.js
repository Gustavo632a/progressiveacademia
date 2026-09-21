// Substitua pelo número oficial com código do país e DDD (somente dígitos).
export const WHATSAPP_URL = 'https://wa.me/55NUMERO';
export const INSTAGRAM_URL = 'https://instagram.com/progressive_academia';
export { MANDACARU_MAPS_URL, MANDACARU_MAPS_URL as mapsUrl } from './location.js';
export const DEFAULT_MESSAGE = 'Olá! Conheci a Progressive Academia pelo site e gostaria de saber mais sobre planos e modalidades.';
export const hasWhatsApp = /^https:\/\/wa\.me\/\d{12,15}$/.test(WHATSAPP_URL);

export function getContactUrl(message = DEFAULT_MESSAGE, baseUrl = WHATSAPP_URL) {
  if (!/^https:\/\/wa\.me\/\d{12,15}$/.test(baseUrl)) return INSTAGRAM_URL;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

// Ative somente após confirmação da academia.
export const trial = {
  available: false,
  label: 'Quero conhecer a Progressive',
  message: 'Olá! Conheci a Progressive pelo site e gostaria de saber como posso conhecer a academia.',
};
export const statistics = [
  { value: null, label: 'Alunos', placeholder: 'Adicionar número real' },
  { value: null, label: 'Modalidades', placeholder: 'Adicionar número real' },
  { value: null, label: 'Profissionais', placeholder: 'Adicionar número real' },
  { value: null, label: 'Anos de experiência', placeholder: 'Adicionar número real' },
];
export const testimonials = []; // { name, quote, rating, photo }; Adicionar avaliação real.
export const appScreenshot = null; // Caminho para screenshot real do aplicativo.
