//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

//Criar função para adicionar amigos no campo de texto

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value.trim();
    if(nome === ""){
        alert("Por favor,digite o nome de um amigo!");
     } else {
        listaDeAmigos.push(nome);
        document.getElementById("amigo").value = "";
        atualizarLista();
        console.log(listaDeAmigos);
    }
}


//Implementar uma função para atualizar a lista de amigos

function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaElement.appendChild(li);
    };
}

//Implementar uma função para sortear um amigo aleaoriamente

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    const indiceResultado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceResultado];
    document.getElementById("amigoSorteado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}

// Função para limpar a lista e iniciar um novo sorteio
function limparLista() {
    listaDeAmigos = []; // Zera o array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a exibição da lista
    document.getElementById("amigoSorteado").innerHTML = ""; // Limpa o nome do sorteado
    alert("Lista de amigos foi apagada! Você pode começar um novo sorteio.");
}