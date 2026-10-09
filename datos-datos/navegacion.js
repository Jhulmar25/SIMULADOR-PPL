// NAVEGACIÓN - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app; [] si no requiere imagen.

const preguntasNavegacion = [
  {
    'numero': '3643',
    'pregunta': '3643.- (Consulte la Figura 25, área 5). La instalación de navegación en Dallas-Ft. Worth International (DFW) es un:',
    'opciones': [
      'VOR.',
      'VORTAC.',
      'VOR / DME.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [25],
  },
  {
    'numero': '3552',
    'pregunta': '3552.- (Consulte la Figura 23.) ¿Cuál es la posición aproximada de la aeronave si los receptores VOR indican el radial de 320° de Savannah VORTAC (área 3) y el radial de 184° de Allendale VOR (área 1)?',
    'opciones': [
      'Sureste de Guyton.',
      'Ciudad de Springfield.',
      'Sobre el aeropuerto de Briggs.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [23],
  },
  {
    'numero': '3559',
    'pregunta': '3559.- (Consulte la Figura 24.) ¿Cuál es la posición aproximada de la aeronave si los receptores VOR indican el 245? radial de Sulphur Springs VOR-DME (área 5) y el 140? radial de Bonham VORTAC (área 3)?',
    'opciones': [
      'Internacional de Weese Aeropuerto.',
      'Aeropuerto de Glenmar.',
      'Aeropuerto Majors.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [24],
  },
  {
    'numero': '3566',
    'pregunta': '3566.- (Consulte la Figura 25, área 5). El VOR está sintonizado con el VOR-DME en el aeropuerto de Dallas-Fort Worth. El selector de omnibearing (OBS) está configurado en 253°, con una indicación TO y una desviación del indicador de desviación de rumbo derecho (CDI). ¿Cuál es la posición de la aeronave desde el VOR-DME?',
    'opciones': [
      'Este-noreste.',
      'Nordeste.',
      'Oeste-suroeste.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [25],
  },
  {
    'numero': '3577',
    'pregunta': '3577.- (Consulte la Figura 28, ilustración 4.) El receptor VOR tiene las indicaciones que se muestran. ¿Cuál es la posición de la aeronave en relación con la estación?',
    'opciones': [
      'Norte.',
      'Este.',
      'Sur.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [28],
  },
  {
    'numero': '3578',
    'pregunta': '3578.- (Consulte la Figura 28, ilustración 7.) El receptor VOR tiene las indicaciones que se muestran. ¿Cuál es la posición de la aeronave en relación con la estación?',
    'opciones': [
      'Este. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 1',
      'Sureste.',
      'Oeste.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [28],
  },
  {
    'numero': '3579',
    'pregunta': '3579.- (Consulte la Figura 28, ilustración 5.) El receptor VOR tiene las indicaciones que se muestran. ¿Qué radial está cruzando la aeronave?',
    'opciones': [
      '030°.',
      '210°.',
      '300°.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [28],
  },
  {
    'numero': '3553',
    'pregunta': '3553.- (Consulte la Figura 23). ¿En qué rumbo se debe configurar el receptor VOR (OBS) para navegar directamente desde el aeropuerto de Hampton Varnville (área 1) hasta Savannah VORTAC (área 3)?',
    'opciones': [
      '003°.',
      '195°.',
      '200°.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [23],
  },
  {
    'numero': '3560',
    'pregunta': '3560.- (Consulte la Figura 24). ¿En qué rumbo se debe configurar el receptor VOR (OBS) para navegar directamente desde el aeropuerto Majors (área 1) hasta Quitman VOR-DME (área 2)?',
    'opciones': [
      '101°.',
      '108°.',
      '281°.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [24],
  },
  {
    'numero': '3533',
    'pregunta': '3533.- (Consulte la Figura 20, área 3; y la Figura 28.) El VOR está sintonizado con el VOR / DME de Elizabeth City, y la aeronave está posicionada sobre Shawboro, una pequeña ciudad 3 NM al oeste de Currituck County Regional (ONX). ¿Qué indicación de VOR es correcta?',
    'opciones': [
      '2',
      '5',
      '8',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [20, 28],
  },
  {
    'numero': '3539',
    'pregunta': '3539.- (Consulte la Figura 21). ¿Qué rumbo debe seleccionarse en el selector omnibearing (OBS) para hacer un vuelo directo desde el Aeropuerto Regional del Condado de Mercer (área 3) al Minot VORTAC (área 1) con una indicación TO?',
    'opciones': [
      '001°.',
      '359°.',
      '179°.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [21],
  },
  {
    'numero': '3814',
    'pregunta': '3814.- ¿Qué procedimiento se recomienda al subir o bajar VFR en una vía aérea?',
    'opciones': [
      'Ejecute bancos suaves, a la izquierda y a la derecha para un escaneo visual continuo del espacio aéreo.',
      'Avise al FSS más cercano de los cambios de altitud. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 2',
      'Vuele lejos de la línea central de la vía aérea antes de cambiar de altitud.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3598.1',
    'pregunta': '3598.1.- Cuando la aguja del indicador de desviación de rumbo (CDI) está centrada durante una verificación del omnireceptor utilizando una señal de prueba VOR (VOT), el selector omnibearing (OBS) y el indicador TO / FROM deben leer:',
    'opciones': [
      '180° DESDE, solo si el piloto está al norte del VOT.',
      '0° HACIA o 180° DESDE, independientemente de la posición del piloto desde el VOT.',
      '0° DESDE o 180° HACIA, independientemente de la posición del piloto desde el VOT.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3598.3',
    'pregunta': '3598.3.- Si la capacidad de monitoreo autónomo de la integridad del receptor (RAIM) se pierde en vuelo:',
    'opciones': [
      'el piloto aún puede confiar en la altitud derivada del GPS para obtener información vertical.',
      'el piloto no tiene ninguna garantía de la precisión de la posición GPS.',
      'la posición GPS es confiable siempre que haya al menos 3 satélites GPS disponibles.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3598.4',
    'pregunta': '3598.4.- ¿Cuántos satélites del sistema de posicionamiento global (GPS) se requieren para obtener una posición tridimensional (latitud, longitud y altitud) y una solución de tiempo?',
    'opciones': [
      '5',
      '6',
      '4 DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 3',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasNavegacion = preguntasNavegacion;
