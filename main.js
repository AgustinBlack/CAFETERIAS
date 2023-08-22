const arrayDeMenu = "./json/data.json"

function cargarYMostrarProductos(tipo) {
    fetch('./json/data.json')
        .then(response => response.json())
        .then(data => {
            // mostrarCafes(data);
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
        card.innerHTML = `
            <ul class="divLista">
                <li>${producto.nombre}<span>$${producto.precio}</span></li>
            </ul>
        `;

        contenedor.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarYMostrarProductos("cafe");
    cargarYMostrarProductos("bebida");
    cargarYMostrarProductos("bakery");
    cargarYMostrarProductos("cocina");
});


// function mostrarCafes(arrayProductos) {
//     let contenedor = document.getElementById("productosCafe");
//     contenedor.innerHTML = "<h4>Café</h4>";

//     arrayProductos.forEach((producto) => {
//         let card = document.createElement("div");
//         card.innerHTML = `
//             <ul class="divLista">
//                 <li>${producto.nombre}<span>$${producto.precio}</span></li>
//             </ul>
//         `;

//         contenedor.appendChild(card);
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     cargarYMostrarCafes();
// });
