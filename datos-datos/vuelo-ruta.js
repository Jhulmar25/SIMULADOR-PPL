// VUELO EN RUTA - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app; [] si no requiere imagen.

const preguntasVueloRuta = [
  {
    'numero': '3637.1',
    'pregunta': '3637.1.- ¿Cuál de los siguientes ítems es verdadero, con respecto a los colores azul y magenta que se utilizan para representar los aeropuertos en las cartas aeronáuticas seccionales?',
    'opciones': [
      'Los aeropuertos con torres de control subyacentes al espacio aéreo de Clase A, B y C se muestran en azul, el espacio aéreo de Clase D y E en magenta.',
      'Los aeropuertos con torres de control subyacentes al espacio aéreo de Clase C, D y E se muestran en magenta.',
      'Los aeropuertos con torres de control subyacentes al espacio aéreo de Clase B, C, D y E se muestran en azul.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3637',
    'pregunta': '3637.- (Refiérase a la Figura 23, área 3.) ¿Cuál es la altura del obstáculo iluminado aproximadamente a 6 millas náuticas al suroeste de Savannah International?',
    'opciones': [
      '1,500 pies MSL.',
      '1,531 pies AGL.',
      '1,548 pies MSL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [23],
  },
  {
    'numero': '3638',
    'pregunta': '3638.- (Refiérase a la Figura 23, área 3). La parte superior de la obstrucción del grupo aproximadamente a 11 millas náuticas del Savannah VORTAC en el radial 009° es:',
    'opciones': [
      '400 pies AGL.',
      '454 pies MSL.',
      '432 pies MSL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [23],
  },
  {
    'numero': '3639',
    'pregunta': '3639.- (Refiérase a la Figura 24, área 1.) ¿Qué altitud mínima es necesaria para despejar verticalmente el obstáculo en el lado noreste del aeropuerto Airpark East en 500 pies?',
    'opciones': [
      '1,010 pies MSL.',
      '1,273 pies MSL.',
      '1,283 pies MSL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [24],
  },
  {
    'numero': '3640',
    'pregunta': '3640.- (Refiérase a la Figura 24, área 2.) ¿Qué altitud mínima es necesaria para despejar verticalmente el obstáculo en el lado sureste del aeropuerto de Winnsboro por 500 pies?',
    'opciones': [
      '823 pies MSL.',
      '1,013 pies MSL.',
      '1,403 pies MSL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [24],
  },
  {
    'numero': '3631',
    'pregunta': '3631.- (Refiérase a la Figura 20, área 5.) El cuadro de PRECAUCIÓN indica ¿qué peligro para la aeronave?',
    'opciones': [
      'Globo sin marcar en cable a 3008 pies MSL. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 1',
      'Globo sin marcar en cable a 3008 pies AGL.',
      'Perchas para dirigibles sin marcar a 308 pies MSL.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [20],
  },
  {
    'numero': '3632',
    'pregunta': '3632.- (Refiérase a la Figura 20, área 2). El símbolo de la bandera en el lago Drummond representa un:',
    'opciones': [
      'punto de notificación obligatorio para el espacio aéreo de clase C de Norfolk.',
      'punto de notificación obligatorio para el aeropuerto de Hampton Roads.',
      'punto de control visual utilizado para identificar la posición para la llamada inicial a Norfolk Approach Control.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [20],
  },
  {
    'numero': '3633',
    'pregunta': '3633.- (Refiérase a la Figura 20, área 2.) La elevación del Aeropuerto Regional de Chesapeake es:',
    'opciones': [
      '19 pies.',
      '55 pies.',
      '230 pies.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [20],
  },
  {
    'numero': '3634',
    'pregunta': '3634.- (Refiérase a la Figura 21). La elevación del terreno del área de color tostado claro entre Minot (área 1) y Audubon Lake (área 2) varía de:',
    'opciones': [
      'nivel del mar hasta 2,000 pies MSL.',
      '2,000 pies a 2,500 pies MSL.',
      '2,000 pies a 2,700 pies MSL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [21],
  },
  {
    'numero': '3635',
    'pregunta': '3635.- (Refiérase a la Figura 21). ¿Qué aeropuertos de uso público representados tienen combustible?',
    'opciones': [
      'Internacional de Minot (área 1) y Garrison (área 2).',
      'Internacional de Minot (área 1).',
      'Aeropuerto Regional del Condado de Mercer (área 3).',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [21],
  },
  {
    'numero': '3636',
    'pregunta': '3636.- (Refiérase a la Figura 23). Los símbolos de la bandera en el aeropuerto de Statesboro Bullock, el aeropuerto de Claxton-Evans y el aeropuerto de Ridgeland son:',
    'opciones': [
      'límites exteriores del espacio aéreo Clase C de Savannah.',
      'aeropuertos con patrones de tráfico especiales.',
      'puntos de control visual para identificar la posición para la llamada inicial antes de ingresar al espacio aéreo Clase C de Savannah.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [23],
  },
  {
    'numero': '3642',
    'pregunta': '3642.- (Refiérase a la Figura 25, área 8.) ¿Qué altitud mínima se requiere para volar sobre las torres de televisión Cedar Hill en el área congestionada al sur de Dallas Executive (RBD)?',
    'opciones': [
      '2,655 pies MSL.',
      '3,549 pies MSL.',
      '3,449 pies MSL. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 2',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [25],
  },
  {
    'numero': '3531',
    'pregunta': '3531.- (Refiérase a la Figura 20.) Determine el curso magnético desde el aeropuerto First Flight (área 5) hasta el aeropuerto Hampton Roads (área 2):',
    'opciones': [
      '141°.',
      '321°.',
      '332°.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [20],
  },
  {
    'numero': '3556',
    'pregunta': '3556.- (Refiérase a la Figura 24). Determine el curso magnético desde el aeropuerto Airpark East (área 1) hasta el aeropuerto de Winnsboro (área 2). La variación magnética es de 6° 30\'E:',
    'opciones': [
      '075°.',
      '082°.',
      '091°.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [24],
  },
  {
    'numero': '3568',
    'pregunta': '3568.- (Refiérase a la Figura 26.) Determine el curso magnético desde el aeropuerto Tomlinson (área 1) al aeropuerto Jamestown (área 4):',
    'opciones': [
      '153°.',
      '154°.',
      '159°.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [26],
  },
  {
    'numero': '3816',
    'pregunta': '3816.- (Refiérase a la Figura 68). La línea del punto A al punto B del triángulo del viento representa:',
    'opciones': [
      'verdadero rumbo y velocidad aérea.',
      'verdadero rumbo y velocidad terrestre.',
      'velocidad terrestre y rumbo verdadero.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [68],
  },
  {
    'numero': '3817',
    'pregunta': '3817.- (Refiérase a la Figura 68). La línea del punto C al punto B del triángulo de viento representa:',
    'opciones': [
      'velocidad aerodinámica y rumbo.',
      'velocidad terrestre y rumbo verdadero.',
      'verdadero rumbo y velocidad terrestre.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [68],
  },
  {
    'numero': '2001',
    'pregunta': '2001.- (Refiérase a la Figura 68). La línea del punto C al punto A del triángulo de viento representa:',
    'opciones': [
      'dirección y velocidad del viento.',
      'verdadero rumbo y velocidad terrestre.',
      'verdadero rumbo y velocidad terrestre.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [68],
  },
  {
    'numero': '3529.1',
    'pregunta': '3529.1.- Si un rumbo real de 135° da como resultado una trayectoria terrestre de 130° y una velocidad aerodinámica real de 135 nudos da como resultado una velocidad terrestre de 140 nudos, el viento sería de:',
    'opciones': [
      '019° y 12 nudos.',
      '200° y 13 nudos.',
      '246° y 13 nudos. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 3',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3529.2',
    'pregunta': '3529.2.- Al realizar la conversión de rumbo verdadero a rumbo magnético, el piloto debe:',
    'opciones': [
      'restar la variación hacia el este y el ángulo de corrección del viento a la derecha.',
      'sumar la variación del oeste y reste el ángulo de corrección del viento a la izquierda.',
      'restar la variación del oeste y agregue el ángulo de corrección del viento a la derecha.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3529.3',
    'pregunta': '3529.3.- ¿Qué distancia recorrerá un avión en 2-1/2 minutos con una velocidad respecto al suelo de 98 nudos?',
    'opciones': [
      '2.45 NM.',
      '3.35 NM.',
      '4.08 NM.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3529.4',
    'pregunta': '3529.4.- ¿Qué distancia recorrerá un avión en 7.5 minutos con una velocidad respecto al suelo de 114 nudos?',
    'opciones': [
      '14.25 NM.',
      '15.00 NM.',
      '14.50 NM.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3565',
    'pregunta': '3565.- (Refiérase a la Figura 25). Determine el rumbo magnético para un vuelo desde Fort Worth Meacham (área 4) a Denton Muni (área 1). El viento es de 330° a 25 nudos, la velocidad real es de 110 nudos y la variación magnética es de 7° este:',
    'opciones': [
      '004°.',
      '017°.',
      '023°.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [25],
  },
  {
    'numero': '3538',
    'pregunta': '3538.- (Refiérase a la Figura 21). Determine el rumbo magnético de un vuelo desde el aeropuerto de Mercer (área 3) a Minot International (área 1). El viento es de 330° a 25 nudos, la velocidad real es de 100 nudos y la variación magnética es de 10° este:',
    'opciones': [
      '002°.',
      '012°.',
      '352°.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [21],
  },
  {
    'numero': '3781',
    'pregunta': '3781.- Todas las operaciones dentro del espacio aéreo Clase C deben realizarse en:',
    'opciones': [
      'de acuerdo con las reglas de vuelo por instrumentos.',
      'cumplimiento de las autorizaciones e instrucciones del ATC.',
      'una aeronave equipada con un transpondedor de código 4096 con capacidad de codificación en Modo C.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3782',
    'pregunta': '3782.- ¿En qué condiciones puede operar una aeronave desde un aeropuerto satélite dentro del espacio aéreo de Clase C?',
    'opciones': [
      'El piloto debe presentar un plan de vuelo antes de la salida.',
      'El piloto debe monitorear el ATC hasta que salga del espacio aéreo Clase C.',
      'El piloto debe comunicarse con ATC tan pronto como sea posible después del despegue.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '2122',
    'pregunta': '2122.- (Refiérase a la Figura 69). ¿Qué equipo mínimo se requiere para un vuelo desde el aeropuerto de Kleberg Co. (área 7) al aeropuerto Corpus Christi Intl. (área 3)?',
    'opciones': [
      'ADS-B.',
      'Equipo de radio bidireccional.',
      'Transpondedor de radio bidireccional y modo C con equipo de informe de altitud.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [69],
  },
  {
    'numero': '3626',
    'pregunta': '3626.- (Consulte la Figura 23, área 3). ¿Cuál es el piso del espacio aéreo de Savannah Clase C en el área de la plataforma (círculo exterior)?',
    'opciones': [
      '1.300 pies AGL.',
      '1,300 pies MSL.',
      '1,700 pies MSL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [23],
  },
  {
    'numero': '3627',
    'pregunta': '3627.- (Consulte la Figura 20, área 1.) ¿Qué equipo de radio mínimo se requiere para aterrizar y despegar en Norfolk International?',
    'opciones': [
      'Transpondedor y omnireceptor Modo C.',
      'Transpondedor modo C y radio bidireccional.',
      'Transpondedor modo C, omnireceptor y DME.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [20],
  },
  {
    'numero': '3069',
    'pregunta': '3069.- Las operaciones VFR normales en el espacio aéreo de Clase D con una torre de control operativa requieren que el techo y la visibilidad sean al menos:',
    'opciones': [
      '1,000 pies y 1 milla.',
      '1 500 m horizontalmente 300 m (1 000 ft) verticalmente',
      '2,500 pies y 3 millas.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3119',
    'pregunta': '3119.- A menos que se autorice lo contrario, se requieren comunicaciones de radio bidireccionales con la torre de control para aterrizajes o despegues:',
    'opciones': [
      'en todos los aeropuertos controlados por torres, independientemente de las condiciones meteorológicas.',
      'en todos los aeropuertos controlados por torres solo cuando las condiciones meteorológicas son inferiores a VFR.',
      'en todos los aeropuertos controlados por torres dentro del espacio aéreo Clase D solo cuando las condiciones climáticas son inferiores a VFR.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3625',
    'pregunta': '3625.- (Refiérase a la Figura 25, área 4). El espacio aéreo directamente sobre Fort Worth Meacham es:',
    'opciones': [
      'espacio aéreo Clase B hasta 10,000 pies MSL.',
      'espacio aéreo Clase C a 5,000 pies MSL.',
      'espacio aéreo Clase D a 3,200 pies MSL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [25],
  },
  {
    'numero': '3421',
    'pregunta': '3421.- (Refiérase a la Figura 59, área 3). El espacio aéreo directamente sobre la ciudad de Findlay es:',
    'opciones': [
      'espacio aéreo Clase E desde 700 pies AGL.',
      'área de superficie Espacio aéreo Clase E.',
      'espacio aéreo Clase E desde 1200 pies AGL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [59],
  },
  {
    'numero': '3068.1',
    'pregunta': '3068.1.- Con ciertas excepciones, el espacio aéreo de Clase E se extiende hacia arriba desde 700 pies o 1,200 pies AGL hasta, pero no incluye:',
    'opciones': [
      '10,000 pies MSL.',
      '14,500 pies MSL.',
      '18,000 pies MSL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3622',
    'pregunta': '3622.- (Consulte la Figura 26, área 1.) Identifique el espacio aéreo sobre el aeropuerto Tomlinson:',
    'opciones': [
      'espacio aéreo Clase G: superficie hasta, pero sin incluir, 18,000 pies MSL.',
      'espacio aéreo Clase G - superficie hasta, pero sin incluir, 1,200 pies AGL, espacio aéreo Clase E - 1,200 pies AGL hasta pero sin incluir 18,000 pies MSL.',
      'espacio aéreo de clase G: superficie hasta, pero sin incluir, 700 pies MSL, espacio aéreo de clase E: 700 pies a 14,500 pies MSL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [26],
  },
  {
    'numero': '3623',
    'pregunta': '3623.- (Refiérase a la Figura 26, área 5). El espacio aéreo suprayacente y dentro de las 5 millas del aeropuerto del condado de Barnes es:',
    'opciones': [
      'espacio aéreo Clase D desde la superficie hasta el piso del espacio aéreo Clase E suprayacente.',
      'espacio aéreo Clase E desde la superficie hasta 1,200 pies MSL.',
      'espacio aéreo Clase G desde la superficie hasta 700 pies AGL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [26],
  },
  {
    'numero': '3624',
    'pregunta': '3624.- (Refiérase a la figura 25, área 7.) El espacio aéreo sobre Collin Co RGL McKinney (TKI) se controla desde la superficie hasta:',
    'opciones': [
      '2,500 pies MSL.',
      '2,900 pies MSL.',
      '700 pies AGL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [25],
  },
  {
    'numero': '3602',
    'pregunta': '3602.- (Refiérase a la Figura 26, área 2.) ¿Qué peligros para las aeronaves pueden existir en áreas como Devils Lake East MOA?',
    'opciones': [
      'Peligros inusuales, a menudo invisibles, para las aeronaves, como disparos de artillería, artillería aérea o misiles guiados.',
      'Alto volumen de entrenamiento de pilotos o un tipo inusual de actividad aérea.',
      'Actividades de entrenamiento militar que requieran maniobras de vuelo acrobáticas o bruscas.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [26],
  },
  {
    'numero': '3783',
    'pregunta': '3783.- ¿Bajo qué condiciones, si las hay, pueden los pilotos volar a través de un área restringida?',
    'opciones': [
      'Al volar en aerovías con autorización ATC.',
      'Con autorización de la agencia controladora.',
      'Con el permiso del oficial de la base militar más cercana.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3783.1',
    'pregunta': '3783.1.- El vuelo a través de un área restringida no debe realizarse a menos que el piloto haya:',
    'opciones': [
      'presentado un plan de vuelo IFR.',
      'recibido autorización previa de la agencia controladora.',
      'recibido permiso previo del oficial al mando de la base militar más cercana.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3785',
    'pregunta': '3785.- ¿Qué acción debe tomar un piloto cuando opera bajo VFR en un Área de Operaciones Militares (MOA)?',
    'opciones': [
      'Obtenga una autorización de la agencia de control antes de ingresar al MOA.',
      'Opere solo en las vías respiratorias que atraviesan el MOA.',
      'Tenga mucho cuidado cuando se lleve a cabo una actividad militar.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3786',
    'pregunta': '3786.- La responsabilidad de evitar colisiones en un área de alerta recae en:',
    'opciones': [
      'la agencia controladora.',
      'todos los pilotos.',
      'control de tráfico aéreo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3130',
    'pregunta': '3130.- ¿En qué tipo de espacio aéreo están prohibidos los vuelos VFR?',
    'opciones': [
      'Clase A.',
      'Clase B.',
      'Clase C. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 7',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3530.1',
    'pregunta': '3530.1.- ¿Qué afirmación sobre la longitud y la latitud es verdadera?',
    'opciones': [
      'Las líneas de longitud son paralelas al Ecuador.',
      'Las líneas de longitud cruzan el Ecuador en ángulo recto.',
      'Las líneas de latitud de 0° pasa por Greenwich, Inglaterra.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3530',
    'pregunta': '3530.- (Refiérase a la Figura 20, área 3.) Determine la latitud y longitud aproximadas del aeropuerto de Currituck County Airport:',
    'opciones': [
      '36° 24\'N - 76° 01\'W.',
      '36° 48\'N ±76° 01\'W.',
      '47° 24\'N - 75° 58\'W.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [20],
  },
  {
    'numero': '3535',
    'pregunta': '3535.- (Refiérase a la Figura 21, área 2.) ¿Qué aeropuerto está ubicado aproximadamente a 47° 35\'30" N de latitud y 100° 43\'00" W de longitud?',
    'opciones': [
      'Turtle Lake.',
      'MAKEEFF.',
      'Johnson.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [21],
  },
  {
    'numero': '3536',
    'pregunta': '3536.- (Refiérase a la Figura 21, área 3.) ¿Qué aeropuerto está ubicado aproximadamente a 47° 21\'N de latitud y 101° 01\'W de longitud?',
    'opciones': [
      'Lorentzen.',
      'Johnson.',
      'Washburn.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [21],
  },
  {
    'numero': '3543',
    'pregunta': '3543.- (Refiérase a la Figura 22, área 3). Determine la latitud y longitud aproximadas del aeropuerto del Shoshone:',
    'opciones': [
      '47° 02\'N - 116° 11\'W.',
      '47° 33\'N - 116° 11\'W.',
      '47° 32\'N - 116° 41\'W.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [22],
  },
  {
    'numero': '3567',
    'pregunta': '3567.- (Refiérase a la Figura 26, área 2.) ¿Cuál es la latitud y longitud aproximadas del aeropuerto de Cooperstown?',
    'opciones': [
      '47° 25\'N - 98° 06\'W.',
      '47° 25\'N - 99° 54\'W.',
      '47° 55\'N - 98° 06\'W.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [26],
  },
  {
    'numero': '3571',
    'pregunta': '3571.- (Refiérase a la Figura 27). Una aeronave sale de un aeropuerto en la zona de horario de verano del este a las 0945 EDT para un vuelo de 2 horas a un aeropuerto ubicado en la zona de horario de verano central. ¿El aterrizaje debería ser en qué hora universal coordinada?',
    'opciones': [
      '1345Z.',
      '1445Z.',
      '1545Z. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 8',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [27],
  },
  {
    'numero': '3572',
    'pregunta': '3572.- (Refiérase a la Figura 27). Un avión sale de un aeropuerto en la zona horaria estándar central a las 0930 CST para un vuelo de 2 horas a un aeropuerto ubicado en la zona horaria estándar de la montaña (MST). ¿El aterrizaje debe ser a qué hora?',
    'opciones': [
      '0930 MST.',
      '1030 MST.',
      '1130 MST.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [27],
  },
  {
    'numero': '3573',
    'pregunta': '3573.- (Refiérase a la Figura 27.) Un avión sale de un aeropuerto en la zona horaria estándar central a las 0845 CST para un vuelo de 2 horas a un aeropuerto ubicado en la zona horaria estándar de la montaña. ¿El aterrizaje debería ser en qué hora universal coordinada?',
    'opciones': [
      '1345Z.',
      '1445Z.',
      '1645Z.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [27],
  },
  {
    'numero': '3574',
    'pregunta': '3574.- (Refiérase a la Figura 27.) Un avión sale de un aeropuerto en la zona horaria estándar de montaña a las 1615 MST para un vuelo de 2 horas y 15 minutos a un aeropuerto ubicado en la zona horaria estándar del Pacífico PST). La hora estimada de llegada al aeropuerto de destino debe ser:',
    'opciones': [
      '1630 PST.',
      '1730 PST.',
      '1830 PST.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [27],
  },
  {
    'numero': '3575',
    'pregunta': '3575.- (Refiérase a la Figura 27). Un avión sale de un aeropuerto en la zona horaria estándar del Pacífico a las 1030 PST para un vuelo de 4 horas a un aeropuerto ubicado en la zona horaria estándar central. ¿El aterrizaje debería ser en qué hora universal coordinada?',
    'opciones': [
      '2030Z.',
      '2130Z.',
      '2230Z.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [27],
  },
  {
    'numero': '3576',
    'pregunta': '3576.- (Refiérase a la Figura 27). Una aeronave sale de un aeropuerto en la zona horaria estándar de montaña a las 1515 MST para un vuelo de 2 horas y 30 minutos a un aeropuerto ubicado en la zona horaria estándar del Pacífico. ¿Cuál es la hora estimada de llegada al aeropuerto de destino?',
    'opciones': [
      '1645 PST.',
      '1745 PST.',
      '1845 PST.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [27],
  },
  {
    'numero': '3545',
    'pregunta': '3545.- (Refiérase a la Figura 22.) Determine el rumbo magnético para un vuelo desde el aeropuerto Sandpoint (área 1) al aeropuerto St. Maries (área 4). El viento es de 215° a 25 nudos y la velocidad aerodinámica real es de 125 nudos:',
    'opciones': [
      '172°.',
      '349°.',
      '187°.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [22],
  },
  {
    'numero': '3546',
    'pregunta': '3546.- (Refiérase a la Figura 22.) ¿Cuál es el rumbo magnético de un vuelo desde el aeropuerto Priest River (área 1) al aeropuerto del condado de Shoshone (área 3)? El viento es de 030° a 12 nudos y la velocidad real es de 95 nudos.',
    'opciones': [
      '121°.',
      '143°.',
      '136°.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [22],
  },
  {
    'numero': '3547',
    'pregunta': '3547.- (Refiérase a la figura 22.) Determine el rumbo magnético de un vuelo desde el aeropuerto St. Maries (área 4) hasta el aeropuerto Priest River (área 1). El viento es de 340° a 10 nudos y la velocidad aerodinámica real es de 90 nudos:',
    'opciones': [
      '345°.',
      '329°.',
      '327°.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [22],
  },
  {
    'numero': '3550',
    'pregunta': '3550.- (Refiérase a la Figura 23). Determine el rumbo magnético de un vuelo desde el aeropuerto del condado de Allendale (área 1) al aeropuerto del condado de Claxton-Evans (área 2). El viento es de 090° a 16 nudos, la velocidad real es de 90 nudos y la variación magnética es de 6 grados oeste:',
    'opciones': [
      '209°.',
      '230°.',
      '212°.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [23],
  },
  {
    'numero': '3550.1',
    'pregunta': '3550.1.- En un vuelo de travesía, el punto A se cruza a las 15.00 horas y el plan es llegar al punto B a las 15.30 horas. Utilice la siguiente información para determinar la velocidad aerodinámica indicada requerida para alcanzar el punto B según lo programado: Distancia entre A y B: 70 NM Pronóstico de viento: 310° a 15 kts Altitud de presión: 8.000 pies Temperatura ambiente: -10° C Rumbo verdadero: 270° La velocidad indicada requerida sería aproximadamente:',
    'opciones': [
      '126 nudos.',
      '137 nudos.',
      '152 nudos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3564',
    'pregunta': '3564.- (Refiérase a la Figura 25.) Determine el rumbo magnético para un vuelo desde Dallas Executive (área 3) a Fort Worth Meacham (área 4). El viento es de 030° a 10 nudos, la velocidad real es de 135 nudos y la variación magnética es de 7° este:',
    'opciones': [
      '266°.',
      '286°.',
      '312°.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [25],
  },
  {
    'numero': '3564.1',
    'pregunta': '3564.1.- (Refiérase a la Figura 75.) ¿Cuál es el tiempo en ruta desde Gila Bend VORTAC hasta Buckeye VOR a lo largo de V461 a un TAS de 125 nudos y vientos pronosticados de 180 a 17 nudos?',
    'opciones': [
      'Aproximadamente 14 minutos.',
      'Aproximadamente 15 minutos.',
      'Aproximadamente 13 minutos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [75],
  },
  {
    'numero': '3564.2',
    'pregunta': '3564.2.- (Refiérase a la Figura 21). ¿Cuál es el tiempo estimado en ruta desde el Aeropuerto Regional del Condado de Mercer (área 3) hasta Minot International (área 1)? El viento es de 330 ° a 25 nudos y la velocidad real es de 100 nudos. Agregue 3-1 / 2 minutos para la salida y el ascenso:',
    'opciones': [
      '47 minutos.',
      '44 minutos.',
      '52 minutos.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [21],
  },
  {
    'numero': '3599',
    'pregunta': '3599.- (Refiérase a la Figura 25, área 4). El piso del espacio aéreo Clase B que cubre el Aeropuerto Hicks (T67) al norte-noroeste de Fort Worth Meacham Field es:',
    'opciones': [
      'en la superficie.',
      '3,200 pies MSL.',
      '4000 pies MSL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [25],
  },
  {
    'numero': '3600',
    'pregunta': '3600.- (Refiérase a la Figura 25, área 2). El piso del espacio aéreo Clase B en el aeropuerto de Addison es:',
    'opciones': [
      'en la superficie.',
      '3,000 pies MSL.',
      '3,100 pies MSL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [25],
  },
  {
    'numero': '3126',
    'pregunta': '3126.- ¿Qué licencia mínima de piloto se requiere para operar dentro del espacio aéreo de Clase B?',
    'opciones': [
      'Licencia de piloto comercial.',
      'Licencia de piloto privado o licencia de alumno piloto con las correspondientes aprobaciones del libro de vuelo.',
      'Certificado de piloto privado con habilitación de instrumentos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3128',
    'pregunta': '3128.- ¿Qué equipo de radio mínimo se requiere para la operación VFR dentro del espacio aéreo de Clase B?',
    'opciones': [
      'Equipo de radiocomunicación bidireccional y transpondedor de código 4096.',
      'Equipo de comunicaciones por radio bidireccional, un transpondedor de código 4096 y un altímetro codificador.',
      'Equipo de radiocomunicación bidireccional, un transpondedor de código 4096, un altímetro codificador y un receptor VOR o TACAN.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3628',
    'pregunta': '3628.- (Refiérase a la Figura 25.) ¿En qué aeropuertos no están autorizados los VFR especiales de ala fija?',
    'opciones': [
      'Fort Worth Meacham y Fort Worth Spinks.',
      'Dallas-Fort Worth International y Dallas Love Field.',
      'Addison y el ejecutivo de Dallas.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [25],
  },
  {
    'numero': '3117',
    'pregunta': '3117.- ¿Un círculo azul segmentado en un gráfico seccional muestra qué clase de espacio aéreo?',
    'opciones': [
      'Clase B.',
      'Clase C.',
      'Clase D.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3118',
    'pregunta': '3118.- El espacio aéreo en un aeropuerto con una torre de control a tiempo parcial se clasifica como espacio aéreo de Clase D únicamente:',
    'opciones': [
      'cuando los mínimos climáticos están por debajo del VFR básico.',
      'cuando la torre de control asociada está en funcionamiento.',
      'cuando la estación de servicio de vuelo asociada esté en funcionamiento',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3787',
    'pregunta': '3787.- Las dimensiones laterales del espacio aéreo Clase D se basan en:',
    'opciones': [
      'el número de aeropuertos que se encuentran dentro del espacio aéreo de Clase D.',
      '5 millas terrestres del centro geográfico del aeropuerto principal.',
      'los procedimientos instrumentales para los cuales se establece el espacio aéreo controlado.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3787.1',
    'pregunta': '3787.1.- Cuando una torre de control, ubicada en un aeropuerto dentro del espacio aéreo de Clase D, deja de funcionar durante el día, ¿qué sucede con la designación del espacio aéreo?',
    'opciones': [
      'La designación del espacio aéreo normalmente no cambiará.',
      'El espacio aéreo sigue siendo espacio aéreo de Clase D siempre que haya disponible un observador meteorológico o un sistema meteorológico automatizado. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 12',
      'El espacio aéreo se revierte a Clase E o una combinación de espacio aéreo de Clase E y G durante las horas que la torre no está en operación.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3799',
    'pregunta': '3799.- ¿Qué acción inicial debe tomar un piloto antes de ingresar al espacio aéreo Clase C?',
    'opciones': [
      'Póngase en contacto con el control de aproximación en la frecuencia adecuada.',
      'Comuníquese con la torre y solicite permiso para ingresar.',
      'Comuníquese con el FSS para recibir avisos de tráfico.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3779',
    'pregunta': '3779.- El límite vertical del espacio aéreo Clase C por encima del aeropuerto principal es normalmente:',
    'opciones': [
      '1,200 pies AGL.',
      '3,000 pies AGL.',
      '4,000 pies AGL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3780',
    'pregunta': '3780.- El radio del área exterior procesal del espacio aéreo de Clase C es normalmente:',
    'opciones': [
      '10 NM.',
      '20 NM.',
      '30 NM. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 13',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasVueloRuta = preguntasVueloRuta;
