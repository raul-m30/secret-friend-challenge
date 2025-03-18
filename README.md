# secret-friend-challenge

Desafio do Amigo Secreto

Descrição

Este é um projeto simples para realizar um sorteio de amigo secreto. Os usuários podem adicionar nomes a uma lista e, em seguida, sortear um nome aleatoriamente sem repetir os sorteios até que todos os nomes tenham sido escolhidos uma vez.

Funcionalidades

Adicionar nomes de amigos a uma lista.

Exibir a lista de amigos adicionados.

Sortear um nome aleatório sem repetir até que todos tenham sido sorteados.

Exibir os resultados do sorteio na tela.

Código e linguagens Utilizadas

HTML

CSS

JavaScript (DOM Manipulation, Arrays, Randomization)

Como Usar

Abrir o arquivo HTML no navegador.

Adicionar os nomes digitando no campo de entrada e clicando no botão de adicionar.

Visualizar a lista de amigos adicionados.

Sortear um nome aleatório clicando no botão correspondente.

Os nomes sorteados serão exibidos na tela e não serão repetidos até que todos tenham sido escolhidos pelo menos uma vez.

Estrutura do Código

Variáveis Principais:

amigos: Armazena a lista de amigos.

nomesJaSorteados: Mantém o controle dos nomes que já foram sorteados.

Funções:

exibirTextoNaTela(seletor, texto): Exibe um texto em um elemento HTML especificado.

exibirMensagemInicial(): Exibe as mensagens iniciais do site.

adicionarAmigo(): Adiciona um nome à lista de amigos e atualiza a exibição.

atualizarListaAmigos(): Atualiza a exibição da lista de amigos.

limparCampo(): Limpa o campo de entrada após adicionar um nome.

sortearAmigo(): Sorteia um nome da lista garantindo que não haja repetições antes de todos os nomes serem escolhidos.

gerarNomeAleatorio(): Retorna um nome aleatório que ainda não foi sorteado.

