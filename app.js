//criando variáveis para armazenar a lista de amigos
let amigos = [];              
let nomesJaSorteados = [];  

// função para exibir texto na tela do que for puxado do html
function exibirTextoNaTela(seletor, texto) {
  let campo = document.querySelector(seletor);
  if (campo) {
    campo.innerHTML = texto;
  }
}

// função para mensagem na tela
function exibirMensagemInicial() {
  exibirTextoNaTela('.header-banner h1', 'Amigo Secreto');
  exibirTextoNaTela('.input-section h2', 'Digite o nome dos seus amigos');
}
exibirMensagemInicial();

// função dpara adicionar o nome dos amigos
function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome !== "") {
    amigos.push(nome);
    atualizarListaAmigos();
    limparCampo();
  }
}

// exibir na tela todos os nomes adicionados
function atualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  let html = "";
  for (let i = 0; i < amigos.length; i++) {
    html += "<li>" + amigos[i] + "</li>";
  }
  lista.innerHTML = html;
}

// limpar o campo para poder escrever um novo nome
function limparCampo() {
  let input = document.getElementById("amigo");
  input.value = "";
  input.focus();
}

// sorteando o nome
function sortearAmigo() {
  if (amigos.length === 0) {
    exibirTextoNaTela('.result-list', 'Não há nomes para sortear.');
    return;
  }

   // gerar um nome aleatório que ainda não foi sorteado
   let nomeSorteado = gerarNomeAleatorio(); 
  
  // para exibir o resultado
  let resultadoUl = document.getElementById("resultado");
  let li = document.createElement("li");
  li.textContent = "Nome sorteado: " + nomeSorteado;
  resultadoUl.appendChild(li);
}

// função para não repetir um nome sorteado
function gerarNomeAleatorio() {
  // Se já sorteamos todos, recomeçamos (limpando a lista de sorteados)
  if (nomesJaSorteados.length === amigos.length) {
    nomesJaSorteados = [];
  }

  // tenta escolher um nome que ainda não tenha sido sorteado
  while (true) {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeEscolhido = amigos[indiceAleatorio];

    // Se não estiver na lista de nomes já sorteados, retornamos
    if (!nomesJaSorteados.includes(nomeEscolhido)) {
      nomesJaSorteados.push(nomeEscolhido);
      return nomeEscolhido;
    }
    // Caso contrário, sorteamos de novo até achar um nome “novo”
  }
}
