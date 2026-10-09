// PROCEDIMIENTOS DE COMUNICACIÓN - PP AVIÓN 2023
// Banco extraído del documento proporcionado.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app en base-datos/imagenes.

const preguntasComunicacion = [
  {
    'numero': '3608',
    'pregunta': '3608.- (Consulte la Figura 22, área 2; y la Figura 31.) ¿Cuál es la frecuencia UNICOM correcta que se utilizará en Coeur D\'Alene para solicitar combustible?',
    'opciones': [
      '135.075 MHz.',
      '122.1 / 108.8 MHz.',
      '122.8 MHz.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [22, 31],
  },
  {
    'numero': '3609',
    'pregunta': '3609.- (Consulte la Figura 25, área 3). Si la torre Dallas Executive (RBD) no está en funcionamiento, ¿qué frecuencia se debe utilizar como frecuencia común de advertencia de tráfico (CTAF) para monitorear el tráfico del aeropuerto?',
    'opciones': [
      '127.25 MHz.',
      '122.95 MHz.',
      '126.35 MHz.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [25],
  },
  {
    'numero': '3641',
    'pregunta': '3641.- (Consulte la Figura 25, área 2). La frecuencia de la torre de control para el aeropuerto de Addison es:',
    'opciones': [
      '122.95 MHz.',
      '126.0 MHz.',
      '133.4 MHz.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [25],
  },
  {
    'numero': '3610',
    'pregunta': '3610.- (Consulte la Figura 26, área 2). ¿Cuál es el procedimiento de comunicación recomendado cuando se entra para aterrizar en el aeropuerto de Cooperstown?',
    'opciones': [
      'Intenciones de transmisión a 10 millas de distancia en la frecuencia CTAF / MULTICOM, 122.9 MHz.',
      'Póngase en contacto con UNICOM cuando estén a 10 millas en 122.8 MHz.',
      'Circule el aeropuerto en un giro a la izquierda antes de ingresar al tráfico.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [26],
  },
  {
    'numero': '3611',
    'pregunta': '3611.- (Consulte la Figura 26, área 4). La frecuencia CTAF / UNICOM en el aeropuerto de Jamestown es:',
    'opciones': [
      '122.0 MHz.',
      '123.0 MHz.',
      '123.6 MHz.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [26],
  },
  {
    'numero': '3612',
    'pregunta': '3612.- (Consulte la Figura 26, área 5). ¿Cuál es la frecuencia CTAF/UNICOM en el aeropuerto del condado de Barnes?',
    'opciones': [
      '122.0 MHz.',
      '122.8 MHz. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 1',
      '123.6 MHz.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [26],
  },
  {
    'numero': '3791',
    'pregunta': '3791.- El Servicio Automático de Información de Terminal (ATIS) es la transmisión continua de información grabada concerniente a:',
    'opciones': [
      'pilotos de aeronaves identificadas por radar cuya aeronave se encuentra en una proximidad peligrosa al terreno o a una obstrucción.',
      'información no esencial para reducir la congestión de frecuencias.',
      'información no controlada en áreas terminales seleccionadas de alta actividad.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3790',
    'pregunta': '3790.- Seleccione las frecuencias UNICOM normalmente asignadas para estaciones en áreas de aterrizaje utilizadas exclusivamente como helipuertos:',
    'opciones': [
      '122.75 y 123.65 MHz.',
      '123.0 y 122.95 MHz.',
      '123.05 y 123.075 MHz.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3811',
    'pregunta': '3811.- Después de aterrizar en un aeropuerto controlado por torre, ¿cuándo debe el piloto contactar al control de tierra?',
    'opciones': [
      'Cuando la torre le aconseje que lo haga.',
      'Antes de abandonar la pista.',
      'Después de llegar a una calle de rodaje que conduce directamente a la zona de aparcamiento.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3812',
    'pregunta': '3812.- Si el control de tierra le indica que ruede a la pista 9, el piloto puede proceder:',
    'opciones': [
      'a través de calles de rodaje y a través de las pistas hacia la Pista 9, pero no hacia la misma.',
      'hasta la siguiente pista de intersección donde se requiere más autorización.',
      'a través de calles de rodaje y a través de pistas hasta la Pista 9, donde se puede realizar un despegue inmediato.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3111',
    'pregunta': '3111.- Una señal de luz verde fija dirigida desde la torre de control a una aeronave en vuelo es una señal de que el piloto:',
    'opciones': [
      'está despejado para aterrizar.',
      'debería dar paso a otras aeronaves y seguir dando vueltas.',
      'debe regresar para aterrizar.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3115',
    'pregunta': '3115.- Una señal alterna de luz roja y verde dirigida desde la torre de control a una aeronave en vuelo es una señal para:',
    'opciones': [
      'mantén la posición.',
      'tenga extremo cuidado.',
      'no aterrizar; el aeropuerto es inseguro. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 2',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3112',
    'pregunta': '3112.- ¿Qué señal luminosa de la torre de control autoriza a un piloto a rodar?',
    'opciones': [
      'Verde intermitente.',
      'Verde fijo.',
      'Blanco intermitente.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3113',
    'pregunta': '3113.- Si la torre de control utiliza una señal luminosa para indicar a un piloto que ceda el paso a otras aeronaves y continúe dando vueltas, la luz será:',
    'opciones': [
      'rojo intermitente.',
      'rojo fijo.',
      'alternando rojo y verde.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3114',
    'pregunta': '3114.- Una señal de luz blanca intermitente desde la torre de control a una aeronave en rodaje es una indicación de:',
    'opciones': [
      'rodar a mayor velocidad.',
      'rodar solo en calles de rodaje y no cruzar pistas.',
      'regreso al punto de partida en el aeropuerto.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3116',
    'pregunta': '3116.- Mientras se encuentra en la aproximación final para el aterrizaje, se recibe una luz verde y roja alternadas seguidas de una luz roja intermitente desde la torre de control. En estas circunstancias, el piloto debe:',
    'opciones': [
      'interrumpa la aproximación, vuele con el mismo patrón de tráfico, acérquese de nuevo y aterrice.',
      'tenga extrema precaución y abandone la aproximación, al darse cuenta de que el aeropuerto no es seguro para aterrizar.',
      'abandone la aproximación, rodee el aeropuerto a la derecha y espere una luz blanca intermitente cuando el aeropuerto sea seguro para el aterrizaje.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3804',
    'pregunta': '3804.- Si falla la radio de la aeronave, ¿cuál es el procedimiento recomendado al aterrizar en un aeropuerto controlado?',
    'opciones': [
      'Observar el flujo del tráfico, ingresar al patrón y buscar una señal luminosa de la torre.',
      'Entrar en un tramo de viento cruzado y mover las alas.',
      'Encender las luces de aterrizaje y girar el tren de aterrizaje mientras rodea el aeropuerto.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '2175',
    'pregunta': '2175.- ¿Por qué debería presentar un plan de vuelo VFR?',
    'opciones': [
      'Debe hacerlo cuando vuele a más de 25 NM desde un aeropuerto.',
      'Proporcionar informes de tráfico con Flight Service.',
      'Proporcionar búsqueda y rescate en caso de emergencia. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 3',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '2175.1',
    'pregunta': '2175.1.- (Refiérase a la Figura 51.) ¿Qué información se debe ingresar para el artículo 15, nivel, en el formulario del plan de vuelo?',
    'opciones': [
      'Altitud de crucero VFR.',
      'Techo de servicio de aeronaves.',
      'Centro de gravedad de la aeronave.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [51],
  },
  {
    'numero': '3792.1',
    'pregunta': '3792.1.- Cuando un controlador de tráfico aéreo emite información de tráfico por radar en relación con el reloj de 12 horas, la referencia que utiliza el controlador es la siguiente de la aeronave:',
    'opciones': [
      'curso verdadero.',
      'trayectoria terrestre',
      'rumbo magnético.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3792',
    'pregunta': '3792.- Una instalación de radar ATC emite el siguiente aviso a un piloto que vuela con un rumbo de 090° ³TRÁFICO A LAS 3 EN PUNTO, 2 MILLAS, HACIA EL OESTE ´ ¿Dónde debería buscar el piloto este tráfico?:',
    'opciones': [
      'Este.',
      'sur.',
      'oeste.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3793',
    'pregunta': '3793.- Una instalación de radar ATC emite el siguiente aviso a un piloto que vuela en un rumbo de 360 ¿°: ³TRÁFICO 10 EN PUNTO, 2 MILLAS, HACIA EL SUR ´ ¿Dónde debería buscar el piloto este tráfico?',
    'opciones': [
      'Noroeste.',
      'Noreste.',
      'Sur oeste.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3798',
    'pregunta': '3798.- El área de servicio de radar terminal (TRSA) en el programa de radar terminal proporciona:',
    'opciones': [
      'separación IFR (1,000 pies verticales y 3 millas laterales) entre todas las aeronaves.',
      'advirtiendo a los pilotos cuando sus aeronaves se encuentran en una proximidad peligrosa al terreno, obstrucciones u otras aeronaves.',
      'secuenciación y separación para aeronaves VFR participantes.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3794',
    'pregunta': '3794.- Una instalación de radar ATC emite el siguiente aviso a un piloto durante un vuelo local: ³TRÁFICO 2 EN PUNTO, 5 MILLAS, HACIA EL NORTE ´ ¿Dónde debería buscar el piloto este tráfico?',
    'opciones': [
      'Entre directamente adelante y 90° a la izquierda.',
      'Entre directamente detrás y 90° a la derecha.',
      'Entre directamente adelante y 90° a la derecha. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 4',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3795',
    'pregunta': '3795.- Una instalación de radar ATC emite el siguiente aviso a un piloto que vuela hacia el norte con viento en calma: ³TRÁFICO A LAS 9 EN PUNTO, 2 MILLAS, HACIA EL SUR ´ ¿Dónde debería buscar el piloto este tráfico?',
    'opciones': [
      'Sur.',
      'Norte.',
      'Oeste.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3796',
    'pregunta': '3796.- El servicio de radar básico en el programa de radar terminal se describe mejor como:',
    'opciones': [
      'alertas de seguridad, avisos de tráfico y vectorización limitada a aeronaves VFR.',
      'servicio de radar obligatorio proporcionado por el programa Automated Radar Terminal System (ARTS).',
      'alerta de cizalladura del viento en los aeropuertos participantes.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3797',
    'pregunta': '3797.- Durante las operaciones en tierra ¿a quién debe solicitar una aeronave que salga VFR información de tráfico por radar?',
    'opciones': [
      'Entrega de liquidación.',
      'Torre, justo antes del despegue.',
      'Control de tierra, en el contacto inicial.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3129',
    'pregunta': '3129.- Se requiere un transpondedor operativo de código 4096 y un altímetro de codificación en Modo C en:',
    'opciones': [
      'espacio aéreo de Clase B y dentro de las 30 millas del aeropuerto principal de Clase B.',
      'espacio aéreo de Clase D.',
      'espacio aéreo Clase E por debajo de 10,000 pies MSL.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3801',
    'pregunta': '3801.- Cuándo se opera bajo VFR por debajo de 18,000 pies MSL, a menos que se autorice lo contrario, ¿qué código de transpondedor se debe seleccionar?',
    'opciones': [
      '1200',
      '7600',
      '7700',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3996',
    'pregunta': '3996.- Al operar el transpondedor con el código VFR (1200), ¿cuál es el modo mínimo en el que debe estar el transpondedor?',
    'opciones': [
      'Modo A.',
      'Modo C.',
      'Modo F.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3803',
    'pregunta': '3803.- Si el Control de tráfico aéreo informa que el servicio de radar se termina cuando el piloto está saliendo del espacio aéreo Clase C, el transpondedor debe configurarse en código:',
    'opciones': [
      '0',
      '1200',
      '4096',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3166.4',
    'pregunta': '3166.4.- El equipo ADS-B Out transmite la:',
    'opciones': [
      'posición tridimensional.',
      'velocidad tridimensional.',
      'posición y velocidad tridimensionales.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3800',
    'pregunta': '3800.- Al realizar cambios de rutina en el código del transpondedor, los pilotos deben evitar la selección inadvertida de qué códigos:',
    'opciones': [
      '0700, 1700, 7000.',
      '1200, 1500, 7000.',
      '7500, 7600, 7700.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3800.1',
    'pregunta': '3800.1.- Al realizar cambios de rutina en el código del transpondedor, los pilotos deben evitar la selección inadvertida de qué código:',
    'opciones': [
      '7200',
      '7400',
      '7500',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3802',
    'pregunta': '3802.- A menos que se autorice lo contrario, si vuela una aeronave equipada con transpondedor ¿qué código VFR debería reportar el piloto?',
    'opciones': [
      '1200',
      '7600',
      '7700',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3819',
    'pregunta': '3819.- Cuando se activa, un transmisor de localización de emergencia (ELT) transmite en:',
    'opciones': [
      '118.0 MHz.',
      '406 MHz.',
      '123.0 MHz.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3160',
    'pregunta': '3160.- ¿Cuándo se deben reemplazar o recargar las baterías de un transmisor de localización de emergencia (ELT), si es que son recargables?',
    'opciones': [
      'Después de cualquier activación inadvertida del ELT.',
      'Cuando el ELT ha estado en uso durante más de 1 hora acumulada.',
      'Cuando el ELT ya no puede ser escuchado por el receptor de radio de comunicación del avión.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3161',
    'pregunta': '3161.- ¿Cuándo es necesario reemplazar las baterías no recargables de un transmisor localizador de emergencia (ELT)?',
    'opciones': [
      'Cada 24 meses.',
      'Cuando expira el 50 por ciento de su vida útil.',
      'Al tiempo de cada inspección anual o de 100 horas.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3820',
    'pregunta': '3820.- ¿Cuándo se debe reemplazar la batería de un transmisor localizador de emergencia (ELT) (o recargarla si la batería es recargable)?',
    'opciones': [
      'Después de la mitad de la vida útil de la batería.',
      'Durante cada inspección anual y cada 100 horas.',
      'Cada 24 meses calendario.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3821',
    'pregunta': '3821.- ¿Cuándo se puede probar un transmisor de localización de emergencia (ELT)?',
    'opciones': [
      'En cualquier momento.',
      'A los 15 y 45 minutos después de la hora.',
      'Durante los primeros 5 minutos después de la hora.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3822',
    'pregunta': '3822.- ¿Qué procedimiento se recomienda para asegurar que no se ha activado el transmisor localizador de emergencia (ELT)?',
    'opciones': [
      'Apague el ELT de la aeronave después del aterrizaje.',
      'Pregunte a la torre de control del aeropuerto si están recibiendo una señal de ELT.',
      'Monitoree 121.5 antes de apagar el motor.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3613',
    'pregunta': '3613.- Al volar HAWK N666CB, la fraseología adecuada para el contacto inicial con McAlester Flight Service es:',
    'opciones': [
      'MC ALESTER RADIO, HAWK SEIS SEIS SEIS CHARLIE BRAVO, RECIBIENDO ARDMORE VORTAC, ACABADO.',
      'ESTACIÓN MC ALESTER, HAWK SEIS SEIS SEIS CEE BEE, RECIBIENDO ARDMORE VORTAC, ACABADO.',
      'ESTACIÓN DE SERVICIO DE VUELO MC ALESTER, HAWK SEIS DE NOVIEMBRE CHARLIE BRAVO, RECIBIENDO ARDMORE VORTAC, OVER.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3614',
    'pregunta': '3614.- El método correcto para indicar 4.500 pies MSL a ATC es:',
    'opciones': [
      'CUATRO MIL QUINIENTOS.',
      'CUATRO PUNTO CINCO.',
      'CUARENTA Y QUINIENTOS PIES MSL.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3615',
    'pregunta': '3615.- El método correcto de indicar 10,500 pies MSL al ATC es:',
    'opciones': [
      'DIEZ MIL QUINIENTOS PIES.',
      'DIEZ PUNTO CINCO.',
      'UN CERO MIL QUINIENTOS. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 7',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3604',
    'pregunta': '3604.- (Consulte la Figura 20, área 3.) ¿Cuál es el procedimiento de comunicaciones recomendado para un aterrizaje en el aeropuerto del condado de Currituck?',
    'opciones': [
      'Transmita intenciones en 122,9 MHz cuando estén a 10 millas de distancia y proporcione informes de posición en el patrón de tráfico.',
      'Comuníquese con Elizabeth City FSS para obtener un servicio de asesoramiento aeroportuario.',
      'Póngase en contacto con New Bern FSS para obtener información sobre el tráfico de la zona.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [20],
  },
  {
    'numero': '3605',
    'pregunta': '3605.- (Consulte la Figura 21, área 2). La frecuencia CTAF / MULTICOM para el aeropuerto Garrison es:',
    'opciones': [
      '122.8 MHz.',
      '12.9 MHz.',
      '123.0 MHz.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [21],
  },
  {
    'numero': '3998',
    'pregunta': '3998.- ¿Cuándo deben los pilotos indicar su posición en el aeropuerto al llamar a la torre para el despegue?',
    'opciones': [
      'Cuando la visibilidad es inferior a 1 milla.',
      'Cuando se utilizan pistas paralelas.',
      'Al salir de una intersección de pista.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3605.1',
    'pregunta': '3605.1.- Como práctica operativa estándar, todo el tráfico entrante a un aeropuerto sin una torre de control debe monitorear continuamente la instalación apropiada desde una distancia de:',
    'opciones': [
      '25 millas.',
      '20 millas.',
      '10 millas.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3605.2',
    'pregunta': '3605.2.- La ausencia de la condición del cielo y la visibilidad en una transmisión ATIS indican que:',
    'opciones': [
      'las condiciones climáticas son iguales o superiores a los mínimos VFR.',
      'el cielo está despejado y la visibilidad es ilimitada.',
      'el techo es de al menos 5,000 pies y la visibilidad es de 5 millas o más.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3606',
    'pregunta': '3606.- (Consulte la Figura 22, área 2; y la Figura 31.) En Coeur D\'Alene, ¿qué frecuencia se debe usar como frecuencia común de advertencia de tráfico (CTAF) para autoanunciar posiciones e intenciones?',
    'opciones': [
      '122.05 MHz.',
      '122.1 / 108.8 MHz.',
      '122.8 MHz. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 8',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [22, 31],
  },
  {
    'numero': '3607',
    'pregunta': '3607.- (Consulte la Figura 22, área 2 y la Figura 31). En Coeur D\'Alene, ¿qué frecuencia se debe utilizar como Frecuencia común de advertencia de tráfico (CTAF) para monitorear el tráfico del aeropuerto?',
    'opciones': [
      '122,05 MHz.',
      '135,075 MHz.',
      '122,8 MHz. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 9',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [22, 31],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasComunicacion = preguntasComunicacion;
