function mostrarMensaje() {
    console.log('Hicieron click en el boton', new Date().toLocaleTimeString());
}

//Agregar un eventListener
let boton = document.getElementById('btn');
boton.addEventListener("click", mostrarMensaje)