# Web Components Project

**Disciplina:** Ferramentas Web e UX  
**Curso:** Engenharia de Software (1ª Fase)  
**Instituição:** Católica de Santa Catarina  
**Professor:** Prof. Dr. Claudinei Dias (Ney)  
**Currículo Lattes CNPq:** [http://lattes.cnpq.br/7718486747668443](http://lattes.cnpq.br/7718486747668443)

---

## Sobre o Projeto

Este projeto é uma estudo sobre o desenvolvimento **Front end** utilizando **Web Components Nativos (Vanilla JS)**. O objetivo é compreender a arquitetura de aplicações web sem a necessidade de frameworks externos (como React, Angular ou Vue). Ao longo do projeto, explora-se o encapsulamento de estilos com Shadow DOM, a injeção de dependências via Slots, ciclo de vida de componentes nativos e integração com APIs.

## Estrutura de Diretórios

O repositório foi organizado para seguir uma estrutura escalável com separação clara de responsabilidades entre as camadas de um sistema **Full stack**, mas aqui será visto apenas o desenvolvimento **Front end**:

\`\`\`text
web-components-project/
│
├── frontend/             # Interface com o Usuário (Client-side)
│   ├── public/           # Arquivos estáticos globais (Ex: index.html base)
│   └── src/              # Código fonte dos Web Components
│       ├── api/          # Integração e chamadas HTTP (fetch) para o backend
│       ├── components/   # Componentes de UI isolados (Dumb components: Card, Header, etc.)
│       ├── pages/        # Componentes que representam "Telas" inteiras (Smart components)
│       ├── styles/       # Variáveis de CSS e estilos globais
│       └── index.js      # Ponto de entrada (Entry point) que registra todos os componentes
│
├── backend/              # Servidor API RESTful (Server-side)
│   ├── src/
│   │   ├── controllers/  # Lógica de negócio das requisições
│   │   ├── routes/       # Definição e mapeamento dos endpoints da API
│   │   └── server.js     # Inicialização do servidor em Node.js usando Express
│   └── package.json      # Dependências e scripts do servidor Node
│
├── database/             # Persistência de Dados
│   └── schema.sql        # Estrutura do banco de dados relacional (SQL)
│
└── learning/             # Manuais e Documentações Didáticas
    ├── manual.md         # Guia aprofundado sobre a arquitetura para estudantes
    └── manual-github.md  # Tutorial do fluxo de versão (GitHub Flow) e deploy (GitHub Pages)
\`\`\`

## Guias e Manuais de Estudo

No diretório `/learning`, estão os seguintes materiais complementares:
- [Manual da Arquitetura do Projeto](./learning/manual.md): Explicação dos conceitos de cada pasta e as fundações de como os arquivos `html`, `css` e `js` base se conectam.
- [Manual do GitHub Flow e Deploy](./learning/manual-github.md): Passo a passo detalhado de como gerenciar branches, realizar Pull Requests e colocar o frontend online via GitHub Pages.

## Como Iniciar Localmente

### 2. Rodando o Frontend
Como os Web Components utilizam ECMAScript Modules nativos (`<script type="module">`), você **precisa de um servidor local** para evitar bloqueios de segurança (CORS) do próprio navegador ao ler arquivos de sua máquina.

1. Instale a extensão **Live Server** no seu Visual Studio Code.
2. Navegue até o arquivo \`frontend/public/index.html\`.
3. Clique no botão **"Go Live"** no canto inferior direito do VSCode.
4. O navegador abrirá a aplicação rodando localmente.

---
*Projeto educacional desenvolvido para a disciplina de Ferramentas Web e UX.*
