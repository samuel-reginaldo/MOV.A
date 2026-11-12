# Manual de Git e GitHub: Trabalhando com GitHub Flow
**Público-Alvo:** Alunos de Engenharia de Software

O **GitHub Flow** é um fluxo de trabalho (workflow) leve, simples e baseado em branches, ideal para equipes e projetos que buscam entregas contínuas e rápidas. 

A regra de ouro do GitHub Flow é: **A branch `main` deve estar sempre estável e pronta para ser implantada (deploy) em produção.** Qualquer nova funcionalidade, correção de bug ou experimento deve ser feito em uma branch separada.

Abaixo, detalhamos como executar esse fluxo usando duas abordagens diferentes.

---

## Capítulo 1: O Caminho Visual (Interface do GitHub e VSCode)

Muitos desenvolvedores e iniciantes preferem a agilidade e intuitividade das interfaces visuais. Veja como aplicar o GitHub Flow usando apenas cliques no navegador e no editor Visual Studio Code.

### Passo 1: Criando o Repositório Remoto (No GitHub)
1. Acesse sua conta no [GitHub](https://github.com).
2. Clique no botão verde **"New"** (Novo) no canto superior esquerdo da sua dashboard ou no botão `+` na barra de navegação superior.
3. Preencha o "Repository name" (Nome do repositório, ex: `meu-projeto-web`).
4. (Opcional) Adicione uma "Description" (Descrição) informando sobre o que é o projeto.
5. Selecione a visibilidade: Público (todos podem ver) ou Privado (só você e convidados podem ver).
6. **Atenção:** Como você já tem os arquivos no seu computador (o projeto que construímos), **NÃO** marque a opção "Add a README file" nem adicione `.gitignore`. Deixe o repositório totalmente vazio.
7. Clique em **"Create repository"**.

### Passo 2: Inicializando e Conectando (No VSCode)
1. Abra a pasta raiz do seu projeto local no **VSCode**.
2. Na barra lateral esquerda (Activity Bar), clique no ícone de **Source Control** (Controle do Código Fonte - representado por um ícone com três nós/bolinhas conectados).
3. Você verá um botão azul escrito **"Initialize Repository"** (Inicializar Repositório). Clique nele. (Isso é o equivalente visual ao `git init`).
4. Para conectar seu projeto local com o repositório remoto vazio que você criou no Passo 1:
   - Clique no ícone de três pontinhos `...` no topo da aba Source Control.
   - Vá em **Remote** (Remoto) > **Add Remote...** (Adicionar Remoto...).
   - O VSCode pedirá a URL. Cole a URL do repositório que você criou (ex: `https://github.com/seu-usuario/meu-projeto-web.git`).
   - Ele pedirá um nome para este remoto. O padrão da indústria é chamá-lo de **`origin`**. Digite `origin` e pressione Enter.

### Passo 3: Executando o GitHub Flow (No VSCode)

**A. Criando uma nova Branch (Ramo de Funcionalidade)**
Nunca edite os arquivos diretamente na branch `main`.
1. No canto inferior esquerdo da tela do VSCode (na barra azul de status), você verá o nome da branch atual (provavelmente `main` ou `master`). Clique nesse nome.
2. Um menu superior aparecerá. Selecione **"Create new branch..."** (Criar nova branch).
3. Digite um nome sem espaços que descreva o que você vai fazer (ex: `feature/nova-pagina-sobre` ou `bugfix/correcao-header`) e pressione Enter.

**B. Fazendo e Registrando (Commit) as Alterações**
1. Trabalhe no seu código normalmente e salve seus arquivos.
2. Na aba de **Source Control**, seus arquivos alterados aparecerão sob a lista "Changes" (Alterações).
3. Para preparar esses arquivos para salvar, passe o mouse sobre a palavra "Changes" e clique no ícone de `+` (Stage All Changes). Os arquivos subirão para a lista "Staged Changes" (Alterações Preparadas).
4. Na caixa de texto de "Message", digite uma mensagem clara e no imperativo sobre o que foi feito (ex: `Adiciona componente de banner rotativo`).
5. Clique no botão azul **"Commit"**.

**C. Enviando (Push) e Abrindo o Pull Request**
1. Após o commit, na aba de Source Control, aparecerá um botão chamado **"Publish Branch"** (Publicar Branch). Clique nele para enviar essa branch nova lá para o site do GitHub.
2. Acesse a página do seu repositório no site do GitHub. Você verá um aviso amarelo chamativo dizendo que uma nova branch sofreu push, com um botão **"Compare & pull request"**. Clique nele!
3. Preencha um título e escreva na descrição os detalhes do que foi modificado e por que. Clique em **"Create pull request"**.
4. Neste momento (na vida real), outros membros da equipe revisariam seu código. Se tudo estiver certo, você ou um revisor clicará no grande botão verde **"Merge pull request"**. 
5. Feito o merge, a sua funcionalidade da branch paralela agora faz parte oficial da branch `main`!

---

## Capítulo 2: O Caminho Terminal (Shell / Linha de Comando)

O terminal assusta no início, mas é a ferramenta definitiva para automação, compreensão profunda de como as ferramentas funcionam e, com a prática, garante muito mais velocidade no dia a dia.

### Passo 1: Inicializando e Conectando (Setup Inicial)

*(Importante: O passo de clicar em "New Repository" no site do GitHub deve ser feito da mesma maneira explicada no Capítulo 1 para criar o "balde vazio" nos servidores deles).*

Abra o terminal do VSCode (ou o Git Bash/PowerShell) na pasta raiz do seu projeto e digite:

\`\`\`bash
# 1. Transforma sua pasta normal em um repositório Git local
git init

# 2. Garante que o nome da branch principal é 'main' (e não 'master', como era antigamente)
git branch -m main

# 3. Conecta o repositório local ao repositório remoto no GitHub, nomeando-o de 'origin'
git remote add origin https://github.com/seu-usuario/meu-projeto-web.git
\`\`\`

*(Nota: Estes 3 comandos só precisam ser executados uma única vez na vida do projeto).*

### Passo 2: Executando o GitHub Flow (No Terminal)

**A. Criando e Trocando para uma Nova Branch**
Antes de escrever sua primeira linha de código novo, garanta que está criando uma "linha do tempo" paralela.
\`\`\`bash
# O comando 'checkout' com a flag '-b' cria uma nova branch e já "pula" para dentro dela automaticamente.
git checkout -b feature/botao-escuro
\`\`\`

**B. Preparar (Add) e Salvar (Commit) as Alterações**
Fez as modificações no código? Siga este ciclo duplo:
\`\`\`bash
# 1. Adiciona TODOS os arquivos novos ou alterados ao "palco" (Staging Area)
git add .

# 2. Registra o momento no histórico de versões com uma mensagem (Commit)
git commit -m "Altera a cor do botão principal para modo escuro"
\`\`\`

**C. Push (Enviar para o GitHub)**
Agora, pegue os commits que estão apenas na sua máquina e envie para os servidores da nuvem do GitHub.
\`\`\`bash
# Envia a nova branch ('feature/botao-escuro') para o remoto ('origin')
git push -u origin feature/botao-escuro
\`\`\`
*(A flag `-u` significa "upstream", o que faz o Git local "lembrar" que esta branch está conectada à branch homônima na nuvem, facilitando pushes futuros).*

**D. Pull Request e Merge (Fechando o Ciclo)**
1. O processo de abrir e mesclar o **Pull Request** ocorre sempre através do site do GitHub (para garantir discussões em equipe e histórico rastreável via web), conforme o Passo 3C do modo visual.
2. Assim que o PR for aceito (merged) lá no GitHub, a `main` da nuvem estará atualizada. Mas a sua máquina **não sabe disso automaticamente**. Volte para o terminal e traga as novidades:

\`\`\`bash
# Volta para a branch principal
git checkout main

# Puxa (baixa) todas as modificações novas do GitHub para a sua máquina
git pull origin main

# (Opcional, mas recomendado) Deleta a branch velha localmente para manter a casa limpa
git branch -d feature/botao-escuro
\`\`\`

---
> **Lembrete de Ouro:**
> O GitHub Flow é um loop infinito contínuo. Terminou a funcionalidade? Comece de novo: `git checkout -b proxima-feature`, `add`, `commit`, `push`, `PR`, `merge`, `pull`, e repita!

---

## Capítulo 3: Publicando o Frontend no GitHub Pages

O **GitHub Pages** é um serviço de hospedagem de sites estáticos gratuito oferecido pelo GitHub. Ele pega arquivos HTML, CSS e JavaScript diretamente de um repositório e os publica na internet.

Como nosso projeto utiliza Web Components nativos (arquivos estáticos, sem necessidade de servidores Node.js para renderizar as telas), o GitHub Pages é a ferramenta perfeita para colocar nosso frontend no ar!

### Passo 1: Ativando o GitHub Pages
1. No site do GitHub, vá até a página principal do seu repositório.
2. Clique na aba **"Settings"** (Configurações) no menu superior (ícone de engrenagem).
3. No menu lateral esquerdo, desça até a seção "Code and automation" e clique em **"Pages"**.
4. Na seção **"Build and deployment"**:
   - Em *Source* (Fonte), deixe marcado **"Deploy from a branch"**.
   - Em *Branch*, selecione a branch **`main`** no menu suspenso.
   - Deixe o diretório selecionado como **`/ (root)`**.
   - Clique em **"Save"**.

### Passo 2: Acessando o Site Publicado
1. Após clicar em "Save", uma automação do GitHub (GitHub Actions) começará a publicar seu site em segundo plano. (Isso pode levar cerca de 1 a 2 minutos).
2. Recarregue a página de configurações do "Pages". Você verá uma mensagem avisando: *"Your site is live at..."* informando a URL base do seu projeto.
3. **Atenção à URL e à nossa Estrutura:** Como nossa arquitetura é Full Stack e está dividida em pastas separadas (`backend/`, `frontend/`, etc.), a raiz do site mostrará apenas uma listagem de pastas. 
4. Para visualizar a sua aplicação de Web Components funcionando, você deve **adicionar o caminho até o arquivo principal (`index.html`)** no final da URL que o GitHub forneceu.
   
   **Exemplo:**
   Se a URL do GitHub Pages for `https://seu-usuario.github.io/meu-projeto-web/`, você deverá acessar o navegador digitando:
   👉 `https://seu-usuario.github.io/meu-projeto-web/frontend/public/index.html`

### Dica Avançada de Engenharia (Build Tools e CI/CD)
Em projetos profissionais complexos, normalmente não expomos toda a estrutura de pastas na web. Utiliza-se um fluxo de automação de **CI/CD** (Integração e Entrega Contínuas) através do *GitHub Actions*. 

Nesse cenário avançado, uma automação leria apenas os arquivos de `frontend/`, faria um processo de compilação/otimização (bundling) agrupando os módulos JS em um único arquivo, e publicaria *apenas esse resultado final* em uma branch especial (como `gh-pages`). Dessa forma, a URL base do projeto já abriria o sistema automaticamente.

Mas para nossa etapa atual de aprendizado puramente focado nos conceitos Vanilla de Web Components, acessar pelo caminho longo demonstra exatamente como o servidor web resolve as pastas e arquivos hospedados!
