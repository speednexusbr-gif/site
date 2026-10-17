import { icon } from './icons.js';

const logo = `<a class="brand" href="/" aria-label="Speed Nexus — início"><img src="/assets/logo.png" alt="" width="48" height="40"><span class="brand-name">Speed Nexus<small>Estratégia & soluções</small></span></a>`;

export function renderLayout() {
  document.querySelectorAll('[data-header]').forEach((element) => {
    element.innerHTML = `<a class="skip" href="#principal">Pular para o conteúdo</a><header class="header"><div class="container header-inner">${logo}<button class="menu" aria-label="Abrir menu" aria-controls="main-nav" aria-expanded="false"><span></span><span></span></button><nav class="nav" id="main-nav" aria-label="Navegação principal"><a href="/#como-funciona">Como funciona</a><a href="/#sobre">Nossa abordagem</a><a href="/#contato">Contato</a><a class="btn primary" href="/diagnostico/">Diagnóstico gratuito ${icon('arrow')}</a></nav></div></header>`;
  });

  document.querySelectorAll('[data-footer]').forEach((element) => {
    element.innerHTML = `<footer class="footer"><div class="container"><div class="footer-main"><p><strong>Speed Nexus</strong><br>Tecnologia que conecta. Estratégia que direciona.<br>Soluções que transformam.</p><div class="footer-links"><a href="/privacidade/">Privacidade</a><a href="/termos/">Termos de uso</a><a href="https://www.instagram.com/speed.nexus.br/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="mailto:speed.nexus.br@gmail.com">E-mail</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Speed Nexus. Todos os direitos reservados.</span><span>Entender o negócio. Conectar caminhos. Acompanhar a evolução.</span></div></div></footer>`;
  });
}
