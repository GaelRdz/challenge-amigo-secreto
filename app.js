let amigosLista = [];
let indiceAleatorio = [];
let amigoSecreto = [];

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let nombreAmigo of amigosLista) {
        let li = document.createElement('li');
        li.textContent = nombreAmigo;
        ul.appendChild(li);
    }
}

function mostrarResultado(amigoSecreto) {
    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; 
    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    ulResultado.appendChild(li);
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo === "") {
        asignarTextoElemento('h2', 'Por favor, agrega un nombre');
    }   else {
        if (amigosLista.includes(nombreAmigo)) {
        asignarTextoElemento('h2', `${nombreAmigo} ya fue agregado`);
        return;
        }
        amigosLista.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        console.log(amigosLista);
            actualizarLista();
        return;
    }
}

function sortearAmigo() {
    if (amigosLista.length === 0) {
        asignarTextoElemento('h2', 'No has agregado amigos para sortear aun');
    }
    else{
        indiceAleatorio = Math.floor(Math.random() * amigosLista.length);
        let amigoSecreto = amigosLista[indiceAleatorio];
        mostrarResultado(amigoSecreto);
        amigosLista.splice(indiceAleatorio, 1);
        actualizarLista();
        console.log(amigosLista);
    }
}