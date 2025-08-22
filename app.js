let amigosLista = [];

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
