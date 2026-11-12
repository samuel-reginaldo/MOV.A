export class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <main>
        <app-carousel>
          <div class="carousel-item">Banner 1 - Bem-vindo!</div>
          <div class="carousel-item">Banner 2 - Web Components</div>
          <div class="carousel-item">Banner 3 - Shadow DOM & Slots</div>
        </app-carousel>

        <div class="cards-grid">
          <app-card>
            <span slot="title">Card Design A</span>
            <p>Um componente totalmente isolado visualmente, garantindo que o CSS não sofra interferências externas. Design
              moderno e limpo.</p>
          </app-card>

          <app-card>
            <span slot="title">Card Design B</span>
            <p>Utilizando a flexibilidade dos slots, este card pode receber variados tipos de conteúdo. É muito mais
              dinâmico agora.</p>
          </app-card>

          <app-card>
            <span slot="title">Card Design C</span>
            <p>Perfeito para exibir produtos, resumos de artigos, perfis de usuários e muito mais.</p>
          </app-card>
        </div>

        <app-article>
          <span slot="title">Web Components</span>
          <span slot="meta">Publicado por: </span>

          <p>Os Web Components são um conjunto de diferentes tecnologias que permitem a criação de elementos customizados e
            reutilizáveis — com suas funcionalidades encapsuladas longe do resto do código — e a sua utilização em
            aplicações web.</p>

          <h2>Por que usar?</h2>
          <p>Um dos maiores problemas no desenvolvimento front-end é a colisão de CSS e scripts. O <b>Shadow DOM</b> resolve
            esse problema encapsulando a estrutura e os estilos.</p>

          <h2>Templates e Slots</h2>
          <p>Ao utilizarmos a tag <code>&lt;template&gt;</code>, garantimos que a marcação é processada de forma eficiente
            na memória do navegador. Já os <code>&lt;slot&gt;</code> nos permitem injetar o conteúdo HTML desejado nos
            componentes dinamicamente.</p>
        </app-article>
      </main>
    `;
  }
}
