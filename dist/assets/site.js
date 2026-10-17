import { hydrateIcons, icon } from './components/icons.js';
import { renderLayout } from './components/layout.js';
import { initializeNavigation } from './components/navigation.js';
import { bindAlternatingWhatsapp, initializeWhatsappButtons } from './components/whatsapp.js';

renderLayout();
hydrateIcons();
initializeNavigation();
initializeWhatsappButtons();

export { bindAlternatingWhatsapp, icon };
