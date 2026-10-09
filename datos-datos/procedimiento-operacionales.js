// PROCEDIMIENTOS Y OPERACIONES AEROPORTUARIAS - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app; [] si no requiere imagen.

const preguntasProcedimientosOperacionales = [
  {
    'numero': '3123',
    'pregunta': '3123.- ¿Cuál es el procedimiento de salida de patrón de tráfico correcto para usar en un aeropuerto no controlado?',
    'opciones': [
      'Salga en cualquier dirección compatible con la seguridad, después de cruzar el límite del aeropuerto.',
      'Haga todos los giros a la izquierda.',
      'Cumplir con cualquier patrón de tráfico de la AAC establecido para el aeropuerto.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3123.1',
    'pregunta': '3123.1.- La posición de entrada recomendada a un patrón de tráfico del aeropuerto es:',
    'opciones': [
      '45° hasta el tramo base justo debajo de la altitud del patrón de tráfico.',
      'Para ingresar 45° en el punto medio del tramo a favor del viento a la altitud del patrón de tráfico.',
      'Para cruzar directamente sobre el aeropuerto a la altitud del patrón de tráfico y unirse al tramo a favor del viento.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3807',
    'pregunta': '3807.- (Refiérase la Figura 50). El círculo segmentado indica que el tráfico del aeropuerto está:',
    'opciones': [
      'A la izquierda para la Pista 36 y a la derecha para la Pista 18.',
      'A la izquierda para la Pista 18 y a la derecha para la Pista 36.',
      'A la derecha para la Pista 9 y a la izquierda para la Pista 27.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [50],
  },
  {
    'numero': '3808',
    'pregunta': '3808.- (Refiérase la Figura 50.) Los patrones de tráfico indicados en el círculo segmentado se han dispuesto para evitar vuelos sobre un área:',
    'opciones': [
      'Al sur del aeropuerto.',
      'Al norte del aeropuerto.',
      'Al sureste del aeropuerto.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [50],
  },
  {
    'numero': '3809',
    'pregunta': '3809.- (Refiérase a la Figura 50.) El círculo segmentado indica que un aterrizaje en la Pista 26 será con un:',
    'opciones': [
      'Viento en contra hacia la derecha.',
      'Viento en contra a la izquierda.',
      'Viento de cola hacia la derecha.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [50],
  },
  {
    'numero': '3810',
    'pregunta': '3810.- (Refiérase a la Figura 50.) ¿Qué pista y patrón de tránsito deberían usarse como lo indica el cono de viento en el círculo segmentado?',
    'opciones': [
      'Circulación por la derecha en la Pista 9.',
      'Circulación por la derecha en la Pista 18.',
      'Circulación por la izquierda en la pista 36. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 1',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [50],
  },
  {
    'numero': '3719',
    'pregunta': '3719.- Se deben realizar aproximaciones VFR a tierra por la noche:',
    'opciones': [
      'A una mayor velocidad aerodinámica.',
      'Con un descenso más pronunciado.',
      'Lo mismo que durante el día.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3778',
    'pregunta': '3778.- Los números 9 y 27 en una pista indican que la pista está orientada aproximadamente:',
    'opciones': [
      '009° y 027° verdaderos.',
      '. 090° y 270° verdaderos.',
      '090° y 270° magnético.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3778.1',
    'pregunta': '3778.1.- Los números 8 y 26 en los extremos de aproximación de la pista indican que la pista está orientada aproximadamente',
    'opciones': [
      '008° y 026° verdaderos.',
      '080° y 260° verdaderos.',
      '080° y 260° magnético.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3778.2',
    'pregunta': '3778.2.- Al girar hacia una calle de rodaje desde otra calle de rodaje, ¿cuál es el propósito de la señal direccional de la calle de rodaje?',
    'opciones': [
      'Indica dirección a la pista de despegue.',
      'Indica la designación y la dirección de la calle de salida de la pista.',
      'Indica la designación y la dirección de la calle de rodaje que sale de una intersección.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3778.3',
    'pregunta': '3778.3.- (Refiérase a la Figura 64.) ¿Qué símbolo indica una marca de posición de espera de calle de rodaje / intersección de calle de rodaje?',
    'opciones': [
      'B',
      'D',
      'E',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [64],
  },
  {
    'numero': '3957',
    'pregunta': '3957.- (Refiérase a la Figura 58.) Ha solicitado instrucciones de rodaje para el despegue utilizando la Pista 16. El controlador emite las siguientes instrucciones de rodaje: "N123, Taxi a la pista 16." ¿Dónde debe detenerse para cumplir con las instrucciones del controlador?',
    'opciones': [
      '5 (cinco).',
      '6 (seis).',
      '9 (nueve).',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [58],
  },
  {
    'numero': '3955.1',
    'pregunta': '3955.1.- Al acercarse a las líneas de espera de la calle de rodaje desde el lado con las líneas continuas, el piloto:',
    'opciones': [
      'Puede continuar rodando.',
      'No debe cruzar las líneas sin autorización del ATC.',
      'Debe continuar rodando hasta que todas las partes de la aeronave hayan cruzado las líneas. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 2',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3955.2',
    'pregunta': '3955.2.- ¿Cuál es el propósito de la señal de posición de espera de pista / pista?',
    'opciones': [
      'Indica la entrada a la pista desde una calle de rodaje.',
      'Denota área protegida para una aeronave que se aproxima o sale de una pista.',
      'Denota pistas que se cruzan.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3955.3',
    'pregunta': '3955.3.- ¿Qué identifica el letrero de destino de salida?',
    'opciones': [
      'Identifica la entrada a la pista desde una calle de rodaje.',
      'Identifica la dirección de las pistas de despegue.',
      'Identifica la pista en la que se encuentra una aeronave.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3955.4',
    'pregunta': '3955.4.- ¿Cuál es el propósito del letrero de No Entrada?',
    'opciones': [
      'Identifica un área pavimentada donde se prohíbe la entrada de aeronaves.',
      'Identifica el área que no continúa más allá de la intersección.',
      'Identifica el límite de salida del área protegida de la pista.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3955.5',
    'pregunta': '3955.5.- (Refiérase a la Figura 65.) ¿Qué señal de aeropuerto es un límite de área de seguridad de pista / zona libre de obstáculos?',
    'opciones': [
      'G',
      'H',
      'N',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [65],
  },
  {
    'numero': '3955.6',
    'pregunta': '3955.6.- (Refiérase a la Figura 65). Desde la cabina, la marca G confirma que la aeronave está:',
    'opciones': [
      'En una calle de rodaje, a punto de entrar en la zona de la pista.',
      'En una pista, a punto de despejar.',
      'Cerca de una zona libre de aproximación por instrumentos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [65],
  },
  {
    'numero': '3773',
    'pregunta': '3773.- (Refiérase a la Figura 48.) La porción de la pista identificada por la letra A puede usarse para:',
    'opciones': [
      'Aterrizaje.',
      'Rodaje y despegue.',
      'Rodaje y aterrizaje.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [48],
  },
  {
    'numero': '3774',
    'pregunta': '3774.- (Refiérase a la Figura 48). Según el diagrama del aeropuerto, ¿qué afirmación es verdadera?',
    'opciones': [
      'La pista 30 está equipada en la posición E con equipo de detención de emergencia para proporcionar un medio de detener las aeronaves militares. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 3',
      'Los despegues pueden iniciarse en la posición A de la pista 12, y la parte de aterrizaje de esta pista comienza en la posición B.',
      'La parte de despegue y aterrizaje de la pista 30 comienza en la posición E.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [48],
  },
  {
    'numero': '3776',
    'pregunta': '3776.- (Consulte la Figura 48). El área C del aeropuerto representado se clasifica como:',
    'opciones': [
      '. Zona estabilizada.',
      'Helipuerto múltiple.',
      'Pista cerrada.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [48],
  },
  {
    'numero': '3777',
    'pregunta': '3777.- (Consulte la Figura 49). Las flechas que aparecen al final de la pista norte / sur indican que el área',
    'opciones': [
      'Sólo se puede utilizar para el rodaje.',
      'Se puede utilizar para rodaje, despegue y aterrizaje.',
      'No se puede utilizar para aterrizar, pero se puede utilizar para rodaje y despegue.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [49],
  },
  {
    'numero': '3805',
    'pregunta': '3805.- (Refiérase a la Figura 49). Seleccione el patrón de tráfico y la pista adecuados para el aterrizaje.',
    'opciones': [
      'Circulación por la izquierda y Pista 18.',
      'Circulación por la derecha y Pista 18.',
      'Circulación por la izquierda y Pista 22.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [49],
  },
  {
    'numero': '3806',
    'pregunta': '3806.- (Consulte la Figura 49). Si el viento es el que muestra el indicador de dirección de aterrizaje, el piloto debe aterrizar en:',
    'opciones': [
      'Pista 18 y espere viento cruzado desde la derecha.',
      'Pista 22 directamente al viento.',
      'Pista 36 y espere viento cruzado desde la derecha.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [49],
  },
  {
    'numero': '3806.1',
    'pregunta': '3806.1.- (Consulte la Figura 65). La señal F confirma su posición en:',
    'opciones': [
      'pista 22.',
      'Encaminamiento a la pista 22.',
      'Calle de rodaje 22.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [65],
  },
  {
    'numero': '3806.2',
    'pregunta': '3806.2.- (Refiérase a la Figura 65). La señal E es una pista visual que:',
    'opciones': [
      'Confirma que la ubicación de la aeronave está en la calle de rodaje B.',
      'Advierte al piloto de que se aproxima a la calle de rodaje B.',
      'Indica que el área de espera "B" está adelante',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [65],
  },
  {
    'numero': '3806.3',
    'pregunta': '3806.3.- (Refiérase a la Figura 65.) Un giro a la izquierda en la intersección que muestra la señal A colocaría la aeronave:',
    'opciones': [
      'Listo para un despegue en la intersección de la pista 4. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 4',
      'En la calle de rodaje que conduce a la Pista 4.',
      'Listo para un despegue en la intersección de la pista 22.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [65],
  },
  {
    'numero': '3769',
    'pregunta': '3769.- La baliza giratoria de un aeropuerto operada durante el día indica:',
    'opciones': [
      'Hay obstrucciones en el aeropuerto.',
      'Que el clima en el aeropuerto ubicado en el espacio aéreo de Clase D está por debajo de los mínimos climáticos básicos VFR',
      'La torre de control de tráfico aéreo no está en funcionamiento.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3718',
    'pregunta': '3718.- Las luces del borde de la calle de rodaje del aeropuerto se identifican por la noche:',
    'opciones': [
      'Luces direccionales blancas.',
      'Luces omnidireccionales azules.',
      'Luces rojas y verdes alternas.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3768',
    'pregunta': '3768.- Para configurar las luces de pista de alta intensidad en intensidad media, el piloto debe hacer clic en el micrófono siete veces y luego hacer clic en él:',
    'opciones': [
      'Una vez en cuatro segundos.',
      'Tres veces en tres segundos.',
      'Cinco veces en cinco segundos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3770',
    'pregunta': '3770.- Un helipuerto iluminado puede ser identificado por una:',
    'opciones': [
      'Baliza giratoria verde, amarilla y blanca.',
      'Luz amarilla intermitente.',
      'Área de aterrizaje cuadrada iluminada en azul.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3771',
    'pregunta': '3771.- Una estación aérea militar puede identificarse mediante una baliza giratoria que emite:',
    'opciones': [
      'Destellos alternos blanco y verde.',
      'Dos destellos blancos rápidos entre destellos verdes.',
      'Destellos verde, amarillo y blanco.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3772',
    'pregunta': '3772.- ¿Cómo se puede identificar un aeropuerto militar de noche?',
    'opciones': [
      'Destellos alternos de luz blanca y verde.',
      'Dos destellos blancos puntiagudos (dos rápidos) entre destellos verdes.',
      'Luces blancas intermitentes con verde fijo en el mismo lugar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3778.4',
    'pregunta': '3778.4.- (Refiérase a la Figura 64.) ¿Qué marca indica un carril para vehículos?',
    'opciones': [
      'A DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 5',
      'C',
      'E',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [64],
  },
  {
    'numero': '3778.5',
    'pregunta': '3778.5.- La marca de "barra de demarcación amarilla" indica:',
    'opciones': [
      'Una pista con un umbral desplazado que precede a la pista.',
      'Una línea de espera desde una calle de rodaje hasta una pista.',
      'El comienzo de la pista disponible para aterrizar en el lado de aproximación.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3762.1',
    'pregunta': '3762.1.- ¿Qué objetivo de aproximación y aterrizaje está asegurado cuando el piloto permanece en la trayectoria de planeo adecuada del VASI?',
    'opciones': [
      'Identificación de pista y guía de rumbo.',
      'Despeje seguro de obstáculos en el área de aproximación.',
      'Orientación de rumbo lateral a la pista.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3764',
    'pregunta': '3764.- Una indicación de pendiente de planeo por debajo de un indicador de pendiente de aproximación pulsante es una',
    'opciones': [
      'Luz blanca pulsante.',
      'Luz blanca constante.',
      'Luz roja pulsante.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3120',
    'pregunta': '3120.- Mientras opera en el espacio aéreo de Clase D, cada piloto de una aeronave que se aproxima para aterrizar en una pista servida por un indicador visual de pendiente de aproximación (VASI) deberá:',
    'opciones': [
      'Mantener un planeo de 3 ° hasta aproximadamente 1/2 milla hasta la pista antes de pasar por debajo del VASI.',
      'Mantener una altitud igual o superior a la pendiente de planeo hasta que sea necesaria una altitud menor para un aterrizaje seguro.',
      'Mantenerse alto hasta que se pueda llegar a la pista en un aterrizaje sin motor.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3121',
    'pregunta': '3121.- Al acercarse para aterrizar en una pista servida por un indicador visual de pendiente de aproximación (VASI), el piloto deberá:',
    'opciones': [
      'Mantener una altitud que capture la pendiente de planeo al menos 2 millas a favor del viento desde el umbral de la pista.',
      'Mantener una altitud igual o superior a la pendiente de planeo.',
      'Permanezca en la senda de planeo y aterrice entre la barra de dos luces.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3760',
    'pregunta': '3760.- Una indicación de pendiente de planeo ligeramente alta de un indicador de trayectoria de aproximación de precisión es:',
    'opciones': [
      'Cuatro luces blancas.',
      'Tres luces blancas y una luz roja.',
      'Dos luces blancas y dos luces rojas. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 6',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3765',
    'pregunta': '3765.- (Consulte la Figura 47). La Ilustración A indica que la aeronave está:',
    'opciones': [
      'Debajo de la pista de planeo.',
      'En la pista de planeo.',
      'Por encima de la senda de planeo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [47],
  },
  {
    'numero': '3766',
    'pregunta': '3766.- (Refiérase a la Figura 47). Las luces VASI, como se muestra en la ilustración C, indican que el avión está:',
    'opciones': [
      'Fuera de curso a la izquierda.',
      'Por encima de la senda de planeo.',
      'Debajo de la pista de planeo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [47],
  },
  {
    'numero': '3767',
    'pregunta': '3767.- (Refiérase a la Figura 47). Mientras se encuentra en la aproximación final a una pista equipada con un VASI estándar de 2 barras, las luces aparecen como se muestra en la ilustración D. Esto significa que la aeronave está:',
    'opciones': [
      'Por encima de la senda de planeo.',
      'Debajo de la senda de planeo.',
      'En la senda de planeo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [47],
  },
  {
    'numero': '3302',
    'pregunta': '3302.- Al rodar con fuertes vientos de cola, ¿qué posiciones de los alerones se deben utilizar?',
    'opciones': [
      'Alerón hacia abajo en el lado de sotavento.',
      'Alerones neutros.',
      'Alerón hacia abajo del lado de donde sopla el viento.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3303',
    'pregunta': '3303.- ¿Qué posiciones de alerones debería utilizar generalmente un piloto al rodar con fuertes vientos en contra?',
    'opciones': [
      'Alerón arriba del lado de donde sopla el viento.',
      'Alerón hacia abajo del lado de donde sopla el viento.',
      'Alerones neutros.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3304',
    'pregunta': '3304.- ¿Qué condición de viento sería más crítica al rodar un avión de ala alta equipado con rueda de nariz?',
    'opciones': [
      'Viento de cola.',
      'Viento cruzado directo.',
      'Reducción del viento en contra.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3305',
    'pregunta': '3305.- (Refiérase a la Figura 9, área A.) ¿Cómo se deben mantener los controles de vuelo mientras se opera un avión equipado con tren triciclo hacia un viento en contra hacia la izquierda?',
    'opciones': [
      'Alerón izquierdo arriba, ascensor neutral.',
      'Alerón izquierdo abajo, ascensor neutral.',
      'Alerón izquierdo arriba, ascensor abajo. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 7',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [9],
  },
  {
    'numero': '3306',
    'pregunta': '3306.- (Refiérase a la Figura 9, área B.) ¿Cómo se deben mantener los controles de vuelo mientras se conduce un avión de rueda de cola hacia un viento en contra de la derecha?',
    'opciones': [
      'Alerón derecho arriba, ascensor arriba.',
      'Alerón derecho abajo, ascensor neutral.',
      'Alerón derecho arriba, ascensor abajo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [9],
  },
  {
    'numero': '3307',
    'pregunta': '3307.- (Refiérase a la Figura 9, área C.) ¿Cómo deben mantenerse los controles de vuelo durante el rodaje de un avión de rueda de cola con un viento de cola a la izquierda?',
    'opciones': [
      'Alerón izquierdo arriba, ascensor neutral.',
      'Alerón izquierdo abajo, ascensor neutral.',
      'Alerón izquierdo abajo, ascensor abajo.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [9],
  },
  {
    'numero': '3308',
    'pregunta': '3308.- (Refiérase a la Figura 9, área C.) ¿Cómo deben mantenerse los controles de vuelo durante el rodaje de un avión equipado con tren de tres ruedas con un viento de cola a la izquierda?',
    'opciones': [
      'Alerón izquierdo arriba, ascensor neutral.',
      'Alerón izquierdo abajo, ascensor abajo.',
      'Alerón izquierdo arriba, ascensor abajo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [9],
  },
  {
    'numero': '3308.1',
    'pregunta': '3308.1.- Para minimizar las cargas laterales colocadas en el tren de aterrizaje durante el aterrizaje, el piloto debe mantener:',
    'opciones': [
      'La dirección de movimiento de la aeronave paralela a la pista.',
      'El eje longitudinal de la aeronave paralelo a la dirección de su movimiento.',
      'El ala a favor del viento bajada lo suficiente para eliminar la tendencia de la aeronave a derrapar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3163',
    'pregunta': '3163.- Cuando se opera una aeronave en altitudes de presión de cabina por encima de 10,000 pies hasta e incluyendo 13,000 pies, se debe usar oxígeno suplementario durante:',
    'opciones': [
      'Todo el tiempo de vuelo a esas altitudes.',
      'Ese tiempo de vuelo en exceso de 10 minutos a esas altitudes.',
      'Ese tiempo de vuelo en exceso de 30 minutos a esas altitudes.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3164',
    'pregunta': '3164.- A menos que cada ocupante reciba oxígeno suplementario, ninguna persona puede operar una aeronave civil por encima de una altitud máxima de presión de cabina de:',
    'opciones': [
      '12,500 pies.',
      '14,000 pies.',
      '10.000 pies. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 8',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3832',
    'pregunta': '3832.- Grandes acumulaciones de monóxido de carbono en el cuerpo humano dan como resultado:',
    'opciones': [
      'Opresión en la frente.',
      'Pérdida de potencia muscular.',
      'Una mayor sensación de bienestar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3844',
    'pregunta': '3844.- ¿Qué enunciado define mejor la hipoxia?',
    'opciones': [
      'Un estado de deficiencia de oxígeno en el cuerpo.',
      'Un aumento anormal del volumen de aire respirado.',
      'Afección de formación de burbujas de gas alrededor de las articulaciones o los músculos.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3845',
    'pregunta': '3845.- Cuando se encuentra una situación estresante en vuelo, un aumento anormal en el volumen de aire inhalado y exhalado puede causar una condición conocida como:',
    'opciones': [
      'Hiperventilación.',
      'Aero sinusitis.',
      'Aerotitis.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3846',
    'pregunta': '3846.- ¿Cuál de las siguientes opciones resultaría más probablemente en hiperventilación?',
    'opciones': [
      'Tensión emocional, ansiedad o miedo.',
      'El consumo excesivo de alcohol.',
      'Una frecuencia respiratoria extremadamente lenta y oxígeno insuficiente.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3847',
    'pregunta': '3847.- Un piloto que experimente los efectos de la hiperventilación, debería poder restaurar el nivel adecuado de dióxido de carbono en el cuerpo al:',
    'opciones': [
      'Disminuir la frecuencia respiratoria, respirar en una bolsa de papel o hablar en voz alta.',
      'Respirar de forma espontánea y profunda o ganar control mental de la situación.',
      'Aumentar la frecuencia respiratoria para aumentar la ventilación pulmonar.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3848',
    'pregunta': '3848.- La susceptibilidad a la intoxicación por monóxido de carbono aumenta a medida que:',
    'opciones': [
      'Aumenta la altitud.',
      'La altitud disminuye.',
      'Aumenta la presión del aire.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3850',
    'pregunta': '3850.- El peligro de desorientación espacial durante el vuelo en malas condiciones visuales puede reducirse mediante:',
    'opciones': [
      'Cambiando los ojos rápidamente entre el campo visual exterior y el panel de instrumentos.',
      'Tener fe en los instrumentos en lugar de arriesgarse con los órganos sensoriales.',
      'Inclinar el cuerpo en la dirección opuesta al movimiento de la aeronave.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3851',
    'pregunta': '3851.- La falta de orientación con respecto a la posición, actitud o movimiento de la aeronave en el espacio se define como:',
    'opciones': [
      'Desorientación espacial.',
      'Hiperventilación.',
      'Hipoxia.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3852',
    'pregunta': '3852.- Los pilotos están más sujetos a la desorientación espacial si:',
    'opciones': [
      'Ignoran las sensaciones de los músculos y el oído interno.',
      'Las señales visuales se eliminan, ya que están en condiciones meteorológicas de instrumentos (IMC).',
      'Los ojos se mueven a menudo en el proceso de verificación cruzada de los instrumentos de vuelo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3853',
    'pregunta': '3853.- Si un piloto experimenta desorientación espacial durante el vuelo en una condición de visibilidad restringida, la mejor manera de superar el efecto es:',
    'opciones': [
      'Confiar en las indicaciones de los instrumentos de la aeronave.',
      'Concéntrese en las sensaciones de guiñada, cabeceo y alabeo.',
      'Disminuya conscientemente la frecuencia respiratoria hasta que los síntomas desaparezcan y luego reanude la frecuencia respiratoria normal.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3931',
    'pregunta': '3931.- ¿Cómo se llama a menudo cuando un piloto empuja sus capacidades y los límites de la aeronave al tratar de mantener contacto visual con el terreno en condiciones de poca visibilidad y techo?',
    'opciones': [
      'Carrera Scud.',
      'Mentalidad.',
      'Presión de grupo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3932',
    'pregunta': '3932.- ¿Qué frase antídoto puede ayudar a revertir la peligrosa actitud de "antiautoridad"?',
    'opciones': [
      'Las reglas no se aplican en esta situación.',
      'Sé lo que estoy haciendo.',
      'Sigue las reglas.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3933',
    'pregunta': '3933.- ¿Qué frase antídoto puede ayudar a revertir la peligrosa actitud de impulsividad?',
    'opciones': [
      'Me podría pasar. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 10',
      'Hágalo rápidamente para terminar de una vez.',
      'No tan rápido, piensa primero.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3931.1',
    'pregunta': '3931.1.- A todos los pilotos les ocurren actitudes peligrosas en algún grado en algún momento. ¿Cuáles son algunas de estas actitudes peligrosas?',
    'opciones': [
      'Mala gestión de riesgos y falta de gestión del estrés.',
      'Antiautoridad, impulsividad, machismo, resignación e invulnerabilidad.',
      'Falta de conciencia de la situación, juicios rápidos y falta de un proceso de toma de decisiones.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3931.2',
    'pregunta': '3931.2.- En el proceso de toma de decisiones aeronáuticas (ADM), ¿cuál es el primer paso para neutralizar una actitud peligrosa?',
    'opciones': [
      'Hacer un juicio racional.',
      'Reconocer pensamientos peligrosos.',
      'Reconociendo la invulnerabilidad de la situación.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3931.3',
    'pregunta': '3931.3.- ¿La gestión de riesgos, como parte del proceso de toma de decisiones aeronáuticas (ADM), en qué características se basna para reducir los riesgos asociados con cada vuelo?',
    'opciones': [
      'Aplicación de procedimientos de gestión de estrés y elementos de riesgo.',
      'Conciencia situacional, reconocimiento de problemas y buen juicio.',
      'El proceso mental de analizar toda la información en una situación particular y tomar una decisión oportuna sobre qué acción tomar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3934',
    'pregunta': '3934.- ¿Qué frase antídoto puede ayudar a revertir la peligrosa actitud de "invulnerabilidad"?',
    'opciones': [
      'No me pasará a mí.',
      'No puede ser tan malo.',
      'Me podría pasar.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3935',
    'pregunta': '3935.- ¿Qué frase antídoto puede ayudar a revertir la peligrosa actitud del "macho"?',
    'opciones': [
      'Yo puedo hacerlo.',
      'Es una tontería correr riesgos.',
      'Nada pasará.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3936',
    'pregunta': '3936.- ¿Qué frase antídoto puede ayudar a revertir la peligrosa actitud de "resignación"?',
    'opciones': [
      'Cuál es el uso.',
      'Alguien más es responsable.',
      'No estoy indefenso. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 11',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3937',
    'pregunta': '3937.- ¿Quién es responsable de determinar si un piloto está en condiciones de volar para un vuelo en particular, aunque tenga un certificado médico vigente?',
    'opciones': [
      'La AAC',
      'El médico forense.',
      'El piloto.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3938',
    'pregunta': '3938.- ¿Cuál es el factor común que afecta a la mayoría de los accidentes evitables?',
    'opciones': [
      'Fallo estructural.',
      'Mal funcionamiento mecánico.',
      'Error humano.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3939',
    'pregunta': '3939.- ¿Qué conduce a menudo a la desorientación espacial o colisión con el suelo / obstáculos cuando se vuela bajo las Reglas de vuelo visual (VFR)?',
    'opciones': [
      'Vuelo continuo en condiciones de instrumentos.',
      'Ponerse detrás del avión.',
      'Síndrome del pato debajo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3940',
    'pregunta': '3940.- ¿Cuál es uno de los elementos que se descuidan cuando un piloto se basa en la memoria a corto y largo plazo para tareas repetitivas?',
    'opciones': [
      'Listas de verificación.',
      'Conciencia de la situación.',
      'Volando fuera del sobre.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3940.1',
    'pregunta': '3940.1.- Un piloto y dos pasajeros aterrizaron en una franja de grava de 2,100 pies de este a oeste con una elevación de 1,800 pies. La temperatura es más cálida de lo esperado y, después de calcular la altitud de densidad, se determina que la distancia de despegue sobre un obstáculo de 50 pies es de 1,980 pies. El avión pesa 75 libras por debajo del peso bruto. ¿Cuál sería la mejor opción?',
    'opciones': [
      'Despegar con viento en contra le dará el tiempo adicional necesario para escalar.',
      'Pruebe un despegue sin los pasajeros para asegurarse de que el ascenso sea adecuado.',
      'Espere hasta que la temperatura baje y vuelva a calcular el rendimiento de despegue.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3710.1',
    'pregunta': '3710.1.- La mayoría de los accidentes de colisión en el aire ocurren durante:',
    'opciones': [
      'Días brumosos.',
      'Días claros.',
      'Noches nubladas. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 12',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3710',
    'pregunta': '3710.- Antes de comenzar cada maniobra, los pilotos deben:',
    'opciones': [
      'Verifique las indicaciones de altitud, velocidad aerodinámica y rumbo.',
      'Escanee visualmente toda el área para evitar colisiones.',
      'Anunciar sus intenciones sobre el CTAF más cercano.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3833',
    'pregunta': '3833.- ¿Qué efecto tiene la bruma en la capacidad de ver el tráfico o las características del terreno durante el vuelo?',
    'opciones': [
      'La bruma hace que los ojos se enfoquen al infinito.',
      'Los ojos tienden a trabajar demasiado en la bruma y no detectan fácilmente el movimiento relativo.',
      'Todo el tráfico o las características del terreno parecen estar más lejos que su distancia real.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3834',
    'pregunta': '3834.- Los movimientos oculares durante el escaneo diurno para evitar colisiones deben:',
    'opciones': [
      'No exceder los 10 grados y vea cada sector al menos 1 segundo.',
      'Estar a 30 grados y ver cada sector al menos 3 segundos.',
      'Utilizar la visión periférica escaneando sectores pequeños y utilizando la visión descentrada.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3835',
    'pregunta': '3835.- ¿Qué técnica debería usar un piloto para buscar tráfico a derecha e izquierda durante un vuelo recto y nivelado?',
    'opciones': [
      'Concéntrese sistemáticamente en diferentes segmentos del cielo durante intervalos cortos.',
      'Concéntrese en el movimiento relativo detectado en el área de visión periférica.',
      'Barrido continuo del parabrisas de derecha a izquierda.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3836',
    'pregunta': '3836.- ¿Cómo puede determinar si otra aeronave está en curso de colisión con su aeronave?',
    'opciones': [
      'El otro avión siempre parecerá volverse más grande y más cercano a un ritmo rápido.',
      'La nariz de cada avión apunta al mismo punto en el espacio.',
      'No habrá ningún movimiento relativo aparente entre su avión y el otro avión.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3849',
    'pregunta': '3849.- ¿Qué preparación debe hacer un piloto para adaptar los ojos a los vuelos nocturnos?',
    'opciones': [
      'Use gafas de sol después de la puesta del sol hasta que esté listo para el vuelo.',
      'Evite las luces rojas al menos 30 minutos antes del vuelo.',
      'Evite las luces blancas brillantes al menos 30 minutos antes del vuelo.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3713',
    'pregunta': '3713.- El mejor método a utilizar cuando se busca otro tráfico por la noche es:',
    'opciones': [
      'Mire hacia el costado del objeto y escanee lentamente.',
      'Escanee el campo visual muy rápidamente.',
      'Mire hacia el costado del objeto y escanee rápidamente.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3714',
    'pregunta': '3714.- El método más eficaz de escaneo de otras aeronaves para evitar colisiones durante las horas nocturnas es utilizar:',
    'opciones': [
      'Concentración regularmente espaciada en las posiciones de las 3, 9 y 12 en punto.',
      'Una serie de movimientos oculares cortos y regularmente espaciados para buscar en cada sector de 30 grados.',
      'Visión periférica escaneando pequeños sectores y utilizando la visualización fuera del centro.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3162',
    'pregunta': '3162.- Excepto en Alaska, ¿durante qué período de tiempo se deben exhibir las luces de posición encendidas en un avión?',
    'opciones': [
      'Final del crepúsculo civil vespertino hasta el comienzo del crepúsculo civil matutino.',
      '1 hora después del atardecer hasta 1 hora antes del amanecer.',
      'Desde el atardecer hasta el amanecer.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3916',
    'pregunta': '3916.- Se anima a los pilotos a encender sus luces de aterrizaje cuando operan por debajo de 10,000 pies, de día o de noche, y cuando operan dentro de:',
    'opciones': [
      'Espacio aéreo de clase B.',
      '10 millas de cualquier aeropuerto.',
      'A 15 millas de un aeropuerto con torres.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3916.1',
    'pregunta': '3916.1.- Se alienta a los pilotos a encender sus luces de aterrizaje cuando operan por debajo de 10,000 pies, de día o de noche, y especialmente cuando operan:',
    'opciones': [
      'En el espacio aéreo de Clase B.',
      'En condiciones de visibilidad reducida.',
      'A 15 millas de un aeropuerto con torres.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3715',
    'pregunta': '3715.- Durante un vuelo nocturno, observa una luz roja fija y una luz roja intermitente adelante ya la misma altitud. ¿Cuál es la dirección general de movimiento de la otra aeronave?',
    'opciones': [
      'El otro avión cruza a la izquierda.',
      'El otro avión cruza a la derecha.',
      'El otro avión se acerca de frente.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3716',
    'pregunta': '3716.- Durante un vuelo nocturno, observa una luz blanca fija y una luz roja intermitente adelante y a la misma altitud. ¿Cuál es la dirección general de movimiento de la otra aeronave?',
    'opciones': [
      'El otro avión se aleja de ti. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 14',
      'El otro avión cruza a la izquierda.',
      'El otro avión cruza a la derecha.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3717',
    'pregunta': '3717.- Durante un vuelo nocturno, observa luces rojas y verdes fijas adelante y a la misma altitud. ¿Cuál es la dirección general de movimiento de la otra aeronave?',
    'opciones': [
      'El otro avión cruza a la izquierda.',
      'El otro avión se aleja de ti.',
      'El otro avión se acerca de frente. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 15',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasProcedimientosOperacionales = preguntasProcedimientosOperacionales;
