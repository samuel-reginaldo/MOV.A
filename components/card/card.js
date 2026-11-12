const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./card.css', import.meta.url).href}">
  <div class="card">
    <div class="card-header">
      <h2><slot name="title">Título do Card</slot></h2>
    </div>
    <div class="card-body">
      <p><slot>Conteúdo padrão do card. Adicione conteúdo aqui inserindo elementos dentro da tag no HTML.</slot></p>
    </div>
  </div>
`;

class CardComponent extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'subtitle'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.titleElement = this.shadowRoot.querySelector('h2');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'title' && this.titleElement) {
        // If a title attribute is passed, override the slot with the attribute text
        this.titleElement.textContent = newValue;
      }
    }
  }
}
export { CardComponent };