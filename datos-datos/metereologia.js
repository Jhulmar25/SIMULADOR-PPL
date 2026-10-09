// METEOROLOGÍA - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app; [] si no requiere imagen.

const preguntasMeteorologia = [
  {
    'numero': '3400',
    'pregunta': '3400.- ¿Cuáles son los procesos mediante los cuales se agrega humedad al aire insaturado?',
    'opciones': [
      'Evaporación y sublimación.',
      'Calefacción y condensación.',
      'Sobresaturación y evaporación.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3444',
    'pregunta': '3444.- Si la dispersión de temperatura / punto de rocío es pequeña y está disminuyendo, y la temperatura es de 62° F, ¿qué tipo de clima es más probable que se desarrolle?',
    'opciones': [
      'Precipitación helada.',
      'Tormentas.',
      'Niebla o nubes bajas.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3422',
    'pregunta': '3422.- Una de las discontinuidades más fáciles de reconocer en un frente es:',
    'opciones': [
      'Un cambio de temperatura.',
      'Un aumento en la cobertura de nubes.',
      'Un aumento de la humedad relativa.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3423',
    'pregunta': '3423.- Un fenómeno meteorológico que siempre ocurrirá cuando se vuela a través de un frente es un cambio en el:',
    'opciones': [
      'Dirección del viento.',
      'Tipo de precipitación.',
      'Estabilidad de la masa de aire.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3385',
    'pregunta': '3385.- ¿Qué condiciones climáticas se deben esperar debajo de una capa de inversión de temperatura de bajo nivel cuando la humedad relativa es alta?',
    'opciones': [
      'Aire suave, mala visibilidad, niebla, neblina o nubes bajas.',
      'Cizalladura leve del viento, mala visibilidad, neblina y lluvia ligera.',
      'Aire turbulento, mala visibilidad, niebla, nubes de tipo estrato bajo y precipitaciones con chubascos.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3403',
    'pregunta': '3403.- ¿Qué medida se puede utilizar para determinar la estabilidad de la atmósfera?',
    'opciones': [
      'Presión atmosférica.',
      'Tasa de caída real.',
      'Temperatura de la superficie. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 1',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3404',
    'pregunta': '3404.- ¿Qué disminuiría la estabilidad de una masa de aire?',
    'opciones': [
      'Calentamiento desde abajo.',
      'Refrigeración desde abajo.',
      'Disminución del vapor de agua.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3405',
    'pregunta': '3405.- ¿Cuál es una característica del aire estable?',
    'opciones': [
      'Nubes estratiformes.',
      'Visibilidad ilimitada.',
      'Nubes cúmulos.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3408',
    'pregunta': '3408.- ¿Qué característica está asociada con una inversión de temperatura?',
    'opciones': [
      'Una capa de aire estable.',
      'Una capa de aire inestable.',
      'Vientos Chinook en las laderas de las montañas.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3412',
    'pregunta': '3412.- ¿Cuáles son las características de una masa de aire húmeda e inestable?',
    'opciones': [
      'Nubes cumuliformes y precipitación lluviosa.',
      'Mala visibilidad y aire suave.',
      'Nubes estratiformes y precipitación lluviosa.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3413',
    'pregunta': '3413.- ¿Cuáles son las características del aire inestable?',
    'opciones': [
      'Turbulencia y buena visibilidad en superficie.',
      'Turbulencia y mala visibilidad de la superficie.',
      'Nubes nimbostratus y buena visibilidad en superficie.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3414',
    'pregunta': '3414.- ¿Qué característica es más probable que tenga una masa de aire estable?',
    'opciones': [
      'Precipitación lluviosa.',
      'Aire turbulento.',
      'Mala visibilidad de la superficie.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3406',
    'pregunta': '3406.- Cuando el aire caliente, húmedo y estable fluye cuesta arriba se:',
    'opciones': [
      'Produce nubes de tipo estratos.',
      'Provoca lluvias y tormentas eléctricas.',
      'Desarrolla turbulencia convectiva.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3407',
    'pregunta': '3407.- Si una masa de aire inestable se fuerza hacia arriba, ¿qué tipo de nubes se pueden esperar?',
    'opciones': [
      'Nubes estratos con poco desarrollo vertical.',
      'Nubes estratos con considerable turbulencia asociada.',
      'Nubes con considerable desarrollo vertical y turbulencia asociada.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3424',
    'pregunta': '3424.- La precipitación constante que precede a un frente es una indicación de:',
    'opciones': [
      'Nubes estratiformes con turbulencia moderada.',
      'Nubes cumuliformes con poca o ninguna turbulencia.',
      'Nubes estratiformes con poca o ninguna turbulencia.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3433',
    'pregunta': '3433.- Las condiciones necesarias para la formación de nubes cumulonimbus son una acción de elevación y:',
    'opciones': [
      'Aire inestable que contiene un exceso de núcleos de condensación.',
      'Aire húmedo e inestable.',
      'Aire estable o inestable.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3409',
    'pregunta': '3409.- ¿Cuál es la base aproximada de los cúmulos si la temperatura del aire en la superficie a 1,000 pies MSL es 70° F y el punto de rocío es 48° F?',
    'opciones': [
      '4000 pies MSL.',
      '5,000 pies MSL.',
      '6,000 pies MSL.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3410',
    'pregunta': '3410.- ¿Aproximadamente a qué altitud sobre la superficie esperaría el piloto la base de las nubes cumuliformes si la temperatura del aire en la superficie es de 82 ° F y el punto de rocío es de 38 ° F?',
    'opciones': [
      '9.000 pies AGL.',
      '10,000 pies AGL.',
      '11.000 pies AGL.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3415',
    'pregunta': '3415.- El sufijo nimbususado para nombrar nubes, significa:',
    'opciones': [
      'Una nube con un extenso desarrollo vertical.',
      'Una nube de lluvia.',
      'Una nube media que contiene gránulos de hielo.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3416',
    'pregunta': '3416.- Las nubes se dividen en cuatro familias según su:',
    'opciones': [
      'Forma exterior.',
      'Rango de altura.',
      'Composición.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3419',
    'pregunta': '3419.- ¿Qué nubes tienen la mayor turbulencia?',
    'opciones': [
      'Cúmulos imponentes.',
      'Cumulonimbus',
      'Nimboestrato.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3417',
    'pregunta': '3417.- Una nube en forma de almendra o lente que parece estacionaria, pero que puede contener vientos de 50 nudos o más, se denomina:',
    'opciones': [
      'Una nube frontal inactiva.',
      'Una nube de embudo.',
      'Una nube lenticular.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3418',
    'pregunta': '3418.- Las crestas de las ondas montañosas estacionarias pueden estar marcadas por nubes estacionarias en forma de lente conocidas como',
    'opciones': [
      'Nubes de mammatocúmulos.',
      'Nubes lenticulares estacionarias.',
      'Enrollar nubes.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3420',
    'pregunta': '3420.- ¿Qué tipos de nubes indicarían turbulencia convectiva?',
    'opciones': [
      'Cirros.',
      'Nubes Nimbostratus.',
      'Cúmulos elevados.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3425',
    'pregunta': '3425.- Se pueden anticipar posibles turbulencias de olas de montaña cuando soplan vientos de 40 nudos o más:',
    'opciones': [
      'A través de la cresta de una montaña, y el aire es estable.',
      'Por un valle de montaña, y el aire es inestable.',
      'Paralelo a la cima de una montaña, y el aire es estable.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3442',
    'pregunta': '3442.- Al encontrarse con turbulencias severas, ¿qué condición de vuelo debería intentar mantener el piloto?',
    'opciones': [
      'Altitud y velocidad aerodinámica constantes.',
      'Ángulo de ataque constante.',
      'Actitud de vuelo nivelado.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3434',
    'pregunta': '3434.- ¿Qué característica se asocia normalmente con la etapa de cúmulos de una tormenta eléctrica?',
    'opciones': [
      'Rollo de nube.',
      'Corriente ascendente continua.',
      'Rayos frecuentes.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3435',
    'pregunta': '3435.- ¿Qué fenómeno meteorológico señala el comienzo de la etapa madura de una tormenta eléctrica?',
    'opciones': [
      'La apariencia de una tapa de yunque.',
      'Las precipitaciones comienzan a caer. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 4',
      'Tasa máxima de crecimiento de las nubes.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3436',
    'pregunta': '3436.- ¿Qué condiciones son necesarias para la formación de tormentas eléctricas?',
    'opciones': [
      'Alta humedad, fuerza de elevación y condiciones inestables.',
      'Humedad elevada, temperatura elevada y cúmulos.',
      'Fuerza de elevación, aire húmedo y una extensa capa de nubes.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3437',
    'pregunta': '3437.- Durante el ciclo de vida de una tormenta, ¿qué etapa se caracteriza predominantemente por corrientes descendentes?',
    'opciones': [
      'Cúmulo.',
      'Disipando.',
      'Maduro.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3438',
    'pregunta': '3438.- Las tormentas eléctricas alcanzan su mayor intensidad durante la:',
    'opciones': [
      'Etapa de madurez.',
      'Etapa de corriente descendente.',
      'Etapa de cúmulo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3439',
    'pregunta': '3439.- Las tormentas eléctricas que generalmente producen el peligro más intenso para las aeronaves son:',
    'opciones': [
      'Tormentas eléctricas de línea de turbonada.',
      'Tormentas eléctricas de estado estacionario.',
      'Tormentas de frente cálido.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3521',
    'pregunta': '3521.- La etapa madura de una tormenta comienza con:',
    'opciones': [
      'Formación de la parte superior del yunque.',
      'El inicio de la precipitación.',
      'Corrientes descendentes continuas.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3440',
    'pregunta': '3440.- Una banda estrecha y no frontal de tormentas eléctricas activas que a menudo se desarrollan antes de un frente frío se conoce como',
    'opciones': [
      'sistema prefrontal.',
      'Línea de turbonada.',
      'Línea seca.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3441',
    'pregunta': '3441.- Si hay actividad de tormenta eléctrica en las cercanías de un aeropuerto en el que planea aterrizar, ¿qué fenómeno atmosférico peligroso podría esperarse en la aproximación del aterrizaje?',
    'opciones': [
      'Precipitación estática.',
      'Turbulencia de cizalladura del viento.',
      'Lluvia constante. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 5',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3452',
    'pregunta': '3452.- ¿Qué fenómeno meteorológico siempre está asociado con una tormenta eléctrica?',
    'opciones': [
      'Relámpago.',
      'Lluvia Pesada.',
      'Granizo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3426',
    'pregunta': '3426.- ¿Dónde ocurre la cizalladura del viento?',
    'opciones': [
      'Solo en altitudes más elevadas.',
      'Solo en altitudes más bajas.',
      'A todas las alturas, en todas direcciones.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3427',
    'pregunta': '3427.- ¿Cuándo se puede esperar una cizalladura peligrosa del viento?',
    'opciones': [
      'Cuando el aire estable atraviesa una barrera montañosa donde tiende a fluir en capas formando nubes lenticulares.',
      'En áreas de inversión de temperatura de bajo nivel, zonas frontales y turbulencias de aire despejado.',
      'Después del paso frontal cuando se forman nubes de estratocúmulos, lo que indica una mezcla mecánica.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3428',
    'pregunta': '3428.- Un piloto puede esperar una zona de cizalladura del viento en una inversión de temperatura siempre que la velocidad del viento a 2,000 a 4,000 pies sobre la superficie sea al menos:',
    'opciones': [
      '10 nudos.',
      '15 nudos.',
      '25 nudos.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3402',
    'pregunta': '3402.- La presencia de gránulos de hielo en la superficie es evidencia de que',
    'opciones': [
      'Hay tormentas eléctricas en la zona.',
      'Ha sido paso frontal frio.',
      'Es una inversión de temperatura con lluvia helada a mayor altitud.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3429',
    'pregunta': '3429.- Una condición en vuelo necesaria para que se forme la formación de hielo estructural es:',
    'opciones': [
      'Pequeña dispersión de temperatura / punto de rocío.',
      'Nubes estratiformes.',
      'Humedad visible.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3430',
    'pregunta': '3430.- ¿En qué entorno es más probable que el hielo estructural de las aeronaves tenga la tasa de acumulación más alta?',
    'opciones': [
      'Cúmulos con temperaturas bajo cero.',
      'Llovizna congelante. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 6',
      'Lluvia congelante.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3956',
    'pregunta': '3956.- Durante un vuelo a campo traviesa, recogió escarcha que estima que tiene un grosor de 1/2" en el borde de ataque de las alas. Ahora se encuentra debajo de las nubes a 2000 pies AGL y se está acercando al aeropuerto de destino en VFR. La visibilidad debajo de las nubes es más de 10 millas, los vientos en el aeropuerto de destino son de 8 nudos en la pista y la temperatura de la superficie es de 3 grados Celsius, usted decide:',
    'opciones': [
      'Utilizar una velocidad de aproximación y aterrizaje más rápida de lo normal.',
      'Acérquese y aterrice a su velocidad normal, ya que el hielo no es lo suficientemente grueso como para tener un efecto notable.',
      'Volar su aproximación más lento de lo normal para disminuir el efecto de \'sensación térmica\' y romper el hielo',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3443',
    'pregunta': '3443.- ¿Qué situación es más propicia para la formación de niebla de radiación?',
    'opciones': [
      'Aire cálido y húmedo sobre áreas bajas y planas en noches despejadas y tranquilas.',
      'Aire húmedo tropical que se mueve sobre aguas frías de alta mar.',
      'El movimiento del aire frío sobre agua mucho más caliente.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3445',
    'pregunta': '3445.- ¿En qué situación es más probable que se forme la niebla de advección?',
    'opciones': [
      'Una masa de aire cálido y húmedo en el lado de barlovento de las montañas.',
      'Una masa de aire que se mueve tierra adentro desde la costa en invierno.',
      'Una ligera brisa soplando aire más frío hacia el mar.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3446',
    'pregunta': '3446.- ¿Qué tipos de niebla dependen del viento para existir?',
    'opciones': [
      'Niebla de radiación y niebla helada',
      'Niebla de vapor y niebla terrestre.',
      'Niebla de advección y niebla de pendiente ascendente.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3447',
    'pregunta': '3447.- ¿En qué tipo de niebla se pueden producir turbulencias de bajo nivel y la formación de hielo puede volverse peligrosa?',
    'opciones': [
      'Niebla inducida por la lluvia.',
      'Niebla cuesta arriba.',
      'Niebla de vapor.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3401',
    'pregunta': '3401.- ¿Qué condiciones provocan la formación de escarcha?',
    'opciones': [
      'La temperatura de la superficie de recogida es igual o inferior a cero cuando pequeñas gotas de humedad caen sobre la superficie.',
      'La temperatura de la superficie colectora es igual o inferior al punto de rocío del aire adyacente y el punto de rocío está por debajo del punto de congelación.',
      'La temperatura del aire circundante es igual o inferior a cero cuando pequeñas gotas de humedad caen sobre la superficie de recolección.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3432',
    'pregunta': '3432.- ¿Cómo afecta la escarcha a las superficies de elevación de un avión durante el despegue?',
    'opciones': [
      'La escarcha pueden evitar que el avión despegue a la velocidad normal de despegue.',
      'La escarcha cambiará la curvatura del ala, aumentando la sustentación durante el despegue.',
      'La escarcha pueden hacer que el avión se eleve con un ángulo de ataque más bajo a una velocidad aerodinámica más baja indicada.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3206',
    'pregunta': '3206.- ¿Cómo afectará la escarcha en las alas de un avión al rendimiento de despegue?',
    'opciones': [
      'La escarcha interrumpirá el suave flujo de aire sobre el ala, lo que afectará negativamente su capacidad de elevación.',
      'La escarcha cambiará la curvatura del ala, aumentando su capacidad de elevación.',
      'La escarcha hará que el avión se eleve en el aire con un ángulo de ataque más alto, disminuyendo la velocidad de pérdida.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3431',
    'pregunta': '3431.- ¿Por qué la escarcha se considera peligrosas para volar?',
    'opciones': [
      'La escarcha cambia la forma aerodinámica básica de las aspas aerodinámicas, aumentando así la sustentación.',
      'La escarcha ralentiza el flujo de aire sobre las aspas aerodinámicas, lo que aumenta la efectividad del control.',
      'La escarcha estropea el suave flujo de aire sobre las alas, lo que reduce la capacidad de elevación.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3381',
    'pregunta': '3381.- Todo proceso físico del clima va acompañado o es el resultado de una:',
    'opciones': [
      'Movimiento del aire.',
      'Presión diferencial.',
      'De intercambio de calor.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3382',
    'pregunta': '3382.- ¿Qué causa las variaciones en la configuración del altímetro entre los puntos de informes meteorológicos?',
    'opciones': [
      'Calentamiento desigual de la superficie terrestre.',
      'Variación de la elevación del terreno.',
      'Fuerza Coriolis. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 8',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3395',
    'pregunta': '3395.- El viento a 5,000 pies AGL es del suroeste, mientras que el viento en la superficie es del sur. Esta diferencia de dirección se debe principalmente a:',
    'opciones': [
      'Gradiente de presión más fuerte a mayores altitudes.',
      'Fricción entre el viento y la superficie.',
      'Fuerza de Coriolis más fuerte en la superficie.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3450',
    'pregunta': '3450.- Los patrones de circulación convectiva asociados con la brisa marina son causados ¿¿por:',
    'opciones': [
      'Aire cálido y denso que se mueve tierra adentro desde el agua.',
      'El agua absorbe e irradia calor más rápido que la tierra.',
      'Aire fresco y denso que se mueve tierra adentro desde el agua.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3383',
    'pregunta': '3383.- Cuando hay una inversión de temperatura, esperaría experimentar:',
    'opciones': [
      'Nubes con un extenso desarrollo vertical sobre una inversión en el aire.',
      'Buena visibilidad en los niveles más bajos de la atmósfera y mala visibilidad por encima de una inversión en el aire.',
      'Un aumento de la temperatura a medida que aumenta la altitud.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3384',
    'pregunta': '3384.- El tipo más frecuente de inversión de temperatura en el suelo o en la superficie es el producido por:',
    'opciones': [
      'Radiación terrestre en una noche clara y relativamente tranquila.',
      'El aire caliente se eleva rápidamente en las proximidades de un terreno montañoso.',
      'El movimiento de aire más frío bajo aire caliente, o el movimiento de aire caliente sobre aire frío.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3397',
    'pregunta': '3397.- ¿Qué se entiende por el término "punto de rocío"?',
    'opciones': [
      'La temperatura a la que la condensación y la evaporación son iguales.',
      'La temperatura a la que siempre se formará el rocío.',
      'La temperatura a la que el aire debe enfriarse para saturarse.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3398',
    'pregunta': '3398.- La cantidad de vapor de agua que puede contener el aire depende de la:',
    'opciones': [
      'Punto de rocío.',
      'Temperatura del aire.',
      'Estabilidad del aire.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3399',
    'pregunta': '3399.- Siempre se formarán nubes, niebla o rocío cuando:',
    'opciones': [
      'El vapor de agua se condensa.',
      'Hay vapor de agua. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 9',
      'La humedad relativa alcanza el 100 por ciento. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:04 Pag: 10',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasMeteorologia = preguntasMeteorologia;
