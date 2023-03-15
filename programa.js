// Crear el eventListenar
let btnAlmacenar = document.getElementById('btnAlmacenar');

btnAlmacenar.addEventListener('click', () => {
    // Almacenar un dato en sessionStorage
    sessionStorage.setItem('nombre', 'Segundo')
    localStorage.setItem('nombre', 'Danna')
    localStorage.setItem('apellido', 'Diaz')
    construirFilas();

});

let btnBorrar = document.getElementById('btnBorrar');

btnBorrar.addEventListener('click', function () {
    // Borrar un dato en sessionStorage
    sessionStorage.removeItem('nombre')
    localStorage.removeItem('nombre')
    localStorage.removeItem('apellido')

});
// Recorrer el sesion storage y el session Storage 
// mostrano las variables como una fla en la tabla del DOM
function construirFilas() {
    let fuentes = [localStorage, sessionStorage]
    for (let k = 0; k < fuentes.length; k++) {
        let miFuente = fuentes[k]
        for (let i = 0; i < miFuente.length; i++) {
            let dtBody = document.getElementById('dtBody');
            let fila = document.createElement("tr")

            let celda = document.createElement("td")
            // Crear un nodo de texto
            let text = document.createTextNode(miFuente.key(i))
            celda.appendChild(text)
            fila.appendChild(celda);

            celda = document.createElement("td")
            let valor = miFuente.getItem(miFuente.key(i))
            text = document.createTextNode(valor)
            celda.appendChild(text)
            fila.appendChild(celda);
            dtBody.appendChild(fila)

        }

    }




}






