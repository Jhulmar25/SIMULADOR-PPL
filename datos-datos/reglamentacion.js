// REGLAMENTACIÓN - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app; [] si no requiere imagen.

const preguntasReglamentacion = [
  {
    'numero': '3005',
    'pregunta': '3005.- La definición de noche es:',
    'opciones': [
      'Del atardecer al amanecer.',
      '1 hora después del atardecer hasta 1 hora antes del amanecer.',
      'El tiempo entre el final del crepúsculo civil vespertino y el comienzo del crepúsculo civil matutino.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3064',
    'pregunta': '3064.- Con respecto a los privilegios y limitaciones, un piloto privado puede:',
    'opciones': [
      'Actuar como piloto al mando, pero sin remuneración.',
      'Actuar como piloto al mando de una aeronave que lleve un pasajero a cambio de una compensación si el vuelo está relacionado con una empresa o empleo.',
      'Se pagará por los gastos operativos de un vuelo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3066',
    'pregunta': '3066.- ¿Qué excepción, si la hay, permite que un piloto privado actúe como piloto al mando de una aeronave que transporta pasajeros que pagan el vuelo?',
    'opciones': [
      'Si los pasajeros pagan todos los gastos operativos.',
      'Si se hace una donación a una organización benéfica para el vuelo.',
      'No hay ninguna excepción.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3067',
    'pregunta': '3067.- (Consulte la Figura 74.) ¿Qué licencia mínima de piloto se requiere para un vuelo que sale de Hayward Executive (Área 6)?',
    'opciones': [
      'Licencia de Alumno Piloto.',
      'Licencia de Piloto Privado.',
      'Licencia de Piloto Deportivo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [74],
  },
  {
    'numero': '3001',
    'pregunta': '3001.- Con respecto a las habilitaciones en las licencias de pilotos, ¿cuáles son las categorías de aeronaves?',
    'opciones': [
      'Giroplano, helicóptero, dirigible, globo libre.',
      'Avión, helicóptero, dirigible de un volumen superior a 4 600 metros cúbicos, aeronave de despegue vertical.',
      'Monomotor terrestre y marítimo, multimotor terrestre y marítimo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3002',
    'pregunta': '3002.- Con respecto a las habilitaciones en las licencias de pilotos, ¿cuáles son las clases de aeronaves?',
    'opciones': [
      'Avión, helicóptero, planeador, más ligero que el aire.',
      'Monomotores terrestres, multimotores terrestres, monomotores hidroavión, multimotores hidroavión.',
      'Más ligero que el aire, dirigible, globo aerostático, globo de gas. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 1',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3024',
    'pregunta': '3024.- ¿El piloto al mando debe tener una habilitación de tipo en qué aeronave?',
    'opciones': [
      'Aeronaves operadas bajo una autorización emitida por la Autoridad.',
      'Aeronaves certificadas para volar con una tripulación mínima de dos pilotos; aviones turbopropulsados; todos los helicópteros y aeronaves de despegue vertical.',
      'Aeronaves involucradas en vuelos de ferry, vuelos de entrenamiento o vuelos de prueba.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3039',
    'pregunta': '3039.- Se emitió un certificado médico de Clase 2 a un piloto privado de 19 años, el certificado médico vencerá en:',
    'opciones': [
      '36 meses.',
      '12 meses.',
      '6 meses.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3020',
    'pregunta': '3020.- Un certificado médico Clase 2 se emite a un piloto de 36 años, el certificado médico será válido por:',
    'opciones': [
      '36 meses.',
      '12 meses.',
      '6 meses.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3021',
    'pregunta': '3021.- Un certificado médico Clase 2 que se emite a un piloto de 51 años, será válido por:',
    'opciones': [
      '36 meses.',
      '12 meses.',
      '6 meses',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3022',
    'pregunta': '3022.- El titular de una licencia de piloto comercial que tiene 42 años realiza operaciones de vuelo privadas, qué certificado médico y validez del mismo debe acreditar:',
    'opciones': [
      'Clase 2, 36 meses.',
      'Clase 1, 12 meses.',
      'Clase 2, 24 meses.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3023',
    'pregunta': '3023.- Para operaciones de piloto privado, un certificado médico Clase 2 emitido a un piloto de 23 años tendrá una validez de:',
    'opciones': [
      '36 meses',
      '12 meses.',
      '6 meses.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3016',
    'pregunta': '3016.- ¿Qué documento (s) debe (n) estar en su posesión personal o de fácil acceso en la aeronave mientras opera como piloto al mando de una aeronave?',
    'opciones': [
      'Certificados que demuestren la realización de una verificación en la aeronave y una revisión de vuelo actual.',
      'Una licencia de piloto con un endoso que demuestre la realización de una revisión de vuelo anual y un diario de vuelo del piloto que muestre la experiencia reciente.',
      'Una licencia de piloto apropiada y un certificado médico actual apropiado.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3017',
    'pregunta': '3017.- ¿Cuándo debe estar una licencia de piloto vigente en posesión personal del piloto o fácilmente accesible en la aeronave?',
    'opciones': [
      'Cuando actúa como jefe de tripulación durante el lanzamiento y la recuperación.',
      'Solo cuando se transportan pasajeros.',
      'En cualquier momento cuando actúe como piloto al mando o como miembro de la tripulación requerido.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3018',
    'pregunta': '3018.- Un piloto privado que actúe como piloto al mando, o en cualquier otra capacidad como piloto requerido miembro de la tripulación de vuelo, debe tener en su posesión personal o fácilmente accesible en la aeronave un:',
    'opciones': [
      'Endoso del libro de registro para demostrar que la revisión del vuelo se ha realizado satisfactoriamente.',
      'Certificado médico y una licencia de piloto apropiada.',
      'Endoso en el certificado de piloto para demostrar que una revisión de vuelo se ha realizado satisfactoriamente.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3019',
    'pregunta': '3019.- Toda persona que posea una licencia de piloto o un certificado médico deberá presentarlo para su inspección a solicitud de cualquier:',
    'opciones': [
      'Representante autorizado del Ministerio de Transporte.',
      'Persona en una posición de autoridad.',
      'Inspectores designados por la AAC.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3028',
    'pregunta': '3028.- Para actuar como piloto al mando de una aeronave que realiza operaciones privadas, un piloto debe demostrar mediante el endoso en su libro de vuelo la finalización satisfactoria de un repaso de vuelo, dentro del periodo anterior de:',
    'opciones': [
      '6 meses calendario.',
      '12 meses calendario.',
      '24 meses calendario.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3029',
    'pregunta': '3029.- Si no se cumplen los requisitos de experiencia reciente para vuelos nocturnos y la puesta de sol oficial es a las 18:30, la última hora en que se pueden transportar personas es:',
    'opciones': [
      '0.7701388888888889',
      '0.7909722222222222',
      '0.8118055555555556 DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 3',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3030',
    'pregunta': '3030.- Para actuar como piloto al mando de una aeronave que transporta personas, el piloto debe haber realizado al menos tres despegues y tres aterrizajes en una aeronave de la misma categoría, clase, y si se requiere habilitación de tipo, del mismo tipo, dentro de los últimos:',
    'opciones': [
      '90 días.',
      '60 días.',
      '30 días',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3030.1',
    'pregunta': '3030.1.- Tu primo quiere que lo lleves a volar. Debe haber realizado al menos tres despegues y tres aterrizajes en su aeronave dentro de los',
    'opciones': [
      '90 días.',
      '60 días.',
      '30 días',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3031',
    'pregunta': '3031.- Para actuar como piloto al mando de una aeronave, el piloto debe haber realizado tres despegues y tres aterrizajes dentro de los 90 días anteriores en una aeronave de la misma:',
    'opciones': [
      'Marca y modelo.',
      'Categoría y clase, pero no tipo.',
      'Categoría, clase y tipo, si se requiere una habilitación de tipo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3034',
    'pregunta': '3034.- Para cumplir con los requisitos de experiencia reciente para actuar como piloto al mando que transporta pasajeros por la noche, un piloto debe haber realizado al menos tres despegues y tres aterrizajes hasta detenerse por completo dentro de los 90 días anteriores en:',
    'opciones': [
      'La misma categoría y clase de aeronave que se utilizará.',
      'El mismo tipo de aeronave que se utilizará.',
      'Cualquier avión.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3040',
    'pregunta': '3040.- Si un piloto privado tuvo su repaso de vuelo, este año, ¿cuándo se requiere el próximo repaso de vuelo?',
    'opciones': [
      '2 años después.',
      '1 año después.',
      'No requiere repaso de vuelo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3041',
    'pregunta': '3041.- Cada piloto privado requiere tener:',
    'opciones': [
      'Una revisión de vuelo bianual.',
      'Una revisión de vuelo anual.',
      'Una revisión de vuelo semianual. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 4',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3032',
    'pregunta': '3032.- Los aterrizajes necesarios para cumplir con los requisitos de experiencia reciente para transportar pasajeros en un avión de rueda de cola:',
    'opciones': [
      'Puede ser toque y listo o punto final.',
      'Debe ser toque y listo.',
      'Hasta la detención completa del avión en la pista.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3033',
    'pregunta': '3033.- Los tres despegues y aterrizajes que se requieren para actuar como piloto al mando en la noche deben realizarse durante el período de tiempo desde:',
    'opciones': [
      'Del atardecer al amanecer.',
      '1 hora después del atardecer hasta 1 hora antes del amanecer.',
      'Del final del crepúsculo civil vespertino al comienzo del crepúsculo civil matutino.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3035',
    'pregunta': '3035.- Si un piloto certificado cambia su domicilio permanente y no notifica a la AAC sobre la nueva dirección, el piloto tiene derecho a ejercer los privilegios del certificado de piloto por un período de solo:',
    'opciones': [
      '30 días después de la fecha que cambió su domicilio.',
      '60 días después de la fecha que cambió su domicilio.',
      '90 días después de la fecha que cambió su domicilio.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3070',
    'pregunta': '3070.- La autoridad final en cuanto a la operación de una aeronave es la de:',
    'opciones': [
      'La Autoridad Aeronáutica.',
      'El piloto al mando.',
      'El fabricante del avión',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3072',
    'pregunta': '3072.- Si una emergencia en vuelo requiere una acción inmediata, el piloto al mando puede:',
    'opciones': [
      'Desviarse de cualquier regla del LAR 91 en la medida necesaria para hacer frente a la emergencia, sin dar aviso a la autoridad.',
      'Desviarse de cualquier regla del LAR 91 en la medida necesaria para cumplir con esa emergencia, notificando a la autoridad competente.',
      'No se desvíe de ninguna regla del LAR 91.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3073',
    'pregunta': '3073.- Cuándo un piloto que se desvía de un reglamento durante una emergencia, debe enviar un informe escrito de esa desviación si lo exigen las Autoridades competentes en un plazo de:',
    'opciones': [
      'En 7 días.',
      'En 10 días.',
      'En 15 días.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3074',
    'pregunta': '3074.- ¿Quién es responsable de determinar si una aeronave está en condiciones de realizar un vuelo seguro?',
    'opciones': [
      'Un mecánico de aeronaves certificado.',
      'El piloto al mando.',
      'El propietario u operador.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3080',
    'pregunta': '3080.- ¿Qué acción previa al vuelo se requiere específicamente del piloto antes de cada vuelo?',
    'opciones': [
      'Consultar los libros de registro de la aeronave para obtener las entradas adecuadas.',
      'Familiarizarse con toda la información disponible sobre el vuelo.',
      'Revisar los procedimientos para evitar estela turbulenta.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3081',
    'pregunta': '3081.- La acción previa al vuelo, como se requiere para todos los vuelos fuera de las proximidades de un aeropuerto, incluirá:',
    'opciones': [
      'La designación de un aeropuerto alternativo.',
      'Un estudio de los procedimientos de llegada en los aeropuertos / helipuertos de uso previsto.',
      'El plan a seguir en caso de que no se pueda completar el vuelo planeado.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3082',
    'pregunta': '3082.- Además de otras acciones previas al vuelo para un vuelo VFR lejos de las cercanías del aeropuerto de salida, las regulaciones requieren específicamente que el piloto al mando:',
    'opciones': [
      'Revisar los procedimientos de las señales de semáforo de control de tráfico.',
      'Comprobar la precisión del equipo de navegación y del transmisor localizador de emergencia (ELT).',
      'Determinar la longitud de las pistas en los aeropuertos de uso previsto y los datos de las distancias de despegue y aterrizaje de la aeronave.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3132',
    'pregunta': '3132.- ¿Cuál es el requisito específico de combustible para volar bajo VFR de noche en un avión?',
    'opciones': [
      'Suficiente para completar el vuelo a velocidad de crucero normal con condiciones de viento adversas.',
      'Suficiente para volar al primer punto de aterrizaje previsto y después volar durante 30 minutos a la velocidad de crucero normal.',
      'Suficiente para volar hasta el primer punto de aterrizaje previsto y después volar durante 45 minutos a la altitud de crucero normal.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3131',
    'pregunta': '3131.- ¿Cuál es el requisito de combustible específico para volar en VFR durante el día en un avión?',
    'opciones': [
      'Suficiente para completar el vuelo a velocidad de crucero normal con condiciones de viento adversas.',
      'Suficiente para volar al primer punto de aterrizaje previsto y después volar durante 30 minutos a la altitud de crucero normal.',
      'Suficiente para volar hasta el primer punto de aterrizaje previsto y después volar durante 45 minutos a la velocidad de crucero normal. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 6',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3083',
    'pregunta': '3083.- Los miembros de la tripulación de vuelo deben mantener abrochados sus cinturones de seguridad y arneses para hombros durante:',
    'opciones': [
      'Los despegues y aterrizajes.',
      'Todas las condiciones de vuelo.',
      'En turbulencia.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3084',
    'pregunta': '3084.- ¿Cuál describe mejor las condiciones de vuelo bajo las cuales se requiere específicamente que los miembros de la tripulación de vuelo mantengan abrochados sus cinturones de seguridad y arneses para hombros?',
    'opciones': [
      'Cinturones de seguridad durante el despegue y el aterrizaje; arneses para hombros durante el despegue y el aterrizaje.',
      'Cinturones de seguridad durante el despegue y el aterrizaje; arneses para hombros durante el despegue y el aterrizaje y durante el trayecto.',
      'Cinturones de seguridad durante el despegue y aterrizaje y en ruta; arneses para hombros durante el despegue y el aterrizaje.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3085',
    'pregunta': '3085.- Con respecto a los pasajeros, ¿qué obligación, si la hubiera, tiene un piloto al mando con respecto al uso de los cinturones de seguridad?',
    'opciones': [
      'El piloto al mando debe instruir a los pasajeros para que mantengan abrochados los cinturones de seguridad durante todo el vuelo.',
      'El piloto al mando debe informar a los pasajeros sobre el uso de los cinturones de seguridad y notificarles que se abrochen los cinturones de seguridad durante el rodaje, el despegue y el aterrizaje.',
      'El piloto al mando no tiene ninguna obligación con respecto al uso de los cinturones de seguridad por parte de los pasajeros.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3085.1',
    'pregunta': '3085.1.- La información previa al despegue de los pasajeros sobre el uso de cinturones de seguridad para un vuelo es responsabilidad de:',
    'opciones': [
      'Todos los pasajeros.',
      'El piloto al mando.',
      'El piloto del asiento derecho.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3086',
    'pregunta': '3086.- Con ciertas excepciones, se requiere que los cinturones de seguridad estén asegurados a los pasajeros durante:',
    'opciones': [
      'Rodaje, despegues y aterrizajes.',
      'Todas las condiciones de vuelo.',
      'Vuelo en aire turbulento.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3087',
    'pregunta': '3087.- ¿Se requiere que los cinturones de seguridad estén debidamente asegurados sobre qué personas en una aeronave y cuándo?',
    'opciones': [
      'Solo pilotos, durante despegues y aterrizajes.',
      'Pasajeros, solo durante el rodaje, despegues y aterrizajes. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 7',
      'Cada persona a bordo del avión durante todo el vuelo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3078',
    'pregunta': '3078.- ¿Puede un piloto permitir que una persona que está obviamente bajo la influencia de drogas sea transportada a bordo de un avión?',
    'opciones': [
      'No le permitirá el embarque.',
      'Si le permitirá el embarque.',
      'Solo si la persona no tiene acceso a la cabina del piloto o al compartimiento del piloto.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3079',
    'pregunta': '3079.- Ninguna persona puede intentar actuar como miembro de la tripulación de una aeronave civil con:',
    'opciones': [
      '0,008 por ciento en peso o más de alcohol en la sangre.',
      '0,004 por ciento en peso o más de alcohol en la sangre.',
      'Los miembros de la tripulación deben abstenerse de desempeñar sus funciones mientras están bajo la influencia del alcohol.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3089',
    'pregunta': '3089.- ¿Qué aeronave tiene el derecho de paso sobre el resto del tráfico aéreo?',
    'opciones': [
      'Un globo.',
      'Un avión en peligro.',
      'Un avión en aproximación final a tierra.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3090',
    'pregunta': '3090.- ¿Qué acción se requiere cuando dos aviones de la misma categoría convergen, pero no de frente?',
    'opciones': [
      'La aeronave más rápida cederá.',
      'La aeronave de la izquierda cederá.',
      'Cada aeronave alterará su rumbo hacia la derecha.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3093',
    'pregunta': '3093.- ¿Qué aeronave tiene el derecho de paso sobre las otras aeronaves enumeradas?',
    'opciones': [
      'Planeador.',
      'Dirigible.',
      'Aeronaves que vayan remolcando a otras.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3092',
    'pregunta': '3092.- Un avión y un dirigible convergen. Si el dirigible se encuentra a la izquierda de la posición del avión, ¿qué aeronave tiene el derecho de paso?',
    'opciones': [
      'El dirigible.',
      'El avión.',
      'Cada piloto debe alterar el rumbo hacia la derecha.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3091',
    'pregunta': '3091.- ¿Qué aeronave tiene el derecho de paso sobre las otras aeronaves enumeradas?',
    'opciones': [
      'Giroplano.',
      'Dirigible. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 8',
      'Planeadores',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3095',
    'pregunta': '3095.- Cuando dos o más aeronaves se acercan a un aeropuerto con el propósito de aterrizar, el derecho de paso pertenece a la aeronave.',
    'opciones': [
      'Que tiene el otro a su derecha.',
      'Eso es lo menos maniobrable.',
      'La aeronave de menor altitud, pero no se aprovechará de esta regla para cortar por delante o adelantar a otro.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3096',
    'pregunta': '3096.- Un hidroavión y una lancha a motor están en vías de cruce. Si la lancha está a la izquierda del hidroavión, ¿cuál tiene el derecho de paso?',
    'opciones': [
      'La lancha.',
      'El hidroavión.',
      'Ambos deben cambiar de rumbo hacia la derecha.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3094',
    'pregunta': '3094.- ¿Qué acción deben tomar los pilotos de un planeador y un avión si se encuentran en un curso de colisión frontal?',
    'opciones': [
      'El piloto del avión debe ceder el paso a la izquierda.',
      'El piloto del planeador debe ceder el paso a la derecha.',
      'Ambos pilotos deben ceder el paso a la derecha.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3172',
    'pregunta': '3172.- Un paracaídas tipo asiento aprobado puede llevarse en una aeronave para uso de emergencia si ha sido plegado por un plegador de paracaídas certificado y apropiado dentro de los:',
    'opciones': [
      '120 días precedentes.',
      '180 días precedentes',
      '365 días precedentes',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3173',
    'pregunta': '3173.- Con ciertas excepciones, ¿cuándo debe cada ocupante de una aeronave usar un paracaídas aprobado?',
    'opciones': [
      'Cuando se quita una puerta de la aeronave para facilitar los saltadores en paracaídas.',
      'Al inclinar intencionalmente la nariz de la aeronave hacia arriba o hacia abajo 30° o más.',
      'Cuando se inclina intencionalmente a más de 30 °.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3108',
    'pregunta': '3108.- Cuando se ha obtenido una autorización ATC, ningún piloto al mando puede desviarse de esa autorización, a menos que ese piloto obtenga una autorización modificada. La única excepción a este reglamento es:',
    'opciones': [
      'cuando la autorización dice "a discreción del piloto".',
      'Una emergencia.',
      'Si la autorización contiene una restricción. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 9',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3108.1',
    'pregunta': '3108.1.- Como piloto al mando de una aeronave, ¿en qué situación puede desviarse de una autorización ATC?',
    'opciones': [
      'Cuando se opera en el espacio aéreo Clase A por la noche.',
      'Si no se entiende una autorización ATC y en condiciones VFR.',
      'En respuesta a una alerta de tráfico y un aviso de resolución del sistema para evitar colisiones.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3109',
    'pregunta': '3109.- ¿Cuándo se le exigirá a un piloto que informe sobre las medidas aplicadas en una emergencia que provocó que el piloto se desvíe de una autorización ATC?',
    'opciones': [
      'Dentro de las 48 horas siguientes.',
      'Tan pronto como lo permitan las circunstancias',
      'En 7 días.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3837',
    'pregunta': '3837.- Una autorización ATC proporciona:',
    'opciones': [
      'Prioridad sobre el resto del tráfico.',
      'Separación adecuada de todo el tráfico.',
      'Autorización para proceder en condiciones de tráfico específicas en espacio aéreo controlado.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '2004',
    'pregunta': '2004.- Mientras esté en un VFR de campo traviesa y no esté en contacto con ATC, ¿qué frecuencia usaría en caso de una emergencia?',
    'opciones': [
      '121,5 MHz.',
      '122,5 MHz.',
      '128,725 MHz.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3101',
    'pregunta': '3101.- Excepto cuando sea necesario para el despegue o el aterrizaje, ¿cuál es la altitud mínima segura para que un piloto opere una aeronave en vuelos VFR?',
    'opciones': [
      'A una altura de 300 m (1 000 ft) sobre el obstáculo más alto situado dentro de un radio de 600 m desde la aeronave, sobre aglomeraciones de edificios en ciudades, pueblos o lugares habitados, o sobre una reunión de personas al aire libre',
      'Una altitud de 500 ft sobre la superficie y no más cerca de 500 pies de cualquier persona, embarcación, vehículo o estructura.',
      'Una altitud de 500 ft por encima del obstáculo más alto dentro de un radio horizontal de 1,000 pies.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3102',
    'pregunta': '3102.- Excepto cuando sea necesario para el despegue o el aterrizaje, ¿cuál es la altitud mínima de seguridad requerida para que un piloto opere una aeronave en vuelo IFR?',
    'opciones': [
      'Una altitud de 1,000 pies sobre cualquier persona, embarcación, vehículo o estructura.',
      'Una altitud de 500 pies por encima del obstáculo más alto dentro de un radio horizontal de 1,000 pies de la aeronave. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 10',
      'Sobre terreno elevado o en áreas montañosas, a un nivel de por lo menos 600 m (2 000 ft) por encima del obstáculo más alto que se halle dentro de un radio de 8 km con respecto a la posición estimada de la aeronave en vuelo.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3103',
    'pregunta': '3103.- Excepto cuando sea necesario para el despegue o el aterrizaje, ¿cuál es la altitud mínima segura requerida para que un piloto opere una aeronave en un área que no sea congestionada en vuelos VFR?',
    'opciones': [
      '500 ft sobre tierra o agua.',
      'Una altitud que permite, si falla una unidad motriz, un aterrizaje de emergencia sin peligro indebido para las personas o la propiedad en la superficie.',
      '1000 ft sobre tierra o agua.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3104',
    'pregunta': '3104.- Excepto cuando sea necesario para el despegue o el aterrizaje, ¿una aeronave no puede operarse más cerca de qué distancia de cualquier persona, embarcación, vehículo o estructura, en vuelo VFR?',
    'opciones': [
      '500 pies.',
      '700 pies.',
      '1000 pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3136',
    'pregunta': '3136.- Durante las operaciones dentro del espacio aéreo controlado a altitudes de menos de 3000 pies AMSL, el requisito de distancia horizontal mínima desde las nubes para el vuelo VFR es:',
    'opciones': [
      '1500 metros.',
      '1000 pies.',
      '300 metros.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3138',
    'pregunta': '3138.- ¿Qué visibilidad de vuelo mínima se requiere para operaciones de vuelo VFR en una vía aérea por debajo de 10,000 pies AMSL?',
    'opciones': [
      '8 km',
      '3 km',
      '5 km',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3139',
    'pregunta': '3139.- La distancia mínima de las nubes requerida para operaciones VFR en una vía aérea por debajo de 10,000 pies AMSL y por encima de 3000 pies es:',
    'opciones': [
      '1500 metros horizontalmente y 300 metros verticalmente.',
      'Libre de nubes.',
      '5 km.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3140',
    'pregunta': '3140.- Durante las operaciones dentro del espacio aéreo controlado a altitudes de más de 1,000 pies sobre el terreno, pero menos de 10,000 pies AMSL, el requisito de distancia mínima por encima de las nubes para vuelos VFR es:',
    'opciones': [
      '1,500 pies. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 11',
      '1500 metros horizontalmente y 300 metros verticalmente.',
      '1500 metros verticalmente y 300 metros horizontalmente.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3141',
    'pregunta': '3141.- El vuelo VFR en espacio aéreo controlado por encima de los 3000 pies AMSL y por debajo de los 10,000 pies AMSL requiere una visibilidad mínima y un espacio de:',
    'opciones': [
      '5 km, 1500 metros horizontalmente y 300 metros verticalmente.',
      '3 km y 500 pies por debajo o 1,000 pies por encima de las nubes',
      '5 km y libre de nubes y con la superficie a la vista',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3145',
    'pregunta': '3145.- La visibilidad de vuelo mínima requerida para vuelos VFR por encima de 10,000 pies AMSL espacio aéreo controlado es:',
    'opciones': [
      '1500 metros horizontalmente y 300 metros verticalmente.',
      '5 km',
      '8 km',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3146',
    'pregunta': '3146.- Para operaciones de vuelo VFR por encima de los 10,000 pies AMSL la distancia horizontal mínima de las nubes requerida es:',
    'opciones': [
      '1,000 metros',
      '1,500 pies.',
      '1,500 metros.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3147',
    'pregunta': '3147.- Durante las operaciones en altitudes por encima de 10,000 pies AMSL, la distancia mínima por encima de las nubes requeridas para el vuelo VFR es:',
    'opciones': [
      '1500 metros horizontalmente y 300 metros verticalmente.',
      'Libre de nubes y con la superficie a la vista',
      '1500 pies horizontalmente y 1000 pies verticalmente.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3620.1',
    'pregunta': '3620.1.- Los requisitos de visibilidad y despeje de nubes para operar VFR durante el día sobre un aeropuerto ubicado en espacio aéreo F a 1000 pies sobre el terreno es:',
    'opciones': [
      '5 km.',
      '5 km, libre de nubes y con la superficie a la vista.',
      '5 km y distancia de nubes de 1500 metros horizontalmente y 300 metros verticalmente.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3620.2',
    'pregunta': '3620.2.- Los requisitos de visibilidad y despeje de nubes para operar de noche sobre el aeropuerto espacio aéreo Clase E a 1000 pies sobre el terreno:',
    'opciones': [
      '8 km y 1500 metros horizontalmente y 300 metros verticalmente.',
      '5 km, libre de nubes y con la superficie a la vista.',
      '5 km y 1500 metros horizontalmente y 300 metros verticalmente. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 12',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3621.1',
    'pregunta': '3621.1.- Los requisitos de visibilidad y distancia de nubes para operar VFR durante las horas del día en el espacio aéreo Clase E entre 1,000 pies sobre el terreno y 10,000 pies AMSL son:',
    'opciones': [
      '1 milla y despejado de nubes.',
      '5 km, 1500 metros horizontalmente y 300 metros verticalmente.',
      '5 km, 1500 metros horizontalmente y 300 metros',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3621.2',
    'pregunta': '3621.2.- Los requisitos de visibilidad VFR diurna y despeje de nubes para operar sobre una ciudad en espacio aéreo Clase G y después de salir y ascender del aeropuerto a 1000 pies:',
    'opciones': [
      '5 km y libre de nubes y con la superficie a la vista',
      '1 milla y 1,000 pies arriba, 500 pies abajo y 2,000 pies horizontalmente desde las nubes.',
      '3 km y despejado de nubes.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3621.3',
    'pregunta': '3621.3.- ¿Cuáles son los mínimos meteorológicos VFR básicos necesarios para despegar de un aeropuerto en un espacio aéreo de Clase G, durante el día?',
    'opciones': [
      '5 km, libre de nubes y con la superficie a la vista.',
      '5 km y 1500 metros horizontalmente y 300 metros verticalmente.',
      '8 km.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3520',
    'pregunta': '3520.- En vuelo en el espacio aéreo Clase G a 300 metros sobre el terreno, las mínimas meteorológicas son:',
    'opciones': [
      '1500 metros horizontalmente y 300 metros verticalmente.',
      '5 km. 1500 metros horizontalmente y 300 metros verticalmente.',
      '5 km, libre de nubes y con la superficie a la vista.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3137',
    'pregunta': '3137.- ¿Qué visibilidad y distancia mínima de las nubes se requieren para las operaciones VFR en el espacio aéreo de Clase G a 3000 pies AMSL o menos durante las horas del día?',
    'opciones': [
      'Visibilidad de 5 km, libre de nubes y con la superficie a la vista.',
      'Visibilidad de 1 milla, 500 pies por debajo, 1,000 pies por encima y 2,000 pies de distancia horizontal de las nubes.',
      'Visibilidad de 3 km de visibilidad y despejado de nubes.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3142',
    'pregunta': '3142.- Durante las operaciones fuera del espacio aéreo controlado a 3,000 pies AMSL o por debajo, o a 1,000 pies sobre el terreno, la visibilidad mínima de vuelo para vuelos VFR es:',
    'opciones': [
      '5 km',
      '3 km.',
      '8 km.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3143',
    'pregunta': '3143.- Durante las operaciones fuera del espacio aéreo controlado a altitudes de más de 3000 pies AMSL, pero menos de 10,000 pies AMSL, la visibilidad mínima de vuelo para el vuelo VFR diurno es:',
    'opciones': [
      '8 km',
      '5 km',
      '3 km',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3144',
    'pregunta': '3144.- Durante las operaciones fuera del espacio aéreo controlado a altitudes de más de 1,000 pies sobre el terreno, pero menos de 10,000 pies AMSL, el requisito de distancia mínima debajo de las nubes para vuelos VFR de noche es:',
    'opciones': [
      '1500 metros horizontalmente y 300 metros verticalmente.',
      '1500 pies.',
      'Libre de nubes y con la superficie a la vista.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3148',
    'pregunta': '3148.- Ninguna persona puede despegar o aterrizar una aeronave con VFR básico en un aeropuerto dentro de una zona de control si la visibilidad en tierra es menor a:',
    'opciones': [
      '5 km',
      '8 km',
      '1500 m.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3149',
    'pregunta': '3149.- Los mínimos meteorológicos básicos VFR para operar una aeronave dentro de la zona de tránsito de aeródromo o en el circuito de tránsito de dicho aeródromo:',
    'opciones': [
      'Techo de nubes 1500 pies y visibilidad 5 km.',
      '5 km.',
      '450 m.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3150',
    'pregunta': '3150.- Una autorización VFR especial autoriza al piloto de una aeronave a operar VFR mientras se encuentra dentro del espacio aéreo Clase D cuando la visibilidad en tierra es:',
    'opciones': [
      'Menos de 1,000 pies.',
      'Al menos 1500 metros.',
      'Al menos 1000 metros y libre de nubes.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3151',
    'pregunta': '3151.- ¿Cuál es la condición climática mínima requerida para los aviones que operan bajo VFR especial en el espacio aéreo de Clase D?',
    'opciones': [
      'Visibilidad en tierra 1500 metros.',
      'Visibilidad en tierra 1000 pies.',
      'Visibilidad de 3 millas.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3813',
    'pregunta': '3813.- ¿Con qué instalación ATC debe contactar el piloto para recibir una autorización de salida VFR especial en el espacio aéreo de Clase D?',
    'opciones': [
      'Estación de servicio de vuelo automatizada.',
      'Torre de control de tráfico aéreo.',
      'Centro de Control de Tráfico de Rutas Aéreas. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 14',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3155',
    'pregunta': '3155.- ¿Qué altitud de crucero es apropiada para un vuelo VFR con un rumbo magnético de 135°?',
    'opciones': [
      'Cualquier altitud impar de miles de pies MSL más 500 pies.',
      'Cualquier altitud par de miles de pies MSL más 500 pies',
      'Cualquier altitud más 500 pies.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3156',
    'pregunta': '3156.- ¿Qué altitud de crucero VFR es aceptable para un vuelo a FL 115 con un rumbo magnético de 175 °?',
    'opciones': [
      '1000 pies',
      '3000 metros.',
      '11500 pies.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3157',
    'pregunta': '3157.- ¿Qué altitud de crucero VFR es apropiada cuando se vuela a 18500 pies en un curso magnético de 185°?',
    'opciones': [
      '5500 pies',
      '5650 metros.',
      '18000 metros.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3158',
    'pregunta': '3158.- Cada persona que opere una aeronave a una altitud de crucero VFR deberá mantener una altitud de miles impares más 500 pies mientras esté en un vuelo.',
    'opciones': [
      'Rumbo magnético de 0° a 179°.',
      'Curso magnético de 0° a 179°.',
      'Rumbo magnético de 180° a 359°.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3003',
    'pregunta': '3003.- Con respecto a la certificación de aeronaves, ¿cuáles son algunas de las categorías de aeronave?',
    'opciones': [
      'Normal, utilitario, acrobático.',
      'Avión, helicóptero, planeador.',
      'Avión terrestre, hidroavión.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3179',
    'pregunta': '3179.- A menos que se autorice específicamente lo contrario, ninguna persona puede operar una aeronave que tenga un certificado experimental',
    'opciones': [
      'Debajo del espacio aéreo Clase B.',
      'Sobre un área densamente poblada o en una ruta aérea congestionada.',
      'Desde el aeropuerto principal dentro del espacio aéreo de Clase D.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3178',
    'pregunta': '3178.- ¿Qué está normalmente prohibido cuando se opera una aeronave civil de categoría restringida?',
    'opciones': [
      'Vuelo bajo reglas de vuelo por instrumentos.',
      'Vuelo sobre una zona densamente poblada.',
      'Vuelo dentro del espacio aéreo Clase D. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 15',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3088',
    'pregunta': '3088.- Ninguna persona puede operar una aeronave en vuelo en formación:',
    'opciones': [
      'Sobre un área densamente poblada.',
      'En el espacio aéreo de clase D.',
      'Excepto por acuerdo previo con el piloto al mando de cada aeronave.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3076',
    'pregunta': '3076.- ¿En qué condiciones se pueden dejar caer objetos desde un avión?',
    'opciones': [
      'Solo en caso de emergencia.',
      'No se hará ningún lanzamiento ni rociado desde aeronaves en vuelo salvo en las condiciones prescritas por la AAC y autorización de los servicios de tránsito aéreo.',
      'Siempre que se requiera.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3818',
    'pregunta': '3818.- ¿Cómo se debe cerrar un plan de vuelo VFR al finalizar el vuelo en un aeropuerto controlado?',
    'opciones': [
      'La torre cerrará automáticamente el plan de vuelo cuando la aeronave salga de la pista.',
      'El piloto debe cerrar el plan de vuelo con la dependencia ATS correspondiente al aterrizar.',
      'La torre transmitirá las instrucciones cuando la aeronave contacte con la torre para aterrizar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3075',
    'pregunta': '3075.- ¿Dónde se pueden encontrar las limitaciones operativas de una aeronave?',
    'opciones': [
      'En el certificado de aeronavegabilidad.',
      'En el manual de vuelo, aprobado por la AAC.',
      'En los cuadernos de bitácora del motor y la estructura del avión',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3075.1',
    'pregunta': '3075.1.- ¿Dónde se pueden encontrar las limitaciones operativas de una aeronave si la aeronave tiene un certificado de aeronavegabilidad experimental o especial para deportes ligeros?',
    'opciones': [
      'Adjunto al certificado de aeronavegabilidad.',
      'En el manual de vuelo aprobado',
      'En los cuadernos de bitácora del motor y la estructura del avión',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3159',
    'pregunta': '3159.- Además de un certificado de aeronavegabilidad válido, ¿qué documentos o registros deben estar a bordo de una aeronave durante el vuelo?',
    'opciones': [
      'Libros de registro de motores y fuselajes de aeronaves y manual del propietario.',
      'Permiso de operador de radio y formularios de reparación y alteración.',
      'Certificado de matrícula, libro de abordo, entre otros. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 16',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3187',
    'pregunta': '3187.- ¿Cuánto tiempo permanece válido el certificado de aeronavegabilidad de una aeronave?',
    'opciones': [
      'Siempre que la aeronave tenga un certificado de registro vigente.',
      'Indefinidamente, a menos que la aeronave sufra daños importantes.',
      'Siempre y cuando la aeronave se mantenga y opere como lo requieren los reglamentos LAR.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3180.1',
    'pregunta': '3180.1.- La responsabilidad de asegurar que una aeronave se mantenga en condiciones de aeronavegabilidad es principalmente del:',
    'opciones': [
      'Piloto al mando.',
      'Propietario u operador.',
      'Mecánico que realiza el trabajo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3180.2',
    'pregunta': '3180.2.- La aeronavegabilidad de una aeronave se puede determinar mediante una inspección previa al vuelo y una:',
    'opciones': [
      'Declaración del propietario u operador de que la aeronave está en condiciones de aeronavegabilidad.',
      'Aprobación del libro de registro de un instructor de vuelo.',
      'Revisión de los registros de mantenimiento.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3181.1',
    'pregunta': '3181.1.- La responsabilidad de asegurar que el personal de mantenimiento haga las entradas apropiadas en los registros de mantenimiento de la aeronave que indiquen que la aeronave ha sido aprobada para su regreso al servicio recae en:',
    'opciones': [
      'Propietario u operador.',
      'Piloto al mando.',
      'Mecánico que realizó el trabajo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3181.2',
    'pregunta': '3181.2.- ¿Quién es responsable de garantizar que se realicen las entradas adecuadas en los registros de mantenimiento que indiquen que la aeronave ha sido aprobada para volver al servicio?',
    'opciones': [
      'Propietario u operador.',
      'Mecánico certificado.',
      'Estación de reparación.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3182',
    'pregunta': '3182.- La finalización de una inspección anual de la aeronave y el regreso de la aeronave al servicio siempre deben indicarse mediante:',
    'opciones': [
      'La fecha de renovación de la licencia en el Certificado de registro.',
      'Una anotación apropiada en los registros de mantenimiento de la aeronave.',
      'Una etiqueta de inspección colocada en el panel de instrumentos que indica la fecha de finalización de la inspección anual.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3185',
    'pregunta': '3185.- La inspección anual del estado de la aeronave se realizó el 12 de julio de este año. La próxima inspección anual vencerá a más tardar el:',
    'opciones': [
      '1 de julio del año que viene.',
      '13 de julio del próximo año.',
      '31 de julio del próximo año.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3186',
    'pregunta': '3186.- Para determinar la fecha de vencimiento de la última inspección anual de la aeronave, una persona debe consultar el:',
    'opciones': [
      'Certificado de aeronavegabilidad.',
      'Certificado de registro.',
      'Registros de mantenimiento de aeronaves.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3191',
    'pregunta': '3191.- Ninguna persona puede usar un transponder ATC a menos que haya sido probado e inspeccionado dentro de al menos el:',
    'opciones': [
      '6 meses calendario.',
      '12 meses calendario.',
      '24 meses calendario.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3192',
    'pregunta': '3192.- Los registros de mantenimiento muestran que la última inspección del transpondedor se realizó el 1 de septiembre de 2020. La próxima inspección se debe realizar a más tardar el:',
    'opciones': [
      '30 de septiembre de 2021',
      '1 de septiembre de 2022.',
      '30 de septiembre de 2022.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3189',
    'pregunta': '3189.- Un avión tuvo una inspección de 100 horas cuando el tacómetro leyó 1259.6. ¿Cuándo vence la próxima inspección de 100 horas?',
    'opciones': [
      '1349.6 horas',
      '1359.6 horas',
      '1369.6 horas',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3190',
    'pregunta': '3190.- Se debía realizar una inspección de 100 horas a las 3302,5 horas. La inspección de 100 horas se realizó en realidad a las 3309,5 horas. ¿Cuándo vence la próxima inspección de 100 horas?',
    'opciones': [
      '3312.5 horas',
      '3402.5 horas',
      '3395.5 horas',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3193',
    'pregunta': '3193.- ¿Qué registros o documentos debe conservar el propietario u operador de una aeronave para demostrar el cumplimiento de una directiva de aeronavegabilidad aplicable?',
    'opciones': [
      'Registros de mantenimiento de aeronaves.',
      'Certificado de aeronavegabilidad y manual operativo del piloto.',
      'Certificados de aeronavegabilidad y matrícula.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3012.2',
    'pregunta': '3012.2.- ¿Qué debe saber un propietario u operador sobre las directivas de aeronavegabilidad (AD)?',
    'opciones': [
      'Solo con fines informativos.',
      'Son obligatorios.',
      'Son voluntarios.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3012.3',
    'pregunta': '3012.3.- ¿Puede un piloto operar una aeronave que no cumpla con una directiva de aeronavegabilidad (AD)?',
    'opciones': [
      'Sí, solo en condiciones VFR.',
      'Sí, los AD son solo voluntarios.',
      'No, no puede a menos que cumpla con las directrices de aeronavegabilidad.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3181.3',
    'pregunta': '3181.3.- ¿Quién es responsable de garantizar que se cumplan las directivas de aeronavegabilidad (AD)?',
    'opciones': [
      'Propietario u operador.',
      'Estación de reparación.',
      'Mecánico con autorización de inspección.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3709',
    'pregunta': '3709.- Las circulares de asesoramiento están disponibles para todos los pilotos y se obtienen por:',
    'opciones': [
      'Comprando en la Oficia Regional OACI.',
      'Suscribiéndose a la Oficina Regional OACI.',
      'Accediendo a la página web del SRVSOP.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3194',
    'pregunta': '3194.- Si una aeronave está involucrada en un accidente que resulta en daños sustanciales a la aeronave, se debe notificar a la Autoridad AIG más cercana.',
    'opciones': [
      'Inmediatamente.',
      'Dentro de las 48 horas.',
      'En 7 días.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3195',
    'pregunta': '3195.- ¿Qué incidente requiere una notificación inmediata a la oficina AIG más cercana?',
    'opciones': [
      'Un aterrizaje forzoso por avería del motor.',
      'Daños en el tren de aterrizaje, debido a un aterrizaje forzoso.',
      'Mal funcionamiento o falla del sistema de control de vuelo.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3196',
    'pregunta': '3196.- ¿Qué incidente requeriría una notificación inmediata a la oficina AIG más cercana?',
    'opciones': [
      'Una falla del alternador / generador en vuelo.',
      'Un incendio en vuelo.',
      'Una pérdida en vuelo de la capacidad del receptor VOR.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3198',
    'pregunta': '3198.- ¿Se pueden mover los restos de la aeronave antes de que la autoridad AIG tome la custodia?',
    'opciones': [
      'Sí, pero solo si lo traslada un agente de la ley estatal o local.',
      'Sí, pero solo para proteger los restos de un daño mayor.',
      'No, no se puede mover bajo ningún concepto.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3200',
    'pregunta': '3200.- El operador de una aeronave que ha estado involucrada en un incidente debe enviar un informe a la oficina de la autoridad AIG.',
    'opciones': [
      'En 7 días.',
      'En 10 días.',
      'Cuando se solicite. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 20',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasReglamentacion = preguntasReglamentacion;
