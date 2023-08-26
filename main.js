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

        if (producto.descripcion) {
            let card = document.createElement("div");
            card.classList.add("divProducto");
          
            let nombreProducto = document.createElement("span");
            nombreProducto.textContent = producto.nombre;
            nombreProducto.classList.add("nombreProducto");
          
            let precioProducto = document.createElement("span");
            precioProducto.textContent = `$${producto.precio}`;
            precioProducto.classList.add("precioProducto");
          
            let descripcionTexto = document.createElement("p");
            descripcionTexto.textContent = producto.descripcion;
            descripcionTexto.style.display = "none";
            descripcionTexto.classList.add("descripcionTexto");
          
            nombreProducto.addEventListener("click", function() {
              if (descripcionTexto.style.display == "none") {
                descripcionTexto.style.display = "block";
              } else {
                descripcionTexto.style.display = "none";
              }
            });

            if (producto.descripcion) {
                nombreProducto.classList.add("subrayado");
              }
          
            card.appendChild(nombreProducto);
            card.appendChild(precioProducto);
            card.appendChild(descripcionTexto);
          
            contenedor.appendChild(card);
          } else {
            let card = document.createElement("div");
            card.classList.add("divProducto");
          
            let nombreProducto = document.createElement("span");
            nombreProducto.textContent = producto.nombre;
            nombreProducto.classList.add("nombreProducto");
          
            let precioProducto = document.createElement("span");
            precioProducto.textContent = `$${producto.precio}`;
            precioProducto.classList.add("precioProducto");
          
            card.appendChild(nombreProducto);
            card.appendChild(precioProducto);
          
            contenedor.appendChild(card);
          }
          
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarYMostrarProductos("cafe");
    cargarYMostrarProductos("bebida");
    cargarYMostrarProductos("bakery");
    cargarYMostrarProductos("cocina");
});
