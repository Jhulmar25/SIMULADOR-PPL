/* =========================================================
   SIMULADOR DGAC - PILOTO PRIVADO
   app.js
========================================================= */

"use strict";


/* =========================================================
   1. MATERIAS
========================================================= */

const materias = {

  aerodinamica: {
    nombre: "Aerodinámica",
    preguntas: preguntasAerodinamica
  },

  comunicacion: {
    nombre: "Comunicación",
    preguntas: preguntasComunicacion
  },

  instrumentos: {
    nombre: "Instrumentos",
    preguntas: preguntasInstrumentos
  },

  meteorologia: {
    nombre: "Meteorología",
    preguntas: preguntasMeteorologia
  },

  navegacion: {
    nombre: "Navegación",
    preguntas: preguntasNavegacion
  },

  perfomance: {
    nombre: "Performance",
    preguntas: preguntasPerfomance
  },

  procedimientos: {
    nombre: "Procedimientos Operacionales",
    preguntas: preguntasProcedimientosOperacionales
  },

  reglamentacion: {
    nombre: "Reglamentación",
    preguntas: preguntasReglamentacion
  },

  servicioMeteorologico: {
    nombre: "Servicio Meteorológico",
    preguntas: preguntasServicioMetereologico
  },

  sistemaAeronave: {
    nombre: "Sistema de Aeronave",
    preguntas: preguntasSistemaAeronave
  },

  vueloRuta: {
    nombre: "Vuelo en Ruta",
    preguntas: preguntasVueloRuta
  }

};


/* =========================================================
   2. VARIABLES
========================================================= */

let materiaActual = null;

let cantidadSeleccionada = null;

let preguntasExamen = [];

let indiceActual = 0;

let respuestasUsuario = [];

let examenFinalizado = false;

let esSimuladorGeneral = false;


/* =========================================================
   3. ZOOM
========================================================= */

let nivelZoom = 1;

const ZOOM_MINIMO = 1;
const ZOOM_MAXIMO = 7;
const PASO_ZOOM = 0.5;


/* =========================================================
   4. ELEMENTOS
========================================================= */

const pantallaInicio =
  document.getElementById("pantallaInicio");

const pantallaConfiguracion =
  document.getElementById("pantallaConfiguracion");

const pantallaExamen =
  document.getElementById("pantallaExamen");

const pantallaResultados =
  document.getElementById("pantallaResultados");


const btnInicio =
  document.getElementById("btnInicio");

const btnSimuladorGeneral =
  document.getElementById("btnSimuladorGeneral");


const nombreMateriaSeleccionada =
  document.getElementById("nombreMateriaSeleccionada");

const totalPreguntasMateria =
  document.getElementById("totalPreguntasMateria");

const btnVolverMaterias =
  document.getElementById("btnVolverMaterias");

const btnComenzarExamen =
  document.getElementById("btnComenzarExamen");


const materiaExamen =
  document.getElementById("materiaExamen");

const preguntaActual =
  document.getElementById("preguntaActual");

const totalPreguntasExamen =
  document.getElementById("totalPreguntasExamen");

const progresoExamen =
  document.getElementById("progresoExamen");

const numeroPregunta =
  document.getElementById("numeroPregunta");

const textoPregunta =
  document.getElementById("textoPregunta");

const contenedorOpciones =
  document.getElementById("contenedorOpciones");


const contenedorFigura =
  document.getElementById("contenedorFigura");

const numeroFigura =
  document.getElementById("numeroFigura");

const imagenPregunta =
  document.getElementById("imagenPregunta");

const btnAbrirFigura =
  document.getElementById("btnAbrirFigura");


const retroalimentacion =
  document.getElementById("retroalimentacion");

const iconoResultado =
  document.getElementById("iconoResultado");

const tituloResultado =
  document.getElementById("tituloResultado");

const textoResultado =
  document.getElementById("textoResultado");


const btnAnterior =
  document.getElementById("btnAnterior");

const btnSiguiente =
  document.getElementById("btnSiguiente");

const btnTerminar =
  document.getElementById("btnTerminar");


const resultadoMateria =
  document.getElementById("resultadoMateria");

const porcentajeResultado =
  document.getElementById("porcentajeResultado");

const cantidadCorrectas =
  document.getElementById("cantidadCorrectas");

const cantidadIncorrectas =
  document.getElementById("cantidadIncorrectas");

const cantidadTotal =
  document.getElementById("cantidadTotal");

const resultadoIconoFinal =
  document.getElementById("resultadoIconoFinal");

const btnRepetirExamen =
  document.getElementById("btnRepetirExamen");

const btnOtraMateria =
  document.getElementById("btnOtraMateria");


const modalTerminar =
  document.getElementById("modalTerminar");

const btnCancelarTerminar =
  document.getElementById("btnCancelarTerminar");

const btnConfirmarTerminar =
  document.getElementById("btnConfirmarTerminar");


const modalImagen =
  document.getElementById("modalImagen");

const modalTitulo =
  document.getElementById("modalTitulo");

const imagenAmpliada =
  document.getElementById("imagenAmpliada");

const btnCerrarImagen =
  document.getElementById("btnCerrarImagen");

const btnZoomMas =
  document.getElementById("btnZoomMas");

const btnZoomMenos =
  document.getElementById("btnZoomMenos");

const btnRestablecerZoom =
  document.getElementById("btnRestablecerZoom");


/* =========================================================
   5. PANTALLAS
========================================================= */

function mostrarPantalla(pantalla) {

  document
    .querySelectorAll(".pantalla")
    .forEach(elemento => {
      elemento.classList.remove("activa");
    });

  pantalla.classList.add("activa");


  if (pantalla === pantallaInicio) {

    btnInicio.classList.add("oculto");

  } else {

    btnInicio.classList.remove("oculto");

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   6. SELECCIÓN DE MATERIA
========================================================= */

document
  .querySelectorAll(".tarjeta-materia[data-materia]")
  .forEach(boton => {

    boton.addEventListener("click", () => {

      const codigo =
        boton.dataset.materia;


      if (!materias[codigo]) {

        console.error(
          "Materia no encontrada:",
          codigo
        );

        return;
      }


      esSimuladorGeneral = false;

      materiaActual = codigo;

      cantidadSeleccionada = null;


      document
        .querySelectorAll(".btn-cantidad")
        .forEach(btn => {

          btn.classList.remove(
            "seleccionada"
          );

        });


      btnComenzarExamen.disabled = true;


      nombreMateriaSeleccionada.textContent =
        materias[codigo].nombre;


      totalPreguntasMateria.textContent =
        `${materias[codigo].preguntas.length} preguntas disponibles`;


      mostrarPantalla(
        pantallaConfiguracion
      );

    });

  });


/* =========================================================
   7. CANTIDAD DE PREGUNTAS POR MATERIA
========================================================= */

document
  .querySelectorAll(".btn-cantidad")
  .forEach(boton => {

    boton.addEventListener("click", () => {

      document
        .querySelectorAll(".btn-cantidad")
        .forEach(btn => {

          btn.classList.remove(
            "seleccionada"
          );

        });


      boton.classList.add(
        "seleccionada"
      );


      const valor =
        boton.dataset.cantidad;


      const disponibles =
        materias[materiaActual]
          .preguntas.length;


      if (valor === "todas") {

        cantidadSeleccionada =
          disponibles;

      } else {

        cantidadSeleccionada =
          Math.min(
            Number(valor),
            disponibles
          );

      }


      btnComenzarExamen.disabled =
        false;

    });

  });


/* =========================================================
   8. MEZCLAR ARRAY
========================================================= */

function mezclarArray(array) {

  const copia = [...array];


  for (
    let i = copia.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );


    [
      copia[i],
      copia[j]
    ] = [
      copia[j],
      copia[i]
    ];

  }


  return copia;

}


/* =========================================================
   9. TOMAR PREGUNTAS ALEATORIAS
========================================================= */

function tomarPreguntas(
  banco,
  cantidad
) {

  return mezclarArray(banco)
    .slice(0, cantidad);

}


/* =========================================================
   10. INICIAR EXAMEN POR MATERIA
========================================================= */

btnComenzarExamen.addEventListener(
  "click",
  iniciarExamenMateria
);


function iniciarExamenMateria() {

  if (!materiaActual) {
    return;
  }


  esSimuladorGeneral = false;


  const banco =
    materias[materiaActual]
      .preguntas;


  const cantidad =
    Math.min(
      cantidadSeleccionada ||
      banco.length,
      banco.length
    );


  preguntasExamen =
    tomarPreguntas(
      banco,
      cantidad
    );


  prepararExamen(
    materias[materiaActual].nombre
  );

}


/* =========================================================
   11. SIMULADOR DGAC
   SIEMPRE EXACTAMENTE 40 PREGUNTAS
========================================================= */

btnSimuladorGeneral.addEventListener(
  "click",
  iniciarSimuladorGeneral
);


/*
   DISTRIBUCIÓN:

   Reglamentación             6 - 7
   Aerodinámica               4 - 5
   Meteorología + Servicio    5 - 6
   Navegación + Vuelo Ruta    5 - 6
   Procedimientos             4 - 5
   Sistema + Instrumentos     4 - 5
   Performance                3 - 4
   Comunicación               3

   TOTAL SIEMPRE = 40
*/


function generarDistribucion40() {

  let distribucion;
  let total;


  do {

    distribucion = {

      reglamentacion:
        aleatorioEntre(6, 7),

      aerodinamica:
        aleatorioEntre(4, 5),

      meteorologia:
        aleatorioEntre(5, 6),

      navegacion:
        aleatorioEntre(5, 6),

      procedimientos:
        aleatorioEntre(4, 5),

      sistemas:
        aleatorioEntre(4, 5),

      perfomance:
        aleatorioEntre(3, 4),

      comunicacion:
        3

    };


    total =
      Object.values(distribucion)
        .reduce(
          (suma, numero) =>
            suma + numero,
          0
        );


  } while (total !== 40);


  return distribucion;

}


function aleatorioEntre(
  minimo,
  maximo
) {

  return Math.floor(
    Math.random() *
    (maximo - minimo + 1)
  ) + minimo;

}


/* =========================================================
   12. GENERAR SIMULADOR GENERAL
========================================================= */

function iniciarSimuladorGeneral() {

  esSimuladorGeneral = true;

  materiaActual = null;

  cantidadSeleccionada = 40;


  const distribucion =
    generarDistribucion40();


  /*
     METEOROLOGÍA

     Se combinan los dos bancos.
  */

  const bancoMeteorologia = [

    ...preguntasMeteorologia,

    ...preguntasServicioMetereologico

  ];


  /*
     NAVEGACIÓN

     Se combinan Navegación y Vuelo en Ruta.
  */

  const bancoNavegacion = [

    ...preguntasNavegacion,

    ...preguntasVueloRuta

  ];


  /*
     SISTEMAS

     Se combinan Sistema de Aeronave
     e Instrumentos.
  */

  const bancoSistemas = [

    ...preguntasSistemaAeronave,

    ...preguntasInstrumentos

  ];


  preguntasExamen = [

    ...tomarPreguntas(
      preguntasReglamentacion,
      distribucion.reglamentacion
    ),

    ...tomarPreguntas(
      preguntasAerodinamica,
      distribucion.aerodinamica
    ),

    ...tomarPreguntas(
      bancoMeteorologia,
      distribucion.meteorologia
    ),

    ...tomarPreguntas(
      bancoNavegacion,
      distribucion.navegacion
    ),

    ...tomarPreguntas(
      preguntasProcedimientosOperacionales,
      distribucion.procedimientos
    ),

    ...tomarPreguntas(
      bancoSistemas,
      distribucion.sistemas
    ),

    ...tomarPreguntas(
      preguntasPerfomance,
      distribucion.perfomance
    ),

    ...tomarPreguntas(
      preguntasComunicacion,
      distribucion.comunicacion
    )

  ];


  /*
     MEZCLAR TODAS LAS MATERIAS.

     Así no salen primero todas las
     de Reglamentación, después todas
     las de Aerodinámica, etc.
  */

  preguntasExamen =
    mezclarArray(
      preguntasExamen
    );


  /*
     COMPROBACIÓN DE SEGURIDAD
  */

  if (
    preguntasExamen.length !== 40
  ) {

    console.error(
      "ERROR: El simulador debe tener 40 preguntas."
    );

    console.error(
      "Cantidad obtenida:",
      preguntasExamen.length
    );

    return;

  }


  console.log(
    "Distribución Simulador DGAC:",
    distribucion
  );


  console.log(
    "TOTAL:",
    preguntasExamen.length
  );


  prepararExamen(
    "Simulador DGAC"
  );

}


/* =========================================================
   13. PREPARAR EXAMEN
========================================================= */

function prepararExamen(
  nombre
) {

  indiceActual = 0;

  examenFinalizado = false;


  respuestasUsuario =
    new Array(
      preguntasExamen.length
    ).fill(null);


  materiaExamen.textContent =
    nombre;


  totalPreguntasExamen.textContent =
    preguntasExamen.length;


  mostrarPantalla(
    pantallaExamen
  );


  mostrarPregunta();

}


/* =========================================================
   14. MOSTRAR PREGUNTA
========================================================= */

function mostrarPregunta() {

  if (
    preguntasExamen.length === 0
  ) {
    return;
  }


  const pregunta =
    preguntasExamen[indiceActual];


  preguntaActual.textContent =
    indiceActual + 1;


  numeroPregunta.textContent =
    pregunta.numero ??
    indiceActual + 1;


  textoPregunta.textContent =
    limpiarNumeroPregunta(
      pregunta.pregunta
    );


  actualizarProgreso();

  mostrarFigura(pregunta);

  mostrarOpciones(pregunta);

  actualizarNavegacion();

}


/* =========================================================
   15. LIMPIAR NÚMERO DEL TEXTO
========================================================= */

function limpiarNumeroPregunta(
  texto
) {

  if (!texto) {
    return "";
  }


  return String(texto)

    .replace(
      /^\s*\d+\s*[\.\-:]+\s*/,
      ""
    )

    .trim();

}


/* =========================================================
   16. FIGURAS
========================================================= */

function mostrarFigura(
  pregunta
) {

  const figuras =
    normalizarFiguras(
      pregunta.figura
    );


  if (
    figuras.length === 0
  ) {

    contenedorFigura.classList.add(
      "oculto"
    );

    imagenPregunta.src = "";

    return;

  }


  const figura =
    figuras[0];


  numeroFigura.textContent =
    figura;


  /*
     TU ESTRUCTURA:

     entorno web/
        imagenes/
           figure 1.png
           figure 68.png

     Por eso la ruta correcta es:
  */

  const ruta =
    `imagenes/figure ${figura}.png`;


  imagenPregunta.style.display =
    "block";


  imagenPregunta.src =
    ruta;


  imagenPregunta.alt =
    `Figura ${figura}`;


  imagenPregunta.dataset.figura =
    figura;


  imagenPregunta.onerror =
    function () {

      console.error(
        "Imagen no encontrada:",
        ruta
      );

      this.style.display =
        "none";

    };


  imagenPregunta.onload =
    function () {

      this.style.display =
        "block";

    };


  contenedorFigura.classList.remove(
    "oculto"
  );

}


/* =========================================================
   17. NORMALIZAR FIGURAS
========================================================= */

function normalizarFiguras(
  figura
) {

  if (
    figura === null ||
    figura === undefined ||
    figura === ""
  ) {

    return [];

  }


  if (
    Array.isArray(figura)
  ) {

    return figura.filter(
      valor =>
        valor !== null &&
        valor !== undefined &&
        valor !== ""
    );

  }


  return [figura];

}


/* =========================================================
   18. OPCIONES
========================================================= */

function mostrarOpciones(
  pregunta
) {

  contenedorOpciones.innerHTML =
    "";


  retroalimentacion.classList.add(
    "oculto"
  );


  retroalimentacion.classList.remove(
    "exito",
    "error"
  );


  const opciones =
    normalizarOpciones(
      pregunta.opciones
    );


  const respuestaGuardada =
    respuestasUsuario[
      indiceActual
    ];


  opciones.forEach(
    (opcion, indice) => {

      const boton =
        document.createElement(
          "button"
        );


      boton.type =
        "button";


      boton.className =
        "opcion-respuesta";


      const letra =
        String.fromCharCode(
          65 + indice
        );


      boton.innerHTML = `

        <span class="letra-opcion">
          ${letra}
        </span>

        <span class="texto-opcion">
          ${escaparHTML(opcion)}
        </span>

      `;


      boton.addEventListener(
        "click",
        () => {

          seleccionarRespuesta(
            indice
          );

        }
      );


      contenedorOpciones.appendChild(
        boton
      );

    }
  );


  /*
     Si regresamos con ANTERIOR,
     restauramos la respuesta.
  */

  if (
    respuestaGuardada !== null
  ) {

    restaurarRespuesta(
      pregunta,
      respuestaGuardada
    );

  }

}


/* =========================================================
   19. NORMALIZAR OPCIONES
========================================================= */

function normalizarOpciones(
  opciones
) {

  if (!opciones) {

    return [];

  }


  if (
    Array.isArray(opciones)
  ) {

    return opciones.map(
      opcion =>
        String(opcion)
    );

  }


  if (
    typeof opciones === "object"
  ) {

    return Object.values(
      opciones
    ).map(
      opcion =>
        String(opcion)
    );

  }


  return [];

}


/* =========================================================
   20. RESPONDER
========================================================= */

function seleccionarRespuesta(
  indiceSeleccionado
) {

  /*
     Si ya respondió esta pregunta,
     no puede cambiarla.
  */

  if (
    respuestasUsuario[
      indiceActual
    ] !== null
  ) {

    return;

  }


  respuestasUsuario[
    indiceActual
  ] =
    indiceSeleccionado;


  const pregunta =
    preguntasExamen[
      indiceActual
    ];


  restaurarRespuesta(
    pregunta,
    indiceSeleccionado
  );

}


/* =========================================================
   21. RESPUESTA CORRECTA
========================================================= */

function obtenerIndiceCorrecto(
  pregunta
) {

  /*
     FORMATO PRINCIPAL:

     respuestaCorrecta: 0 = A
     respuestaCorrecta: 1 = B
     respuestaCorrecta: 2 = C
  */

  if (
    typeof pregunta.respuestaCorrecta ===
    "number"
  ) {

    return pregunta.respuestaCorrecta;

  }


  /*
     COMPATIBILIDAD:

     respuestaCorrecta: "A"
     respuestaCorrecta: "B"
     respuestaCorrecta: "C"

     o:

     respuesta: "A"
  */

  const respuesta =
    pregunta.respuestaCorrecta ??
    pregunta.respuesta;


  if (
    typeof respuesta === "string"
  ) {

    const valor =
      respuesta
        .trim()
        .toUpperCase();


    if (
      /^[A-E]$/.test(valor)
    ) {

      return (
        valor.charCodeAt(0) -
        65
      );

    }


    const opciones =
      normalizarOpciones(
        pregunta.opciones
      );


    const indice =
      opciones.findIndex(
        opcion =>
          opcion
            .trim()
            .toUpperCase() ===
          valor
      );


    if (
      indice >= 0
    ) {

      return indice;

    }

  }


  return -1;

}


/* =========================================================
   22. VALIDAR RESPUESTA
========================================================= */

function restaurarRespuesta(
  pregunta,
  seleccionada
) {

  const botones =
    contenedorOpciones
      .querySelectorAll(
        ".opcion-respuesta"
      );


  const correcta =
    obtenerIndiceCorrecto(
      pregunta
    );


  botones.forEach(
    (boton, indice) => {

      boton.disabled =
        true;


      boton.classList.remove(
        "seleccionada",
        "correcta",
        "incorrecta"
      );


      /*
         Siempre mostramos la correcta.
      */

      if (
        indice === correcta
      ) {

        boton.classList.add(
          "correcta"
        );

      }


      /*
         Marcamos la elegida.
      */

      if (
        indice === seleccionada
      ) {

        boton.classList.add(
          "seleccionada"
        );


        if (
          seleccionada !== correcta
        ) {

          boton.classList.add(
            "incorrecta"
          );

        }

      }

    }
  );


  mostrarRetroalimentacion(
    pregunta,
    seleccionada,
    correcta
  );

}


/* =========================================================
   23. CORRECCIÓN INMEDIATA
========================================================= */

function mostrarRetroalimentacion(
  pregunta,
  seleccionada,
  correcta
) {

  const opciones =
    normalizarOpciones(
      pregunta.opciones
    );


  retroalimentacion.classList.remove(
    "oculto"
  );


  if (
    seleccionada === correcta
  ) {

    retroalimentacion.classList.remove(
      "error"
    );


    retroalimentacion.classList.add(
      "exito"
    );


    iconoResultado.textContent =
      "✓";


    tituloResultado.textContent =
      "Respuesta correcta";


    textoResultado.textContent =
      "Has seleccionado la respuesta correcta.";

  } else {

    retroalimentacion.classList.remove(
      "exito"
    );


    retroalimentacion.classList.add(
      "error"
    );


    iconoResultado.textContent =
      "✕";


    tituloResultado.textContent =
      "Respuesta incorrecta";


    if (
      correcta >= 0
    ) {

      const letraCorrecta =
        String.fromCharCode(
          65 + correcta
        );


      const respuestaCorrecta =
        opciones[correcta] ??
        "";


      textoResultado.textContent =
        `La respuesta correcta es ${letraCorrecta}: ${respuestaCorrecta}`;

    } else {

      textoResultado.textContent =
        "No se pudo determinar la respuesta correcta.";

    }

  }

}


/* =========================================================
   24. PROGRESO
========================================================= */

function actualizarProgreso() {

  const porcentaje =
    (
      (indiceActual + 1) /
      preguntasExamen.length
    ) * 100;


  progresoExamen.style.width =
    `${porcentaje}%`;

}


/* =========================================================
   25. NAVEGACIÓN
========================================================= */

function actualizarNavegacion() {

  btnAnterior.disabled =
    indiceActual === 0;


  if (
    indiceActual ===
    preguntasExamen.length - 1
  ) {

    btnSiguiente.textContent =
      "Ver resultado →";

  } else {

    btnSiguiente.textContent =
      "Siguiente →";

  }

}


/* =========================================================
   26. ANTERIOR
========================================================= */

btnAnterior.addEventListener(
  "click",
  () => {

    if (
      indiceActual > 0
    ) {

      indiceActual--;

      mostrarPregunta();

    }

  }
);


/* =========================================================
   27. SIGUIENTE
========================================================= */

btnSiguiente.addEventListener(
  "click",
  () => {

    /*
       Obligatorio responder antes
       de continuar.
    */

    if (
      respuestasUsuario[
        indiceActual
      ] === null
    ) {

      mostrarAvisoRespuesta();

      return;

    }


    if (
      indiceActual <
      preguntasExamen.length - 1
    ) {

      indiceActual++;

      mostrarPregunta();

    } else {

      finalizarExamen();

    }

  }
);


/* =========================================================
   28. AVISO RESPUESTA
========================================================= */

function mostrarAvisoRespuesta() {

  retroalimentacion.classList.remove(
    "oculto",
    "exito"
  );


  retroalimentacion.classList.add(
    "error"
  );


  iconoResultado.textContent =
    "!";


  tituloResultado.textContent =
    "Selecciona una respuesta";


  textoResultado.textContent =
    "Debes responder esta pregunta antes de continuar.";

}


/* =========================================================
   29. TERMINAR
========================================================= */

btnTerminar.addEventListener(
  "click",
  () => {

    modalTerminar.classList.remove(
      "oculto"
    );

  }
);


btnCancelarTerminar.addEventListener(
  "click",
  () => {

    modalTerminar.classList.add(
      "oculto"
    );

  }
);


btnConfirmarTerminar.addEventListener(
  "click",
  () => {

    modalTerminar.classList.add(
      "oculto"
    );


    finalizarExamen();

  }
);


/* =========================================================
   30. RESULTADOS
========================================================= */

function finalizarExamen() {

  if (
    examenFinalizado
  ) {
    return;
  }


  examenFinalizado = true;


  let correctas = 0;


  preguntasExamen.forEach(
    (pregunta, indice) => {

      const seleccionada =
        respuestasUsuario[
          indice
        ];


      const correcta =
        obtenerIndiceCorrecto(
          pregunta
        );


      if (
        seleccionada !== null &&
        seleccionada === correcta
      ) {

        correctas++;

      }

    }
  );


  const total =
    preguntasExamen.length;


  /*
     Toda pregunta no contestada
     cuenta como incorrecta si el
     usuario pulsa TERMINAR.
  */

  const incorrectas =
    total - correctas;


  const porcentaje =
    total > 0
      ? Math.round(
          (
            correctas /
            total
          ) * 100
        )
      : 0;


  if (
    esSimuladorGeneral
  ) {

    resultadoMateria.textContent =
      "Simulador DGAC · 40 preguntas";

  } else {

    resultadoMateria.textContent =
      materias[
        materiaActual
      ].nombre;

  }


  porcentajeResultado.textContent =
    `${porcentaje}%`;


  cantidadCorrectas.textContent =
    correctas;


  cantidadIncorrectas.textContent =
    incorrectas;


  cantidadTotal.textContent =
    total;


  configurarResultadoVisual(
    porcentaje
  );


  mostrarPantalla(
    pantallaResultados
  );

}


/* =========================================================
   31. APROBADO / DESAPROBADO
========================================================= */

function configurarResultadoVisual(
  porcentaje
) {

  if (
    porcentaje >= 80
  ) {

    resultadoIconoFinal.textContent =
      "✓";


    resultadoIconoFinal.className =
      "resultado-final-icono aprobado";

  } else {

    resultadoIconoFinal.textContent =
      "!";


    resultadoIconoFinal.className =
      "resultado-final-icono desaprobado";

  }

}


/* =========================================================
   32. REPETIR EXAMEN
========================================================= */

btnRepetirExamen.addEventListener(
  "click",
  () => {

    /*
       Si era el simulador DGAC,
       genera otras 40 preguntas.
    */

    if (
      esSimuladorGeneral
    ) {

      iniciarSimuladorGeneral();

    } else {

      iniciarExamenMateria();

    }

  }
);


/* =========================================================
   33. VOLVER AL INICIO
========================================================= */

btnOtraMateria.addEventListener(
  "click",
  volverInicio
);


btnInicio.addEventListener(
  "click",
  volverInicio
);


btnVolverMaterias.addEventListener(
  "click",
  volverInicio
);


function volverInicio() {

  materiaActual = null;

  cantidadSeleccionada = null;

  preguntasExamen = [];

  respuestasUsuario = [];

  indiceActual = 0;

  examenFinalizado = false;

  esSimuladorGeneral = false;


  cerrarModales();


  mostrarPantalla(
    pantallaInicio
  );

}


/* =========================================================
   34. ABRIR FIGURA
========================================================= */

btnAbrirFigura.addEventListener(
  "click",
  () => {

    if (
      !imagenPregunta.src ||
      imagenPregunta.style.display ===
      "none"
    ) {

      return;

    }


    const figura =
      imagenPregunta.dataset.figura;


    modalTitulo.textContent =
      `Figura ${figura}`;


    imagenAmpliada.src =
      imagenPregunta.src;


    nivelZoom = 1;


    aplicarZoom();


    modalImagen.classList.remove(
      "oculto"
    );


    document.body.classList.add(
      "sin-scroll"
    );

  }
);


/* =========================================================
   35. CERRAR FIGURA
========================================================= */

btnCerrarImagen.addEventListener(
  "click",
  cerrarImagen
);


function cerrarImagen() {

  modalImagen.classList.add(
    "oculto"
  );


  document.body.classList.remove(
    "sin-scroll"
  );


  nivelZoom = 1;


  aplicarZoom();

}


/* =========================================================
   36. ZOOM BOTONES
========================================================= */

btnZoomMas.addEventListener(
  "click",
  () => {

    nivelZoom =
      Math.min(
        ZOOM_MAXIMO,
        nivelZoom +
        PASO_ZOOM
      );


    aplicarZoom();

  }
);


btnZoomMenos.addEventListener(
  "click",
  () => {

    nivelZoom =
      Math.max(
        ZOOM_MINIMO,
        nivelZoom -
        PASO_ZOOM
      );


    aplicarZoom();

  }
);


btnRestablecerZoom.addEventListener(
  "click",
  () => {

    nivelZoom = 1;

    aplicarZoom();

  }
);


function aplicarZoom() {

  imagenAmpliada.style.transform =
    `scale(${nivelZoom})`;


  btnRestablecerZoom.textContent =
    `${Math.round(
      nivelZoom * 100
    )}%`;

}


/* =========================================================
   37. ZOOM CON MOUSE
========================================================= */

modalImagen.addEventListener(
  "wheel",
  evento => {

    if (
      modalImagen.classList.contains(
        "oculto"
      )
    ) {

      return;

    }


    evento.preventDefault();


    if (
      evento.deltaY < 0
    ) {

      nivelZoom =
        Math.min(
          ZOOM_MAXIMO,
          nivelZoom + 0.25
        );

    } else {

      nivelZoom =
        Math.max(
          ZOOM_MINIMO,
          nivelZoom - 0.25
        );

    }


    aplicarZoom();

  },

  {
    passive: false
  }

);


/* =========================================================
   38. PINCH ZOOM IPHONE / ANDROID
========================================================= */

let distanciaInicial = null;

let zoomInicial = 1;


imagenAmpliada.addEventListener(
  "touchstart",
  evento => {

    if (
      evento.touches.length === 2
    ) {

      distanciaInicial =
        obtenerDistancia(
          evento.touches[0],
          evento.touches[1]
        );


      zoomInicial =
        nivelZoom;

    }

  },

  {
    passive: true
  }

);


imagenAmpliada.addEventListener(
  "touchmove",
  evento => {

    if (
      evento.touches.length !== 2 ||
      distanciaInicial === null
    ) {

      return;

    }


    evento.preventDefault();


    const distanciaActual =
      obtenerDistancia(
        evento.touches[0],
        evento.touches[1]
      );


    const escala =
      distanciaActual /
      distanciaInicial;


    nivelZoom =
      zoomInicial *
      escala;


    nivelZoom =
      Math.max(
        ZOOM_MINIMO,
        Math.min(
          ZOOM_MAXIMO,
          nivelZoom
        )
      );


    aplicarZoom();

  },

  {
    passive: false
  }

);


imagenAmpliada.addEventListener(
  "touchend",
  evento => {

    if (
      evento.touches.length < 2
    ) {

      distanciaInicial =
        null;

    }

  }
);


function obtenerDistancia(
  toque1,
  toque2
) {

  const x =
    toque2.clientX -
    toque1.clientX;


  const y =
    toque2.clientY -
    toque1.clientY;


  return Math.sqrt(
    x * x +
    y * y
  );

}


/* =========================================================
   39. ESCAPE
========================================================= */

document.addEventListener(
  "keydown",
  evento => {

    if (
      evento.key !== "Escape"
    ) {

      return;

    }


    if (
      !modalImagen.classList.contains(
        "oculto"
      )
    ) {

      cerrarImagen();

    }


    if (
      !modalTerminar.classList.contains(
        "oculto"
      )
    ) {

      modalTerminar.classList.add(
        "oculto"
      );

    }

  }
);


/* =========================================================
   40. CERRAR MODALES
========================================================= */

function cerrarModales() {

  modalImagen.classList.add(
    "oculto"
  );


  modalTerminar.classList.add(
    "oculto"
  );


  document.body.classList.remove(
    "sin-scroll"
  );

}


/* =========================================================
   41. SEGURIDAD HTML
========================================================= */

function escaparHTML(
  texto
) {

  const elemento =
    document.createElement(
      "div"
    );


  elemento.textContent =
    String(texto);


  return elemento.innerHTML;

}


/* =========================================================
   42. COMPROBAR BASES
========================================================= */

function comprobarBasesDatos() {

  console.log(
    "=============================="
  );

  console.log(
    "SIMULADOR DGAC"
  );

  console.log(
    "Bancos cargados:"
  );


  let total = 0;


  Object
    .values(materias)
    .forEach(materia => {

      console.log(
        `${materia.nombre}: ${materia.preguntas.length}`
      );


      total +=
        materia.preguntas.length;

    });


  console.log(
    `TOTAL DE PREGUNTAS: ${total}`
  );


  console.log(
    "=============================="
  );

}


/* =========================================================
   43. INICIO
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    comprobarBasesDatos();


    mostrarPantalla(
      pantallaInicio
    );

  }
);