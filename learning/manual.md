# Manual de Arquitetura: Web Components
**Público-Alvo:** Alunos de Engenharia de Software

Este manual tem como objetivo explicar de forma didática os conceitos e a arquitetura por trás do projeto web  desenvolvido no semestre letivo, utilizando tecnologias atuais html, css e javascript puro (vanilla), para o desenvolvimento de sistemas web.

---

## Estrutura de Diretórios: Visão Global

A estrutura raiz do projeto reflete a separação de responsabilidades, um princípio fundamental da Engenharia de Software:

\`\`\`text
web-components-project/
├── frontend/    # Código que roda no navegador do usuário (Client-side)
├── backend/     # Código que roda no servidor (Server-side)
├── database/    # Scripts e esquemas do banco de dados
└── learning/    # Documentação e manuais
\`\`\`

Esta separação permite que equipes diferentes trabalhem em partes distintas do sistema simultaneamente e garante que o código não fique acoplado.

---

## Capítulo 1: Frontend

O Frontend é a interface com a qual o usuário interage. Nossa estrutura adota o padrão de **Componentização** através de Web Components nativos.

### Estrutura de Diretórios do Frontend

\`\`\`text
frontend/
├── index.html
    ├── assets/   # Imagens, ícones, fontes
    ├── components/ # Componentes UI reutilizáveis (botões, cards, headers)
    ├── pages/    # "Telas" inteiras construídas agregando componentes
    ├── styles/   # CSS Global do sistema
    ├── scripts/   # JS Global do sistema
    └── learning/  # Conteúdo para estudo
\`\`\`

- **`components/` vs `pages/`**: Componentes são blocos de Lego (ex: uma roda). Páginas são o objeto final montado (ex: um carro inteiro). Páginas gerenciam o estado global da tela, enquanto componentes apenas exibem os dados que recebem (props).

### Os Arquivos Base (O Esqueleto)

#### 1. `index.html` (A Fundação)
Este arquivo é o primeiro documento carregado pelo navegador. Ele não contém lógica pesada, apenas as fundações:
\`\`\`html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Meta tags e CSS global -->
  <link rel="stylesheet" href="../src/styles/variables.css">
  <link rel="stylesheet" href="../src/styles/base.css">

  <!-- Entry Point: Carrega o motor do JS -->
  <script type="module" src="../src/index.js"></script>
</head>
<body>
  <!-- Onde nossa aplicação começa a ser renderizada. 
       Note que 'page-home' é um Web Component criado por nós! -->
  <page-home></page-home>
  
  <app-footer></app-footer>
</body>
</html>
\`\`\`
**Conceito Importante:** A tag `<script type="module">` avisa ao navegador que o arquivo JS não é apenas um script procedural, mas um **Módulo ECMAScript (ESM)**. Isso nos permite usar as palavras-chave `import` e `export`.

#### 2. `scripts/index.js` (O Entry Point)
Como num programa em C ou Java que tem uma função `main()`, a aplicação web moderna precisa de um "ponto de entrada".
\`\`\`javascript
// Importa as lógicas dos componentes de seus respectivos arquivos
import { Header } from './components/header/index.js';
import { Home } from './pages/Home/index.js';

// Registra as classes na API do Navegador
customElements.define('app-header', Header);
customElements.define('page-home', Home);
\`\`\`
**Conceito Importante:** O `customElements.define` ensina ao navegador que, toda vez que ele encontrar a tag HTML `<app-header>`, ele deve executar e instanciar a classe `Header`.

#### 3. Anatomia de um Web Component (JS)
Um componente geralmente consiste em um arquivo JS que cria uma classe.

\`\`\`javascript
const template = document.createElement('template');
template.innerHTML = \`
  <!-- CSS Encapsulado -->
  <link rel="stylesheet" href="\${new URL('./meu-estilo.css', import.meta.url).href}">
  <!-- Marcação HTML -->
  <div class="card">
    <h2><slot name="title">Título Padrão</slot></h2>
  </div>
\`;

class MeuComponente extends HTMLElement {
  constructor() {
    super(); // Herda os poderes de um elemento HTML nativo
    // Ativa o Shadow DOM (Encapsulamento)
    this.attachShadow({ mode: 'open' }); 
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { MeuComponente }; // Exporta para ser usado no index.js
\`\`\`
**Conceitos Importantes:**
- **Shadow DOM**: Assim como classes em POO (Programação Orientada a Objetos) têm métodos e atributos `private`, o Shadow DOM torna o CSS e o HTML do componente "privados". Uma classe CSS global não afeta o CSS de dentro do Shadow DOM.
- **`<slot>`**: É a injeção de dependência na UI. Permite passar conteúdo externo para o interior do componente.

---


## Resumo do Fluxo (Como tudo se conecta)

1. O usuário entra no site (Frontend - `index.html`).
2. O navegador lê a tag `<page-home></page-home>` e constrói a tela usando nossos Web Components.
3. No ciclo de vida do componente (ex: no `connectedCallback`), o JS faz uma requisição `fetch()` para `http://localhost:porta`.
4. Os dados atualizm (renderizam) na tela do usuário.

