// SERVICIO METEOROLÓGICO - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app; [] si no requiere imagen.

const preguntasServicioMetereologico = [
  {
    'numero': '3464',
    'pregunta': '3464.- (Refiérase a la Figura 12.) La dirección y velocidad del viento en KJFK es de:',
    'opciones': [
      '180° verdadero a 4 nudos.',
      '180° magnético a 4 nudos.',
      '040° verdadero a 18 nudos.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [12],
  },
  {
    'numero': '3465',
    'pregunta': '3465.- (Refiérase a la Figura 12). ¿Cuáles son las condiciones del viento en Wink, Texas (KINK)?',
    'opciones': [
      'Calma.',
      '110° a 12 nudos, ráfagas de 18 nudos.',
      '111° a 2 nudos, ráfagas de 18 nudos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [12],
  },
  {
    'numero': '3466',
    'pregunta': '3466.- (Refiérase a la Figura 12). La sección de comentarios para KMDW tiene RAB35 en la lista. Esta entrada significa:',
    'opciones': [
      'la niebla que sopla ha reducido la visibilidad a 1-1 / 2 SM.',
      'la lluvia comenzó a las 1835Z.',
      'el barómetro ha subido .35" Hg.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [12],
  },
  {
    'numero': '3467',
    'pregunta': '3467.- (Refiérase a la Figura 12.) ¿Cuáles son las condiciones actuales representadas para el Aeropuerto Midway de Chicago (KMDW)?',
    'opciones': [
      'Cielo 700 pies cubierto, visibilidad 1-1 / 2 SM, lluvia.',
      'Cielo 7000 pies cubierto, visibilidad 1-1 / 2 SM, lluvia intensa.',
      'Cielo 700 pies cubierto, visibilidad 11, ocasionalmente 2 SM, con lluvia.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [12],
  },
  {
    'numero': '3472',
    'pregunta': '3472.- (Refiérase a la Figura 14.) La base y la parte superior de la capa nublada informada por un piloto, son:',
    'opciones': [
      '1,800 pies MSL y 5,500 pies MSL.',
      '5,500 pies AGL y 7,200 pies MSL.',
      '7,200 pies MSL y 8,900 pies MSL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [14],
  },
  {
    'numero': '3473',
    'pregunta': '3473.- (Refiérase a la Figura 14.) El viento y la temperatura a 12,000 pies MSL según lo informado por un piloto son:',
    'opciones': [
      '090° a 21 MPH y -9° F.',
      '090° a 21 nudos y -9° C.',
      '080° a 21 nudos y -7° C.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [14],
  },
  {
    'numero': '3474',
    'pregunta': '3474.- (Refiérase a la Figura 14.) Si la elevación del terreno es de 1,295 pies MSL, ¿cuál es la altura sobre el nivel del suelo de la base del techo?',
    'opciones': [
      '505 pies AGL.',
      '1,295 pies AGL.',
      '6,586 pies AGL.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [14],
  },
  {
    'numero': '3475',
    'pregunta': '3475.- (Refiérase a la Figura 14.) La intensidad de la turbulencia notificada a una altitud específica es:',
    'opciones': [
      'moderada de 5.500 pies a 7.200 pies.',
      'moderada a 5.500 pies y a 7.200 pies.',
      'luz de 5,500 pies a 7,200 pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [14],
  },
  {
    'numero': '3476',
    'pregunta': '3476.- (Refiérase a la Figura 14.) La intensidad y el tipo de engelamiento informado por un piloto es:',
    'opciones': [
      'ligero a moderado.',
      'escarcha ligera a moderada.',
      'claro a moderado claro.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [14],
  },
  {
    'numero': '3479',
    'pregunta': '3479.- (Refiérase a la Figura 15.) ¿Cuál es el período válido para el TAF para KMEM?',
    'opciones': [
      '12 de 1800Z a 13 de 2400Z.',
      '12 a las 1700Z.',
      '1218Z a 1324Z.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [15],
  },
  {
    'numero': '3480',
    'pregunta': '3480.- (Refiérase a la Figura 15.) En TAF para KMEM, ¿qué significa "SHRA"?',
    'opciones': [
      'Chubascos de lluvia.',
      'Se espera un cambio en la dirección del viento.',
      'Es posible un cambio significativo en la precipitación.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [15],
  },
  {
    'numero': '3481',
    'pregunta': '3481.- (Refiérase la Figura 15.) Entre las 1000Z y las 1200Z, se prevé que la visibilidad en KMEM sea:',
    'opciones': [
      '1/2 milla terrestre.',
      '3 millas terrestres.',
      '6 millas terrestres.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [15],
  },
  {
    'numero': '3482',
    'pregunta': '3482.- (Refiérase a la Figura 15.) ¿Cuál es el viento pronosticado para KMEM desde las 1600Z hasta el final del pronóstico?',
    'opciones': [
      'Sin viento significativo.',
      'Variable en dirección a 4 nudos.',
      'Variable en dirección a 6 nudos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [15],
  },
  {
    'numero': '3483',
    'pregunta': '3483.- (Refiérase a la Figura 15.) En el TAF de KOKC, el "Grupo FM (FROM)" se pronostica para las horas de 1600Z a 2200Z con el viento de:',
    'opciones': [
      '160° a 10 nudos. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 2',
      '180° a 10 nudos, convirtiéndose en 200 ° a 13 nudos.',
      '180° a 10 nudos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [15],
  },
  {
    'numero': '3484',
    'pregunta': '3484.- (Refiérase a la Figura 15.) En el TAF de KOKC, el cielo despejado se vuelve:',
    'opciones': [
      'nublado a 2,000 pies durante el período de pronóstico entre 2200Z y 2400Z.',
      'nublado a 200 pies con un 40% de probabilidad de estar nublado a 600 pies durante el período de pronóstico entre 2200Z y 2400Z.',
      'nublado a 200 pies con la probabilidad de volverse nublado a 400 pies durante el período de pronóstico entre 2200Z y 2400Z.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [15],
  },
  {
    'numero': '3485',
    'pregunta': '3485.- (Refiérase a la Figura 15.) Durante el período de tiempo de 0600Z a 0800Z, ¿qué visibilidad se prevé para KOKC?',
    'opciones': [
      'Más de 6 millas terrestres.',
      'No pronosticado.',
      'Posiblemente 6 millas terrestres.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [15],
  },
  {
    'numero': '3486',
    'pregunta': '3486.- (Consulte la Figura 15.) El único pronóstico de tipo de nube en los informes TAF es:',
    'opciones': [
      'nimboestrato.',
      'cumulonimbo.',
      'cúmulos dispersos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [15],
  },
  {
    'numero': '3500',
    'pregunta': '3500.- (Refiérase a la Figura 17.) ¿Qué viento se pronostica para STL a 9,000 pies?',
    'opciones': [
      '230° verdadero a 32 nudos.',
      '230° magnético a 25 nudos.',
      '230° verdadero a 25 nudos.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [17],
  },
  {
    'numero': '3501',
    'pregunta': '3501.- (Refiérase a la Figura 17.) ¿Qué viento se pronostica para STL a 12,000 pies?',
    'opciones': [
      '230° verdadero a 56 nudos.',
      '230° magnético a 56 nudos.',
      '230° verdadero a 39 nudos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [17],
  },
  {
    'numero': '3502',
    'pregunta': '3502.- (Refiérase a la Figura 17.) Determine el pronóstico de viento y temperatura en altura para DEN a 9,000 pies:',
    'opciones': [
      '230° magnético a 53 nudos, temperatura 47 ° C.',
      '230° verdadero a 53 nudos, temperatura -47 ° C.',
      '230° verdadero a 21 nudos, temperatura -4° C.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [17],
  },
  {
    'numero': '3503',
    'pregunta': '3503.- (Refiérase a la Figura 17.) Determine el pronóstico de viento y temperatura en altura para MKC a 6,000 pies:',
    'opciones': [
      '200° verdadero a 6 nudos, temperatura +3° C. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 3',
      '050° verdadero a 7 nudos, falta la temperatura.',
      '200° magnético a 6 nudos, temperatura +3° C.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [17],
  },
  {
    'numero': '3505',
    'pregunta': '3505.- ¿Qué valores se utilizan para los pronósticos de Winds Aloft?',
    'opciones': [
      'Dirección magnética y nudos.',
      'Dirección magnética y millas por hora.',
      'Dirección verdadera y nudos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3462',
    'pregunta': '3462.- (Refiérase la Figura 12.) ¿Cuáles de las estaciones de informes tienen condiciones meteorológicas VFR?',
    'opciones': [
      'Todas.',
      'KINK, KBOI y KJFK.',
      'KINK, KBOI y KLAX.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [12],
  },
  {
    'numero': '3463',
    'pregunta': '3463.- Para fines de aviación, el techo se define como la altura sobre la superficie terrestre de:',
    'opciones': [
      'el oscurecimiento más bajo reportado y la capa más alta de nubes reportada como nublada.',
      'capa más baja rota o nublada o visibilidad vertical en un oscurecimiento.',
      'capa más baja de nubes reportada como dispersa, rota o delgada.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3506',
    'pregunta': '3506.- Cuando el término \'ligero y variable\' se usa en referencia a un pronóstico de vientos en altura, el grupo codificado y la velocidad del viento son:',
    'opciones': [
      '0000 y menos de 7 nudos.',
      '9900 y menos de 5 nudos.',
      '9999 y menos de 10 nudos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3495',
    'pregunta': '3495.- ¿Qué se indica cuando un SIGMET CONVECTIVO actual pronostica tormentas eléctricas?',
    'opciones': [
      'Tormentas eléctricas moderadas que cubren el 30 por ciento del área.',
      'Turbulencia moderada o severa.',
      'Tormentas eléctricas oscurecidas por capas masivas de nubes.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3496',
    'pregunta': '3496.- ¿Qué información contiene un SIGMET CONVECTIVO?',
    'opciones': [
      'Tornados, tormentas eléctricas incrustadas y granizo de 3/4 de pulgada o más de diámetro.',
      'Engelamiento severo, turbulencia severa o tormentas de polvo generalizadas que reducen la visibilidad a menos de 3 millas.',
      'Vientos en la superficie superiores a 40 nudos o tormentas eléctricas iguales o superiores al nivel 4 del procesador integrador de vídeo (VIP). DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 4',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3497',
    'pregunta': '3497.- ¿Los SIGMET se emiten como una advertencia de condiciones climáticas peligrosas para qué aeronave?',
    'opciones': [
      'Solo aviones pequeños.',
      'Solo aviones grandes.',
      'Todos los aviones.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3498',
    'pregunta': '3498.- ¿Qué aviso en vuelo contendría información sobre engelamiento severo no asociado con tormentas eléctricas?',
    'opciones': [
      'SIGMET convectivo.',
      'SIGMET.',
      'AIRMET.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3499',
    'pregunta': '3499.- Los AIRMET son avisos de fenómenos meteorológicos significativos pero de menor intensidad que los SIGMET y están destinados a su difusión a:',
    'opciones': [
      'solo pilotos IFR.',
      'todos los pilotos.',
      'solo pilotos VFR.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3455',
    'pregunta': '3455.- Al llamar por teléfono a un centro de información meteorológica para obtener información meteorológica previa al vuelo, los pilotos deben indicar:',
    'opciones': [
      'si tienen la intención de volar VFR solamente.',
      'que poseen un certificado de piloto vigente.',
      'el nombre completo y la dirección del comandante de la formación.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3456',
    'pregunta': '3456.- Para obtener un informe meteorológico completo para el vuelo planificado, el piloto debe solicitar:',
    'opciones': [
      'un briefing general.',
      'un briefing abreviado.',
      'un briefing estándar.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3457',
    'pregunta': '3457.- ¿Qué tipo de información meteorológica debe solicitar un piloto, al partir dentro de una hora, si no se ha recibido información meteorológica preliminar?',
    'opciones': [
      'Informe de pronóstico.',
      'Briefing abreviado.',
      'Briefing estándar.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3458',
    'pregunta': '3458.- ¿Qué tipo de información meteorológica debería solicitar un piloto para complementar los datos difundidos masivamente?',
    'opciones': [
      'Un informe de perspectivas.',
      'Una sesión informativa complementaria.',
      'Una sesión informativa abreviada. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 5',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3459',
    'pregunta': '3459.- Para actualizar un informe meteorológico anterior, un piloto debe solicitar:',
    'opciones': [
      'un briefing abreviado.',
      'un briefing estándar.',
      'un briefing sobre el pronóstico.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3460',
    'pregunta': '3460.- Se proporciona un informe meteorológico que se proporciona cuando la información solicitada es 6 o más horas antes de la hora de salida propuesta:',
    'opciones': [
      'un briefing de pronóstico.',
      'un informe de previsión.',
      'un briefing estándar.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3461',
    'pregunta': '3461.- Al solicitar información meteorológica para la mañana siguiente, un piloto debe solicitar:',
    'opciones': [
      'un briefing sobre el pronóstico.',
      'un briefing estándar.',
      'un briefing abreviado.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3526',
    'pregunta': '3526.- ¿Qué deben indicar los pilotos inicialmente al llamar por teléfono a un centro de información meteorológica para obtener información meteorológica previa al vuelo?',
    'opciones': [
      'La ruta prevista de las frecuencias de radio de vuelo.',
      'La dirección del piloto al mando.',
      'La ruta prevista de vuelo y destino.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3527',
    'pregunta': '3527.- ¿Qué deben indicar los pilotos inicialmente al llamar por teléfono a un centro de información meteorológica para obtener información meteorológica previa al vuelo?',
    'opciones': [
      'Indique el número de ocupantes a bordo.',
      'Identificarse como pilotos.',
      'Indique su tiempo total de vuelo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3528',
    'pregunta': '3528.- Al llamar por teléfono a un centro de información meteorológica para obtener información meteorológica previa al vuelo, los pilotos deben indicar:',
    'opciones': [
      'la identificación de la aeronave o el nombre del piloto.',
      'verdadera velocidad aérea.',
      'combustible a bordo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3528.1',
    'pregunta': '3528.1.- Cuando hable con un servicio de vuelo más breve sobre el clima, debe indicar:',
    'opciones': [
      'el nombre completo y la dirección del piloto al mando.',
      'un resumen de sus calificaciones. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 6',
      'si el vuelo es VFR o IFR. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 7',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasServicioMetereologico = preguntasServicioMetereologico;
