import test from 'node:test';
import assert from 'node:assert/strict';
import { getContactUrl, INSTAGRAM_URL } from '../src/data/config.js';
import { schedule, scheduleSummary } from '../src/data/schedule.js';
import { modalities } from '../src/data/modalities.js';
import { plans } from '../src/data/plans.js';

test('contato não envia visitantes a um número fictício', () => {
  assert.equal(getContactUrl(), INSTAGRAM_URL);
  assert.equal(getContactUrl('Olá', 'https://wa.me/55NUMERO'), INSTAGRAM_URL);
  assert.equal(getContactUrl('Olá', 'javascript:alert(1)'), INSTAGRAM_URL);
});
test('WhatsApp configurado preserva a mensagem em português', () => {
  const message = 'Olá! Quero conhecer planos & modalidades.';
  const url = new URL(getContactUrl(message, 'https://wa.me/5583999999999'));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.searchParams.get('text'), message);
});
test('resumo dos horários inclui todos os períodos, inclusive sábado', () => {
  const summary = scheduleSummary();
  for (const row of schedule) for (const time of row.periods) assert.ok(summary.includes(time));
  assert.ok(summary.includes('14:00 – 18:00'));
});
test('modalidades de exemplo e planos sem confirmação não são publicados', () => {
  assert.deepEqual(modalities.filter(m => m.confirmed).map(m => m.id), ['musculacao']);
  assert.equal(plans.filter(p => p.confirmed).length, 0);
});
