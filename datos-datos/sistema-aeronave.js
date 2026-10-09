// SISTEMAS DE AERONAVES - PP AVIÓN 2023
// Banco extraído del PDF proporcionado por el usuario.
// respuestaCorrecta: 0=A, 1=B, 2=C
// figura: números de figura que debe buscar la app; [] si no requiere imagen.

const preguntasSistemaAeronave = [
  {
    'numero': '3657',
    'pregunta': '3657.- Si fuera necesario propulsar manualmente un motor de avión, es extremadamente importante que un piloto competente:',
    'opciones': [
      'Llame a "contacto" antes de tocar la hélice.',
      'Estar en los controles en la cabina.',
      'Estar en la cabina y llamar a todos los comandos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3656',
    'pregunta': '3656.- ¿Cuál debería ser la primera acción después de arrancar el motor de un avión?',
    'opciones': [
      'Ajustar las RPM adecuadas y verifique las indicaciones deseadas en los indicadores del motor.',
      'Colocar el magneto o el interruptor de encendido momentáneamente en la posición de apagado para verificar que la conexión a tierra sea adecuada.',
      'Probar cada freno y el freno de estacionamiento',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3656.1',
    'pregunta': '3656.1.- ¿Cuál es un propósito del uso de motores alternativos?',
    'opciones': [
      'Mejor distribución del calor.',
      'Para preservar la duración de la culata y mantener temperaturas más bajas.',
      'Son relativamente simples y económicos de operar.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3223',
    'pregunta': '3223.- Uno de los propósitos del sistema de encendido dual en un motor de avión es proporcionar:',
    'opciones': [
      'Rendimiento mejorado del motor.',
      'Distribución uniforme del calor.',
      'Presión equilibrada de la culata de cilindros.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3223.1',
    'pregunta': '3223.1.- Se produce una falla del sistema eléctrico (batería y alternador) durante el vuelo. En esta situación, deberías:',
    'opciones': [
      'Experimentar fallas en el equipo de aviónica.',
      'Probablemente experimente fallas en el sistema de encendido del motor, los indicadores de combustible, el sistema de iluminación de la aeronave y el equipo de aviónica.',
      'Probablemente experimente fallas en el motor debido a la pérdida de la bomba de combustible impulsada por el motor y también experimente fallas en el equipo de radio, las luces y todos los instrumentos que requieren corriente alterna.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3223.2',
    'pregunta': '3223.2.- Si el cable de tierra entre el magneto y el interruptor de encendido se desconecta, el resultado más notable será que el motor:',
    'opciones': [
      'Funcionará con asperezas. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 1',
      'No se puede arrancar con el interruptor en la posición encendido.',
      'No se puede apagar girando el interruptor a la posición de apagado.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3225',
    'pregunta': '3225.- El principio de funcionamiento de los carburadores de flotador se basa en:',
    'opciones': [
      'Medición automática de aire en el venturi a medida que la aeronave gana altura.',
      'Diferencia de presión de aire en la garganta del venturi y la entrada de aire.',
      'Aumento de la velocidad del aire en la garganta de un venturi que provoca un aumento de la presión del aire.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3226',
    'pregunta': '3226.- El propósito básico de ajustar la mezcla de aire / combustible en altitud es:',
    'opciones': [
      'Disminuir la cantidad de combustible en la mezcla para compensar el aumento de la densidad del aire.',
      'Disminuir el flujo de combustible para compensar la disminución de la densidad del aire.',
      'Aumentar la cantidad de combustible en la mezcla para compensar la disminución de la presión y la densidad del aire.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3228',
    'pregunta': '3228.- Mientras navega a 9,500 pies MSL, la mezcla de aire y combustible se ajusta correctamente. ¿Qué ocurrirá si se hace un descenso a 4,500 pies MSL sin reajustar la mezcla?',
    'opciones': [
      'La mezcla de combustible / aire puede volverse excesivamente pobre.',
      'Habrá más combustible en los cilindros del necesario para la combustión normal, y el exceso de combustible absorberá calor y enfriará el motor.',
      'La mezcla excesivamente rica creará temperaturas de culata más altas y puede causar detonación.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3227',
    'pregunta': '3227.- Durante el arranque en un aeropuerto a gran altura, un piloto nota una ligera aspereza del motor que no se ve afectada por la revisión del magneto, pero que empeora durante la revisión del calor del carburador. En estas circunstancias, ¿cuál sería la acción inicial más lógica?',
    'opciones': [
      'Verifique los resultados obtenidos con un ajuste más pobre de la mezcla.',
      'Taxee de regreso a la línea de vuelo para una revisión de mantenimiento.',
      'Reduzca la presión del colector para controlar la detonación.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3231',
    'pregunta': '3231.- Si una aeronave está equipada con una hélice de paso fijo y un carburador tipo flotador, lo más probable es que la primera indicación de hielo en el carburador sea:',
    'opciones': [
      'Aumento de RPM.',
      'Rugosidad del motor. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 2',
      'Pérdida de RPM.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3235',
    'pregunta': '3235.- La presencia de hielo en el carburador en una aeronave equipada con una hélice de paso fijo se puede verificar aplicando calor al carburador y observando:',
    'opciones': [
      'Un aumento de las RPM y luego una disminución gradual de las RPM.',
      'Una disminución de RPM y luego una indicación de RPM constante.',
      'Una disminución de las RPM y luego un aumento gradual de las RPM.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3229',
    'pregunta': '3229.- ¿Qué condición es más favorable para el desarrollo de la formación de hielo en el carburador?',
    'opciones': [
      'Cualquier temperatura por debajo del punto de congelación y una humedad relativa inferior al 50 por ciento.',
      'Temperatura entre 32 y 50° F y baja humedad.',
      'Temperatura entre 20 y 70° F y alta humedad.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3230',
    'pregunta': '3230.- Existe la posibilidad de formación de hielo en el carburador incluso cuando la temperatura del aire ambiente es:',
    'opciones': [
      'De hasta 70° F y la humedad relativa es alta.',
      'Hasta 95° F y hay humedad visible.',
      'Baja como 0° F y la humedad relativa es alta.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3230.1',
    'pregunta': '3230.1.- La formación de hielo en el carburador puede ocurrir con una OAT tan alta como:',
    'opciones': [
      '100° F y humedad visible.',
      '20° C y alta humedad relativa.',
      '75° F y humedad relativa baja.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3232',
    'pregunta': '3232.- Aplicar calor al carburador:',
    'opciones': [
      'Como resultado, más aire pasa por el carburador.',
      'Enriquece la mezcla de aire / combustible.',
      'No afecta la mezcla de aire / combustible.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3233',
    'pregunta': '3233.- ¿Qué cambio ocurre en la mezcla de aire / combustible cuando se aplica calor al carburador?',
    'opciones': [
      'Una disminución en las RPM resulta de la mezcla pobre.',
      'La mezcla de aire / combustible se vuelve más rica.',
      'La mezcla de aire y combustible se vuelve más pobre.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3234',
    'pregunta': '3234.- En términos generales, el uso del calor del carburador tiende a:',
    'opciones': [
      'Disminuir el rendimiento del motor.',
      'Aumentar el rendimiento del motor. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 3',
      'No tienen ningún efecto sobre el rendimiento del motor.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3236',
    'pregunta': '3236.- Con respecto al hielo del carburador, los sistemas de carburador de tipo flotador en comparación con los sistemas de inyección de combustible generalmente se consideran:',
    'opciones': [
      'Más susceptible a la formación de hielo.',
      'Igualmente susceptible a la formación de hielo',
      'Menos susceptible a la formación de hielo.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3224',
    'pregunta': '3224.- En aeronaves equipadas con bombas de combustible, ¿cuándo se usa la bomba auxiliar de accionamiento eléctrico?',
    'opciones': [
      'Todo el tiempo para ayudar a la bomba de combustible impulsada por el motor.',
      'En caso de que falle la bomba de combustible impulsada por el motor.',
      'Constantemente excepto en el arranque del motor.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3237',
    'pregunta': '3237.- Si el grado de combustible utilizado en el motor de un avión es menor que el especificado para el motor, lo más probable es que cause',
    'opciones': [
      'Una mezcla de combustible y aire que no es uniforme en todos los cilindros.',
      'Temperaturas más bajas de la culata de cilindros.',
      'Detonación.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3238',
    'pregunta': '3238.- La detonación puede ocurrir en configuraciones de alta potencia cuando:',
    'opciones': [
      'La mezcla de combustible se enciende instantáneamente en lugar de arder de manera progresiva y uniforme.',
      'Una mezcla de combustible excesivamente rica provoca una ganancia explosiva de potencia.',
      'La mezcla de combustible se enciende demasiado pronto debido a los depósitos de carbón caliente en el cilindro.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3238.1',
    'pregunta': '3238.1.- La detonación ocurre en un motor de avión alternativo cuando:',
    'opciones': [
      'Las bujías están sucias o en cortocircuito o el cableado está defectuoso.',
      'Los puntos calientes en la cámara de combustión encienden la mezcla de aire / combustible antes del encendido normal.',
      'La carga no quemada en los cilindros explota en lugar de arder normalmente.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3240',
    'pregunta': '3240.- El disparo incontrolado de la carga de combustible / aire antes del encendido normal por chispa se conoce como:',
    'opciones': [
      'Combustión.',
      'Pre encendido.',
      'Detonación. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 4',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3242',
    'pregunta': '3242.- ¿Qué tipo de combustible se puede sustituir por una aeronave si el octanaje recomendado no está disponible?',
    'opciones': [
      'El siguiente gas de aviación de mayor octanaje.',
      'El siguiente gas de aviación de menor octanaje.',
      'Gas automotriz sin plomo del mismo octanaje.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3243',
    'pregunta': '3243.- Llenar los tanques de combustible después del último vuelo del día se considera un buen procedimiento operativo porque:',
    'opciones': [
      'Fuerza el agua existente a la parte superior del tanque lejos de las líneas de combustible al motor.',
      'Previene la expansión del combustible eliminando el espacio de aire en los tanques.',
      'Evita la condensación de humedad eliminando el espacio de aire en los tanques.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3243.1',
    'pregunta': '3243.1.- Para purgar adecuadamente el agua del sistema de combustible de una aeronave equipada con sumideros de tanque de combustible y un drenaje rápido del colador de combustible, es necesario drenar el combustible del:',
    'opciones': [
      'Drenaje del colador de combustible.',
      'Punto más bajo en el sistema de combustible.',
      'Drenaje del colador de combustible y sumideros del tanque de combustible.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3239',
    'pregunta': '3239.- Si un piloto sospecha que el motor (con una hélice de paso fijo) está detonando durante el ascenso después del despegue, la acción correctiva inicial a tomar sería:',
    'opciones': [
      'Mezcla pobre.',
      'Baje la nariz del avión ligeramente para aumentar la velocidad con respecto al aire.',
      'Aplique calor al carburador.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3221',
    'pregunta': '3221.- Las temperaturas del motor excesivamente altas:',
    'opciones': [
      'Causar daños a las mangueras conductoras de calor y deformación de las aletas de refrigeración del cilindro.',
      'Causan pérdida de potencia, consumo excesivo de aceite y posibles daños internos permanentes en el motor.',
      'No afectan apreciablemente al motor de un avión.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3221.1',
    'pregunta': '3221.1.- Las temperaturas del motor excesivamente altas, ya sea en el aire o en el suelo:',
    'opciones': [
      'Aumentarán el consumo de combustible y puede aumentar la potencia debido al aumento de calor. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 5',
      'Provocarán daños en las mangueras conductoras de calor y deformación de los ventiladores de refrigeración del cilindro.',
      'Causarán pérdida de potencia, consumo excesivo de aceite y posibles daños internos permanentes en el motor.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3222',
    'pregunta': '3222.- Si la temperatura del aceite del motor y la temperatura de la culata de cilindros han excedido su rango de operación normal, el piloto puede haber estado operando con:',
    'opciones': [
      'La mezcla se puso demasiado rica',
      'Presión de aceite superior a la normal.',
      'Demasiada potencia y con la mezcla demasiado pobre.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3241',
    'pregunta': '3241.- ¿Cuál es la causa más probable de que los indicadores de temperatura de la culata de cilindros y de la temperatura del aceite del motor excedan sus rangos de funcionamiento normales?',
    'opciones': [
      'Usar combustible que tiene una clasificación de combustible inferior a la especificada.',
      'Usar combustible que tiene una clasificación de combustible superior a la especificada.',
      'Funcionamiento con una presión de aceite superior a la normal.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3244',
    'pregunta': '3244.- Para el enfriamiento interno, los motores de aeronave alternativos dependen especialmente de:',
    'opciones': [
      'Un termostato que funcione correctamente.',
      'Aire que fluye sobre el colector de escape.',
      'La circulación de aceite lubricante.',
    ],
    'respuestaCorrecta': 2, // C
    'figura': [],
  },
  {
    'numero': '3245',
    'pregunta': '3245.- Una indicación de temperatura del aceite del motor anormalmente alta puede ser causada por:',
    'opciones': [
      'El nivel de aceite es demasiado bajo.',
      'Opera con un aceite de viscosidad demasiado alta.',
      'Opera con una mezcla excesivamente rica.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3651',
    'pregunta': '3651.- ¿Qué acción puede tomar un piloto para ayudar a enfriar un motor que se sobrecalienta durante un ascenso?',
    'opciones': [
      'Reducir la velocidad de ascenso y aumentar la velocidad del aire.',
      'Reducir la velocidad de ascenso y aumentar las RPM.',
      'Aumentar la velocidad de ascenso y aumentar las RPM.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3652',
    'pregunta': '3652.- ¿Cuál es un procedimiento para ayudar a enfriar un motor que se sobrecalienta?',
    'opciones': [
      'Enriquece la mezcla de combustible.',
      'Aumente las RPM.',
      'Reducir la velocidad con respecto al aire. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 6',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3711',
    'pregunta': '3711.- La regla más importante para recordar en caso de un corte de energía después de estar en el aire es:',
    'opciones': [
      'Establezca inmediatamente la actitud de planeo adecuada y la velocidad con respecto al aire adecuada.',
      'Compruebe rápidamente el suministro de combustible para ver si se ha agotado el combustible.',
      'Determine la dirección del viento para planificar el aterrizaje forzoso.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3653',
    'pregunta': '3653.- ¿Cómo se controla el funcionamiento del motor en un motor equipado con una hélice de velocidad constante?',
    'opciones': [
      'El acelerador controla la salida de potencia registrada en el manómetro del colector y el control de la hélice regula las RPM del motor.',
      'El acelerador controla la salida de potencia registrada en el manómetro del colector y el control de la hélice regula un ángulo de pala constante.',
      'El acelerador controla las RPM del motor registradas en el tacómetro y el control de mezcla regula la salida de potencia.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3654',
    'pregunta': '3654.- ¿Cuál es la ventaja de una hélice de velocidad constante?',
    'opciones': [
      'Permite al piloto seleccionar y mantener la velocidad de crucero deseada.',
      'Permite al piloto seleccionar el ángulo de pala para obtener el rendimiento más eficiente.',
      'Proporciona un funcionamiento más suave con RPM estables y elimina las vibraciones.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3655',
    'pregunta': '3655.- Una precaución para el funcionamiento de un motor equipado con una hélice de velocidad constante es:',
    'opciones': [
      'Evite los ajustes de RPM altas con alta presión del colector.',
      'Evite los ajustes de alta presión del colector con bajas RPM.',
      'Utilice siempre una mezcla rica con ajustes de RPM altos.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3207',
    'pregunta': '3207.- ¿En qué condiciones de vuelo es mayor el efecto de torsión en un avión monomotor?',
    'opciones': [
      'Baja Velocidad con respecto al aire, alta potencia, alto ángulo de ataque.',
      'Baja velocidad con respecto al aire, baja potencia, bajo ángulo de ataque.',
      'Alta velocidad con respecto al aire, alta potencia, alto ángulo de ataque.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3208',
    'pregunta': '3208.- La tendencia de giro a la izquierda de un avión causada por el factor P es el resultado de la:',
    'opciones': [
      'La rotación en sentido horario del motor y la hélice girando el avión en sentido anti horario.',
      'La pala de la hélice desciende a la derecha, produciendo más empuje que la pala ascendente de la izquierda. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 7',
      'Fuerzas giroscópicas aplicadas a las palas giratorias de la hélice que actúan 90 ° antes del punto en que se aplicó la fuerza.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3209',
    'pregunta': '3209.- ¿Cuándo el factor P hace que el avión se desvíe hacia la izquierda?',
    'opciones': [
      'Cuando en ángulos de ataque bajos.',
      'Cuando se encuentra en ángulos de ataque elevados.',
      'Cuando está a alta velocidad.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3658',
    'pregunta': '3658.- Durante la inspección previa al vuelo, ¿quién es responsable de determinar que la aeronave es segura para volar?',
    'opciones': [
      'El piloto al mando.',
      'Propietario u operador.',
      'El mecánico certificado que realizó la inspección anual.',
    ],
    'respuestaCorrecta': 0, // A
    'figura': [],
  },
  {
    'numero': '3659',
    'pregunta': '3659.- ¿Cómo se debe realizar una inspección previa al vuelo de la aeronave para el primer vuelo del día?',
    'opciones': [
      'Camine rápido con una revisión de gasolina y aceite.',
      'Medios rigurosos y sistemáticos recomendados por el fabricante.',
      'Cualquier secuencia determinada por el piloto al mando.',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
  {
    'numero': '3660',
    'pregunta': '3660.- ¿Quién es el principal responsable de mantener una aeronave en condiciones de aeronavegabilidad?',
    'opciones': [
      'Piloto al mando.',
      'Propietario u operador.',
      'Mecánico. DIRECCION DE PERSONAL AERONAUTICO DPTO. DE INSTRUCCION PREGUNTAS Y OPCIONES POR TEMA MTC OGMS/DINF 07/10/2026 14:05 Pag: 8',
    ],
    'respuestaCorrecta': 1, // B
    'figura': [],
  },
];

// Disponible globalmente para app.js
if (typeof window !== 'undefined') window.preguntasSistemaAeronave = preguntasSistemaAeronave;
