const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./article.css', import.meta.url).href}">
  <article class="article">
    <header class="article-header">
      <h1 class="article-title"><slot name="title">Título do Artigo</slot></h1>
      <div class="article-meta"><slot name="meta"></slot></div>
    </header>
    <div class="article-content">
      <slot>Conteúdo do artigo...</slot>
    </div>
  </article>
`;

class ArticleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { ArticleComponent };
