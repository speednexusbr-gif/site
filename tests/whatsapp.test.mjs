import test from 'node:test';
import assert from 'node:assert/strict';

test('os botões genéricos alternam os dois contatos', async () => {
  const storage = new Map();
  globalThis.sessionStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };

  const { bindAlternatingWhatsapp } = await import('../dist/assets/components/whatsapp.js');
  let clickHandler;
  const link = {
    href: '',
    addEventListener: (event, handler) => {
      if (event === 'click') clickHandler = handler;
    },
  };

  bindAlternatingWhatsapp(link, 'Teste');
  assert.match(link.href, /5543984457932/);

  clickHandler();
  await new Promise((resolve) => setTimeout(resolve, 1));
  assert.match(link.href, /5543984740935/);

  clickHandler();
  await new Promise((resolve) => setTimeout(resolve, 1));
  assert.match(link.href, /5543984457932/);
});
