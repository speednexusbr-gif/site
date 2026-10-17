const contacts = ['5543984457932', '5543984740935'];
const storageKey = 'sn-wa-turn';

function readTurn() {
  try {
    const storedTurn = Number(sessionStorage.getItem(storageKey) || 0);
    return Number.isFinite(storedTurn) ? Math.max(0, storedTurn) : 0;
  } catch {
    return 0;
  }
}

function saveTurn(turn) {
  try {
    sessionStorage.setItem(storageKey, String(turn));
  } catch {
    // A alternância ainda funciona durante a visita atual.
  }
}

let turn = readTurn();

export function whatsappLink(text, selectedTurn = turn) {
  const phone = contacts[selectedTurn % contacts.length];
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function rotateContact() {
  turn += 1;
  saveTurn(turn);
}

export function bindAlternatingWhatsapp(link, message) {
  if (!link) return;
  const refreshLink = () => { link.href = whatsappLink(message); };

  refreshLink();
  link.addEventListener('click', () => {
    rotateContact();
    setTimeout(refreshLink, 0);
  });
}

export function initializeWhatsappButtons() {
  const message = 'Olá! Quero conhecer a Speed Nexus e conversar sobre os desafios da minha empresa.';
  document.querySelectorAll('[data-whatsapp]').forEach((link) => bindAlternatingWhatsapp(link, message));
}
