// Localização confirmada no Google Maps em 21/09/2026.
// https://www.google.com/maps?cid=3770975431927585236
export const mandacaruLocation = {
  name: 'Progressive Academia',
  streetAddress: 'Rua Professor Luiz Burity, 82',
  neighborhood: 'Mandacaru',
  city: 'João Pessoa',
  state: 'PB',
  postalCode: '58027-030',
  latitude: -7.0985269,
  longitude: -34.8677118,
  placeId: 'ChIJQW7mvo3nrAcR1NnEBC0yVTQ',
  cid: '3770975431927585236',
};

const destination = `${mandacaruLocation.name}, ${mandacaruLocation.streetAddress}, ${mandacaruLocation.city}, ${mandacaruLocation.state}`;
export const MANDACARU_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}&query_place_id=${mandacaruLocation.placeId}`;
export const MANDACARU_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&destination_place_id=${mandacaruLocation.placeId}`;
export const MANDACARU_MAP_EMBED_URL = `https://maps.google.com/maps?cid=${mandacaruLocation.cid}&z=17&hl=pt-BR&output=embed`;
