// Aquí tu código
const lista = document.getElementById("lista");
const agregar = document.getElementById("agregar");

function añadirElemento() {
  let elemento = prompt("Añade un elemento a la lista");

  let listar = document.createElement("li");
  listar.textContent = elemento;
  lista.appendChild(listar);
}

agregar.addEventListener("click", añadirElemento);
