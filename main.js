const arrayDeMenu = "./json/data.json"

function cargarYMostrarProductos(tipo) {
    fetch('./json/data.json')
        .then(response => response.json())
        .then(data => {
            mostrarProductosPorTipo(data, tipo);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}


function mostrarProductosPorTipo(arrayProductos, tipo) {
    let contenedor = document.getElementById(`productos__${tipo}`);
    contenedor.innerHTML = `<h4>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h4>`;

    arrayProductos[tipo].forEach((producto) => {
        let card = document.createElement("div");
        card.classList.add("divProducto")
        
        card.innerHTML = `
            <ul class="divLista">
                <li>${producto.nombre}<span>$${producto.precio}</span></li>
            </ul>
        `;

        contenedor.appendChild(card);

        if (producto.descripcion) {
            let descripcionBoton = document.createElement("button")
            descripcionBoton.textContent = "+";
            descripcionBoton.classList.add("descripcionBoton")

            let descripcionTexto = document.createElement("p")
            descripcionTexto.textContent = producto.descripcion
            descripcionTexto.style.display = "none"
            descripcionTexto.classList.add("descripcionTexto")

            card.appendChild(descripcionBoton)
            card.appendChild(descripcionTexto)

            descripcionBoton.addEventListener("click", function() {

                if(descripcionTexto.style.display == "none") {
                    descripcionTexto.style.display = "block"
                    descripcionBoton.textContent = "-"
                }
                else {
                    descripcionTexto.style.display = "none"
                    descripcionBoton.textContent = "+"
                }
            })
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarYMostrarProductos("cafe");
    cargarYMostrarProductos("bebida");
    cargarYMostrarProductos("bakery");
    cargarYMostrarProductos("cocina");
});
