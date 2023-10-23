document.addEventListener("DOMContentLoaded", function () {
    const carruselInner = document.querySelector("#carousel-inner");
    const pContent = document.querySelectorAll("p");
  
    function obtenerTresLineasAlAzar(parragraph) {
      const lineas = parragraph.textContent.split(','); // Ajusta el separador según tu estructura de párrafos
      const lineasAleatorias = [];
      for (let i = 0; i < 3; i++) {
        const linea = lineas[Math.floor(Math.random() * lineas.length)];
        lineasAleatorias.push(linea);
      }
      return lineasAleatorias;
    }
  
    function actualizarCarrusel() {
      const lineasAlAzar = obtenerTresLineasAlAzar(pContent[0]); // Usa el primer párrafo
      carruselInner.innerHTML = '';
  
      // Se crean de forma dinámica los párrafos para el carrusel
      lineasAlAzar.forEach((linea, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) {
          item.classList.add('active');
        }
        item.innerHTML = `<p>${linea}</p>`;
        carruselInner.appendChild(item);
      });
    }
  
    setInterval(actualizarCarrusel, 2000);
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos una referencia al enlace "opciones"
    const opcionesLink = document.getElementById("opciones");

    //  una referencia al elemento con id "op"
    const opElement = document.getElementById("op");

    //  manejador de eventos al enlace "opciones"
    opcionesLink.addEventListener("click", function (event) {
      // Cambia la visibilidad del elemento "op"
      opElement.classList.toggle("d-none");
    });
  });