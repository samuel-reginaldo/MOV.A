const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./footer.css', import.meta.url).href}">
  <footer>
    <div class="content">
      <p>Footer Components</p>
      <p>...</p>
      <p>&copy; 2026 WebComponents Project. Todos os direitos reservados.</p>
    </div>
  </footer>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
export { FooterComponent };