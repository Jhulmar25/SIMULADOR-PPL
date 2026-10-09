// INSTRUMENTOS DE VUELO - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app en la carpeta de imágenes.

const preguntasInstrumentos = [
  {
    'numero': '3248',
    'pregunta': '3248.- ¿Qué instrumento dejará de funcionar si el tubo de pitot se obstruye?',
    'opciones': [
      'Altímetro.',
      'Velocidad vertical.',
      'Velocidad con respecto al aire.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3249',
    'pregunta': '3249.- ¿Qué instrumentos dejarán de funcionar si las rejillas de ventilación estáticas se obstruyen?',
    'opciones': [
      'Únicamente velocidad con respecto al aire.',
      'Únicamente el altímetro.',
      'Velocidad con respecto al aire, altímetro y velocidad vertical.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3247',
    'pregunta': '3247.- Si el tubo de pitot y las ventilaciones estáticas exteriores se obstruyen, ¿qué instrumentos se verían afectados?',
    'opciones': [
      'El altímetro, el indicador de velocidad con respecto al aire y el indicador de viraje y deslizamiento.',
      'El altímetro, el indicador de velocidad con respecto al aire y el indicador de velocidad vertical.',
      'El altímetro, el indicador de actitud y el indicador de viraje y deslizamiento.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3262',
    'pregunta': '3262.- ¿El sistema de pitot proporciona presión de impacto para qué instrumento?',
    'opciones': [
      'Altímetro.',
      'Indicador de velocidad vertical.',
      'Indicador de la velocidad con respecto al aire.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3006',
    'pregunta': '3006.- ¿Qué velocidad V representa la velocidad de maniobra?',
    'opciones': [
      'VA',
      'VLO',
      'VNE',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3264',
    'pregunta': '3264.- ¿Qué representa la línea roja en un indicador de velocidad con respecto al aire?',
    'opciones': [
      'Velocidad de maniobra.',
      'Velocidad turbulenta o de aire agitado.',
      'Nunca supere la velocidad. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 1',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3268',
    'pregunta': '3268.- (Consulte la Figura 4). ¿Qué marca identifica la velocidad que nunca se excede?',
    'opciones': [
      'Límite superior del arco verde.',
      'Límite superior del arco blanco.',
      'La línea radial roja.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [4],
  },
  {
    'numero': '3269',
    'pregunta': '3269.- (Refiérase a la Figura 4). ¿Qué color identifica la velocidad de pérdida de potencia en una configuración específica?',
    'opciones': [
      'Límite superior del arco verde.',
      'Límite superior del arco blanco.',
      'Límite inferior del arco verde.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [4],
  },
  {
    'numero': '3265',
    'pregunta': '3265.- (Consulte la Figura 4). ¿Cuál es el rango de funcionamiento completo de los flaps del avión?',
    'opciones': [
      '55 a 100 nudos.',
      '55 a 208 nudos.',
      '55 a 165 nudos.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [4],
  },
  {
    'numero': '3267',
    'pregunta': '3267.- (Refiérase a la Figura 4). La velocidad máxima a la que el avión puede operarse en aire no turbulento es:',
    'opciones': [
      '100 nudos.',
      '165 nudos.',
      '208 nudos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [4],
  },
  {
    'numero': '3270',
    'pregunta': '3270.- (Refiérase a la Figura 4). ¿Cuál es la velocidad máxima de flaps extendidos?',
    'opciones': [
      '67 nudos.',
      '100 nudos.',
      '165 nudos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [4],
  },
  {
    'numero': '3271',
    'pregunta': '3271.- (Refiérase a la Figura 4.) ¿Qué color identifica el rango de funcionamiento normal del flap?',
    'opciones': [
      'El arco amarillo.',
      'El arco verde.',
      'El arco blanco.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [4],
  },
  {
    'numero': '3272',
    'pregunta': '3272.- (Refiérase a la Figura 4). ¿Qué color identifica la velocidad de pérdida de potencia con los flaps de las alas y el tren de aterrizaje en la configuración de aterrizaje?',
    'opciones': [
      'Límite superior del arco verde.',
      'Límite superior del arco blanco.',
      'Límite inferior del arco blanco. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 2',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [4],
  },
  {
    'numero': '3273',
    'pregunta': '3273.- (Refiérase a la Figura 4). ¿Cuál es la velocidad máxima de crucero estructural?',
    'opciones': [
      '100 nudos.',
      '165 nudos.',
      '208 nudos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [4],
  },
  {
    'numero': '3274',
    'pregunta': '3274.- ¿Cuál es una limitación importante de velocidad aérea que no está codificada por colores en los indicadores de velocidad con respecto al aire?',
    'opciones': [
      'Nunca supere la velocidad.',
      'Velocidad máxima de crucero estructural.',
      'Velocidad de maniobra.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3007',
    'pregunta': '3007.- ¿Qué velocidad en V representa la velocidad máxima extendida del flap?',
    'opciones': [
      'VFE',
      'VLOF',
      'VFC',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3008',
    'pregunta': '3008.- ¿Qué velocidad V representa la velocidad máxima extendida del tren de aterrizaje?',
    'opciones': [
      'VLE',
      'VLO',
      'VFE',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3009',
    'pregunta': '3009.- VNO se define como el:',
    'opciones': [
      'Rango de funcionamiento normal.',
      'Velocidad nunca superada.',
      'Máxima velocidad de crucero estructural.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3010',
    'pregunta': '3010.- VSO se define como el:',
    'opciones': [
      'Velocidad de pérdida o velocidad mínima de vuelo constante en la configuración de aterrizaje.',
      'Velocidad de pérdida o velocidad mínima de vuelo constante en una configuración especificada.',
      'Velocidad de pérdida o velocidad mínima de seguridad de despegue.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3266',
    'pregunta': '3266.- (Refiérase a la Figura 4). ¿Cuál es el rango de precaución del avión?',
    'opciones': [
      '0 a 60 nudos.',
      '100 a 165 nudos.',
      '165 a 208 nudos. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 3',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [4],
  },
  {
    'numero': '3105',
    'pregunta': '3105.- Si no se dispone de un ajuste de altímetro antes del vuelo, ¿a qué altitud debe ajustar el piloto el altímetro?',
    'opciones': [
      'La elevación del aeropuerto más cercano corregida al nivel medio del mar.',
      'La elevación del área de salida.',
      'Altitud de presión corregida por temperatura no estándar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3106',
    'pregunta': '3106.- Antes del despegue, ¿el altímetro debe ajustarse a qué altitud o ajuste de altímetro?',
    'opciones': [
      'El ajuste actual del altímetro local, si está disponible, o la elevación del aeropuerto de salida.',
      'La altitud de densidad corregida del aeropuerto de salida.',
      'La altitud de presión corregida para el aeropuerto de salida.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3107',
    'pregunta': '3107.- ¿A qué altitud se fijará el altímetro en 29,92 cuando se suba al nivel de vuelo de crucero?',
    'opciones': [
      '14,500 pies MSL.',
      '18,000 pies MSL.',
      '24,000 pies MSL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3254',
    'pregunta': '3254.- El ajuste del altímetro es el valor al que se ajusta la escala de presión barométrica del altímetro para que el altímetro indique:',
    'opciones': [
      'Altitud calibrada en la elevación del campo.',
      'Altitud absoluta en la elevación del campo.',
      'Altitud verdadera a la elevación del campo.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3255',
    'pregunta': '3255.- ¿Cómo afectan las variaciones de temperatura al altímetro?',
    'opciones': [
      'Los niveles de presión aumentan en los días cálidos y la altitud indicada es menor que la altitud real.',
      'Las temperaturas más altas expanden los niveles de presión y la altitud indicada es más alta que la altitud real.',
      'Las temperaturas más bajas reducen los niveles de presión y la altitud indicada es menor que la altitud real.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3256',
    'pregunta': '3256.- ¿Qué es la verdadera altitud?',
    'opciones': [
      'La distancia vertical de la aeronave sobre el nivel del mar.',
      'La distancia vertical de la aeronave sobre la superficie.',
      'La altura por encima del plano de referencia estándar.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3392',
    'pregunta': '3392.- ¿Bajo qué condiciones será la altitud real menor que la altitud indicada?',
    'opciones': [
      'En una temperatura del aire más fría que la estándar.',
      'En una temperatura del aire más cálida que la estándar. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 4',
      'Cuando la altitud de densidad es mayor que la altitud indicada.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3257',
    'pregunta': '3257.- ¿Qué es la altitud absoluta?',
    'opciones': [
      'La altitud se lee directamente en el altímetro.',
      'La distancia vertical de la aeronave sobre la superficie.',
      'La altura por encima del plano de referencia estándar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3011',
    'pregunta': '3011.- ¿Cuál proporcionaría la mayor ganancia de altitud en la distancia más corta durante el ascenso después del despegue?',
    'opciones': [
      'VY',
      'VA',
      'VX',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3012.1',
    'pregunta': '3012.1.- Después del despegue, ¿qué velocidad con respecto al aire utilizaría el piloto para ganar la mayor altitud en un período de tiempo determinado?',
    'opciones': [
      'VY',
      'VX',
      'VA',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3258',
    'pregunta': '3258.- ¿Qué es la altitud de densidad?',
    'opciones': [
      'La altura por encima del plano de referencia estándar.',
      'La altitud de presión corregida por temperatura no estándar.',
      'La altitud se lee directamente en el altímetro.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3259',
    'pregunta': '3259.- ¿Qué es la altitud de presión?',
    'opciones': [
      'La altitud indicada corregida por error de instalación y posición.',
      'La altitud indicada cuando la escala de presión barométrica se establece en 29,92.',
      'La altitud indicada corregida por temperatura y presión no estándar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3260',
    'pregunta': '3260.- ¿En qué condiciones la altitud indicada es igual a la altitud real?',
    'opciones': [
      'Si el altímetro no tiene error mecánico.',
      'Cuando esté al nivel del mar en condiciones estándar.',
      'Cuando está a 18,000 pies MSL con el altímetro ajustado a 29.92.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3261',
    'pregunta': '3261.- Si es necesario ajustar el altímetro de 29.15 a 29.85, ¿qué cambio ocurre?',
    'opciones': [
      'Aumento de 70 pies en la altitud indicada.',
      'Aumento de 70 pies en la altitud de densidad. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 5',
      'Aumento de 700 pies en la altitud indicada.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3388',
    'pregunta': '3388.- ¿En qué condiciones la altitud de presión será igual a la altitud real?',
    'opciones': [
      'Cuando la presión atmosférica es 29.92" Hg.',
      'Cuando existen condiciones atmosféricas estándar.',
      'Cuando la altitud indicada es igual a la altitud de presión.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3389',
    'pregunta': '3389.- ¿En qué condiciones la altitud de presión y la altitud de densidad tienen el mismo valor?',
    'opciones': [
      'Al nivel del mar, cuando la temperatura es de 0° F.',
      'Cuando el altímetro no tiene error de instalación.',
      'A temperatura estándar.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3390',
    'pregunta': '3390.- Si se realiza un vuelo desde un área de baja presión a un área de alta presión sin que se haya ajustado la configuración del altímetro, el altímetro indicará:',
    'opciones': [
      'La altitud real sobre el nivel del mar.',
      'La altitud más alta que la altitud real sobre el nivel del mar.',
      'La altitud más baja que la altitud real sobre el nivel del mar.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3391',
    'pregunta': '3391.- Si se realiza un vuelo desde un área de alta presión a un área de menor presión sin que se haya ajustado la configuración del altímetro, el altímetro indicará:',
    'opciones': [
      'Más baja que la altitud real sobre el nivel del mar.',
      'Más alta que la altitud real sobre el nivel del mar.',
      'La altitud real sobre el nivel del mar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3393',
    'pregunta': '3393.- ¿Qué condición haría que el altímetro indique una altitud menor que la altitud real?',
    'opciones': [
      'Temperatura del aire más baja que la estándar.',
      'Presión atmosférica más baja que la estándar.',
      'Temperatura del aire más caliente que la estándar.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3250',
    'pregunta': '3250.- (Refiérase a la Figura 3.) El altímetro 1 indica:',
    'opciones': [
      '500 pies.',
      '1,500 pies.',
      '10,500 pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [3],
  },
  {
    'numero': '3251',
    'pregunta': '3251.- (Refiérase a la Figura 3.) El altímetro 2 indica:',
    'opciones': [
      '1,500 pies.',
      '4, 500 pies. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 6',
      '14,500 pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [3],
  },
  {
    'numero': '3252',
    'pregunta': '3252.- (Consulte la Figura 3.) El altímetro 3 indica:',
    'opciones': [
      '9,500 pies.',
      '10,950 pies.',
      '15,940 pies.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [3],
  },
  {
    'numero': '3253',
    'pregunta': '3253.- (Refiérase a la Figura 3.) ¿Qué altímetro o altímetros indican más de 10,000 pies?',
    'opciones': [
      '1, 2, y 3.',
      '1 y 2 solamente.',
      'Únicamente el 1.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [3],
  },
  {
    'numero': '3253.1',
    'pregunta': '3253.1.- (Refiérase a la Figura 82.) ¿El altímetro 3 indica una altitud de crucero VFR para qué dirección?',
    'opciones': [
      '180-359 grados magnético',
      '179 grados verdadero.',
      '080 grados magnético.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [82],
  },
  {
    'numero': '3387',
    'pregunta': '3387.- Si un piloto cambia el ajuste del altímetro de 30.11 a 29.96, ¿cuál es el cambio aproximado en la indicación?',
    'opciones': [
      'El altímetro indicará 15" Hg más alta.',
      'El altímetro indicará 150 pies más alto.',
      'El altímetro indicará 150 pies más bajo.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3278',
    'pregunta': '3278.- (Refiérase a la Figura 7.) ¿Cómo debe un piloto determinar la dirección de inclinación a partir de un indicador de actitud como el que se muestra en la ilustración?',
    'opciones': [
      'Por la dirección de deflexión de la escala de inclinación (A).',
      'Por la dirección de deflexión de la barra de horizonte (B).',
      'Por la relación del avión en miniatura (C) con la barra de horizonte desviada (B).',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [7],
  },
  {
    'numero': '3275',
    'pregunta': '3275.- (Refiérase a la Figura 5). Un coordinador de giro proporciona una indicación del:',
    'opciones': [
      'Movimiento de la aeronave sobre el eje de guiñada y alabeo.',
      'Ángulo de inclinación hasta 30°, pero no superior.',
      'Actitud de la aeronave con respecto al eje longitudinal.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [5],
  },
  {
    'numero': '3277',
    'pregunta': '3277.- (Refiérase a la Figura 7). El ajuste correcto que se debe realizar en el indicador de actitud durante el vuelo nivelado es alinear:',
    'opciones': [
      'Barra de horizonte a la indicación de nivel de vuelo.',
      'Barra de horizonte al avión en miniatura. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 7',
      'Avión en miniatura a la barra del horizonte.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [7],
  },
  {
    'numero': '3276',
    'pregunta': '3276.- (Refiérase la Figura 6). Para recibir indicaciones precisas durante el vuelo de un indicador de rumbo, el instrumento debe estar:',
    'opciones': [
      'Establecido antes del vuelo en un rumbo conocido.',
      'Calibrado en una rosa de los vientos a intervalos regulares.',
      'Periódicamente realineados con la brújula magnética mientras el giróscopo avanza.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [6],
  },
  {
    'numero': '3279',
    'pregunta': '3279.- La desviación en una brújula magnética es causada por la:',
    'opciones': [
      'Presencia de fallas en los imanes permanentes de la brújula.',
      'Diferencia en la ubicación entre el norte verdadero y el norte magnético.',
      'Campos magnéticos dentro de la aeronave que distorsionan las líneas de fuerza magnética.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3279.1',
    'pregunta': '3279.1.- La diferencia angular entre el norte verdadero y el norte magnético es:',
    'opciones': [
      'Desviación magnética.',
      'Variación magnética.',
      'Error de aceleración de la brújula.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3279.2',
    'pregunta': '3279.2.- El error de desviación de la brújula magnética es causado por:',
    'opciones': [
      'Un error de giro al norte.',
      'Ciertos metales y sistemas eléctricos dentro de la aeronave.',
      'La diferencia en la ubicación del norte verdadero y el norte magnético.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3282',
    'pregunta': '3282.- En el hemisferio norte, una brújula magnética normalmente indicará un giro hacia el norte si:',
    'opciones': [
      'Una aeronave se desacelera mientras está en rumbo este u oeste.',
      'Se ingresa a un giro a la izquierda desde un rumbo oeste.',
      'Una aeronave se acelera mientras está en rumbo este u oeste.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3283',
    'pregunta': '3283.- En el hemisferio norte, la brújula magnética normalmente indicará un giro hacia el sur cuando:',
    'opciones': [
      'Se ingresa un giro a la izquierda desde un rumbo este.',
      'Se ingresa un giro a la derecha desde un rumbo oeste.',
      'La aeronave se desacelera mientras se dirige hacia el oeste.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3283.1',
    'pregunta': '3283.1.- ¿Cuál debería ser la indicación en la brújula magnética al girar en un giro de velocidad estándar hacia la derecha desde un rumbo sur en el hemisferio norte?',
    'opciones': [
      'La brújula inicialmente indicará un giro a la izquierda. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 8',
      'La brújula indicará un giro a la derecha, pero a un ritmo más rápido de lo que realmente está ocurriendo.',
      'La brújula permanecerá en el sur durante un breve período de tiempo y luego alcanzará gradualmente el rumbo magnético del avión.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3284',
    'pregunta': '3284.- En el hemisferio norte, si una aeronave se acelera o desacelera, la brújula magnética normalmente indicará:',
    'opciones': [
      'Un giro momentáneamente.',
      'Correctamente cuando se dirige al norte o al sur.',
      'Un giro hacia el sur.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3280',
    'pregunta': '3280.- En el hemisferio norte, una brújula magnética normalmente indicará inicialmente un giro hacia el oeste si:',
    'opciones': [
      'Se ingresa a un giro a la izquierda desde un rumbo norte.',
      'Se ingresa un giro a la derecha desde un rumbo norte.',
      'Un avión se acelera mientras está en rumbo norte.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3281',
    'pregunta': '3281.- En el hemisferio norte, una brújula magnética normalmente indicará inicialmente un giro hacia el este si:',
    'opciones': [
      'Un avión se desacelera mientras se dirige hacia el sur.',
      'Un avión se acelera mientras está en rumbo norte.',
      'Se ingresa a un giro a la izquierda desde un rumbo norte.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3286',
    'pregunta': '3286.- Durante el vuelo, ¿cuándo son precisas las indicaciones de una brújula magnética?',
    'opciones': [
      'Solo en vuelo recto y nivelado sin aceleración.',
      'Siempre que la velocidad con respecto al aire sea constante.',
      'Durante los giros si la inclinación no supera los 18°. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 9 DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:03 Pag: 10',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasInstrumentos = preguntasInstrumentos;
