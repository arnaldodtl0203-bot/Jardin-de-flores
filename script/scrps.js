const listaFlores = [
  {
      nombre: "Rosa Roja",
      descripcion: "Es el símbolo universal del amor apasionado. Desde la época victoriana, regalar una rosa roja ha sido la declaración más directa y sincera de sentimientos intensos y devoción hacia otra persona.",
      categoria: "Rosa",
      significado: "Amor romántico, pasión y respeto.",
      foto: "img-video/rosa.jpg"
  },
  {
      nombre: "Girasol",
      descripcion: "Debido a su tendencia a seguir al sol (heliotropismo), esta flor representa la fidelidad inquebrantable, la energía positiva y el orgullo constante hacia alguien.",
      categoria: "Helianthus",
      significado: "Adoración, lealtad y longevidad.",
      foto: "img-video/girasol.jpg"
  },
  {
      nombre: "Lirio Blanco.",
      descripcion: "Asociado frecuentemente con la Virgen María en la iconografía cristiana, representa la virtud, la rectitud y la belleza limpia de malicia. También se usa para desear paz en momentos solemnes.",
      categoria: "Lilium",
      significado: "Pureza, inocencia y majestad.",
      foto: "img-video/lirioblanco.jpg"
  },
  {
      nombre: "Lavanda",
      descripcion: "Aunque su aroma evoca calma, paz y pureza de espíritu, en algunos contextos antiguos de la floriografía también podía advertir sobre el peligro o la necesidad de ser cauteloso.",
      categoria: "Lavandula",
      significado: "Devoción, serenidad y desconfianza (o precaución).",
      foto: "img-video/lavanda.jpg"
  },
  {
      nombre: "Clavel Rojo",
      descripcion: "Representa un afecto profundo y el capricho del corazón. Es una flor intensa que expresa que alguien ocupa por completo los pensamientos de quien la regala.",
      categoria: "Dianthus",
      significado: "Amor vivo, admiración y fascinación.",
      foto: "img-video/clavelrojo.jpeg"
  },
  {
      nombre: "Clavel Amarillo",
      descripcion: "A diferencia de su pariente rojo, el clavel amarillo se utilizaba tradicionalmente para comunicar un sutil rechazo, desprecio o la decepción ante un amor no correspondido.",
      categoria: "Dianthus",
      significado: "Desdén, rechazo y desilusión.",
      foto: "img-video/clavelamarillo.jpg"
  },
  {
      nombre: "Hortensia",
      descripcion: "Tiene un doble significado. Por un lado, expresa un agradecimiento sincero por la empatía ajena; por el otro (debido a su abundancia de flores pero pocas semillas), puede simbolizar la vanidad o la falta de corazón.",
      categoria: "Hydrangea",
      significado: "Gratitud por ser comprendido, frialdad o egocentrismo.",
      foto: "img-video/hortensia.jpg"
  },
  {
      nombre: "Crisantemo Blanco",
      descripcion: "En la cultura occidental se asocia fuertemente con el luto y el recuerdo honesto de los que ya no están, mientras que en la floriografía general se utiliza para declarar que un sentimiento es completamente genuino.",
      categoria: "Chrysanthemum",
      significado: "Verdad, honestidad y dolor.",
      foto: "img-video/crisantemoblanco.jpeg"
  },
  {
      nombre: "Tulipán Rojo",
      descripcion: "En el lenguaje de las flores, regalar un tulipán rojo equivale a una confesión abierta de amor. Dice textualmente: 'Te aseguro mi afecto eterno'.",
      categoria: "Tulipa",
      significado: "Declaración de amor perfecto.",
      foto: "img-video/tulipanrojo.jpg"
  },
  {
      nombre: "Orquídea",
      descripcion: "Es el símbolo del lujo y el encanto sofisticado. Regalar una orquídea implica una alta estima hacia la elegancia, la madurez y la atracción física e intelectual de la otra persona.",
      categoria: "Orchis / Familia Orchidaceae",
      significado: "Belleza exótica, refinamiento y seducción.",
      foto: "img-video/orquidea.jpeg"
  },
  {
      nombre: "Peonía",
      descripcion: "Sus grandes pétalos suelen cerrarse por la noche, lo que inicialmente se asoció con el rubor o la timidez. Hoy en día es también un fuerte amuleto de buena fortuna, riqueza y matrimonios felices.",
      categoria: "Paeonia",
      significado: "Timidez, vergüenza o romance feliz y prosperidad.",
      foto: "img-video/peonia.jpg"
  },
  {
      nombre: "Margarita",
      descripcion: "Es la flor del optimismo y los nuevos comienzos. Tradicionalmente unida al juego de 'me quiere, no me quiere', representa un amor simple, honesto y libre de pretensiones.",
      categoria: "Bellis",
      significado: "Inocencia, pureza y amor leal.",
      foto: "img-video/flor-de-margarita.jpg"
  },  
  {
      nombre: "Violeta",
      descripcion: "Al ser una flor pequeña que suele crecer cerca del suelo y oculta entre sus hojas, simboliza la belleza que no busca llamar la atención, el recato y la constancia en el afecto.",
      categoria: "Viola",
      significado: "Modestia, humildad y fidelidad.",
      foto: "img-video/violeta.jpg"
  },
  {
      nombre: "Narciso",
      descripcion: "Al ser de las primeras flores en brotar en primavera, simboliza la superación de los momentos difíciles. Sin embargo, por el mito griego de Narciso, también puede advertir contra la vanidad excesiva.",
      categoria: "Narcissus",
      significado: "Renacimiento, nuevos comienzos y egoísmo",
      foto: "img-video/narciso.jpg"
  },
  {
      nombre: "Nomeolvides",
      descripcion: "Su propio nombre lo dice todo. Se entregaba tradicionalmente entre los amantes antes de una separación prolongada para asegurar que el recuerdo de su conexión jamás se desvanecería con el tiempo o la distancia.",
      categoria: "Myosotis",
      significado: "Amor eterno, memoria y fidelidad eterna.",
      foto: "img-video/nomeolvides.jpg"
  },
  {
      nombre: "Amapola",
      descripcion: "Debido a los efectos sedantes de algunas de sus variantes, la amapola se asocia con el descanso eterno, la paz y el consuelo ante una pérdida. También representa la imaginación y los sueños profundos.",
      categoria: "Papaver",
      significado: "Consuelo, sueño y recuerdo.",
      foto: "img-video/amapola.jpg"
  }
];

// Asignamos dinámicamente un ID único a cada flor basado en su índice para poder usar .find()
listaFlores.forEach((flor, index) => {
    flor.id = index + 1;
});

// Función para renderizar el DOM (acepta una lista filtrada como parámetro)
function mostrarDirectorio(floresAMostrar = listaFlores) {
    const contenedor = document.getElementById("contenedor-flores");
    if (!contenedor) return; 

    contenedor.innerHTML = "";

    if (floresAMostrar.length === 0) {
        contenedor.innerHTML = `<p style="text-align:center; width:100%; font-size:1.2rem;">No se encontraron flores en esta categoría.</p>`;
        return;
    }

    floresAMostrar.forEach(Flor => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-flores");
        tarjeta.setAttribute("data-id", Flor.id);
        
        tarjeta.innerHTML = `
            <img src="${Flor.foto}" alt="${Flor.nombre}">
            <h3>${Flor.nombre}</h3>
            <p class="categoria">${Flor.categoria}</p>
            <p class="descripcion">${Flor.descripcion}</p> 
        `;
        
        tarjeta.addEventListener("click", () => {
            abrirModal(Flor.id);
        });

        contenedor.appendChild(tarjeta);
    });
}

// FUNCIÓN PARA BUSCAR LA FLOR CON .find() Y MOSTRAR LA MODAL
function abrirModal(idFlor) {
    const florEncontrada = listaFlores.find(f => f.id === parseInt(idFlor));

    if (florEncontrada) {
        document.getElementById("modal-img").src = florEncontrada.foto;
        document.getElementById("modal-img").alt = florEncontrada.nombre;
        document.getElementById("modal-titulo").innerText = florEncontrada.nombre;
        document.getElementById("modal-categoria").innerText = florEncontrada.categoria;
        document.getElementById("modal-descripcion").innerText = florEncontrada.descripcion;
        document.getElementById("modal-significado").innerText = florEncontrada.significado;
         document.getElementById("modal-flor").classList.add("show");
    }
}

// FUNCIÓN PARA CONFIGURAR LOS FILTROS DE NAVEGACIÓN
function inicializarFiltros() {
    const enlacesFiltro = document.querySelectorAll(".nav-filtro");
    
    enlacesFiltro.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que la página intente recargarse o saltar
            
            // Cambiar la clase activa visualmente
            enlacesFiltro.forEach(link => link.classList.remove("active"));
            enlace.classList.add("active");

            const categoriaSeleccionada = enlace.getAttribute("data-categoria");

            // Filtrado del arreglo original
            if (categoriaSeleccionada === "todas") {
                mostrarDirectorio(listaFlores);
            } else if (categoriaSeleccionada === "otras") {

                const otras = listaFlores.filter(f => 
                    f.categoria !== "Rosa" && 
                    f.categoria !== "Helianthus" && 
                    f.categoria !== "Orchis / Familia Orchidaceae"
                );
                mostrarDirectorio(otras);
            } else {
                // Filtrado por el string exacto de la categoría
                const filtradas = listaFlores.filter(f => f.categoria === categoriaSeleccionada);
                mostrarDirectorio(filtradas);
            }
        });
    });
}

// Inicialización de eventos al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    mostrarDirectorio();
    inicializarFiltros();

    // Evento para cerrar la modal usando la 'X'
    const botonCerrar = document.querySelector(".modal-cerrar");
    const modalOverlay = document.getElementById("modal-flor");

    if (botonCerrar && modalOverlay) {
        botonCerrar.addEventListener("click", () => {
            modalOverlay.classList.remove("show");
        });

        // Cerrar también si el usuario hace click afuera del recuadro blanco
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove("show");
            }
        });
    }
});