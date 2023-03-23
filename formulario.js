// Le agregue punto y coma a todo el archivo js

var formulario = document.querySelector("form.formulario"); //El método querySelector busca un elemento con el ID "form", pero en el archivo HTML el elemento form tiene la clase "formulario"

formulario.addEventListener('submit', function(e) { // Se cambia onsubmit por addEventListener para que se ejecute el preventDefault
  e.preventDefault(); // Se tiene que agregar el Default o se producira un error
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0 && edad > 18 && edad < 120) {
        agregarInvitado(nombre, edad, nacionalidad);
  }
})

// Se borra la parte comentada en la parte de abajo, ya que todo esta declarado a partir de la linea 88

// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// //botonBorrar.id = "boton-borrar";
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea);
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); // added no era correcto tiene que ser add.
lista.appendChild(elementoLista);

// La parte comentada en la parte de abajo se borra ya que todo ya esta declarado en la funcion de abajo

// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}