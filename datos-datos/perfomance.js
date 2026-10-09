// PERFORMANCE - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app; [] si no requiere imagen.

const preguntasPerfomance = [
  {
    'numero': '3663.1',
    'pregunta': '3663.1.- (Refiérase a la figura 61.) Si 50 libras de peso están ubicadas en el punto X y 100 libras en el punto Z, ¿cuánto peso debe ubicarse en el punto Y para equilibrar la tabla?',
    'opciones': [
      '30 libras.',
      '50 libras.',
      '300 libras.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [61],
  },
  {
    'numero': '3663.2',
    'pregunta': '3663.2.- (Refiérase a la Figura 60.) ¿Cómo se debe cambiar el peso de 500 libras para equilibrar la tabla en el fulcro?',
    'opciones': [
      '1 pulgada a la izquierda.',
      '1 pulgada a la derecha.',
      '4.5 pulgadas a la derecha.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [60],
  },
  {
    'numero': '3815',
    'pregunta': '3815.- (Refiérase a la Figura 67). ¿Qué efecto tiene un consumo de combustible de 30 galones en el peso y el equilibrio si el avión pesaba 2,784 libras y el MOM / 100 era de 2,222 en el despegue?',
    'opciones': [
      'Sin efecto sobre el CG.',
      'El momento aumentará a 2,357 libras-pulg.',
      'El momento disminuirá a 2,087 libras-pulg.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [67],
  },
  {
    'numero': '3661',
    'pregunta': '3661.- ¿Qué elementos se incluyen en el peso vacío de un avión?',
    'opciones': [
      'Combustible inutilizable y aceite no drenable.',
      'Solo el fuselaje, el motor y el equipo opcional.',
      'Tanques de combustible llenos y aceite de motor al máximo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3662',
    'pregunta': '3662.- Una aeronave se carga 110 libras por encima del peso bruto máximo certificado. Si se drena combustible para llevar el peso de la aeronave dentro de los límites, ¿cuánto combustible se debe drenar?',
    'opciones': [
      '15.7 galones.',
      '16.2 galones.',
      '18.4 galones.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3663',
    'pregunta': '3663.- Si una aeronave se carga 90 libras por encima del peso bruto máximo certificado y se drena combustible para llevar el peso de la aeronave dentro de los límites, ¿cuánto combustible se debe drenar?',
    'opciones': [
      '10 galones.',
      '12 galones.',
      '15 galones. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 1',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3664',
    'pregunta': '3664.- DADO: ¿A qué distancia de la referencia se encuentra el CG?',
    'opciones': [
      'CG 92.44.',
      'CG 94.01.',
      'CG 119.8',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3289',
    'pregunta': '3289.- Si la temperatura del aire exterior (OAT) a una altitud determinada es más cálida que la estándar, la altitud de densidad es:',
    'opciones': [
      'igual a la altitud de presión.',
      'menor que la altitud de presión.',
      'mayor que la altitud de presión.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3294',
    'pregunta': '3294.- (Refiérase a la Figura 8.) Determine la altitud de densidad para estas condiciones: Ajuste del altímetro 29.25 Temperatura de la pista + 81° F Elevación del aeropuerto 5,250 pies MSL',
    'opciones': [
      '4.600 pies MSL.',
      '5.877 pies MSL.',
      '8.500 pies MSL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [8],
  },
  {
    'numero': '3295',
    'pregunta': '3295.- (Refiérase a la Figura 8). Determine la altitud de presión en un aeropuerto a 3563 pies MSL con un ajuste de altímetro de 29.96:',
    'opciones': [
      '3,527 pies MSL.',
      '3,556 pies MSL.',
      '3,639 pies MSL.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [8],
  },
  {
    'numero': '3298',
    'pregunta': '3298.- (Refiérase a la Figura 8.) Determine la altitud de densidad para estas condiciones: Ajuste del altímetro 30.35 Temperatura de la pista + 25° F Elevación del aeropuerto 3,894 pies MSL',
    'opciones': [
      '2,000 pies MSL.',
      '2,900 pies MSL.',
      '3,500 pies MSL.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [8],
  },
  {
    'numero': '3299',
    'pregunta': '3299.- (Refiérase a la Figura 8.) ¿Cuál es el efecto de una disminución de la temperatura y un aumento de la altitud de presión sobre la altitud de densidad de 90° F y 1,250 pies de altitud de presión a 55° F y 1,750 pies de altitud de presión?',
    'opciones': [
      'Aumenta 1,700 pies.',
      'Disminuye 1.300 pies.',
      'Disminuye 1.700 pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [8],
  },
  {
    'numero': '3386',
    'pregunta': '3386.- ¿Cuáles son los valores estándar de temperatura y presión para el nivel del mar?',
    'opciones': [
      '15° C y 29.92" Hg.',
      '59° C y 1,013.2 milibares.',
      '59° F y 29.92 milibares.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3394',
    'pregunta': '3394.- ¿Qué factor tendería a incrementar la altitud de densidad en un aeropuerto dado?',
    'opciones': [
      'Un aumento de la presión barométrica.',
      'Un aumento de la temperatura ambiente.',
      'Disminución de la humedad relativa.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3290',
    'pregunta': '3290.- ¿Qué combinación de condiciones atmosféricas reducirá el despegue y el ascenso de la aeronave?',
    'opciones': [
      'Baja temperatura, baja humedad relativa y altitud de baja densidad.',
      'Alta temperatura, baja humedad relativa y altitud de baja densidad.',
      'Alta temperatura, alta humedad relativa y altitud de alta densidad.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3291',
    'pregunta': '3291.- ¿Qué efecto tiene la altitud de alta densidad en el rendimiento de la aeronave?',
    'opciones': [
      'Aumenta el rendimiento del motor.',
      'Reduce el rendimiento de ascenso.',
      'Aumenta el rendimiento de despegue.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3292',
    'pregunta': '3292.- (Refiérase a la Figura 8.) ¿Cuál es el efecto de un aumento de temperatura de 25 a 50° F en la altitud de densidad si la altitud de presión permanece en 5,000 pies?',
    'opciones': [
      'Aumento de 1,200 pies.',
      'Aumento de 1.400 pies.',
      'Aumento de 1,650 pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [8],
  },
  {
    'numero': '3293',
    'pregunta': '3293.- (Refiérase a la Figura 8.) Determine la altitud de presión con una altitud indicada de 1,380 pies MSL con un ajuste de altímetro de 28.22 a temperatura estándar:',
    'opciones': [
      '2,991 pies MSL.',
      '2,913 pies MSL.',
      '3,010 pies MSL.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [8],
  },
  {
    'numero': '3296',
    'pregunta': '3296.- (Refiérase a la Figura 8.) ¿Cuál es el efecto de un aumento de temperatura de 35 a 50° F en la altitud de densidad si la altitud de presión permanece a 3,000 pies MSL?',
    'opciones': [
      'Aumento de 1,000 pies.',
      'Disminución de 1,100 pies.',
      'Aumento de 1,300 pies. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 3',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [8],
  },
  {
    'numero': '3297',
    'pregunta': '3297.- (Refiérase a la Figura 8.) Determine la altitud de presión en un aeropuerto que está a 1,386 pies MSL con un ajuste de altímetro de 29.97:',
    'opciones': [
      '1,341 pies MSL.',
      '1,451 pies MSL.',
      '1,562 pies MSL.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [8],
  },
  {
    'numero': '3300',
    'pregunta': '3300.- ¿Qué efecto, si lo hay, tiene la alta humedad en el rendimiento de la aeronave?',
    'opciones': [
      'Aumenta el rendimiento.',
      'Disminuye el rendimiento.',
      'No tiene ningún efecto sobre el rendimiento.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3246',
    'pregunta': '3246.- ¿Qué efecto tiene la altitud de alta densidad, en comparación con la altitud de baja densidad, sobre la eficiencia de la hélice y por qué?',
    'opciones': [
      'La eficiencia aumenta debido a la menor fricción en las palas de la hélice.',
      'La eficiencia se reduce porque la hélice ejerce menos fuerza en altitudes de alta densidad que en altitudes de baja densidad.',
      'La eficiencia se reduce debido al aumento de la fuerza de la hélice en el aire más delgado.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3705',
    'pregunta': '3705.- (Refiérase a la Figura 40). Determine la distancia total requerida para el despegue para despejar un obstáculo de 50 pies: OAT: Std Altitud de presión: 4000 pies Peso de despegue: 2.800 lb Viento Calma',
    'opciones': [
      '1,500 pies.',
      '1,750 pies.',
      '2,000 pies.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [40],
  },
  {
    'numero': '3706',
    'pregunta': '3706.- (Refiérase a la Figura 40). Determine la distancia total requerida para el despegue para despejar un obstáculo de 50 pies: OAT: Std Altitud de presión: Nivel del mar Peso de despegue: 2,700 lb Viento Calma',
    'opciones': [
      '1,000 pies.',
      '1,400 pies.',
      '1,700 pies. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 4',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [40],
  },
  {
    'numero': '3707',
    'pregunta': '3707.- (Refiérase a la Figura 40). Determine la distancia aproximada de carrera sobre el terreno requerida para el despegue: OAT 100 ° F Altitud de presión 2,000 pies Peso de despegue 2,750 lb Viento Calma',
    'opciones': [
      '1,150 pies.',
      '1.300 pies.',
      '1.800 pies.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [40],
  },
  {
    'numero': '3708',
    'pregunta': '3708.- (Refiérase a la Figura 40). Determine la distancia aproximada de carrera sobre el terreno requerida para el despegue: OAT: 95° F Altitud de presión: 2,000 pies Peso de despegue: 2500 lb Viento: 20 nudos',
    'opciones': [
      '650 pies.',
      '850 pies.',
      '1,000 pies.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [40],
  },
  {
    'numero': '3678',
    'pregunta': '3678.- (Refiérase a la Figura 35.) ¿Aproximadamente qué velocidad aerodinámica real debería esperar un piloto con el acelerador a fondo a 10,500 pies con una temperatura de 36 grados F por encima del estándar?',
    'opciones': [
      '190 nudos.',
      '159 nudos.',
      '165 nudos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [35],
  },
  {
    'numero': '3679',
    'pregunta': '3679.- (Refiérase a la Figura 35). ¿Cuál es el consumo de combustible esperado para un vuelo de 1000 millas náuticas en las siguientes condiciones? Altitud de presión: 8.000 pies Temperatura: 22 ° C Presión: 20,8" Hg Viento Calma',
    'opciones': [
      '60,2 galones.',
      '70,1 galones.',
      '73,2 galones.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [35],
  },
  {
    'numero': '3680',
    'pregunta': '3680.- (Refiérase a la Figura 35.) ¿Cuál es el consumo de combustible esperado para un vuelo de 500 millas náuticas en las siguientes condiciones? Altitud de presión: 4000 pies Temperatura: + 29° C Viento Calma',
    'opciones': [
      '31.4 galones.',
      '36.1 galones.',
      '40.1 galones. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 5',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [35],
  },
  {
    'numero': '3681',
    'pregunta': '3681.- (Refiérase a la Figura 35.) ¿Qué flujo de combustible debe esperar un piloto a 11,000 pies en un día estándar con 65 por ciento de potencia continua máxima?',
    'opciones': [
      '10.6 galones por hora.',
      '11.2 galones por hora.',
      '11.8 galones por hora.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [35],
  },
  {
    'numero': '3682',
    'pregunta': '3682.- (Refiérase a la Figura 35). Determine el ajuste aproximado de presión con 2,450 RPM para lograr un 65 por ciento de potencia continua máxima a 6,500 pies con una temperatura de 36° F más alta que la estándar:',
    'opciones': [
      '19.8" Hg.',
      '20.8" Hg.',
      '21.0" Hg.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [35],
  },
  {
    'numero': '3698',
    'pregunta': '3698.- (Refiérase a la Figura 38). Determine la distancia aproximada para de aterrizaje: Altitud de presión: 1,250 pies Viento: 8 nudos Temperatura: estándar',
    'opciones': [
      '275 pies.',
      '366 pies.',
      '470 pies.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [38],
  },
  {
    'numero': '3689',
    'pregunta': '3689.- (Refiérase a la Figura 37). Determine la distancia total requerida para aterrizar: OAT 32° F Altitud de presión 8,000 pies Peso 2,600 lb Viento 20 nudos Obstáculo 50 pies',
    'opciones': [
      '850 pies.',
      '1,400 pies.',
      '1,750 pies.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [37],
  },
  {
    'numero': '3690',
    'pregunta': '3690.- (Refiérase a la Figura 37). Determine la distancia total requerida para aterrizar: OAT: Std Altitud de presión: 10,000 pies Peso: 2,400 lb Componente de viento: Calma Obstáculo: 50 pies',
    'opciones': [
      '750 pies.',
      '1,925 pies.',
      '1,450 pies. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 6',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [37],
  },
  {
    'numero': '3691',
    'pregunta': '3691.- (Refiérase a la Figura 37). Determine la distancia total requerida para aterrizar: OAT: 90° F Altitud de presión: 3000 pies Peso: 2,900 lb Viento: 10 nudos Obstáculo: 50 pies',
    'opciones': [
      '1,450 pies.',
      '1,550 pies.',
      '1,725 ¿¿pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [37],
  },
  {
    'numero': '3692',
    'pregunta': '3692.- (Refiérase a la Figura 37). Determine la distancia total aproximada requerida para aterrizar sobre un obstáculo de 50 pies: OAT: 90 ° F Altitud de presión: 4000 pies Peso 2.800 lb Viento: 10 nudos',
    'opciones': [
      '1,525 pies.',
      '1,775 pies.',
      '1,950 pies.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [37],
  },
  {
    'numero': '3693',
    'pregunta': '3693.- (Refiérase a la Figura 38). Determine la distancia aproximada de aterrizaje: Altitud de presión: Nivel del mar Viento: 4 nudos Temperatura: estándar',
    'opciones': [
      '356 pies.',
      '401 pies.',
      '490 pies.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [38],
  },
  {
    'numero': '3694',
    'pregunta': '3694.- (Refiérase a la Figura 38). Determine la distancia total requerida para aterrizar sobre un obstáculo de 50 pies: Altitud de presión: 7,500 pies Viento: 8 nudos Temperatura: 32° F',
    'opciones': [
      '1,004 pies.',
      '1,205 pies.',
      '1,506 pies.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [38],
  },
  {
    'numero': '3695',
    'pregunta': '3695.- (Refiérase a la Figura 38). Determine la distancia total requerida para aterrizar sobre un obstáculo de 50 pies: Altitud de presión: 5,000 pies Viento: 8 nudos Temperatura: 41° F',
    'opciones': [
      '837 pies.',
      '956 pies.',
      '1,076 pies. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 7',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [38],
  },
  {
    'numero': '3696',
    'pregunta': '3696.- (Refiérase a la Figura 38). Determine la distancia aproximada de aterrizaje: Altitud de presión: 5,000 pies Viento: calma Temperatura: 101° F',
    'opciones': [
      '495 pies.',
      '545 pies.',
      '445 pies.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [38],
  },
  {
    'numero': '3697',
    'pregunta': '3697.- (Consulte la Figura 38). Determine la distancia total requerida para aterrizar sobre un obstáculo de 50 pies: Altitud de presión: 3750 pies Viento: 12 nudos Temperatura: estándar',
    'opciones': [
      '794 pies.',
      '836 pies.',
      '816 pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [38],
  },
  {
    'numero': '3688',
    'pregunta': '3688.- (Refiérase a la Figura 36.) ¿Cuál es el componente de viento cruzado para un aterrizaje en la Pista 18 si la torre informa que el viento es de 220° a 30 nudos?',
    'opciones': [
      '19 nudos.',
      '23 nudos.',
      '30 nudos.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [36],
  },
  {
    'numero': '3683',
    'pregunta': '3683.- (Refiérase a la Figura 36.) ¿Cuál es el componente de viento en contra para un aterrizaje en la Pista 18 si la torre informa que el viento es de 220° a 30 nudos?',
    'opciones': [
      '19 nudos.',
      '23 nudos.',
      '26 nudos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [36],
  },
  {
    'numero': '3684',
    'pregunta': '3684.- (Refiérase a la Figura 36). Determine la velocidad máxima del viento para un viento cruzado de 45° si la componente máxima del viento cruzado para el avión es de 25 nudos:',
    'opciones': [
      '25 nudos.',
      '29 nudos.',
      '35 nudos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [36],
  },
  {
    'numero': '3685',
    'pregunta': '3685.- (Refiérase a la Figura 36.) ¿Cuál es la velocidad máxima del viento para un viento cruzado de 30° si la componente máxima del viento cruzado para el avión es de 12 nudos?',
    'opciones': [
      '16 nudos.',
      '20 nudos.',
      '24 nudos. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 8',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [36],
  },
  {
    'numero': '3686',
    'pregunta': '3686.- (Refiérase a la Figura 36.) Con un viento del norte reportado a 20 nudos, ¿qué pista (6, 29 o 32) es aceptable para un avión con un componente de viento cruzado máximo de 13 nudos?',
    'opciones': [
      'Pista 6.',
      'Pista 29.',
      'Pista 32.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [36],
  },
  {
    'numero': '3687',
    'pregunta': '3687.- (Refiérase a la Figura 36.) Con un viento del sur reportado a 20 nudos, ¿qué pista (10, 14 o 24) es apropiada para un avión con un componente de viento cruzado máximo de 13 nudos?',
    'opciones': [
      'Pista 10.',
      'Pista 14.',
      'Pista 24. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 9',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [36],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasPerfomance = preguntasPerfomance;
