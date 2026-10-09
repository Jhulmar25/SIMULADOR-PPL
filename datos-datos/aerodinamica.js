// Banco de preguntas: AERODINÁMICA BÁSICA - PP AVIÓN 2023
// Fuente: documento DGAC/MTC proporcionado por el usuario.
//
// Convención:
// - respuestaCorrecta: 'A', 'B' o 'C'.
// - figura: número de figura que debe buscar/mostrar la app; null si no aplica.
// - El texto se conserva conforme al documento fuente, incluso cuando contiene
//   repeticiones o redacciones particulares del banco original.

const preguntasAerodinamica = [
  {
    'numero': '3217',
    'pregunta': 'La cantidad de exceso de carga que se puede imponer al ala de un avión depende de la:',
    'opciones': {
      'A': 'Posición del CG.',
      'B': 'Velocidad del avión.',
      'C': 'Brusquedad a la que se aplica la carga.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3218',
    'pregunta': '¿Qué maniobra de vuelo básica aumenta el factor de carga en un avión en comparación con el vuelo recto y nivelado?',
    'opciones': {
      'A': 'Ascensos.',
      'B': 'Virajes.',
      'C': 'Entrar en pérdida.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3301',
    'pregunta': '¿Qué fuerza hace girar un avión?',
    'opciones': {
      'A': 'El componente horizontal de la sustentación.',
      'B': 'El componente horizontal de la sustentación.',
      'C': 'La fuerza centrífuga.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3316',
    'pregunta': 'Durante una aproximación a una entrada a pérdida, un factor de carga incrementado hará que el avión:',
    'opciones': {
      'A': 'Entre en perdida a una velocidad aérea más alta.',
      'B': 'Tenga tendencia a girar.',
      'C': 'Sea más difícil de controlar.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3202.1',
    'pregunta': 'Seleccione los cuatro fundamentos de vuelo que intervienen en la maniobra de una aeronave:',
    'opciones': {
      'A': 'Potencia, cabeceo, inclinación y compensación de la aeronave.',
      'B': 'Arranque, rodaje, despegue y aterrizaje.',
      'C': 'Vuelo recto y nivelado, giros, ascensos y descensos.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3202.2',
    'pregunta': 'Al volar en rumbo rectangular, ¿cuándo giraría la aeronave menos de 90°?',
    'opciones': {
      'A': 'Esquinas 1 y 4.',
      'B': 'Esquinas 1 y 2.',
      'C': 'Esquinas 2 y 4.',
    },
    'respuestaCorrecta': 'A',
    'figura': 62,
  },
  {
    'numero': '3202.3',
    'pregunta': 'Mientras se practica giros en S, se hace un semicírculo consistentemente más pequeño en un lado de la ruta que en el otro, y este giro no se completa antes de cruzar la ruta o la línea de referencia. Lo más probable es que esto ocurra a su vez:',
    'opciones': {
      'A': '1-2-3 porque la inclinación se reduce demasiado rápido durante la última parte del giro.',
      'B': '4-5-6 porque la inclinación se incrementa demasiado rápido durante la primera parte del giro.',
      'C': '4-5-6 porque la inclinación se incrementa demasiado lento durante la última parte del giro.',
    },
    'respuestaCorrecta': 'B',
    'figura': 66,
  },
  {
    'numero': '3202.4',
    'pregunta': 'Si una situación de emergencia requiere un aterrizaje a favor del viento, los pilotos deben esperar una:',
    'opciones': {
      'A': 'Velocidad del aire en el momento del aterrizaje, un rodamiento más largo en el terreno y un mejor control durante todo el recorrido del aterrizaje.',
      'B': 'Velocidad en tierra en el momento del aterrizaje, un rodamiento más largo en el terreno y la probabilidad de sobrepasar el punto de aterrizaje deseado.',
      'C': 'Velocidad en tierra en el momento del aterrizaje, un rodamiento más corto en el terreno y la probabilidad de no alcanzar el punto de aterrizaje deseado.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3202.5',
    'pregunta': 'Al ejecutar una aproximación de emergencia para aterrizar en un avión monomotor, es importante mantener una velocidad de planeo constante porque las variaciones en la velocidad de planeo:',
    'opciones': {
      'A': 'Aumentan las posibilidades de que el motor se enfríe.',
      'B': 'Aseguran que se mantenga el ángulo de descenso adecuado hasta que entre en la llamarada.',
      'C': 'Anula todos los intentos de precisión en el juicio de distancia de planeo y el punto de aterrizaje.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3263',
    'pregunta': 'A medida que aumenta la altitud, la velocidad indicada a la que un avión dado se detiene en una configuración particular:',
    'opciones': {
      'A': 'Disminuye a medida que disminuye la velocidad verdadera.',
      'B': 'Disminuye a medida que aumenta la velocidad verdadera.',
      'C': 'Sigue siendo la misma independientemente de la altitud.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3309',
    'pregunta': '¿En qué condiciones de vuelo debe colocarse una aeronave para girar?',
    'opciones': {
      'A': 'Parcialmente en pérdida con un ala baja.',
      'B': 'En una espiral empinada en picada.',
      'C': 'En pérdida.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3310',
    'pregunta': 'Durante un giro hacia la izquierda, ¿qué ala (s) entran en pérdida?',
    'opciones': {
      'A': 'Ambas alas entran en pérdida.',
      'B': 'Ninguna ala alas entra en pérdida.',
      'C': 'Solo el ala izquierda entra en pérdida.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3311',
    'pregunta': 'El ángulo de ataque en el que el ala de un avión entra en pérdida:',
    'opciones': {
      'A': 'Aumentará si el CG se mueve hacia adelante.',
      'B': 'Cambiará con un aumento en el peso bruto.',
      'C': 'Sigue siendo la misma independientemente del peso bruto.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3219',
    'pregunta': 'Una de las principales funciones de los flaps durante la aproximación y el aterrizaje es:',
    'opciones': {
      'A': 'Disminuir el ángulo de descenso sin aumentar la velocidad del aire.',
      'B': 'Permitir un aterrizaje a una mayor velocidad indicada.',
      'C': 'Incrementar el ángulo de descenso sin incrementar la velocidad del aire.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3220',
    'pregunta': '¿Cuál es uno de los propósitos de los flaps?',
    'opciones': {
      'A': 'Permitir al piloto realizar aproximaciones más pronunciadas a un aterrizaje sin aumentar la velocidad del aire.',
      'B': 'Para aliviar al piloto de mantener una presión continua sobre los controles.',
      'C': 'Disminuir el área del ala para variar la sustentación.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3315',
    'pregunta': '¿En qué problema es más probable que se produzca el efecto suelo?',
    'opciones': {
      'A': 'Asentamiento en la superficie abruptamente durante el aterrizaje.',
      'B': 'Estar en vuelo antes de alcanzar la velocidad de despegue recomendada.',
      'C': 'Incapacidad para despegar a pesar de que la velocidad es suficiente para las necesidades normales de despegue.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3312',
    'pregunta': '¿Qué es el efecto suelo?',
    'opciones': {
      'A': 'El resultado de la interferencia de la superficie de la tierra con los patrones de flujo de aire alrededor de un avión.',
      'B': 'El resultado de una alteración en los patrones de flujo de aire que aumenta la resistencia inducida en las alas de un avión',
      'C': 'El resultado de la interrupción de los patrones de flujo de aire alrededor de las alas de un avión hasta el punto en que las alas ya no soportarán al avión en vuelo.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3313',
    'pregunta': 'La flotación causada por el fenómeno del efecto suelo será más evidente durante una aproximación a tierra cuando:',
    'opciones': {
      'A': 'Menos que la longitud de la envergadura sobre la superficie.',
      'B': 'El doble de la longitud de la envergadura sobre la superficie.',
      'C': 'Un ángulo de ataque más alto de lo normal.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3314',
    'pregunta': '¿De qué debe ser consciente un piloto como resultado del efecto suelo?',
    'opciones': {
      'A': 'Vórtices en la punta de las alas que crean problemas de estela turbulenta para las aeronaves que llegan y salen',
      'B': 'La resistencia inducida disminuye: por lo tanto, cualquier exceso de velocidad en el punto de llamarada puede causar una considerable flotación.',
      'C': 'Un aterrizaje de pérdida completa requerirá menos deflexión hacia arriba del elevador que una pérdida completa cuando se realiza sin el efecto del suelo.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3829.2',
    'pregunta': 'Al aterrizar detrás de una aeronave grande, ¿qué procedimiento se debe seguir para evitar vórtices?',
    'opciones': {
      'A': 'Mantenerse por encima de su trayectoria de vuelo de aproximación final hasta el aterrizaje.',
      'B': 'Mantenerse debajo y a un lado de su trayectoria de vuelo de aproximación final.',
      'C': 'Mantenerse muy por debajo de su trayectoria de vuelo de aproximación final y aterrizar al menos a 2,000 pies detrás.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3824',
    'pregunta': 'Los vórtices de las puntas de las alas se crean solo cuando se:',
    'opciones': {
      'A': 'Opera a alta velocidad.',
      'B': 'Tiene el avión muy cargado.',
      'C': 'Genera sustentación.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3825',
    'pregunta': 'La mayor fuerza de vórtice ocurre cuando la aeronave generadora está:',
    'opciones': {
      'A': 'Ligero, sucio y rápido.',
      'B': 'Pesado, sucio y rápido.',
      'C': 'Pesado, limpio y lento.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3826',
    'pregunta': 'Los vórtices de punta de ala creados por aviones grandes tienden a:',
    'opciones': {
      'A': 'Hundirse debajo de la aeronave generando turbulencias.',
      'B': 'Aumentar el patrón de tráfico.',
      'C': 'Aumentar a la trayectoria de despegue o aterrizaje de una pista de cruce.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3828',
    'pregunta': 'La condición del viento que requiere la máxima precaución para evitar la estela turbulenta al aterrizar es una:',
    'opciones': {
      'A': 'Ligero viento de frente.',
      'B': 'Ligero viento de cola.',
      'C': 'Fuerte viento de frente.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3829',
    'pregunta': 'Al aterrizar detrás de un avión grande, el piloto debe evitar la estela turbulenta manteniéndose:',
    'opciones': {
      'A': 'Por encima de la trayectoria de aproximación final del avión grande y aterrizando más allá del punto de toma de contacto del avión grande.',
      'B': 'Debajo de la trayectoria de aproximación final del avión grande y aterrizando antes del punto de toma de contacto del avión grande.',
      'C': 'Por encima de la trayectoria de aproximación final del avión grande y aterrizando antes del punto de toma de contacto del avión grande.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3830',
    'pregunta': 'Al salir detrás de un avión pesado, el piloto debe evitar la estela turbulenta maniobrando el avión:',
    'opciones': {
      'A': 'Debajo y a favor del viento del avión pesado.',
      'B': 'Sobre y en contra del viento del avión pesado.',
      'C': 'Debajo y en contra del viento del avión pesado.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3829.3',
    'pregunta': '¿Cómo circula el vórtice de estela turbulenta alrededor de cada punta de ala?',
    'opciones': {
      'A': 'Hacia adentro, hacia arriba y alrededor de cada punta.',
      'B': 'Hacia adentro, hacia arriba y en sentido anti horario.',
      'C': 'Hacia afuera, hacia arriba y alrededor de cada punta.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3827',
    'pregunta': 'Al despegar o aterrizar en un aeropuerto donde operan aviones pesados, se debe estar particularmente alerta a los peligros de los vórtices en la punta de las alas porque esta turbulencia tiende a:',
    'opciones': {
      'A': 'Ascender desde una pista de cruce hacia la ruta de despegue o aterrizaje.',
      'B': 'Incrementar al área del patrón de tráfico que rodea el aeropuerto.',
      'C': 'Hundirse dentro de la senda de vuelo de la aeronave que opera debajo de la aeronave que genera la turbulencia.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3203',
    'pregunta': 'El ángulo agudo A es el ángulo de:',
    'opciones': {
      'A': 'Incidencia.',
      'B': 'Ataque.',
      'C': 'Diedro.',
    },
    'respuestaCorrecta': 'B',
    'figura': 1,
  },
  {
    'numero': '3204',
    'pregunta': "El término 'ángulo de ataque' se define como el ángulo:",
    'opciones': {
      'A': 'Entre la línea de la cuerda del ala y el viento relativo.',
      'B': 'Entre el ángulo de ascenso del avión y el horizonte.',
      'C': 'Formado por el eje longitudinal del avión y la línea de cuerda del ala.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3204.1',
    'pregunta': 'El ángulo entre la línea de cuerda de un perfil aerodinámico y el viento relativo se conoce como el ángulo de:',
    'opciones': {
      'A': 'Sustentación.',
      'B': 'Ataque.',
      'C': 'Incidencia.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3317',
    'pregunta': 'El término "ángulo de ataque" se define como el ángulo entre:',
    'opciones': {
      'A': 'La cuerda del ala y el viento relativo.',
      'B': 'El eje longitudinal del avión y el del aire que golpea el perfil aerodinámico.',
      'C': 'La línea central del avión y el viento relativo.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3201.01',
    'pregunta': '¿Qué enunciado se relaciona con el principio de Bernoulli?',
    'opciones': {
      'A': 'Por cada acción hay una reacción igual y opuesta.',
      'B': 'Se genera una fuerza adicional hacia arriba cuando la superficie inferior del ala desvía el aire',
      'C': 'El aire viaja más rápido sobre la superficie superior curva de un perfil aerodinámico reduciendo la presión en la superficie superior.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3201',
    'pregunta': 'Las cuatro fuerzas que actúan sobre un avión en vuelo son:',
    'opciones': {
      'A': 'Sustentación, peso, empuje, resistencia.',
      'B': 'Sustentación, peso, gravedad, empuje.',
      'C': 'Sustentación, gravedad, potencia y fricción.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3213',
    'pregunta': '¿Cuál es el propósito del timón de un avión?',
    'opciones': {
      'A': 'Controlar la guiñada.',
      'B': 'Controlar la tendencia la sobre inclinación.',
      'C': 'Controlar el alabeo.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3205',
    'pregunta': '¿Cuál es la relación de sustentación, resistencia, empuje y peso cuando el avión está en vuelo recto y nivelado?',
    'opciones': {
      'A': 'La sustentación es igual al peso y el empuje es igual a la resistencia.',
      'B': 'La sustentación, la resistencia y el peso es igual empuje.',
      'C': 'La sustentación y el peso son iguales en empuje y a la resistencia.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3202',
    'pregunta': '¿Cuándo están en equilibrio las cuatro fuerzas que actúan sobre un avión?',
    'opciones': {
      'A': 'Durante un vuelo no acelerado.',
      'B': 'Cuando la aeronave acelera.',
      'C': 'Cuando la aeronave está en reposo en tierra.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3210',
    'pregunta': 'Un avión que se dice que es inherentemente estable:',
    'opciones': {
      'A': 'Será difícil que entre en pérdida.',
      'B': 'Requiere menos esfuerzo para controlarlo.',
      'C': 'No gira.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3211',
    'pregunta': '¿Qué determina la estabilidad longitudinal de un avión?',
    'opciones': {
      'A': 'La ubicación del centro de gravedad con respecto al centro de sustentación.',
      'B': 'La efectividad del estabilizador horizontal, el timón y la pestaña de ajuste del timón.',
      'C': 'La relación de empuje y sustentación con peso y resistencia.',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3212',
    'pregunta': '¿Qué hace que un avión (excepto una cola en T) se incline hacia abajo cuando se reduce la potencia y los controles no están ajustados?',
    'opciones': {
      'A': 'El CG se desplaza hacia adelante cuando se reduce el empuje y la resistencia.',
      'B': 'Se reduce la corriente descendente en los elevadores de la corriente de deslizamiento de la hélice y se reduce la eficacia del elevador.',
      'C': 'Cuando el empuje se reduce a menos que el peso, la sustentación también se reduce y las alas ya no pueden soportar el peso.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3287',
    'pregunta': 'Se ha cargado un avión de tal manera que el CG está ubicado detrás del límite posterior del CG. Una característica de vuelo indeseable que un piloto podría experimentar con este avión sería:',
    'opciones': {
      'A': 'Una carrera de despegue más larga.',
      'B': 'Dificultad para recuperarse de una condición de entrada en pérdida.',
      'C': 'Entrada en pérdida a una velocidad aérea superior a la normal.',
    },
    'respuestaCorrecta': 'B',
    'figura': null,
  },
  {
    'numero': '3288',
    'pregunta': 'Cargar un avión en el CG más hacia el límite posterior hará que el avión sea:',
    'opciones': {
      'A': 'Menos estable a todas las velocidades.',
      'B': 'Menos estable a bajas velocidades, pero más estable a altas velocidades.',
      'C': 'Menos estable a altas velocidades, pero más estable a bajas velocidades',
    },
    'respuestaCorrecta': 'A',
    'figura': null,
  },
  {
    'numero': '3211.1',
    'pregunta': 'Los cambios en el centro de presión de un ala afectan a la:',
    'opciones': {
      'A': 'Relación sustentación / resistencia.',
      'B': 'Capacidad de sustentación.',
      'C': 'Equilibrio aerodinámico y controlabilidad.',
    },
    'respuestaCorrecta': 'C',
    'figura': null,
  },
  {
    'numero': '3214',
    'pregunta': 'Si un avión pesa 2,300 libras, ¿qué peso aproximado podría soportar la estructura del avión durante un viraje inclinado de 60 ° mientras se mantiene la altitud?',
    'opciones': {
      'A': '2,300 libras.',
      'B': '3,400 libras.',
      'C': '4,600 libras.',
    },
    'respuestaCorrecta': 'C',
    'figura': 2,
  },
  {
    'numero': '3215',
    'pregunta': 'Si un avión pesa 3,300 libras, ¿qué peso aproximado debería soportar la estructura del avión durante un viraje inclinado de 30 ° mientras se mantiene la altitud?',
    'opciones': {
      'A': '1,200 libras.',
      'B': '3,100 libras',
      'C': '3,960 libras.',
    },
    'respuestaCorrecta': 'C',
    'figura': 2,
  },
  {
    'numero': '3216',
    'pregunta': 'Si un avión pesa 4,500 libras, ¿qué peso aproximado debería soportar la estructura del avión durante un viraje inclinado de 45° mientras se mantiene la altitud?',
    'opciones': {
      'A': '4,500 libras.',
      'B': '6,750 libras.',
      'C': '7,200 libras.',
    },
    'respuestaCorrecta': 'B',
    'figura': 2,
  },
];


// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasAerodinamica = preguntasAerodinamica;
