const MissionsModule = (function () {
  let missions = {
    "secrets of the silent dead": {
      "description": "Los cuerpos de Edwin, Morgana y Sirius, habían sido trasladados el 28 de Agosto a las instalaciones de San Mungo, donde los nigromantes habilitados, buscarían encontrar información sobre la muerte de los tres difuntos. Con la presencia de un auror y algunos testigos que validen la información que se está transmitiendo sobre los cuerpos.",
      "image": "https://2img.net/i.imgur.com/atsv3ay.png", "requisitos": ["Un Nigromante de San Mungo", "Un trabajador del Dpto de Seguridad Mágica", "Solo podrán participar familiares de la víctima, trabajadores del Ministerio o trabajadores de San Mungo."],
      "users": ["/u8", "/u41", "/u32", "/u78", "/u53", "/u36"],
      "dependency": [],
      "type": "misión", "closed": true, "link": "/t351-mision-secrets-of-the-silent-dead", "tagged": ["edwin", "morgana", "sirius"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "novalida", }, "place": "",
          "cont": '<span>Los cuerpos, fueron conservados para el momento en el que se realice la autopsia, de manera tal que no hubo deterioración ni perdida de información.<br><br>A simple vista, se pueden observar las siguientes cuestiones:<br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Edwin</strong>: La muerte fue ocasionada por heridas externas. Se puede observar sangre en ambos oídos, trauma toráxico y colapso pulmonar.<br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Morgana</strong>: También con heridas físicas, se puede observar múltiples marcas de sogas y quemaduras, principalmente en el área del cuello.<br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Sirius</strong>: No posee heridas externas. La muerte fue causada por heridas internas.<br></span>',
        },

        {
          "visible": { "attr": { "sab": "4" }, "know": { "val": "min" }, "job": "novalida", "name": "novalida", }, "place": "",
          "cont": '<span>En ninguno de los cuerpos, se puede observar señales de lucha. E, incluso, si se tocan los cuerpos, pueden sentirse entumecidos.<br></span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "novalida", }, "place": "",
          "cont": '<span>Morgana parece haber padecido bajo los efectos de un "ignis funis", debido a que las marcas coinciden con las marcas que la ex directora de San Mungo posee.<br></span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "novalida", }, "place": "",
          "cont": '<span>En el caso de Edwin, se puede observar sangre en sus oídos. Capaz convendría preguntar por el estado de sus pulmones, debido a que podría tratarse de un ataque con un "regio impetum".<br></span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "novalida", }, "place": "",
          "cont": '<span>La carencia de marcas en el cuerpo de Sirius, parecen indicar que su muerte fue causada por un veneno demasiado fuerte, rápido y letal.<br></span>',
        }
      ],

      "searchs": {
        "relicta notitia en la pulsera": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "",
          "cont": '<span>Una imagen se proyecta, la de una niña que corretea por un campo. Lleva puesta la pulsera. Otra niña se suma al juego, es más grande, pero sus rasgos son inconfundibles, se trata de Morgana.</span>',
        },
        "disección sirius": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "",
          "cont": '<span>Al abrir el cuerpo de Sirius, se puede observar un líquido que cubre ciertos órganos principales, parecen ser todos productos de una misma poción. Si se toma una muestra podrá darse por sentado que se ha tomado una muestra de la poción utilizada para su muerte.<br />Se pueden observar hemorragias internas, una necrosis intensa en los riñones, músculos, piel y corazón, que es el que termina causando la muerte al sufrir un colapso cardiovascular.<br />Se puede determinar su hora de la muerte como las 2:30am.</span>',
        },
        "disección morgana": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "",
          "cont": '<span>En el caso de Morgana, se la asfixió hasta que su vida se quebró.<br />Se pueden observar huesos y sangre a la altura del cuello.<br />Se puede determinar su hora de la muerte como las 2:30am.</span>',
        },
        "disección edwin": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "",
          "cont": '<span>Al aplicarse en Edwin, se observa que la muerte fue causada por daños físicos en los pulmones. El impacto fue tan extenso que provocó un colapso alveolar, posee daño auditivo y sus pupilas se encuentran dilatas a causa de fallecer bajo una fuerte desorientación.<br />Las costillas, además de estar quebradas y astilladas por el impacto, tienen rastros y señales de quemaduras, provocadas por el "regio impetum" y confirmando el hechizo utilizado para su muerte.<br />Se puede determinar su hora de la muerte como las 2:30am.</span>',
        },
        "muestra de sangre": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "",
          "cont": '<span>Se pueden tomar muestras de sangre de los tres fallecidos, en un análisis rápido, se pueden observar las señales que indican que Sirius era sangre pura, Edwin y Morgana, sangre mestiza. A simple vista, no hay más información que brindar al respecto.</span>',
        },
      },

      "actions": {
        "corruptum lector": {
          "leve": 'Al aplicarse en Edwin, se observa que la muerte fue causada por daños físicos en los pulmones. En el caso de Morgana, asfixia. Y en el caso de Sirius, su causa son hemorragias internas.',
          "moderado": 'Al aplicarse en Edwin, se observa que la muerte fue causada por daños físicos en los pulmones, el impacto fue tan extenso que provocó un colapso alveolar. En el caso de Morgana, se la asfixió hasta que que su vida se quebró. Y en el caso de Sirius, su causa son hemorragias internas, aunque también se observan fallos en los riñones y el corazón.',
          "exitoso": 'Al aplicarse en Edwin, se observa que la muerte fue causada por daños físicos en los pulmones, el impacto fue tan extenso que provocó un colapso alveolar, posee daño auditivo y sus pupilas se encuentran dilatas a causa de fallecer bajo una fuerte desorientación.<br />En el caso de Morgana, se la asfixió hasta que que su vida se quebró.<br />Y en el caso de Sirius, su causa son hemorragias internas, aunque también se observa una necrosis intensa en los riñones, músculos, piel y corazón, que es el que termina causando la muerte al sufrir un colapso cardiovascular.',
          "critico": 'Al aplicarse en Edwin, se observa que la muerte fue causada por daños físicos en los pulmones, el impacto fue tan extenso que provocó un colapso alveolar, posee daño auditivo y sus pupilas se encuentran dilatas a causa de fallecer bajo una fuerte desorientación. Sin embargo, su cuerpo parecía estar en paz.<br />En el caso de Morgana, se la asfixió hasta que que su vida se quebró. Sus emociones, son de tristeza y de despedida.<br />Y en el caso de Sirius, su causa son hemorragias internas, aunque también se observa una necrosis intensa en los riñones, músculos, piel y corazón, que es el que termina causando la muerte al sufrir un colapso cardiovascular. A pesar de sentir pena y luto, hay una sensación de ironía en sus emociones.',
        },

        "mortis vox": {
          "leve": 'Las emociones de Edwin son serenas, como las de un soldado que ha soltado una espada. Morgana, en cambio, parece abrazarse a la misma sus emociones representan valor. Sirius, se encuentra cargado de duelo e ironía, en una extraña combinación.',
          "moderado": 'El nigromante es capaz de captar unos segundos de sonido antes de la muerte. Los tres los mismos, pero tan diferentes. Edwin se encontraba escuchando jazz, atento, hasta que se escuchan unas pisadas. Morgana murmuraba algo, pero no se la llegaba a entender, hasta que unos pasos cortan el sonido. Sirius se encontraba en total silencio, hasta que unos pasos cortan los sonidos. Los tres pasos son diferentes, personas de diferentes pesos, diferentes dimensiones.',
          "exitoso": 'El nigromante es capaz de captar unos segundos de sonido antes de la muerte. Los tres los mismos, pero tan diferentes. Edwin se encontraba escuchando jazz, atento, hasta que se escuchan unas pisadas, al final se escucha "creí que llegarías tarde". Morgana murmuraba algo, "Gryffith mantén el secreto, no confíes en nadie", hasta que unos pasos cortan el sonido. Sirius se encontraba en total silencio, hasta que unos pasos cortan los sonidos, de fondo se escucha la voz de una mujer mayor que parece estar renegando de algo, aunque sus palabras carecen sentido. Los tres pasos son diferentes, personas de diferentes pesos, diferentes dimensiones. Los que se escuchan en Edwin son suaves, en los de Morgana firmes y constantes, y en los de Sirius, cortos y elegantes.',
          "critico": 'El nigromante logra conectar el alma de los muertos provocando que digan unas palabras. En el caso de Edwin, se lo escucha decir: "Dile a mis hijos que los amo"; Sirius guarda silencio, reacio a hablar; Morgana en cambio susurra: "Gryffith, ten cuidado con el velo entre la vida y la muerte".',
        },

        "animas revelo": {
          "leve": 'Hay alguien en la sala, pero no se puede identificar quién.',
          "moderado": 'Se trata del aura de una persona que se encuentra fija en el nigromante.',
          "exitoso": 'La silueta toma la forma de Morgana, sus brazos cruzados en la espalda miran al nigromante con los labios fruncidos.',
          "critico": 'La silueta toma la forma de Morgana, sus brazos cruzados en la espalda miran al nigromante con los labios fruncidos, como si quisiera detenerlo sin poder hacerlo.',
        },

        "evoco spiritum": {
          "leve": 'El aura de Morgana se siente, pero no se logra la comunicación.',
          "moderado": 'Los ojos de la silueta de Morgana, miran al espiritista, como si tratara de saber si es de confiar o no.',
          "exitoso": 'Morgana se encuentra presente de manera tan nítida que parece estar viva, sin embargo, se niega a responder cualquier pregunta.',
          "critico": 'La figura de morgana acaricia la piel de su cuerpo, observa al espiritista antes de decir: "Entierren mi cuerpo bajo la luna llena".',
        },

        "revelio": {
          "leve": 'Se percibe magia alrededor de la mano de Morgana, aunque no es demasiado definido.',
          "moderado": 'Revela la existencia de un objeto que rodea la muñeca de Morgana, aunque no hay claridad en el mismo.',
          "exitoso": 'Revela una pulsera en la muñeca de Morgana, parece pertenecer al de una niña, en la que se lee: "Merry".',
          "critico": 'Revela una pulsera en la muñeca de Morgana, parece pertenecer al de una niña, en la que se lee: "Merry". Los personajes pueden tomar la misma.',
        },

        "revelio potionis": {
          "leve": 'Detecta partes de una poción ofensiva y peligrosa, más no revela nada más.',
          "moderado": 'Se puede detectar que la poción se trata de un veneno hemotóxico y citotóxico, aunque permite obtener más información.',
          "exitoso": 'No hay una poción creada para dicho veneno, aunque se puede identificar que posee, mayoritariamente, la toxina de un animal.',
          "critico": 'El veneno perfectamente preparado, fue una manipulación de veneno de alguna serpiente o réptil.',
        },
      },
    },
    // fin mision Secrets of the Silent Dead

    "potions for all the afflictions": {
      "description": "Bienvenidos a 'Maroon Steed', aquellos que lo conocen, saben a dónde están ingresando, quienes no, pronto lo descubrirán.<br />La taberna que solo aparece para aquellos que necesitan una poción para la tristeza, la rabia y el enojo. Ideal para quienes lloran por dentro, pero aún queda vida en sus corazones. La taberna es un espacio ideal para olvidarse de todas las dolencias y todas las cicatrices que la vida dejo. Allí dentro encontrarán algo mágico, algo prohibido, algo que olvidar...",
      "image": "https://2img.net/i.imgur.com/gGo598Z.png", "requisitos": [],
      "users": ["/u38", "/u116", "/u115", "/u119", "/u118", "/u63"],
      "dependency": [],
      "type": "misión", "closed": true, "link": "https://blackwave.foroactivo.com/t559-mision-potions-for-all-the-afflections", "tagged": ["morgana"],

      "cards": [
        {
          "visible": { "attr": { "sab": "+2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Puedes sentir que lo que bebieron no era solamente alcohol, sino que tenía algo más, un sabor seco, pero no sabes reconocer qué es. Sin embargo, tu instinto te dice que no lo sigas bebiendo y capaz convendría mantenerse hidratado.</span>',
        },

        {
          "visible": { "attr": { "sab": "+2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Cada vez que el personaje bebe agua, reduce en 5 los efectos alcohólicos.</span>',
        },

        {
          "visible": { "attr": { "int": "+2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Por la forma en la que la cantante principal canta, puedes afirmar que se trata de una hija de banshee. Y no solo eso, sino que esta utilizando su voz para sumergir a las personas de la taberna en una sensación jocosa, alegre y pacífica.</span>',
        },

        {
          "visible": { "attr": { "sab": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "primera intervención",
          "cont": '<span>Entre el escenario y la barra puedes distinguir una puerta por la que entra uno de los personales de la taberna. Posiblemente entre a un depósito, pero siempre es bueno saber que existe otra salida.</span>',
        },

        {
          "visible": { "attr": { "sab": "+2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "primera intervención",
          "cont": '<span>El humo no tiene buena pinta, al igual que las bebidas parece tener algo adional, algo no declarado. Capaz sería mejor realizar un hechizo que permita generar un casco e impida inhalar el mismo.</span>',
        },

        {
          "visible": { "attr": { "int": "+2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Debido a la madera oscura en todas partes, los banderines que cuelgan detrás de la decoración y la silueta de un trébol negro donde se encuentra una hendidura bordo con el nombre del lugar, el personaje puede deducir que fueron transportados a Irlanda.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "dcao": "10" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Al ingresar al lugar, pueden ver que la entrada está conformada por cinco puertas, la puerta por la que ingresan tiene escrita una runa ᛃ (Jera).</span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "salir del pasadizo",
          "cont": '<span>Proceso de regreso 3a de 3.<br/><br/>Para llegar a la <strong>sala común de Slytherin</strong> deberán tirar la acción "Mischief Managed" desde los puntos que se hayan quedado en el paso anterior. Se condierará que llegaron correctamente si llegan a 400 puntos. Una vez logrados, podrán decir que llegaron sin ser vistos ni detectados. Ningún otro personaje salvo los presentes podrá declarar que estuvo fuera durante esa noche. Si no cumplen las normas, la administración incluirá intervención con un profesor.</span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "salir del pasadizo",
          "cont": '<span>Proceso de regreso 3b de 3.<br/><br/>Para llegar a la <strong>sala común de Gryffindor</strong> deberán tirar la acción "Mischief Managed" desde los puntos que se hayan quedado en el paso anterior. Se condierará que llegaron correctamente si llegan a 450 puntos. Una vez logrados, podrán decir que llegaron sin ser vistos ni detectados. Ningún otro personaje salvo los presentes podrá declarar que estuvo fuera durante esa noche. Si no cumplen las normas, la administración incluirá intervención con un profesor.</span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "salir del pasadizo",
          "cont": '<span>Proceso de regreso 3c de 3.<br/><br/>Para llegar a la <strong>sala común de Ravenclaw</strong> deberán tirar la acción "Mischief Managed" desde los puntos que se hayan quedado en el paso anterior. Se condierará que llegaron correctamente si llegan a 500 puntos. Una vez logrados, podrán decir que llegaron sin ser vistos ni detectados. Ningún otro personaje salvo los presentes podrá declarar que estuvo fuera durante esa noche. Si no cumplen las normas, la administración incluirá intervención con un profesor.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "dcao": "5" }, "job": "invalid", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>Un hechizo que puede ser útil para recuperar la cordura es "Rennervate".</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "encantamientos": "5" }, "job": "invalid", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>Un hechizo que puede ser útil para recuperar la cordura es "Finite".</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "curación": "5" }, "job": "invalid", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>Algunos hechizos que pueden ser útil para eliminar los efectos de las bebidas son: "memoria lucida", "quieta" y "nervus flemere".</span>',
        },
      ],

      "searchs": {
        "barra": {
          "visible": { "attr": { "des": "+0" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El personaje al acercarse a la barra puede pedir cualquiera de las siguientes bebidas:<br><br><strong>Fulgor del Yelmo</strong>: Es un vaso corto y cristalino, como el que les dieron en la entrada. Sabe a moras y crema batida.<br><strong>Fuego de Otoño</strong>: Es un whiskey añejado color ámbar intenso con una hoja amarillenta eternamente prendida fuego que flota en el centro, solo se apaga cuando se termina la bebida. La hoja no quema a su consumidor.<br><strong>Corazón de Mandrágora</strong>: Se trata de un vino añejado con sabor frutal. Viene decorado con pétalos de rosas negras y es popular porque sus consumidores siempre terminan llorando cuando beben demasiado.<br><strong>Gota del Olvido</strong>: Es una bebida color tornasolado entre el azul y el violeta, tiene sabor a lavanda y ron. La bebida parece brillar en un vaso alargado.<br></span>',
        },

        "tarotista": {
          "visible": { "attr": { "car": "+3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>En una esquina, escondida bajo un sombrero de puntiagudo, se encuentra una bruja, que parece sonreír, mientras observa las cartas que giran en sus manos. Si te acercas, la mujer sonríe y pregunta—: <strong>La lectura de cartas es gratis belleza. Capaz quieres sentarte un rato y saber qué te depara el futuro.</strong><br><br>En caso de querer la lectura de cartas, el personaje deberá escribir a la administración para que realice el masteo.<br></span>',
        },

        "despensa": {
          "visible": { "attr": { "sab": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "segunda intervención",
          "cont": '<span>Al abrir la puerta que se encuentra entre la barra y el escenario, se visualiza una escalera de concreto que deciende hasta un depósito oscuro en el que no se puede ver nada.</span>',
        },

        "jardín interior": {
          "visible": { "attr": { "sab": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>Una luz capta la atención del personaje. Parece luz solar, pero también titila como el fuego. Si se acercan dentro del laberinto podrán observar que rodeadas de estanterías que tienen frascos con distintos ingredientes, hay una planta. La planta es extraña, tiene hojas en forma de corazón de un color anaranjado que parece tener fuego dentro de ella. Es la responsable de emitir esa extraña luz. Además, la planta se encuentra sobre una superficie que parece reproducir los efectos de la lava.<br /><br />Antes de que alguno pueda acercarse a la misma. Un empleado entra al lugar— ¿Qué están haciendo aquí? Largo, largo —los empuja hasta regresarlos al bar, que ha quedado vacío luego del grito de la banshee. Revelando cinco puertas que conducen a distintos lugares.</span>',
        },

        "abrir puerta con la runa ansuz": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "jardín interior",
          "cont": '<span>La puerta con la runa ᚨ (Ansuz) conduce a las afueras de San Mungo. El personaje ha quedado demasiado lejos de Hogwarts. Deberá solicitar ayuda de un adulto para poder regresar y enfrentarse a las correspondientes consecuencias de sus acciones.</span>',
        },

        "abrir puerta con la runa tiwaz": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "jardín interior",
          "cont": '<span>La puerta con la runa ᛏ (Tiwaz) conduce a las afueras del Museo de Mirabilia. El personaje ha quedado demasiado lejos de Hogwarts. Deberá solicitar ayuda de un adulto para poder regresar y enfrentarse a las correspondientes consecuencias de sus acciones. Ya no pueden regresar al bar.</span>',
        },

        "abrir puerta con la runa eihwaz": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "jardín interior",
          "cont": '<span>La puerta con la runa ᛇ (Eihwaz) conduce a las afueras de la Reserva Natural de Flint. El personaje ha quedado demasiado lejos de Hogwarts. Deberá solicitar ayuda de un adulto para poder regresar y enfrentarse a las correspondientes consecuencias de sus acciones. Ya no pueden regresar al bar.</span>',
        },

        "abrir puerta con la runa jera": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "jardín interior",
          "cont": '<span>La puerta con la runa ᛃ (Jera) conduce a las calles de Hogsmeade y es la puerta correcta a abrir y salir del bar exitosamente. Ahora solo deberán regresar correctamente al castillo sin ser detectados.</span>',
        },

        "abrir puerta con la runa algiz": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "jardín interior",
          "cont": '<span>La puerta con la runa ᛉ (Algiz) conduce a las afueras de la Biblioteca Hollowshade Castle. El personaje ha quedado demasiado lejos de Hogwarts. Deberá solicitar ayuda de un adulto para poder regresar y enfrentarse a las correspondientes consecuencias de sus acciones. Ya no pueden regresar al bar.</span>',
        },

        "llegar al pasadizo de la estación de hogsmeade": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "abrir puerta con la runa jera",
          "cont": '<span>Proceso de regreso 1 de 3.<br/><br/>Para poder llegar desde las calles de Hogsmeade hasta el pasadizo que conduce a Hogwarts. Deberán tirar la acción "Tacite". Se condierará que llegaron correctamente si llegan a 150 puntos. Una vez logrados, podrán habilitar "salir del pasadizo". Recomendamos que todos los personajes realicen la acción, dado que los puntos acumularán para el siguiente paso. Si no cumplen las normas, la administración incluirá intervención con un profesor.</span>',
        },

        "salir del pasadizo": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "llegar al pasadizo de la estación de hogsmeade",
          "cont": '<span>Proceso de regreso 2 de 3.<br/><br/>Permite salir del pasadizo y adentrarse en los corredores de Hogwarts. Salen por el pasadizo del espejo del segundo piso. Deberán continuar tirando la acción "Tacite" desde los puntos que se hayan quedado en el paso anterior. Se condierará que llegaron correctamente si llegan a 350 puntos. Una vez logrados, podrán habilitar las llegadas a las correspondientes casas. Si no cumplen las normas, la administración incluirá intervención con un profesor.</span>',
        },
      },

      "actions": {
        "bulla galea": {
          "leve": '',
          "moderado": 'La burbuja solo aguanta lo suficiente para que los efectos del humo no hagan efecto.',
          "exitoso": 'La burbuja es fuerte y reduce 15 puntos del contador de bebidas, regresando al personaje un poco de consciencia.',
          "critico": 'La burbuja es fuerte y reduce todos los puntos del contador de bebidas, regresando al personaje a la realidad.',
        },

        "lumos": {
          "leve": 'A penas puedes ver más allá de tus pies. Solo distingues un piso de madera que se extiende.',
          "moderado": 'La luz es alumbra desde la punta de la varita, mostrando unos estantes y alumbrando el camino para no chocarse con nada.',
          "exitoso": 'La luz es estable. Se pueden visualizar las estanterías llenas de botellas de vidrio y un pasillo que conduce a un baño.',
          "critico": 'La luz es estable. Se pueden visualizar las estanterías llenas de botellas de vidrio y un pasillo que conduce a un baño.',
        },

        "tacite": {
          "leve": 'Adiciona 15 puntos al contador de escapada.',
          "moderado": 'Adiciona 30 puntos al contador de escapada.',
          "exitoso": 'Adiciona 45 puntos al contador de escapada.',
          "critico": 'Adiciona 70 puntos al contador de escapada.',
        },

        "mischief managed": {
          "leve": 'Adiciona 15 puntos al contador de escapada.',
          "moderado": 'Adiciona 30 puntos al contador de escapada.',
          "exitoso": 'Adiciona 45 puntos al contador de escapada.',
          "critico": 'Adiciona 70 puntos al contador de escapada.',
        },

        "artimaña": {
          "leve": 'En caso de no llegar a los puntos correspondientes. Adiciona 20 puntos al total de la escapada.',
          "moderado": 'En caso de no llegar a los puntos correspondientes. Adiciona 35 puntos al total de la escapada.',
          "exitoso": 'En caso de no llegar a los puntos correspondientes. Adiciona 50 puntos al total de la escapada.',
          "critico": 'En caso de no llegar a los puntos correspondientes. Adiciona 65 puntos al total de la escapada.',
        },

        "coartada": {
          "leve": 'En caso de no llegar a los puntos correspondientes. Adiciona 35 puntos al total de la escapada.',
          "moderado": 'En caso de no llegar a los puntos correspondientes. Adiciona 50 puntos al total de la escapada.',
          "exitoso": 'En caso de no llegar a los puntos correspondientes. Adiciona 65 puntos al total de la escapada.',
          "critico": 'En caso de no llegar a los puntos correspondientes. Adiciona 80 puntos al total de la escapada.',
        },

        "rennervate": {
          "leve": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 10 puntos la cordura del personaje.',
          "moderado": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 15 puntos la cordura del personaje.',
          "exitoso": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 20 puntos la cordura del personaje.',
          "critico": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 25 puntos la cordura del personaje.',
        },

        "finite": {
          "leve": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 10 puntos la cordura del personaje.',
          "moderado": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 15 puntos la cordura del personaje.',
          "exitoso": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 20 puntos la cordura del personaje.',
          "critico": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 25 puntos la cordura del personaje.',
        },

        "memoria lucida": {
          "leve": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 15 puntos la cordura de todos los personajes.',
          "moderado": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 20 puntos la cordura de todos los personajes.',
          "exitoso": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 25 puntos la cordura de todos los personajes.',
          "critico": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 30 puntos la cordura de todos los personajes.',
        },

        "quieta": {
          "leve": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 15 puntos la cordura de todos los personajes.',
          "moderado": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 20 puntos la cordura de todos los personajes.',
          "exitoso": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 25 puntos la cordura de todos los personajes.',
          "critico": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 30 puntos la cordura de todos los personajes.',
        },

        "nervus flemere": {
          "leve": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 15 puntos la cordura de todos los personajes.',
          "moderado": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 20 puntos la cordura de todos los personajes.',
          "exitoso": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 25 puntos la cordura de todos los personajes.',
          "critico": 'Permite reducir los efectos alucinógenos producidos por las bebidas, recuperando 30 puntos la cordura de todos los personajes.',
        },

        "lumos maxima": {
          "leve": 'La luz solo brilla por unos momentos, revelando las estanterías llenas de botellas de vidrio y un pasillo que conduce a un baño.',
          "moderado": 'La luz es clara por unos momentos, aunque dura unos segundos. Todas las estanterías parecen rodear algo en concreto. Todas las botellas tienen una etiqueta similar, el brebaje cambia, pero todas al final poseen en letra cursiva las palabras "Dempsey Manufacturing".',
          "exitoso": 'La luz revela que todas las estanterías parecen rodear algo en concreto. Todas las botellas tienen una etiqueta similar, el brebaje cambia, pero todas al final poseen en letra cursiva las palabras "Dempsey Manufacturing", en el medio de las estanterías que se agrupan como un pequeño laberinto, se encuentra un invernadero. Solicitar intervención de la administración.',
          "critico": 'La luz revela que todas las estanterías parecen rodear algo en concreto. Todas las botellas tienen una etiqueta similar, el brebaje cambia, pero todas al final poseen en letra cursiva las palabras "Dempsey Manufacturing", en el medio de las estanterías que se agrupan como un pequeño laberinto, se encuentra un invernadero, plantas que se encontraban en los brebajes y en el medio un árbol de hojas amarillas que parece brillar con particularidad excéntrica. Solicitar intervención de la administración.',
        },

        "lumos solem": {
          "leve": 'La luz solo brilla por unos momentos, revelando las estanterías llenas de botellas de vidrio y un pasillo que conduce a un baño.',
          "moderado": 'La luz es clara por unos momentos, aunque dura unos segundos. Todas las estanterías parecen rodear algo en concreto. Todas las botellas tienen una etiqueta similar, el brebaje cambia, pero todas al final poseen en letra cursiva las palabras "Dempsey Manufacturing".',
          "exitoso": 'La luz revela que todas las estanterías parecen rodear algo en concreto. Todas las botellas tienen una etiqueta similar, el brebaje cambia, pero todas al final poseen en letra cursiva las palabras "Dempsey Manufacturing", en el medio de las estanterías que se agrupan como un pequeño laberinto, se encuentra un invernadero. Solicitar intervención de la administración.',
          "critico": 'La luz revela que todas las estanterías parecen rodear algo en concreto. Todas las botellas tienen una etiqueta similar, el brebaje cambia, pero todas al final poseen en letra cursiva las palabras "Dempsey Manufacturing", en el medio de las estanterías que se agrupan como un pequeño laberinto, se encuentra un invernadero, plantas que se encontraban en los brebajes y en el medio un árbol de hojas amarillas que parece brillar con particularidad excéntrica. Solicitar intervención de la administración.',
        },
      },
    },
    // potions for all the afflictions

    "traces in black": {
      "description": "Dentro de las tareas de investigación del departamento de Seguridad, se encontrará revisar el Castillo Black, espacio donde fue encontrado muerto el difunto Sirius Black. Con el fin de encontrar pistas y obtener información que pueda brindar más claridad a la causa.<br />Como es de esperarse, solo podrán participar aquellos personajes que guarden una relación directa con la casa o pueden ingresar a investigar. Pero tengan cuidado... esa casa tiene secretos.",
      "image": "https://2img.net/i.imgur.com/AqXgADy.png", "requisitos": ["Un trabajador del Dpto de Seguridad Mágica", "Un miembro familiar Black", "Solo podrán participar los personajes del Dpto de Seguridad Mágica, San Mungo o miembros familiares"],
      "users": ["/u25", "/u51", "/u50", "/u17", "/u9", "/u8"],
      "dependency": [],
      "type": "misión", "closed": true, "link": "https://blackwave.foroactivo.com/t353-mision-traces-in-black", "tagged": ["sirius"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "Black", }, "place": "",
          "cont": '<span>Existen seis elfos domésticos en el Castillo Black. Todos tienen estrictas órdenes de no ser vistos por ningún familiar a no ser que este sea llamado a servir a la familia:<br><br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Nibbin</strong>: Pequeño y servicial, suele hablar en tercera persona. <br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Dottle</strong>: Olvidadizo, pero sabio. Esta encargado de las cocinas y suele murmurar recetas mientras trabaja.<br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Grimy</strong>: Encargado principal de la limpieza, parece de carácter gruñón, pero tiene un gran corazón. Solía cantar canciones de cuna a los pequeños cuando se quedaban a dormir en el castillo.<br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Lixie</strong>: Ágil y alegre, esta encargada de los jardines y mantener flores frescas en todas las mesas disponibles.<br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Braskin</strong>: Viejo, encorvado y con modales antiguos. Lleva en la familia demasiado tiempo y adoraba con todo su fervor al amo Sirius. Esta al mando de todos los elfos de la casa. Fue él quien encontró a su amo aquella trágica mañana.<br><i class="fa-solid fa-dash" aria-hidden="true"></i> <strong>Peppa</strong>: Con una risa que suena como tetera, también se encarga de la limpieza y mantenimiento del castillo. Adora espiar conversaciones.<br></span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "Black", }, "place": "",
          "cont": '<span>Desde que Sirius heredó el castillo, prohibió a todos sus integrantes acceder a la torre este. Incluso, ordenó a los elfos domésticos que impidan que cualquier familiar o invitado ingresara a aquel espacio del castillo. Hace treinta años que nadie puede ingresar a esa parte. ¿Se mantendrá esa tradición?<br></span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "",
          "cont": '<span>Se debe, primero, utilizar un turno para investigar las cocinas. En las despensas se encuentran varias variedades de whiskey, sin embargo, todos se encuentran cerrados y en perfectas condiciones.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "",
          "cont": '<span>Primero, se debe solicitar a un miembro de la familia Black, que llame al elfo que encontró a Sirius, esperando a que un familiar utilice un turno para llamarlo. Si a este se le pregunta algo, dirá la misma información que dio cuando se encontró el cuerpo—: <strong>El amo se encontraba en el sillón, inconsciente.</strong> —Nada extraño en el día, nada insual en el estudio. Sin embargo, el elfo titubea—: <strong>El amo Sirius siempre tenía su varita a mano, pero no la tenía aquel día</strong>.</span>',
        },

        {
          "visible": { "attr": { "sab": "+5" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "",
          "cont": '<span>Primero, se debe haber utilizado un turno para investigar el estudio de Sirius. Existen varios libros que fueron tomados de la biblioteca, se puede observar porque el polvo acumulado es más que en el resto de los que se encuentra en la bibliteca.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "Black", }, "place": "",
          "cont": '<span>Primero, se debe haber utilizado un turno para haber investigado el invernadero. Un velo separa el invernadero en dos. Las plantas que todos ven, y las que solo ven los miembros correspondientes a la familia. Allí se encuentran plantas carnívoras y varias colecciones botánicas prohíbidas por el Ministerio de Magia.</span>',
        },

        {
          "visible": { "attr": { "sab": "+4" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "",
          "cont": '<span>Primero, se debe haber utilizado un turno para haber investigado el invernadero. Hay una planta desaparecida de una de las macetas.</span>',
        },

        {
          "visible": { "attr": { "int": "+2" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "",
          "cont": '<span>Primero, se debe haber desbloqueado la tarjeta de la maceta. Si se utiliza un turno para que un familiar Black llame al elfo doméstico que corresponde, este dirá—: <strong>El amo Sirius pidió envolver esa planta para llevar hace unos días.</strong> —Al elfo se le modificó la memoria para que no pudiera decir qué planta era.</span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Primero, se debe utilizar un turno para investigar la sala del árbol. Existen tres familiares vivos que han sido borrados del tapiz. Phineas Nigellus II, Marius y Cedrella Black. Se deberá solicitar a un familiar que cuente la historia de cómo pérdieron la herencia familiar.</span>',
        }
      ],

      "searchs": {
        "vestíbulo principal": {
          "visible": { "attr": { "des": "+0" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Alumbrado por candelabros flotantes de plata que simulan ramas de rosales, la sala se encuentra decorada por tapices tejidos por miembros de la familia Black a lo largo de los años. Un imponente retrato de Phineas Nigellus y su esposa Úrsula, ocupan un predominante espacio. También se pueden observar escudos heráldicos de plata que decoran el lugar. En el centro una amplia escalera dirige a los pisos superiores.<br></span>',
        },

        "cocinas": {
          "visible": { "attr": { "des": "+0" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>A pesar de ser un espacio dedicado a los elfos domésticos. Mantiene un espacio pulcro y de líneas claras. Una mesa de madera oscura se encuentra en el medio, junto a un gran hogar cuya llama parece nunca consumirse.</span>',
        },

        "estudio de sirius black": {
          "visible": { "attr": { "des": "+0" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El estudio de Sirius Black es considerado una de las mejores salas del castillo. Sus amplios ventanales dan a los jardines. Las paredes de un color borgoña resaltan incluso sobre las decoraciones de plata y oro. Todos los muebles se encuentran tallados con símbolos rúnicos. Todos los sillones de un terciopelo negro se encuentran intactos a pesar del tiempo que llevan en ese hogar. Una pequeña biblioteca privada, contiene libros que se fueron llenando de polvo con el paso del mes.</span>',
        },

        "biblioteca": {
          "visible": { "attr": { "des": "+0" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La biblioteca del castillo, es un espacio circular. Cuenta con varias mesas de madera labrada, sillones de terciopelo color verdes, y sobre los muebles descansan libros y pergaminos que capaz nunca han sido vistos en otro lugar. Sus ventanales van del piso al techo y contiene un pequeño balcón, donde los familiares pueden sentarse a leer.</span>',
        },

        "invernadero": {
          "visible": { "attr": { "des": "+0" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Muchos consideran que los Black poseen plantas peligrosas e incluso prohibidas por el Ministerio de Magia. Sin embargo, al ingresar, se puede ver una hermosa colecciones de plantas y flores cuyos colores se apegan a la estética de la casa, colores negros, borgoña, rojos intensos y verdes oscuros. Incluso, se puede observara un pequeño espacio donde la temperatura se adapta para poder cultivar té, el favorito de Sirius, té negro.</span>',
        },

        "torre este": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "Black", }, "place": "",
          "cont": '<span>Detrás de una puerta doble de madera, se haya el contenido de la torre este. El primer espacio se encuentra vacío, no más que una escalera que conduce a lo más alto de la torre. Allí se encuentra una habitación, hay pinturas, retratos que ya nunca serán pintados, y también tapices, que nunca podrán ser terminados, aún así. Úrsula Flint lo intenta—: <strong>¿Eres tu mi amor?</strong> —pregunta por su esposo. La mujer tiene 110 años, y a perdido la cordura hace muchos años, pero cuando se vuelve a los extraños comienza a golpearlos con el bastón que necesita para mantenerse en pie— <strong>¡INTRUSOS! ¡CANALLAS! ASTRUS, ¿DÓNDE ESTÁS, MALDITO ELFO DOMÉSTICO? LARGO, LARGO DE MI CASA. ¡PHINEAS!</strong> —comienza a gritar la mujer, completamente alterada.<br><br>Si quieren continuar con la interacción a Úrsula, deberán solicitar al staff que realice los correspondientes masteos.</span>',
        },

        "la sala del árbol": {
          "visible": { "attr": { "des": "+0" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La sala del tapiz, es una sala de estar, pero no es una sala de estar como cualquier otra. Decorada con una alfombra negra que tiene en el centro el emblema de los Black, sus paredes cuentan con el árbol familiar Black pintado a mano. Los retratos de los familiares, crecen a medida que ellos los hacen, excepto por aquellos que hayan sido borrados. No existen sillas, ni mesas en aquella sala. Es un espacio para contemplar y apreciar lo que significa ser un miembro de la noble y ancestral casa de los Black.</span>',
        },
      },

      "actions": {
        "identificar runa": {
          "leve": '',
          "moderado": 'Una de las runas se trata de Algiz (ᛉ).',
          "exitoso": 'Existen dos runas que destacan sobre todas las demás, se trata de Algiz (ᛉ) y Uruz (ᚢ), ambas parecen haber sido remarcadas recientemente.',
          "critico": 'Existen dos runas que destacan sobre todas las demás, se trata de Algiz (ᛉ) y Uruz (ᚢ), ambas parecen haber sido remarcadas recientemente.',
        },

        "interpretar runas": {
          "leve": '',
          "moderado": 'El significado de las runas es difuso, aunque están relacionadas con la protección.',
          "exitoso": 'La runa Algiz (ᛉ) está relacionada con la protección, los defensores, guardianes y el instinto. La runa Uruz (ᚢ) está relacionada con la fuerza, la salud y el coraje.',
          "critico": 'La runa Algiz (ᛉ) está relacionada con la protección, los defensores, guardianes y el instinto. La runa Uruz (ᚢ) está relacionada con la fuerza, la salud y el coraje.',
        },

        "dissendium": {
          "leve": '',
          "moderado": '',
          "exitoso": 'Previamente, será necesario revisar la biblioteca. En una de las esquinas, se encuentra un reloj de pie, tallado en madera con detalles en bronce, cuyas manecillas no marcan la hora. Hace años que no funciona. El mismo reloj cuenta con el escudo de la familia. Al utilizar el hechizo, sus manecillas, se mueven hasta señalar las 12 hs. Un segundo después, una de las baldosas, se mueve revelando unas escaleras que descienden hasta un pequeño lobby de piedra que solo tiene una chimenea y una fuente de plata en forma de hoja con polvos flu. No parece un espacio de la casa utilizado con regularidad.',
          "critico": 'Previamente, será necesario revisar la biblioteca. En una de las esquinas, se encuentra un reloj de pie, tallado en madera con detalles en bronce, cuyas manecillas no marcan la hora. Hace años que no funciona. El mismo reloj cuenta con el escudo de la familia. Al utilizar el hechizo, sus manecillas, se mueven hasta señalar las 12 hs. Un segundo después, una de las baldosas, se mueve revelando unas escaleras que descienden hasta un pequeño lobby de piedra que solo tiene una chimenea y una fuente de plata en forma de hoja con polvos flu. No parece un espacio de la casa utilizado con regularidad.',
        },
      },
    },
    // fin traces in black

    "haunted dwelling": {
      "description": "El hogar de Edwin, pertenece a su familia por muchos de años. No era sorpresa de nadie que Edwin hubiera tomado la herencia para hacer de esa casa propia. Por más del aspecto antiguo de su exterior, la modesta casa siempre fue muy limpia y ordenada para todos aquellos que la conocían. Pese a eso, lo más importante, no es la casa, es la libreta que Edwin siempre tenía consigo.<br />El ex-jefe del departamento de seguridad, era una persona muy ordenada. Poseía una libreta encantada en la que escribía todo y decía que solo él era capaz de leerla. Bromeaba con sus colegas, 'si algo me pasa, busquen aquí', y le daba dos golpes lomo de la misma, 'algo habré escrito que les regalará la mitad del trabajo'. Se suponía que nada le pasaría, pero pasó y ahora su libreta, esta pérdida.",
      "image": "https://2img.net/i.imgur.com/Hql0xVA.png", "requisitos": ["Un trabajador del Dpto de Seguridad Mágica", "Un personaje cercano a Edwin", "Solo podrán participar personajes del Dpto se Seguridad Mágica, San Mungo o cercanos a la víctima"],
      "users": ["/u60", "/u7", "/u55", "/u50", "/u79", "/u84"],
      "dependency": [],
      "type": "misión", "closed": true, "link": "https://blackwave.foroactivo.com/t354-mision-haunted-dwelling", "tagged": ["edwin"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "ignatius", }, "place": "",
          "cont": '<span>Primero se deberá usar un turno para investigar el estudio, el sobre de regalo es algo que le parecerá familiar, dado que Edwin solía enviarle un pergamino con una pista como regalo de cumpleaños cuando era pequeño. Dicha pista revelaba una búsqueda de tesoro perdido. Podrá revelar la información o guardar el sobre. Si en algún momento desea revelar el contenido, deberá pedir la pista al staff. </span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "fleamont", }, "place": "",
          "cont": '<span>Primero se deberá usar un turno para investigar el dormitorio, el escudo fue un regalo de su tía Galatea, luego de haber recorrido Grecia. Edwin creía que era un auténtico escudo de la edad antigua. Cada vez que tuvo que mudarse se lo llevó consigo porque decía que defendía a la familia durante las noches en las que todos estaban dormidos. </span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Primero se deberá usar un turno para investigar el estudio, la constelación del cuadro de Edwin, se trata de la constelación de Orión, una de las constelaciones más visibles del cielo nocturno y considerado una guía para los viajeros. </span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Primero se deberá usar un turno para investigar el estudio, y haber mencionado cuál es la constelación. La primera estrella que falta es <i>Betelgeuse</i>, el hombre izquierdo, representando que el cazador no tiene su arma de batalla. La segunda estrella que falta es <i>Bellatrix</i>, la estrella que sostiene el escudo. </span>',
        },

        {
          "visible": { "attr": { "sab": "+2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Primero se deberá usar un turno para investigar el estudio, al cuadro de la constelación, le faltan dos estrellas, las cuales fueron borradas con magia, y por el rastro que dejaron, parece ser algo bastante reciente. </span>',
        },

        {
          "visible": { "attr": { "sab": "+4" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Luego de haber revisado el estudio y el dormitorio, y saber la estrella faltante, solicitar al staff la acción que deben realizar para obtener el cuaderno de Edwin. </span>',
        },

        {
          "visible": { "attr": { "int": "+4" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Luego de haber revisado el estudio y el dormitorio, y saber la estrella faltante, solicitar al staff revelar la tarjeta informativa. </span>',
        },

        {
          "visible": { "attr": { "int": "+4" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La estrella [i]Betelgeuse[/i] representa que a su guerrero le falta su arma principal. Por más que se busque, podrán notar la ausencia de la varita de Edwin. En los registros mágicos, su varita no se encuentra, porque la varita está pérdida. </span>',
        },

        {
          "visible": { "attr": { "sab": "+3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Los crucigramas parecen haber sido sacados del Diario “El Profeta”, día tras día y coleccionando aquellos que fue completando. A simple vista, no hay errores, más allá de alguna que otra palabra tachada. Sin embargo, al recorrer los crucigramas comienza a notarse que en seis páginas hay una estrella en una de las esquinas.</span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Si se busca la primera página con estrella, se puede observar una consigna vacía: <em>El cazador gigante, una de las constelaciones más reconocibles.</em></span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Si se busca la segunda página con estrella, se puede observar una consigna vacía: <em>Significa “horno”; una constelación menor en el hemisferio sur.</em></span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Si se busca la tercera página con estrella, se puede observar una consigna vacía: <em>Nombre de la estatua esculpida por Pigmalión que, según el mito, cobró vida por deseo de su creador.</em></span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Si se busca la cuarta página con estrella, se puede observar una consigna vacía: <em>El conejo, situado cerca de Orión.</em></span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Si se busca la quinta página con estrella, se puede observar una consigna vacía: <em>El escudo; pequeña pero visible desde el hemisferio sur.</em></span>',
        },

        {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Si se busca la sexta página con estrella, se puede observar una consigna vacía: <em>Representa a la princesa encadenada de la mitología griega.</em></span>',
        }
      ],

      "searchs": {
        "estudio de edwin": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El estudio de Edwin, es un espacio bastante pequeño. Contiene una biblioteca chica, con pergaminos y libros de defensa que, por el polvo que juntan, llevan bastante tiempo sin usarse, y la biblioteca en sí parece más un espacio para apoyar otras cosas que no son necesariamente libros. Como un tocadiscos que tiene un disco de Jazz.<br><br>Las paredes son de color blanco y tiene dos ventanas grandes, de las cuales cuelgan dos canteros llenos de flores de hojas verdes.<br><br>Un escritorio de madera es donde más desorden hay. Pergaminos sobre cuestiones del Departamento de Seguridad Mágica, la entrega de “El Profeta” correspondiente al 28 de agosto, una foto familiar. Si se revisan sus cajones, encontrarán un sobre de regalo, sin destinatario.<br><br>Hay un cuadro detrás de su silla, una constelación que parece haber sido pintada hace muchos años.</span>',
        },

        "dormitorio de edwin": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La habitación donde Edwin fue encontrado, guarda bastante relación con el resto de la casa. Paredes color claro. La cama de la misma manera en la que se dejó cuando se retiró el cuerpo de Edwin. Las frazadas y mantas azules cuelgan a un costado.<br><br>Un escudo antiguo de bronce corroído por el tiempo y de más de medio metro de diámetro. En el relieve se puede visualizar un búho con las alas extendidas rodeado por una corona de olivos.</span>',
        },

        "revelio escudo": {
          "visible": { "attr": { "sab": "+4" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Cuando se descuelga el escudo y se realiza el encantamiento <i>Revelio</i>, el cuaderno aparece lentamente, enganchado donde iría el brazo de su guerrero. A simple vista parece ser el cuaderno de su dueño, pero al abrirlo. Sus hojas solo revelan un crucigrama tras otro.</span>',
        },
      },

      "actions": {
      },
    },
    // fin Haunted Dwelling

    "death in a teacup": {
      "description": "Así como los cuerpos fueron trasladados a morgue. Las tazas de té y vasos de té junto con los whiskeys encontrados en las casas de las víctimas, fueron llevados a los laboratorios de San Mungo para identificar su contenido.<br />En este tema, deberán aplicar diferentes métodos alquímicos, un poco de lógica y por supuesto, tener un poco de suerte, hasta encontrar qué había en los vasos de las diferentes víctimas.",
      "image": "https://2img.net/i.imgur.com/fyKLKgt.png", "requisitos": ["Un miembro debe tener Alquimia en Avanzado", "Un trabajador del Dpto de Seguridad Mágica", "Personajes que puedan colaborar oficialmente con la investigación de venenos"],
      "users": ["/u10", "/u77", "/u89", "/u18", "/u42"],
      "dependency": [],
      "type": "misión", "closed": true, "link": "https://blackwave.foroactivo.com/t365-mision-death-in-a-teacup", "tagged": ["edwin", "morgana", "sirius"],

      "cards": [
        {
          "visible": { "attr": { "sab": "+3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Si las bebidas se huelen se puede llegar a las siguientes conclusiones: Todas las bebidas tienen alguna clase de té con whiskey. La bebida de Edwin es té de limón con miel. La bebida de Morgana, es té rojo. La bebida de Sirius es té negro. </span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "alquimia": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El mejor camino para dividir los elementos de una de las bebidas es el siguiente:<br> <br>1. Condensación para eliminar las esencias más volátiles. <br>2. Hervir de manera controlada los líquidos para liberar compuestos ocultos. <br>3. Calcinación para eliminar residuos no disueltos.<br>4. Separación para eliminar líquidos restantes.</span>',
        },

        {
          "visible": { "attr": { "sab": "+2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Si se observan las bebidas, tras dejarlas reposar un momento, se puede observar que solo la bebida de Morgana, tiene rastros de azúcar.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Los rastros parecen pertenecer a una hoja, por la forma en la que se descompuso entre el té y el alcohol, podría decirse que sus hojas eran duras y de color ambarino.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Mentes capaces piensan igual. Una poción de regerminación, capaz pueda llegar a revelar más sobre la planta en cuestión. Una vez que terminen la poción, pueden avisar al staff para que realice un masteo.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Mentes capaces piensan igual. Una poción de regerminación, capaz pueda llegar a revelar más sobre la planta en cuestión. Una vez que terminen la poción, pueden avisar al staff para que realice un masteo.</span>',
        }
      ],

      "searchs": {
        "beber té con whiskey de edwin": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La bebida sabe a lo que se esperaba, té de limón, con miel y whiskey. Su sabor es dulce en un principio gracias a la miel; sin embargo, las notas finales recuerdan el sabor de un whiskey de calidad con notas de roble y vainilla. Hay algo en el fondo, como un sabor distinto a la miel, pero igual de dulce. El personaje por los siguientes tres roles sentirá un cosquilleo en los dedos, como si sus músculos se vieran entumecidos.</span>',
        },

        "beber té con whiskey de morgana": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La bebida sabe a lo que se esperaba, la base terrosa del té rojo y el whiskey casi no se notan, un sabor dulzor tapa todos los sabores en una combinación que parece hasta empalagosa. El personaje por los siguientes tres roles sentirá un cosquilleo en los dedos, como si sus músculos se vieran entumecidos.</span>',
        },

        "beber té con whiskey de sirius": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La bebida sabe a lo que se esperaba, el whiskey con notas de roble y vainilla sobresalen sobre el sabor a té negro, en el fondo se notan el dulzor del azúcar, dulce casi empalagoso. El personaje por los siguientes tres roles sentirá un cosquilleo en los dedos, como si sus músculos se vieran entumecidos.</span>',
        },

        "hechizo: fac illum clamorem": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Libera las sustancias alcohólicas atrapadas u otros compuestos solubles.</span>',
        },

        "hechizo: succendam bullae": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Acelera la liberación de residuos ocultos, mostrando ciertas granuladidades en la bebida, que bien podrían tratarse de hebras de té.</span>',
        },

        "hechizo: ignis mortis": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Las cenizas revelan material vegetal.</span>',
        },

        "hechizo: unus multis": {
          "visible": { "attr": { "int": "+1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Termina de separar los elementos de la poción dejando tres sustancias claras: hebras de té, restos de whiskey y lo que parece ser restos de una planta. Deberá pedirse al staff revelar más información sobre la misma.</span>',
        }
      },

      "actions": {
        "fac illum clamorem": {
          "leve": '<span>Libera las sustancias alcohólicas atrapadas u otros compuestos solubles.</span>',
          "moderado": '<span>Libera las sustancias alcohólicas atrapadas u otros compuestos solubles.</span>',
          "exitoso": '<span>Libera las sustancias alcohólicas atrapadas u otros compuestos solubles.</span>',
          "critico": '<span>Libera las sustancias alcohólicas atrapadas u otros compuestos solubles.</span>',
        },

        "succendam bullae": {
          "leve": '<span>Acelera la liberación de residuos ocultos, mostrando ciertas granuladidades en la bebida, que bien podrían tratarse de hebras de té.</span>',
          "moderado": '<span>Acelera la liberación de residuos ocultos, mostrando ciertas granuladidades en la bebida, que bien podrían tratarse de hebras de té.</span>',
          "exitoso": '<span>Acelera la liberación de residuos ocultos, mostrando ciertas granuladidades en la bebida, que bien podrían tratarse de hebras de té.</span>',
          "critico": '<span>Acelera la liberación de residuos ocultos, mostrando ciertas granuladidades en la bebida, que bien podrían tratarse de hebras de té.</span>',
        },

        "ignis mortis": {
          "leve": '<span>Las cenizas revelan material vegetal.</span>',
          "moderado": '<span>Las cenizas revelan material vegetal.</span>',
          "exitoso": '<span>Las cenizas revelan material vegetal.</span>',
          "critico": '<span>Las cenizas revelan material vegetal.</span>',
        },

        "unus multis": {
          "leve": '<span>Termina de separar los elementos de la poción dejando tres sustancias claras: hebras de té, restos de whiskey y lo que parece ser restos de una planta. Deberá pedirse al staff revelar más información sobre la misma.</span>',
          "moderado": '<span>Termina de separar los elementos de la poción dejando tres sustancias claras: hebras de té, restos de whiskey y lo que parece ser restos de una planta. Deberá pedirse al staff revelar más información sobre la misma.</span>',
          "exitoso": '<span>Termina de separar los elementos de la poción dejando tres sustancias claras: hebras de té, restos de whiskey y lo que parece ser restos de una planta. Deberá pedirse al staff revelar más información sobre la misma.</span>',
          "critico": '<span>Termina de separar los elementos de la poción dejando tres sustancias claras: hebras de té, restos de whiskey y lo que parece ser restos de una planta. Deberá pedirse al staff revelar más información sobre la misma.</span>',
        },

        "revelio potionis": {
          "leve": '<span>Las bebidas solo revelan el té utilizado y whiskey. Edwin: té de limón con miel: Morgana: té rojo; Sirius: té negro.</span>',
          "moderado": '<span>Se revelan las siguientes composiciones. El té de Edwin es té de limón, whiskey con vainilla y miel. El té de Morgana, posee té rojo y whiskey con vainilla, bastante azucarado. El té de Sirius es té negro con whiskey de vainilla.</span>',
          "exitoso": '<span>Se revelan las siguientes composiciones. El té de Edwin es té de limón, whiskey con vainilla y miel, hay un ingrediente adicional. El té de Morgana, posee té rojo y whiskey con vainilla, bastante azucarado. El té de Sirius es té negro con whiskey de vainilla. Los tres poseen un ingrediente adicional, pero no se puede distinguir cuál es.</span>',
          "critico": '<span>Se revelan las siguientes composiciones. El té de Edwin es té de limón, whiskey con vainilla y miel, hay un ingrediente adicional. El té de Morgana, posee té rojo y whiskey con vainilla, bastante azucarado. El té de Sirius es té negro con whiskey de vainilla. Los tres poseen un ingrediente adicional, y la información revelada para indicar que se trata de una salvia, pero no se puede identificar la planta o árbol al que pertenece.</span>',
        },
      },
    },
    // fin Death in a Teacup

    "wounds from the past": {
      "description": "La casa de Morgana Dempsey es un lugar desconocido para muchos. Morgana siempre fue muy discreta con sus temas personales. Jamás invitaba a la casa a alguien en quien no depositara su confianza. Sin embargo, su muerte lleva a que aquel lugar, sea un espacio cargado de sospechas y un buen lugar para buscar pistas.<br />Vayan preparados, Morgana era una experta en sorprender con cosas inesperadas.",
      "image": "https://2img.net/i.imgur.com/DfRLWoB.png", "requisitos": ["Un trabajador del Dpto de Seguridad Mágica", "Un personaje cercano a Morgana", "Solo podrán participar personajes del Dpto se Seguridad Mágica, San Mungo o cercanos a la víctima"],
      "users": ["/u91", "/u78", "/u7", "/u55", "/u50", "/u8"],
      "dependency": [],
      "type": "misión", "closed": true, "link": "https://blackwave.foroactivo.com/t560-mision-wounds-from-the-past", "tagged": ["morgana"],

      "cards": [
        {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "puerta blanca",
          "cont": '<span>La puerta aparece varios metros por encima de todos los presentes y deberán utilizar hechizos que les permita llegar hasta la misma.</span>',
        },

        {
          "visible": { "attr": { "int": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "puerta azul",
          "cont": '<span>El río se encuentra rodeados de rocas, no hay una playa cercana, pero si un breve espacio de las rocas, que les permitirá subirse a ellas y evitar ser arrastrados por la corriente.</span>',
        },

        {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "puerta azul",
          "cont": '<span>La puerta se encuentra a debajo de donde aparecieron. Bastaría un simple hechizo que les permita respirar bajo el agua para poder llegar a la misma.</span>',
        },

        {
          "visible": { "attr": { "sab": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "puerta azul",
          "cont": '<span>¡Cuidado! Puedes verlo, la figura que protege la puerta, es un Kelpie. Por verlo primero, puedes atacar primero indiferente del resultado de los dados.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "historia de la magia": "5" }, "job": "invalid", "name": "invalid", }, "place": "puerta amarilla",
          "cont": '<span>Pocos conocen el lugar llamado Torrnamòr, la colina del gigante. Es un espacio protegido por el Ministerio de Magia, que oculta la aldea en uno de los puntos más al norte de Escocia.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "puerta amarilla",
          "cont": '<span>Los gigantes son inofensivos, no los atacarán a menos que ustedes lo hagan primero. Capaz convendría regresar por donde llegaron y dejar a los gigantes desarrollar su vida en armonía.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "san mungo", "name": "invalid", }, "place": "puerta roja",
          "cont": '<span>Todos los trabajadores de San Mungo que habían trabajado con Morgana por al menos un año, sabían que en algún momento, la misma prepararía un simulacro de evacuación. En el mismo siempre había varias puertas que, al abrirlas, representaban un elemento tierra, agua, fuego, aire, luz, energía, minerales o incluso naturaleza. Ninguna puerta llevaba a dónde correspondía hasta que se realice un hechizo que represente cada elemento. Una vez invocados todos los elementos se debía conjurar una melodía para que las puertas lleven al lugar deseado.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "puerta roja",
          "cont": '<span>Detrás de la parede de hielo se puede observar el hall en que antes estaban.</span>',
        },

        {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "investigación casa de morgana",
          "cont": '<span>Mientras que todo parece estar en su lugar, hay algo que parece evidente. La casa está helada. El frío que anuncia las próximas nevadas se cuela por todas las ventanas abiertas de la casa. Cada una de las ventanas deja pasar el viento de Noviembre. Haciendo que el ambiente sea bastante insostenible, pero nada que no se pueda soportar.</span>',
        },

        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "investigación casa de morgana",
          "cont": '<span>En la habitación de Morgana, una de las ventanas tiene siete cuervos en el alfeizar que han aprovechado las ventanas abiertas y la calma de una casa vacía para encontrar un espacio de tranquilidad.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "investigación casa de morgana",
          "cont": '<span>Todas las ventanas tienen la misma pintura azul como marco que parece haber sido pintado hace muchos años. Sin embargo, una de las ventanas parece tener señales cercanas de haber quebrado la pintura, mientras que las otras ventanas no. Podría deducirse que esa ventana no se ha abierto con frecuencia. Y el verano no había sido el más cálido de los últimos años.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "investigación casa de morgana",
          "cont": '<span>En una de las mesas cercanas al sillón, puede observarse la marca de años de colocar tazas en la misma. En ese sillón es que se la encontró fallecida. Hay un espacio debajo de la mesa para tener la varita a mano en caso de un accidente. Sin embargo, la mayor arma de Morgana, está faltante del lugar. </span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "investigación casa de morgana",
          "cont": '<span>En el polvo que se ha juntado en el suelo pueden observarse unas pequeñas huellas. Que pertenecen a una familia de Nifflers. Si se observan los cajones, se llevaron los cubiertos y también cualquier objeto metálico.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "videncia": "5" }, "job": "invalid", "name": "invalid", }, "place": "investigación casa de morgana",
          "cont": '<span>Tras revisar la habitación de Morgana, se pueden observar siete cuervos. Primero debe mencionarse esa tarjeta. En videncia, soñar con siete cuervos representa un secreto nunca dicho.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "san mungo", "name": "invalid", }, "place": "investigación casa de morgana",
          "cont": '<span>Morgana era conocida por siempre mantener los ambientes ventilados. Solía decir que, siendo los encargados de la salud mágica, no podían permitirse ser un foco de enfermedades. Por lo tanto, sin importar la época o el frío, solicitaba que haya una ventana abierta por ambiente. Hechizos para mantener el calor había muchos. También solía inspeccionar los lugares y abrir las ventanas sin pedir permiso. Principalmente en invierno, era cuando más intensa solía ponerse con ese tema. Para ustedes, no es una sorpresa que todas las ventanas de la casa estén abiertas. Pues si tenían que morirse de frío en el trabajo para mantener las ventanas abiertas del hospital, tenían que hacerlo.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "investigación pared",
          "cont": '<span>Las marcas de hombre lobo parecen ser de un hombre lobo joven. Alguien que no había llegado a la mayoría de edad.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad mágica", "name": "invalid", }, "place": "investigación pared",
          "cont": '<span>En el suelo cerca a las cadenas, hay marcas de una silla. Sea lo que sea que haya estado allí. Alguien no demasiado pesado, solía quedarse allí toda la noche. Las marcas son espacio, los cuatro puntos de la silla, la cantidad de veces que empujaron la silla hacia atrás alejándose de algo que podía llegar a dañarlo. Las marcas son abruptas, tomadas por sorpresa.</span>',
        },

        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "investigación escritorio",
          "cont": '<span>En el escritorio hay un libro, tiene varios años en las manos de Morgana y todo ha sido escrito por ella. Hay experimentos, investigaciones, notas, algunos pergaminos nuevos se colaban entre las hojas viejas con nuevos descubrimientos. Se recomienda investigar por separado, no es algo que vayan a poder deducir ni con varias horas leyendo el mismo.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "10" }, "job": "invalid", "name": "invalid", }, "place": "investigación escritorio",
          "cont": '<span>Las pociones no son reconocidas fácilmente, y por los comentarios en el libro podía llegar a deducirse que aquellos frascos tienen pociones elaboradas y creadas por Morgana Dempsey.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "intervención kelpie",
          "cont": '<span>La forma de vencer a un kelpie es pasarle una brida por la cabeza con un encantamiento de colocación, con lo que se vuelven dóciles y mansos (Capistrum).</span>',
        },
      ],

      "searchs": {
        "puerta blanca": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Cuando la puerta blanca se abre, el ambiente parece cubrirse de una neblina blanca, que poco a poco va consumiendo las paredes y el suelo, hasta que el mismo ambiente desaparece completamente, revelando la visión de la cima de una montaña. La gravedad tarda un momento en hacer efecto y provocar que todos comiencen a caer. Si nadie realiza un hechizo para ralentizar la caída, todos deberán tirar un dado de salud para determinar los puntos de vida perdidos.</span>',
        },

        "realizar aparición": {
          "visible": { "attr": { "val": "min" }, "know": { "encantamientos": "10" }, "job": "invalid", "name": "invalid", }, "place": "puerta blanca",
          "cont": '<span>Permite al personaje aparecerse en el hall que se encuentra detrás de la puerta. Solo deberá concentrarse en la puerta para aparecer al borde de la misma y poder ingresar, regresando al lugar de origen.</span>',
        },

        "puerta azul": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Al abrir la puerta azul, el hall comienza a llenarse de agua en forma de olas, que rápidamente llenan el espacio dejando a los personajes contra el techo. Sin embargo, antes de que el agua los consuma, el techo parece convertirse en un cielo y se descubren en un río.</span>',
        },

        "derrotar al kelpie": {
          "visible": { "attr": { "int": "11" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La puerta se eleva habilitando a los integrantes a regresar al hall de entrada de Morgana.</span>',
        },

        "puerta roja": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Al ingresar por la puerta roja, las paredes se congelan enseguida. Lo que antes era un hall se ha convertido en una cueva que parece estar sumergida en el medio del glaciar. El vaho comienza a salir con cada respiración de los integrantes y sus temperaturas comienzan a bajar rápidamente. Por cada vez que participen hasta resolver, pierden 20 PV. La pared de hielo tiene 180 PV.</span>',
        },

        "puerta amarilla": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Al ingresar por la puerta amarilla, los participantes son trasladados al norte de Escocia. A un espacio poco conocido, pero donde unos gigantes se encuentran viviendo sus vidas de manera relajada. La puerta se encuentra cruzando un campo donde los Gigantes se mueven aún sin notar que alguien se ha infiltrado en su campamento. Para salir deberán utilizar la habilidad "Tacite" (contrabando).</span>',
        },

        "investigación casa de morgana": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "puertas resueltas",
          "cont": '<span>La casa de Morgana es bastante sencilla. Posee una sala principal que da a una cocina compartida. Varias plantas solían decorar el lugar, actualmente, solo se encuentran amarillas y marchitas debido a los pocos cuidados recibidos tras el fallecimiento de su dueña. Unas escaleras conducen al piso superior donde hay un estudio y una habitación. Toda la casa parece impecable, salvo por la pequeña capa de polvo acumulado con el paso de los días desde la última limpieza realizada.</span>',
        },

        "investigación pasadizo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "resuelve pasadizo",
          "cont": '<span>Después de un breve pasillo muy estrecho, y unas escaleras que conducen al sótano. Las paredes y el suelo de piedra abren un espacio amplio, donde solo hay un escritorio y una silla. Allí abajo, a pesar de no haber ventanas, es el más frío de todos los ambientes.</span>',
        },

        "investigación pared": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "investigación pasadizo",
          "cont": '<span>En una de las paredes se puede observar cadenas amuradas a la pared y reforzadas con magia. Es evidente que allí habían mantenido atado a un licántropo. Hay cajas a un costado de la pared que tiene cadenas guardadas. Hace años que ese espacio no se usa.</span>',
        },

        "investigación escritorio": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "investigación pasadizo",
          "cont": '<span>Sobre el escritorio hay varias pociones, sin embargo, dos de ellas, son difíciles de distinguir. Se encuentran en frascos estándares, sin descripción alguna. En el centro se puede observar un cuaderno, bastante grueso y lleno de notas.</span>',
        },
      },

      "actions": {
        "ascendio": {
          "leve": '<span>Permite al personaje elevarse un buen tramo, sin embargo, no es suficiente para poder llegar a la puerta. La caida le provoca una disminución de 20PV.</span>',
          "moderado": '<span>Permite al personaje elevarse lo suficiente para poder llevar con las manos al marco que contiene la puerta. Sin embargo, solo podrá subir, si el personaje tiene +5 de fuerza, caso contrario, vuelve al suelo, perdiendo 10PV.</span>',
          "exitoso": '<span>El personaje logra aterrizar con una caída en el suelo de la puerta, que vuelve a ser el hall.</span>',
          "critico": '<span>El personaje logra caer de pie en el interior de la puerta, que vuelve a ser el hall.</span>',
        },

        "bulla galea": {
          "leve": '<span>Antes de poder terminar de conjurar el hechizo, un Kelpie ataca a su conjurador. Provocando un daño de 15 PV. Se deberá enfrentar el NPC respetando la información narrativa del mismo. Avisar a la administración cuando logren derrotarlo para habilitar una nueva tarjeta.</span>',
          "moderado": '<span>Antes de poder terminar de conjurar el hechizo, un Kelpie ataca a su conjurador. Una pequeña reacción permite amortiguar el daño, recibiendo solo 5 PV de daño. Se deberá enfrentar el NPC respetando la información narrativa del mismo. Avisar a la administración cuando logren derrotarlo para habilitar una nueva tarjeta.</span>',
          "exitoso": '<span>Puede terminar de conjurar el hechizo, sin embargo, el Kelpie se hace presente evitando su avance. Se deberá enfrentar el NPC respetando la información narrativa del mismo. Avisar a la administración cuando logren derrotarlo para habilitar una nueva tarjeta.</span>',
          "critico": '<span>Puede terminar de conjurar el hechizo, sin embargo, el Kelpie se hace presente evitando su avance. Se deberá enfrentar el NPC respetando la información narrativa del mismo. Avisar a la administración cuando logren derrotarlo para habilitar una nueva tarjeta.</span>',
        },

        "lacarnum inflamarae": {
          "leve": '<span>Se reducen 10 PV de la pared de hielo.</span>',
          "moderado": '<span>Se reducen 15 PV de la pared de hielo.</span>',
          "exitoso": '<span>Se reducen 20 PV de la pared de hielo.</span>',
          "critico": '<span>Se reducen 25 PV de la pared de hielo.</span>',
        },

        "pestis incendium": {
          "leve": '<span>Se reducen 15 PV de la pared de hielo.</span>',
          "moderado": '<span>Se reducen 20 PV de la pared de hielo.</span>',
          "exitoso": '<span>Se reducen 25 PV de la pared de hielo.</span>',
          "critico": '<span>Se reducen 30 PV de la pared de hielo.</span>',
        },

        "vocare kanu": {
          "leve": '<span>Se reducen 25 PV de la pared de hielo.</span>',
          "moderado": '<span>Se reducen 30 PV de la pared de hielo.</span>',
          "exitoso": '<span>Se reducen 35 PV de la pared de hielo.</span>',
          "critico": '<span>Se reducen 40 PV de la pared de hielo.</span>',
        },

        "vocare sowuli": {
          "leve": '<span>Se reducen 25 PV de la pared de hielo.</span>',
          "moderado": '<span>Se reducen 30 PV de la pared de hielo.</span>',
          "exitoso": '<span>Se reducen 35 PV de la pared de hielo.</span>',
          "critico": '<span>Se reducen 40 PV de la pared de hielo.</span>',
        },

        "calidus flammus": {
          "leve": '<span>Se reducen 15 PV de la pared de hielo.</span>',
          "moderado": '<span>Se reducen 20 PV de la pared de hielo.</span>',
          "exitoso": '<span>Se reducen 25 PV de la pared de hielo.</span>',
          "critico": '<span>Se reducen 30 PV de la pared de hielo.</span>',
        },

        "incendio": {
          "leve": '<span>Se reducen 10 PV de la pared de hielo.</span>',
          "moderado": '<span>Se reducen 15 PV de la pared de hielo.</span>',
          "exitoso": '<span>Se reducen 20 PV de la pared de hielo.</span>',
          "critico": '<span>Se reducen 25 PV de la pared de hielo.</span>',
        },

        "lumos solem": {
          "leve": '<span>Se reducen 10 PV de la pared de hielo.</span>',
          "moderado": '<span>Se reducen 15 PV de la pared de hielo.</span>',
          "exitoso": '<span>Se reducen 20 PV de la pared de hielo.</span>',
          "critico": '<span>Se reducen 25 PV de la pared de hielo.</span>',
        },

        "continentia bulla": {
          "leve": '<span>Puerta Blanca resuelta. Válido solo si se encuentran en el hall.</span>',
          "moderado": '<span>Puerta Blanca resuelta. Válido solo si se encuentran en el hall.</span>',
          "exitoso": '<span>Puerta Blanca resuelta. Válido solo si se encuentran en el hall.</span>',
          "critico": '<span>Puerta Blanca resuelta. Válido solo si se encuentran en el hall.</span>',
        },

        "ventus": {
          "leve": '<span>Puerta Blanca resuelta. Válido solo si se encuentran en el hall.</span>',
          "moderado": '<span>Puerta Blanca resuelta. Válido solo si se encuentran en el hall.</span>',
          "exitoso": '<span>Puerta Blanca resuelta. Válido solo si se encuentran en el hall.</span>',
          "critico": '<span>Puerta Blanca resuelta. Válido solo si se encuentran en el hall.</span>',
        },

        "aguamenti": {
          "leve": '<span>Puerta Azul resuelta. Válido solo si se encuentran en el hall.</span>',
          "moderado": '<span>Puerta Azul resuelta. Válido solo si se encuentran en el hall.</span>',
          "exitoso": '<span>Puerta Azul resuelta. Válido solo si se encuentran en el hall.</span>',
          "critico": '<span>Puerta Azul resuelta. Válido solo si se encuentran en el hall.</span>',
        },

        "aqua eructo": {
          "leve": '<span>Puerta Azul resuelta. Válido solo si se encuentran en el hall.</span>',
          "moderado": '<span>Puerta Azul resuelta. Válido solo si se encuentran en el hall.</span>',
          "exitoso": '<span>Puerta Azul resuelta. Válido solo si se encuentran en el hall.</span>',
          "critico": '<span>Puerta Azul resuelta. Válido solo si se encuentran en el hall.</span>',
        },

        "glacius": {
          "leve": '<span>Puerta Roja resuelta. Válido solo si se encuentran en el hall.</span>',
          "moderado": '<span>Puerta Roja resuelta. Válido solo si se encuentran en el hall.</span>',
          "exitoso": '<span>Puerta Roja resuelta. Válido solo si se encuentran en el hall.</span>',
          "critico": '<span>Puerta Roja resuelta. Válido solo si se encuentran en el hall.</span>',
        },

        "capistrum": {
          "leve": '<span>El hechizo no es suficiente para detener al Kelpie.</span>',
          "moderado": '<span>El hechizo logra controlar al Kelpie, quien tras un rato de forcejeo, regresa al agua para empujar la puerta hacia quienes lograron controlarlo.</span>',
          "exitoso": '<span>El hechizo logra controlar al Kelpie, quien tras un rato de forcejeo, regresa al agua para empujar la puerta hacia quienes lograron controlarlo.</span>',
          "critico": '<span>El hechizo logra controlar al Kelpie, quien tras un rato de forcejeo, regresa al agua para empujar la puerta hacia quienes lograron controlarlo.</span>',
        },

        "immobulus glacius": {
          "leve": '<span>Puerta Roja resuelta. Válido solo si se encuentran en el hall.</span>',
          "moderado": '<span>Puerta Roja resuelta. Válido solo si se encuentran en el hall.</span>',
          "exitoso": '<span>Puerta Roja resuelta. Válido solo si se encuentran en el hall.</span>',
          "critico": '<span>Puerta Roja resuelta. Válido solo si se encuentran en el hall.</span>',
        },

        "accio": {
          "leve": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Permite mover tierra del exterior adentro del hall.</span>',
          "moderado": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Permite mover tierra del exterior adentro del hall.</span>',
          "exitoso": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Permite mover tierra del exterior adentro del hall.</span>',
          "critico": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Permite mover tierra del exterior adentro del hall.</span>',
        },

        "duro": {
          "leve": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Convierte la puerta en piedra resolviendo la misma.</span>',
          "moderado": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Convierte la puerta en piedra resolviendo la misma.</span>',
          "exitoso": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Convierte la puerta en piedra resolviendo la misma.</span>',
          "critico": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Convierte la puerta en piedra resolviendo la misma.</span>',
        },

        "deprimo": {
          "leve": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Permite reducir la altura de la puerta para que toque la tierra.</span>',
          "moderado": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Permite reducir la altura de la puerta para que toque la tierra.</span>',
          "exitoso": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Permite reducir la altura de la puerta para que toque la tierra.</span>',
          "critico": '<span>Puerta Amarilla resuelta. Válido solo si se encuentran en el hall. Permite reducir la altura de la puerta para que toque la tierra.</span>',
        },

        "tacite": {
          "leve": '<span>Un pequeño paso en falso ha llamado la atención de uno de los gigantes que se encontraba cerca. El mismo cuenta con 50 PV, 15 de Fue y 15 de Con. Si sus puntos de vida llegan a cero, significa que han logrado distraerlo.</span>',
          "moderado": '<span>El personaje logra avanzar sin ser descubierto.</span>',
          "exitoso": '<span>El personaje logra avanzar sin ser descubierto.</span>',
          "critico": '<span>El personaje logra avanzar con tanta cautela, que puede librar a un personaje aliado si ha obtenido un resultado "Leve".</span>',
        },

        "concentus incantatus": {
          "leve": '<span></span>',
          "moderado": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
          "exitoso": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
          "critico": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
        },

        "instrumentarius arcanus": {
          "leve": '<span></span>',
          "moderado": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
          "exitoso": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
          "critico": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
        },

        "melodia solaminis": {
          "leve": '<span></span>',
          "moderado": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Las puertas se mueven abriendo paso a una nueva, el color de la madera es natural y el felpudo de entrada cita "bastaba un alohomora". La puerta se abre sin necesidad de pronunciar hechizos.</span><adding search="puertas resueltas" class="check-cards"></adding>',
          "exitoso": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Las puertas se mueven abriendo paso a una nueva, el color de la madera es natural y el felpudo de entrada cita "bastaba un alohomora". La puerta se abre sin necesidad de pronunciar hechizos.</span><adding search="puertas resueltas" class="check-cards"></adding>',
          "critico": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Las puertas se mueven abriendo paso a una nueva, el color de la madera es natural y el felpudo de entrada cita "bastaba un alohomora". La puerta se abre sin necesidad de pronunciar hechizos.</span><adding search="puertas resueltas" class="check-cards"></adding>',
        },

        "alohomora": {
          "leve": '<span></span>',
          "moderado": '<span>Las puertas se mueven abriendo paso a una nueva, el color de la madera es natural y el felpudo de entrada cita "bastaba un alohomora". La puerta se abre sin necesidad de pronunciar hechizos.</span><adding search="puertas resueltas" class="check-cards"></adding>',
          "exitoso": '<span>Las puertas se mueven abriendo paso a una nueva, el color de la madera es natural y el felpudo de entrada cita "bastaba un alohomora". La puerta se abre sin necesidad de pronunciar hechizos.</span><adding search="puertas resueltas" class="check-cards"></adding>',
          "critico": '<span>Las puertas se mueven abriendo paso a una nueva, el color de la madera es natural y el felpudo de entrada cita "bastaba un alohomora". La puerta se abre sin necesidad de pronunciar hechizos.</span><adding search="puertas resueltas" class="check-cards"></adding>',
        },

        "versus fascinans": {
          "leve": '<span></span>',
          "moderado": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
          "exitoso": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
          "critico": '<span>Si todas las puertas fueron resueltas. Las mismas se unen permitiendo ingresar a la casa. Solicitar tarjeta al staff.</span>',
        },

        "dissendium": {
          "leve": '<span>En una de las columnas, hay un vidrió de un metro por dos metros. Al conjurar el hechizo, se abre dejando a la vista un pasillo largo y estrecho.<br /><adding search="resuelve pasadizo" class="check-cards"></adding></span>',
          "moderado": '<span>En una de las columnas, hay un vidrió de un metro por dos metros. Al conjurar el hechizo, se abre dejando a la vista un pasillo largo y estrecho.<br /><adding search="resuelve pasadizo" class="check-cards"></adding></span>',
          "exitoso": '<span>En una de las columnas, hay un vidrió de un metro por dos metros. Al conjurar el hechizo, se abre dejando a la vista un pasillo largo y estrecho.<br /><adding search="resuelve pasadizo" class="check-cards"></adding></span>',
          "critico": '<span>En una de las columnas, hay un vidrió de un metro por dos metros. Al conjurar el hechizo, se abre dejando a la vista un pasillo largo y estrecho.<br /><adding search="resuelve pasadizo" class="check-cards"></adding></span>',
        },

        "homenum revelio": {
          "leve": '<span>No hay otros humanos presentes en la casa.</span>',
          "moderado": '<span>No hay otros humanos presentes en la casa.</span>',
          "exitoso": '<span>No hay otros humanos presentes en la casa.</span>',
          "critico": '<span>No hay otros humanos presentes en la casa.</span>',
        },

        "aparecium": {
          "leve": '<span>En la mesa al lado del sillón donde Morgana fue encontrada, hay un mensaje que indica lo siguiente "Limpien la casa". Parece que lleva años allí.</span>',
          "moderado": '<span>En la mesa al lado del sillón donde Morgana fue encontrada, hay un mensaje que indica lo siguiente "Limpien la casa". Parece que lleva años allí.</span>',
          "exitoso": '<span>En la mesa al lado del sillón donde Morgana fue encontrada, hay un mensaje que indica lo siguiente "Limpien la casa". Parece que lleva años allí.</span>',
          "critico": '<span>En la mesa al lado del sillón donde Morgana fue encontrada, hay un mensaje que indica lo siguiente "Limpien la casa". Parece que lleva años allí.</span>',
        },

        "specialis revelio": {
          "leve": '<span>Revela el siguiente hechizo utilizado en toda la casa "Tergeo".</span>',
          "moderado": '<span>Revela el siguiente hechizo utilizado en toda la casa "Tergeo".</span>',
          "exitoso": '<span>Revela el siguiente hechizo utilizado en toda la casa "Tergeo".</span>',
          "critico": '<span>Revela el siguiente hechizo utilizado en toda la casa "Tergeo".</span>',
        },

        "sensus mitigo": {
          "leve": '<span></span>',
          "moderado": '<span>Permite calmar al Kelpie, dejando que este los deje pasar.</span>',
          "exitoso": '<span>Permite calmar al Kelpie, dejando que este los deje pasar.</span>',
          "critico": '<span>Permite calmar al Kelpie, dejando que este los deje pasar.</span>',
        },

        "murmura futuri": {
          "leve": '<span>El vidente podrá elegir a quienes pertenecen las voces siempre que sean de los compañeros del tema, «No corran hacia la orilla, la marea los arrastrará», «Para sobrevivir, alguien debe perderse» y «Aún no lo has visto todo».</span>',
          "moderado": '<span>El vidente podrá elegir a quienes pertenecen las voces siempre que sean de los compañeros del tema, «No corran hacia la orilla, la marea los arrastrará», «Para sobrevivir, alguien debe perderse» y «Aún no lo has visto todo».</span>',
          "exitoso": '<span>El vidente podrá elegir a quienes pertenecen las voces siempre que sean de los compañeros del tema, «No corran hacia la orilla, la marea los arrastrará», «Para sobrevivir, alguien debe perderse» y «Aún no lo has visto todo».</span>',
          "critico": '<span>El vidente podrá elegir a quienes pertenecen las voces siempre que sean de los compañeros del tema, «No corran hacia la orilla, la marea los arrastrará», «Para sobrevivir, alguien debe perderse» y «Aún no lo has visto todo».</span>',
        },

        "scintillat": {
          "leve": '<span>El agua comienza a adentrarse por las ventanas. Primero transparente hasta que va tomando colores más y más oscuros hasta volverse negros. El agua comienza a cubrir el suelo y luego los pies. Cuando se gira, los cuervos están sobre los cuerpos de sus compañeros picoteando sus corazones. Todos están muertos, salvo uno (puede elegir quién es) «Tienes que advertirnos».</span>',
          "moderado": '<span>El agua comienza a adentrarse por las ventanas. Primero transparente hasta que va tomando colores más y más oscuros hasta volverse negros. El agua comienza a cubrir el suelo y luego los pies. Cuando se gira, los cuervos están sobre los cuerpos de sus compañeros picoteando sus corazones. Todos están muertos, salvo uno (puede elegir quién es) «Tienes que advertirnos».</span>',
          "exitoso": '<span>El agua comienza a adentrarse por las ventanas. Primero transparente hasta que va tomando colores más y más oscuros hasta volverse negros. El agua comienza a cubrir el suelo y luego los pies. Cuando se gira, los cuervos están sobre los cuerpos de sus compañeros picoteando sus corazones. Todos están muertos, salvo uno (puede elegir quién es) «Tienes que advertirnos».</span>',
          "critico": '<span>El agua comienza a adentrarse por las ventanas. Primero transparente hasta que va tomando colores más y más oscuros hasta volverse negros. El agua comienza a cubrir el suelo y luego los pies. Cuando se gira, los cuervos están sobre los cuerpos de sus compañeros picoteando sus corazones. Todos están muertos, salvo uno (puede elegir quién es) «Tienes que advertirnos».</span>',
        },

        "veniens empathy": {
          "leve": '<span>El vidente podrá sentir cierta tensión al rededor de la mesa, como si alguien hubiera tenido una discusión en ese lugar. El aire esta agitado, inquieto, se siente la desesperación y también, como un suspiro, como las partes se rinden.</span>',
          "moderado": '<span>El vidente podrá sentir cierta tensión al rededor de la mesa, como si alguien hubiera tenido una discusión en ese lugar. El aire esta agitado, inquieto, se siente la desesperación y también, como un suspiro, como las partes se rinden.</span>',
          "exitoso": '<span>El vidente podrá sentir cierta tensión al rededor de la mesa, como si alguien hubiera tenido una discusión en ese lugar. El aire esta agitado, inquieto, se siente la desesperación y también, como un suspiro, como las partes se rinden.</span>',
          "critico": '<span>El vidente podrá sentir cierta tensión al rededor de la mesa, como si alguien hubiera tenido una discusión en ese lugar. El aire esta agitado, inquieto, se siente la desesperación y también, como un suspiro, como las partes se rinden.</span>',
        },
      },

      "creatures": {
        "gigante": {
          "atributos": ["+15 fue", "+15 con"],
          "clasificación": "ser / personaje no jugable",
          "descripción": "personaje no jugable",
          "imagen": "https://placehold.co/150x250",
          "peligrosidad": "mortal",
          "pv": "50",
          "rareza": "poco común",
          "repele": ["atabraquium", "balbutio", "draconifors", "dracospira", "desmaius", "duro", "ebublio", "fulgari", "incarcifors", "incarcerous", "mimble wimble", "mobilicorpus", "patolifors", "petrificus totalus", "saggitarus", "quietus", "rictusempra", "simifors", "vesicantis", "vitafigura", "expelliarmus"],
          "ataques": {
            "leve": 'Utiliza un tronco o una importante rama de un árbol para aplastar. Adiciona +5 de daño.',
            "moderado": 'Agarra fragmentos de tierra o piedra y los lanza contra sus oponentes. Adiciona +8 de daño.',
            "exitoso": 'Golpea el suelo con violencia buscando derribar al oponente. Adiciona +12 en Ataque y resta 10 PV a todos los rivales.',
            "critico": 'Carga directamente contra el objetivo. Adiciona +15 en Ataque.',
          },

          "defensas": {
            "leve": 'Resistencia natural ante los hechizos. Adiciona +2 en Defensa.',
            "moderado": 'Usa un garrote o trozo de árbol para interceptar la magia. Adiciona +5 en Defensa.',
            "exitoso": 'Busca esconderse detrás de una colina o árbol para evitar el ataque. Adiciona +7 en Defensa.',
            "critico": 'Recibe todo el ataque, pero al estar herido atrae a un gigante amigo con los mismos stats que él (Adiciona NPC).',
          },
        },

        "kelpie": {
          "repele": ["aqua eructo", "atabraquium", "balbutio", "baubillious", "cadere", "desmaius", "draconifors", "dracospira", "expelliarmus", "fulgari", "incarcifors", "incarcerous", "levare", "melofors", "mimble wimble", "mobilicorpus", "patolifors", "quietus", "petrificus totalus", "simifors", "saggitarus", "ventus", "vesicantis", "vitafigura"],
        },
      },
    },
    // fin 

    "botanical market": {
      "description": "Tras desentrañar el contenido de las tazas de té de las víctimas. Una nueva incógnita se escribe, ¿con qué planta contaminaron el té?, y ¿cuáles eran sus efectos? El objetivo de esta investigación es avanzar un paso más, cuál era esa planta y tal vez, revelar una nueva pista que los lleve a resolver el misterio.",
      "image": "https://2img.net/i.imgur.com/CzU2l87.png", "requisitos": ["Un integrante tiene que tener Herbología en Avanzado"],
      "users": ["/u18", "/u108", "/u97"],
      "dependency": ["death in a teacup"],
      "type": "investigación", "closed": true, "link": "/t522-investigacion-botanical-market", "tagged": ["morgana"],

      "cards": [],
      "actions": {},

      "searchs": {
        "leer 'mil hierbas mágicas y hongos'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping">La seta Sombraluna, nombre común para la Mycena lunaris obscura, es una seta pequeña de sombrero translúcido que brilla tenuemente bajo la luz de la luna. Al tacto, deja un polvillo dorado que puede provocar somnolencia o breves episodios de ensoñación lúcida. El sombrero, que gira levemente sobre su tallo cuando está maduro, se inclina hacia las fuentes de magia activa.<br><br>Florece en bosques antiguos y húmedos, especialmente en zonas con historia de duelo mágico o muerte reciente. Al ser ingerida en microdosis, se emplea en pociones para inducir sueños proféticos o comunicar con el plano astral.</span></span>',
        },
        "leer 'gran herbario de plantas y árboles'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping">La Salvia Ignicor, comúnmente conocida como Corazón de Fuego, es una planta ígnea de hoja en forma de corazón, con un color ámbar brillante que parece arder al contacto con la luz. Su savia es una resina espesa de efectos estimulantes, inflamables y, en altas concentraciones, alucinógenos. Al partir su tallo, se revela un interior rojo vivo que recuerda a brasas recién encendidas.<br><br>Utilizada en la elaboración del whiskey de fuego, también es estudiada por sus propiedades vigorizantes en pociones energéticas. Su cultivo está altamente regulado debido a su potencial inestable. Crece en tierras volcánicas y debe manipularse con precaución, usando todas las protecciones mágicas posibles.</span></span>',
        },
        "leer 'fábulas de plantas prohíbidas'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping">La Ferociflora Tenebris, comúnmente conocida como la Garra de Viuda, es una hierba rastrera de hojas filosas y anaranjadas como el topacio, con espinas retráctiles cargadas de toxinas paralizantes. Su floración es rara: produce una única flor violeta al año, la cual atrae insectos mágicos con su aroma dulzón y venenoso.<br><br>Antes era muy usada en pociones de defensa y paralización, su extracto de raíz puede neutralizar encantamientos de movimiento. Crece en lugares sombríos, preferentemente cerca de cementerios o ruinas embrujadas. Los herbólogos expertos la “alimentan” con restos de criaturas mágicas para mantenerla activa. Fue prohibida en el siglo XII, pocos libro aún guardan su fotografía. Aunque recientemente, la han tratado de generar mediante magia, sus efectos no fueron positivos.</span></span>',
        },
        "leer 'herbología y fuegos antiguos'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'gran herbario de plantas y árboles'",
          "cont": '<span><span class="book-clipping">La planta Corazón de Fuego crece de forma natural en zonas montañosas con actividad volcánica, donde la tierra conserva propiedades térmicas y mágicas latentes. Se encuentra principalmente en los valles escondidos de la zona de los Alpes, algunos afirman haberla visto en las laderas del Etna o en ciertas zonas inexploradas de Escocia.<br><br>Sus plantaciones requieren una gran cantidad de tierra y agua volcánica natural. Debe sembrarse en el solsticio de verano y cuando la tierra alcanza su mayor carga de calor solar. Germina lentamente, pero florece en otoño, cuando el equilibrio entre el fuego y la tierra es el más propicio. Una vez pasado ese tiempo, la tierra queda inutilizada. Debe cosecharse con guantes protectores de calor, debido a que su floración genera quemaduras en la piel expuesta.</span></span>',
        },
        "leer 'brebajes destilados y pociones ardientes'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'gran herbario de plantas y árboles'",
          "cont": '<span><span class="book-clipping">El líquido resinoso que emana la Salvia Ignicor, tiene propiedades altamente inflamables y reactivas al calor durante sus primeras dos semanas. Pasado ese tiempo, es inofensiva, debido a que su resina pierde todas las propiedades mágicas. No obstante, utilizar la resina cuando aún conserva sus propiedades permite que sea utilizada como ingrediente base en la destilación del Whiskey de Fuego, aportando su icónico ardor interno.<br><br>También se la ha utilizado como componente en pociones que buscan estimular la vitalidad o despertar la magia adormecida en magos mayores.<br><br>Nota importante: Su uso en exceso puede causar fiebre, alucinaciones o quemaduras internas.</span></span>',
        },
        "leer 'tratado sobre plantas de naturaleza ígnea'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'gran herbario de plantas y árboles'",
          "cont": '<span><span class="book-clipping">Los cuidados que requiere la Corazón de Fuego son, sin duda, uno de los más delicados en lo que se trata a cuidado de plantas. Requiere suelo volcánico rico en minerales y riego con aguas termales naturales, idealmente, que no haya poseído más de cinco días de reposo. <br><br>Debe mantenerse alejada de corrientes de aire frío o ambientes húmedos, que apagan su fulgor y detienen su crecimiento. La Corazón de Fuego es una planta muy propensa a congelarse ante temperaturas ligeramente bajas, y una vez que se hiela no es posible recuperar su floración. <br><br>Agradece la presencia de cristales de cuarzo rojo cerca de sus raíces, que canalizan la energía mágica.<br><br>Las hojas solo pueden tocarse con guantes y protecciones de calor necesarias, debido a que la savia puede provocar ardor o llamaradas menores si entra en contacto con la piel humana.<br><br>En su época de floración, debe tratarse con máscaras de protección, debido a que su aroma puede producir fuertes alucinaciones.</span></span>',
        },
        "leer noticia 'jóvenes magos reportan visiones tras experimentos con la corazón de fuego'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'gran herbario de plantas y árboles'",
          "cont": '<span><section class="bring-news" title="jóvenes magos reportan visiones tras experimentos con la corazón de fuego"></section></span>',
        },
        "leer noticia 'catorce empleados mueren en destilería tras brote alucinógeno'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'gran herbario de plantas y árboles'",
          "cont": '<span><section class="bring-news" title="catorce empleados mueren en destilería tras brote alucinógeno"></section></span>',
        },
        "leer noticia 'europa y asia imponen veto a la corazón de fuego'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'gran herbario de plantas y árboles'",
          "cont": '<span><section class="bring-news" title="europa y asia imponen veto a la corazón de fuego"></section></span>',
        },
        "leer noticia 'joven asegura ver thestrals devorando muggles y rompe el estatuto secreto de la magia'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'gran herbario de plantas y árboles'",
          "cont": '<span><section class="bring-news" title="joven asegura ver thestrals devorando muggles y rompe el estatuto secreto de la magia"></section></span>',
        },
      },
    },
    // fin botanical market

    "moth to a flame": {
      "description": "Una destileria es lo que todos parecen necesitar, y allí esta la vieja destileria Dempsey, al menos, lo que ha quedado de ella, luego de que el incendio acabara con ella. Existen rumores entre los vecinos que fue la misma Morgana quien inicio el fuego, asegurando que no hubiera ninguna víctima ¿Estarán allí las respuestas del whiskey?",
      "image": "https://2img.net/i.imgur.com/LKuQkxz.png", "requisitos": [],
      "users": ["/u130","/u8","/u145","/u97"],
      "dependency": ["botanical market", "promise in crimson"],
      "type": "misión", "closed": false, "link": "https://blackwave.foroactivo.com/t931-mision-moth-to-a-flame", "tagged": ["morgana"],

      "cards": [],
      "searchs": {
        "muelle de recepción": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Se trata de una plataforma elevada de madera podrida y piedra que da a la vía de un tren. Sobre la misma, se pueden observar unas letras metálicas corroidas y rotas que indican: "Dempsey Manufacturing". El techo de chapa galvanizada esta parcialmentet desprendido y golpea rítimicamente contra las vigas cuando sopla el viento.</span>',
        },
        "silo de granos": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "muelle de recepción",
          "cont": '<span>A un costado puede notarse un galpón, por las marcas en el suelo, era el depósito de granos. Es un espacio vertical de techos altísimos, con paredes revestidas de madera para evitar la humedad. Al haber retirado los elevadores de cangilones, quedan huecos rectangulares en el suelo y en el techo que, en algún momento, solían conectarlos. El espacio de chapa no tiene demasiadas características, allí guardaban los productos crudos, no necesitaban que cumpliera ninguna regulación.</span>',
        },
        "sala de molienda": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "muelle de recepción",
          "cont": '<span>En la sala domina un silencio sepulcral. El espacio parece demasiado vacío, hay restos de correas de cuero resecas y un panel de control de madera con interruptores de porcelana rotos. Los conductos de ventilación esán abiertos, dejando ver el cielo.</span>',
        },
        "pernos en el suelo": {
          "visible": { "attr": { "sab": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "sala de molienda",
          "cont": '<span>En el suelo pueden observar los huecos de pernos de anclaje que fueron cortados al ras. Indicando que donde ahora solo hay una habitación vacía, allí solían haber máquinas que trituraban el grano.</span>',
        },
        "tubos de granos": {
          "visible": { "attr": { "sab": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "sala de molienda",
          "cont": '<span>Los huecos en el techo no son más que tubos por los que procesaban el grano, transportando el mismo de una sala a la otra.</span>',
        },
      },
      "actions": {

        "murmura futuri": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'Puede escuchar el sonido del agua llenando el lugar. Las olas que chocan contra las paredes y el grito de un personaje del tema (a elección del vidente), que grita su nombre socorriendo un auxilio con la voz ahogada.',
          "exitoso": 'Puede escuchar el sonido del agua llenando el lugar. Las olas que chocan contra las paredes y el grito de un personaje del tema (a elección del vidente), que grita su nombre socorriendo un auxilio con la voz ahogada.',
          "critico": 'Puede escuchar el sonido del agua llenando el lugar. Las olas que chocan contra las paredes y el grito de un personaje del tema (a elección del vidente), que grita su nombre socorriendo un auxilio con la voz ahogada.',
        },

        "veniens empathy": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'El vidente puede percibir un hormigueo en las yemas de los dedos, la ansiedad que comienza a crecer.',
          "exitoso": 'El vidente puede percibir un hormigueo en las yemas de los dedos, la ansiedad que comienza a crecer.',
          "critico": 'El vidente puede percibir un hormigueo en las yemas de los dedos, la ansiedad que comienza a crecer.',
        },

        "revelio": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'Pueden notarse los restos de fosforos que han caído al suelo. La causa de que aquel lugar haya sido reducido a cimientos.',
          "exitoso": 'Pueden notarse los restos de fosforos que han caído al suelo. La causa de que aquel lugar haya sido reducido a cimientos.',
          "critico": 'Pueden notarse los restos de fosforos que han caído al suelo. La causa de que aquel lugar haya sido reducido a cimientos.',
        },
      },
    },
    // fin moth to a flame

    "the lone bellow": {
      "description": "Tras regresar a su hogar, Damien Ashford-Dempsey no solo encuentra que hace falta una limpieza en la misma, sino que descubre que una familia de nifflers han robado toda pieza metálica de la casa y ahora deberán realizar una cacería hasta llegar a la madriguera.",
      "image": "https://2img.net/i.imgur.com/u5EtFU0.png", "requisitos": ["Ser invitado por Damien o alguien más de la trama a la misión."],
      "users": ["c/u127", "/u119", "/u12", "/u63"],
      "dependency": [],
      "type": "misión", "closed": false, "link": "https://blackwave.foroactivo.com/t752-mision-the-lone-bellow", "tagged": [],

      "cards": [],

      "searchs": {
        "seguir las huellas de la ventana": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Las huellas que salen de la casa marcan la dirección de los nifflers hacia el sur.</span>',
        },
        "la moneda de cobre": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "seguir las huellas de la ventana",
          "cont": '<span>Un Niffler dejó caer un Knut al salir apresuradamente de la casa. El rastro lleva hacia un arbusto con frutos secos en el jardín.</span>',
        },
        "la tierra removida": {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "5" }, "job": "invalid", "name": "invalid", }, "place": "la moneda de cobre",
          "cont": '<span>En el arbusto se observa una zona de tierra recién removida y una gran cantidad de nueces abandonadas, algunas ya abiertas. Alguien (o algo) estaba buscando otra cosa. Una raíz parece haber sido removida y llevada al interior de un bosquecillo.</span>',
        },
        "el falso tesoro": {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "la tierra removida",
          "cont": '<span>Cerca de la base del árbol más viejo, el suelo está cubierto de trozos de papel de aluminio usados de forma reciente, brillando débilmente. El rastro de unos Nifflers se pierde en la gruesa capa de musgo.</span>',
        },
        "la fuente de agua": {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "el falso tesoro",
          "cont": '<span>El sonido de un pequeño arroyo, capta la atención. Unos Nifflers se detiene en el borde, donde se han limpiado. Se encuentra una Galeón falso de plata sucio y mojado junto a una piedra.</span>',
        },
        "el camino de la luz": {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "la fuente de agua",
          "cont": '<span>Se sabe que los Nifflers se sienten atraídos por las cosas brillantes, por lo tanto, cuando el bosquecillo se cierra en sombras, saben que lo que tienen que hacer es girar hacia la luz.</span>',
        },
        "el manto de hojas": {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "5" }, "job": "invalid", "name": "invalid", }, "place": "el camino de la luz",
          "cont": '<span>Un rastro de huellas húmedas termina donde el suelo se cubre de una gruesa capa de hojas secas. Alguien tuvo que haber escarbado muy rápido antes de que las hojas cayeran sobre el hueco.</span>',
        },
        "el tronco marcado": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "el manto de hojas",
          "cont": '<span>Un tronco caído tiene agujeros de insectos y escarabajos. Alrededor de uno de los agujeros, el rastro esparcido incluye virutas finas de oro mezcladas con la madera.</span>',
        },
        "el laberinto de zarzas": {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "2" }, "job": "invalid", "name": "invalid", }, "place": "el tronco marcado",
          "cont": '<span>La maleza está muy cerrada. Para avanzar se necesita cortar un camino, pero las huellas no lo hicieron. Hay un patrón de movimientos zigzagueantes y una pequeña campana de latón (desechada por falta de valor) atrapada en una zarza.</span>',
        },
        "el cúmulo de barro": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "el laberinto de zarzas",
          "cont": '<span>El túnel de la zarza desemboca en una pequeña zona pantanosa, pero el rastro de huellas conduce a una pequeña elevación de tierra seca en el centro. La elevación está rodeada de barro y hay un montículo de tierra fresca sobre ella.</span>',
        },
        "el lamento subterráneo": {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "0" }, "job": "invalid", "name": "invalid", }, "place": "el cúmulo de barro",
          "cont": '<span>Justo cuando parece que no hay más huellas que seguir, se escucha un chillido agudo y lastimero proveniente de lo profundo de un montículo de tierra. No es el tintineo de monedas, sino la criatura quejándose de dolor.</span>',
        },
        "el niffler herido": {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "0" }, "job": "invalid", "name": "invalid", }, "place": "el cúmulo de barro",
          "cont": '<span>Cuando encuentran la madriguera seguidos por el lamento, pueden encontrar a un Niffler de pelaje marrón herido. Su pelaje está manchado de barro y sangre, y se tiembla en su lugar. Para continuar deberán curarlo.</span>',
        },
      },

      "actions": {
        "pellis sana": {
          "leve": 'Logra curar las heridas del Niffler, pero este sigue asustado y no colabora mucho.',
          "moderado": 'Logra curar las heridas del Niffler, pero este sigue asustado y no colabora mucho.',
          "exitoso": 'Logra curar las heridas del Niffler, pero este sigue asustado y no colabora mucho.',
          "critico": 'Logra curar las heridas del Niffler, pero este sigue asustado y no colabora mucho.',
        },
        "sensus mitigo": {
          "leve": 'Logra tranquilizar al Niffler lo suficiente para que colabore.<adding search="el niffler herido" class="check-cards"></adding>',
          "moderado": 'Logra tranquilizar al Niffler lo suficiente para que colabore.<adding search="el niffler herido" class="check-cards"></adding>',
          "exitoso": 'Logra tranquilizar al Niffler lo suficiente para que colabore.<adding search="el niffler herido" class="check-cards"></adding>',
          "critico": 'Logra tranquilizar al Niffler lo suficiente para que colabore.<adding search="el niffler herido" class="check-cards"></adding>',
        },
      },
    },
    // fin the lone bellow

    "gilded herb": {
      "description": "Una expedición a las bodegas Dempsey, buscan desentrañar qué poseían las bebidas de las víctimas. Irrumpir en el lugar solo buscará respuestas que pueden convertirse en nuevas preguntas.",
      "image": "https://2img.net/i.imgur.com/CzU2l87.png", "requisitos": ["Un integrante tiene que tener Herbología en Avanzado"],
      "users": [],
      "dependency": ["moth to a flame", "potions for all the afflictions"], "tagged": ["morgana"],
      "type": "misión", "closed": false, "link": "",

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin gilded herb

    "the hallucination mill": {
      "description": "Con el fin de poder responder todas las dudas sobre las bebidas. Se deberá hacer un interrogatorio al actual administrador de 'Bodegas Dempsey'. Este tema contará con la participación de la administración como el administrador, si es que al momento de llegar la misión no existe ningún familiar Dempsey.",
      "image": "https://2img.net/i.imgur.com/9mnS7Op.png", "requisitos": ["un miembro del departamento del Seguridad Mágica"],
      "users": [],
      "dependency": ["gilded herb"],
      "type": "interrogatorio", "closed": false, "link": "", "tagged": ["morgana"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the hallucination mill

    "the murmur of the old guard": {
      "description": "Cuando la situación del mundo actual no podría ser más incierta, un nuevo ataque se produce en uno de los lugares más seguros del mundo mágico. Hogwarts parece tener filtraciones y eso podría poner en riesgo la continuidad de su actual director.",
      "image": "https://2img.net/i.imgur.com/YQ3QDyq.png", "requisitos": ["un miembro del departamento del Seguridad Mágica", "un miembro del personal o profesorado de hogwarts","Solo se aceptarán 2 estudiantes como máximo"],
      "users": ["/u50","/u24","/u110","/u108","/u141"],
      "dependency": [],
      "type": "misión", "closed": false, "link": "https://blackwave.foroactivo.com/t932-mision-the-murmur-of-the-old-guard", "tagged": ["wave"],

      
      "creatures": {
        "sombra aidan": {
          "atributos": ["+6 fue", "+6 con"],
          "clasificación": "ser / personaje no jugable",
          "descripción": "personaje no jugable",
          "ataques": {
            "leve": 'Ataca con hechizo: "Colloshoo". El objetivo queda pegado al suelo hasta que se le libere mágicamente, todas las acciones hasta que se libere pierden -5 puntos.',
            "moderado": 'Ataca con hechizo: "Obscuro". El objetivo queda completamente cegado hasta que se elimine el hechizo. Disminuye 4 puntos de sus siguientes dos acciones o hasta que se libere del encantamiento.',
            "exitoso": 'Ataca con hechizo: "Fulgari". Las cuerdas atan firmemente al objetivo, restringiendo su movimiento. Incapacita todas las acciones de la víctima hasta que no se la libere.',
            "critico": 'Ataca con hechizo: "Desmaius". El objetivo cae inconsciente al instante. La víctima pierde sus siguientes 2 acciones.',
          },

          "defensas": {
            "leve": 'Defiende con hechizo: "Protego". Adiciona +6 de defensa.',
            "moderado": 'Defiende con hechizo: "Protego". Adiciona +8 de defensa.',
            "exitoso": 'Defiende con hechizo: "Protego". Adiciona +10 de defensa.',
            "critico": 'Defiende con hechizo: "Protego". Adiciona +13 de defensa.',
          },
        },
        "sombra cuthbert": {
          "atributos": ["+6 fue", "+5 con"],
          "clasificación": "ser / personaje no jugable",
          "descripción": "personaje no jugable",
          "ataques": {
            "leve": 'Ataca con hechizo: "Relashio". El objetivo suelta la varita con un grito de dolor por la quemadura. Disminuye 6 puntos de la siguiente acción a realizar y reduce 10 PV.',
            "moderado": 'Ataca con hechizo: "Confringo". La explosión es fuerte y puede destrozar objetos y causar heridas serias. Adiciona +10 en daño.',
            "exitoso": 'Ataca con hechizo: "Atabraquium". El objetivo queda firmemente atado de pies y manos. Deberá consumir una acción en liberarse de las ataduras a través de hechizos.',
            "critico": 'Ataca con hechizo: "Immobulus Glacius". Las extremidades del objetivo quedan completamente congeladas y adheridas al suelo. Adiciona +8 en el daño y la víctima pierde su siguiente acción inmediata.',
          },

          "defensas": {
            "leve": 'Defiende con hechizo: "Protego". Adiciona +5 de defensa.',
            "moderado": 'Defiende con hechizo: "Protego". Adiciona +7 de defensa.',
            "exitoso": 'Defiende con hechizo: "Protego". Adiciona +9 de defensa.',
            "critico": 'Defiende con hechizo: "Protego". Adiciona +12 de defensa.',
          },
        },
        "sombra hermes": {
          "atributos": ["+7 fue", "+5 con"],
          "clasificación": "ser / personaje no jugable",
          "descripción": "personaje no jugable",
          "ataques": {
            "leve": 'Ataca con hechizo: "Repello Inimicum". El enemigo es empujado hacia atrás con fuerza y su ataque se desvanece. Adiciona al ataque el daño realizado previamente por el atacante.',
            "moderado": 'Ataca con hechizo: "Levare". El objetivo es lanzado con fuerza al aire, sufriendo una caída dolorosa. Adiciona +12 al daño.',
            "exitoso": 'Ataca con hechizo: "Ignis Funis". La cuerda envuelve firmemente al objetivo, causando quemaduras y restringiendo su movimiento. Adiciona +10 en daño y la víctima perderá su siguiente acción instantánea.',
            "critico": 'Ataca con hechizo: "Ebublio". El objetivo es completamente atrapado en una burbuja sólida, solo rompible con fuerza significativa. La víctima deberá tirar un lado de acción y sumar su fuerza, si el resultado es mayor a 20 queda liberado. En caso de no poder liberarse, deberá rolear 2 respuestas para que la burbuja se rompa.',
          },

          "defensas": {
            "leve": 'Defiende con hechizo: "Protego". Adiciona +5 de defensa.',
            "moderado": 'Defiende con hechizo: "Protego". Adiciona +7 de defensa.',
            "exitoso": 'Defiende con hechizo: "Protego". Adiciona +9 de defensa.',
            "critico": 'Defiende con hechizo: "Protego". Adiciona +12 de defensa.',
          },
        },
        "sombra minerva": {
          "atributos": ["+5 fue", "+6 con"],
          "clasificación": "ser / personaje no jugable",
          "descripción": "personaje no jugable",
          "ataques": {
            "leve": 'Ataca con hechizo: "Colloshoo". El objetivo queda pegado al suelo hasta que se le libere mágicamente, todas las acciones hasta que se libere pierden -5 puntos.',
            "moderado": 'Ataca con hechizo: "Obscuro". El objetivo queda completamente cegado hasta que se elimine el hechizo. Disminuye 4 puntos de sus siguientes dos acciones o hasta que se libere del encantamiento.',
            "exitoso": 'Ataca con hechizo: "Fulgari". Las cuerdas atan firmemente al objetivo, restringiendo su movimiento. Incapacita todas las acciones de la víctima hasta que no se la libere.',
            "critico": 'Ataca con hechizo: "Desmaius". El objetivo cae inconsciente al instante. La víctima pierde sus siguientes 2 acciones.',
          },

          "defensas": {
            "leve": 'Defiende con hechizo: "Protego". Adiciona +6 de defensa.',
            "moderado": 'Defiende con hechizo: "Protego". Adiciona +8 de defensa.',
            "exitoso": 'Defiende con hechizo: "Protego". Adiciona +10 de defensa.',
            "critico": 'Defiende con hechizo: "Protego". Adiciona +13 de defensa.',
          },
        },
        "sombra montgomery": {
          "atributos": ["+3 fue", "+3 con"],
          "clasificación": "ser / personaje no jugable",
          "descripción": "personaje no jugable",
          "ataques": {
            "leve": 'Ataca con hechizo: "Expelliarmus". El objeto es expulsado con fuerza y queda fuera del alcance inmediato del objetivo. El objetivo pierde una acción utilizada para recuperar su varita.',
            "moderado": 'Ataca con hechizo: "Mimble Wimble". La víctima apenas puede pronunciar palabras coherentes, dificultando cualquier comunicación. Pierde 5 puntos en todos los hechizos verbales.',
            "exitoso": 'Ataca con hechizo: "Flipendo". El oponente es derribado y lanzado al suelo. Adiciona +10 en el daño.',
            "critico": 'Ataca con hechizo: "Petrificus Totalus". El objetivo queda completamente inmóvil hasta que el efecto se disipe. El personaje no podrá realizar acciones hasta que otro personaje lo libere o realice dos roles. Si al conjurador le anulan acciones, se eliminan los efectos inmediatamente.',
          },

          "defensas": {
            "leve": 'Defiende con hechizo: "Protego". Adiciona +3 de defensa.',
            "moderado": 'Defiende con hechizo: "Protego". Adiciona +5 de defensa.',
            "exitoso": 'Defiende con hechizo: "Protego". Adiciona +7 de defensa.',
            "critico": 'Defiende con hechizo: "Protego". Adiciona +10 de defensa.',
          },
        },
      },

      "cards": [],
      "searchs": {
        "inspeccionar la escena": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "estudiantes calmados",
          "cont": '<span>Dentro de lo que es el usual despacho del Director Dippet, se puede ver que el hombre reposa sobre el escritorio. Desde la distancia no parece que respire, y su piel ha tomado colores grisaceos que no parecen nada sanos y sus ojos miran sin ver cristalizados.</span>',
        },
        "la taza de té": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "inspeccionar la escena",
          "cont": '<span>Sobre el escritorio, se encuentra una de las tantas tazas de té que se usan para el desayuno del director. La taza está vacía, pero hay una mancha de color rojo en la superficie.</span>',
        },
        "orden en el despacho": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "profesor", "name": "invalid", }, "place": "la taza de té",
          "cont": '<span>Por lo general, Dippet suele mantener un orden que para muchos, no es apropiado para el puesto que posee. Siempre su despacho cuenta con periódicos por todas partes, tazas que fue dejando con té en diferentes cantidades. Sin embargo, ese día parece que hay algo fuera de lugar. Y es que, no es que haya algo fuera de lugar, sino que hay demasiado orden y el despacho esta demasiado limpio para que parezca el espacio usual del Director.</span>',
        },
        "preguntar a los cuadros qué han visto": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "estudiantes calmados",
          "cont": '<span>Un silencio se distribuye entre los cuadros mientras los ojos de los antiguos directores se miran unos a otros. Es Phineas Nigellus Black el primero en hablar: «Nuestro deber es acompañar y aconsejar a los directores que vengan detrás nuestro. Lo que ha pasado, no lo sabemos, pues, nos han bloqueado el acceso a nuestros propios cuadros y cuando hermos regresado, así lo hemos encontrado».</span>',
        },
        "preguntar a los cuadros quién ha ordenado el lugar": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "orden del despacho",
          "cont": '<span>«Dippet mismo lo ha hecho. Le llevó más tiempo del que creímos posible. Alguien diría que una eminencia en encantamientos lo debería haber resuelto en menos de cuarenta minutos, pero le ha llevado al menos dos días y medio», comentó Elizabeth Burke sin ocultar su desagrado al hombre.</span>',
        },
        "preguntar a los cuadros vieron algo extraño antes de ser cegado": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar a los cuadros qué han visto",
          "cont": '<span>«Estuvimos en el despacho, pero no vimos nada extraño. Solo vimos a Dippet, que estaba muy quieto, para su inquietud de los días anteriores. Luego, todo se volvió negro y nos cegaron», respondió Everard. «Ah, verdad. Decía que iban a ir por él porque se había presentado como candidato y no paraba de caminar de un lado del desapacho a otro», agregó Phyllida Spore.</span>',
        },
        "analizar la salud del director": {
          "visible": { "attr": { "val": "min" }, "know": { "curación": "5" }, "job": "invalid", "name": "invalid", }, "place": "inspeccionar la escena",
          "cont": '<span>Si se trata de tomar el pulso, pueden notar que el mismo es lento y pausado, pero constante. Necesitarán un hechizo de sanación para obtener más información.</span>',
        },
        "preguntar a los cuadros dónde esta dumbledore": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "profesor", "name": "invalid", }, "place": "inspeccionar la escena",
          "cont": '<span>«¡Oh, Albus!» dijo Phyllida Spore. «Se ha ido a un congreso en Italia, ya saben como es. Demasiado importante, un ejemplo de mago. Creo que debería estar a cargo de la dirección ahora que Dippet...» Dejó la frase sin terminar, aunque todos sabían a qué se refería. Incluso aunque no estuviera muerto, aquello no podía terminar de otra manera más que con la renuncia del mismo. «Ya se lo hemos comunicado, dijo que viajará tan pronto sea posible, pero le tomará unas horas».</span>',
        },
        "el reflejo en el techo": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar a los cuadros vieron algo extraño antes de ser cegado",
          "cont": '<span>Al observar el techo, pueden notar un reflejo borroso de la realidad. Al principio sus propios reflejos parecen ser iguales e imitan sus movimientos. Sin embargo, cuando un personaje aparta la mirada, todos los reflejos toman forma propia. Cayendo del reflejo al despacho. Deberán incluir los siguientes personajes no jugables y enfrentarse a sus propios reflejos. Cuando un personaje logre liberarse de su sombra podrán pedir intervención al staff: Sombra Aidan (6 FUE / 6 CON), Sombra Cuthbert (6 FUE / 5 CON), Sombra Hermes (7 FUE / 5 CON), Sombra Minerva (5 FUE / 6 CON) y Sombra Monthgomery (3 FUE / 3 CON). Solo podrán enfrentarse a su propia sombra.</span>',
        },
      },
      "actions": {
        "vox imperium": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'Todos los estudiantes obedecen liberando el despacho del director y dejando que las personas presentes se encarguen de la investigación correspondiente.<adding search="estudiantes calmados" class="check-cards"></adding>',
          "exitoso": 'Todos los estudiantes obedecen liberando el despacho del director y dejando que las personas presentes se encarguen de la investigación correspondiente.<adding search="estudiantes calmados" class="check-cards"></adding>',
          "critico": 'Todos los estudiantes obedecen liberando el despacho del director y dejando que las personas presentes se encarguen de la investigación correspondiente.<adding search="estudiantes calmados" class="check-cards"></adding>',
        },
        "revelio potionis": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'Puede detectarse que se trata de una poción para la tos, pero ha sido adulterada para que entumesca más de lo que debería. El frasco posee raiz de asfódelo molida en su interior, provocando dichos efectos.',
          "exitoso": 'Puede detectarse que se trata de una poción para la tos, pero ha sido adulterada para que entumesca más de lo que debería. El frasco posee raiz de asfódelo molida en su interior, provocando dichos efectos.',
          "critico": 'Puede detectarse que se trata de una poción para la tos, pero ha sido adulterada para que entumesca más de lo que debería. El frasco posee raiz de asfódelo molida en su interior, provocando dichos efectos.',
        },
        "morbus revela": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'Permite identificar que Dippet esta vivo, sin embargo, puede identificarse que su cuerpo esta siendo afectado por una poción que le impide moverse con normalidad. Y que el daño ha sido más severo de lo que se esperaba. Pues su cuerpo esta entumecido de la cintura hacia abajo. Un profesional de la salud mágica debería atenderlo a la brevedad antes de que los daños sean permanentes.',
          "exitoso": 'Permite identificar que Dippet esta vivo, sin embargo, puede identificarse que su cuerpo esta siendo afectado por una poción que le impide moverse con normalidad. Y que el daño ha sido más severo de lo que se esperaba. Pues su cuerpo esta entumecido de la cintura hacia abajo. Un profesional de la salud mágica debería atenderlo a la brevedad antes de que los daños sean permanentes.',
          "critico": 'Permite identificar que Dippet esta vivo, sin embargo, puede identificarse que su cuerpo esta siendo afectado por una poción que le impide moverse con normalidad. Y que el daño ha sido más severo de lo que se esperaba. Pues su cuerpo esta entumecido de la cintura hacia abajo. Un profesional de la salud mágica debería atenderlo a la brevedad antes de que los daños sean permanentes.',
        },
      },
    },
    // fin the murmur of the old guard

    "ryu's breath": {
      "description": "Al analizar el cuerpo de Sirius Black, se pudo encontrar una toxina que se pudo categorizar como animal. Deberán analizar la misma en el laboratorio de San Mungo para poder localizar a qué animal pertenecía y cómo eso pudo afectar la muerte de Sirius. Y, si es posible, encontrar una pista que lleve a su asesino.",
      "image": "https://2img.net/i.imgur.com/V6MkXm7.png", "requisitos": ["Un personaje con Alquimia en Consagrado", "Un personaje con CCM en Avanzado"],
      "users": ["/u8", "/u131", "/u78"],
      "dependency": ["secrets of the silent dead"],
      "type": "investigación", "closed": true, "link": "/t658-investigacion-ryu-s-breath", "tagged": ["sirius"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "10" }, "job": "invalid", "name": "invalid", }, "place": "resuelve presencia vegetal",
          "cont": '<span>La presencia vegetal es facilmente identificable como Belladona.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "10" }, "job": "invalid", "name": "invalid", }, "place": "resuelve toxina animal",
          "cont": '<span>El origen de toxina animal es identificada como Mariposa de Jade, un pequeño animal que libera una toxina para protegerse de los depredadores.</span>',
        },

        {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "10" }, "job": "invalid", "name": "invalid", }, "place": "resuelve toxina animal",
          "cont": '<span>La toxina de la Mariposa de Jade es extremadamente volátil. Su toxina se libera a través de un polvo que, a temperaturas normales puede invadir una sala entera. Es necesario realizar un "Continentia Bulla", para contener la toxina antes de que se termine de liberar y afecte a los presentes. Si se demora más de tres post en conjurar el hechizo, deberán solicitar una intervención de la administración.</span>',
        },
      ],

      "searchs": {
        "mariposa de jade": {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "10" }, "job": "invalid", "name": "invalid", }, "place": "resuelve toxina animal",
          "cont": '<span><span class="book-clipping">La Mariposa de Jade, Papilio Mortifera, es una criatura extraña de peligrosidad mortal. <br><br>Originaria de las selvas húmedas del sur de Asia, principalmente, Birmania y Tailandia, parece una mariposa luminosa de alas verdes iridiscentes con motas moradas. Su aspecto resulta encantador, y suele confundirse con insectos inofensivos en los bosques tropicales. Se alimenta de néctar en la adultez, pero en estado larvario consume savia venenosa de plantas como la belladona o el acónito, almacenando esas toxinas en su organismo.</span></span>',
        },

        "toxina de la mariposa de jade": {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "10" }, "job": "invalid", "name": "invalid", }, "place": "mariposa de jade",
          "cont": '<span><span class="book-clipping">El veneno de la mariposa de jade es liberado en forma de polvo que desprenden las alas al batirlas cuando se siente amenazada. Al ser inhalado o entrar en contacto con fluidos corporales, inicia una reacción de descomposición acelerada de los órganos internos. La muerte sobreviene en un rango de 15 a 20 minutos, con colapso multiorgánico irreversible. <br><br>Los síntomas que se presentan son mareo, pérdida de visión, espasmos musculares, hemorragias internas.</span></span>',
        },

        "tratados de la toxina": {
          "visible": { "attr": { "val": "min" }, "know": { "alquimia": "5" }, "job": "invalid", "name": "invalid", }, "place": "mariposa de jade",
          "cont": '<span><span class="book-clipping">La captura, cría o comercio de esta mariposa está penada con condena en Azkaban, desde el siglo XII</span></span>',
        },
      },

      "actions": {
        "unus multis": {
          "leve": 'Procedimiento inicial incompleto.',
          "moderado": 'Procedimiento inicial completado: Divide la mezcla en fracciones más simples, resultando una fase (fase 1) con compuestos vegetales y otra fase (fase 2) con un compuesto animal mezclado con impurezas.',
          "exitoso": 'Procedimiento inicial completado: Divide la mezcla en fracciones más simples, resultando una fase (fase 1) con compuestos vegetales y otra fase (fase 2) con un compuesto animal mezclado con impurezas.',
          "critico": 'Procedimiento inicial completado: Divide la mezcla en fracciones más simples, resultando una fase (fase 1) con compuestos vegetales y otra fase (fase 2) con un compuesto animal mezclado con impurezas.',
        },

        "revelio potionis": {
          "leve": 'Fase 1: Procedimiento 1 de 2 completado: Se confirma la presencia de alcaloides vegetales de una planta potencialmente venenosa.',
          "moderado": 'Fase 1: Procedimiento 1 de 2 completado: Se confirma la presencia de alcaloides vegetales de una planta potencialmente venenosa.',
          "exitoso": 'Fase 1: Procedimiento 1 de 2 completado: Se confirma la presencia de alcaloides vegetales de una planta potencialmente venenosa.',
          "critico": 'Fase 1: Procedimiento 1 de 2 completado: Se confirma la presencia de alcaloides vegetales de una planta potencialmente venenosa.',
        },

        "herbivicus": {
          "leve": 'Fase 1: Procedimiento 2 de 2 incompleto.',
          "moderado": 'Fase 1: Procedimiento 2 de 2 completado: Reactiva las propiedades de la planta permitiendo distinguir que parte del extracto es de origen vegetal.<adding search="resuelve presencia vegetal" class="check-cards"></adding>',
          "exitoso": 'Fase 1: Procedimiento 2 de 2 completado: Reactiva las propiedades de la planta permitiendo distinguir que parte del extracto es de origen vegetal.<adding search="resuelve presencia vegetal" class="check-cards"></adding>',
          "critico": 'Fase 1: Procedimiento 2 de 2 completado: Reactiva las propiedades de la planta permitiendo distinguir que parte del extracto es de origen vegetal.<adding search="resuelve presencia vegetal" class="check-cards"></adding>',
        },

        "ros instauro": {
          "leve": 'Fase 1: Procedimiento 2 de 2 incompleto.',
          "moderado": 'Fase 1: Procedimiento 2 de 2 completado: Reactiva las propiedades de la planta permitiendo distinguir que parte del extracto es de origen vegetal.<adding search="resuelve presencia vegetal" class="check-cards"></adding>',
          "exitoso": 'Fase 1: Procedimiento 2 de 2 completado: Reactiva las propiedades de la planta permitiendo distinguir que parte del extracto es de origen vegetal.<adding search="resuelve presencia vegetal" class="check-cards"></adding>',
          "critico": 'Fase 1: Procedimiento 2 de 2 completado: Reactiva las propiedades de la planta permitiendo distinguir que parte del extracto es de origen vegetal.<adding search="resuelve presencia vegetal" class="check-cards"></adding>',
        },

        "umor excido": {
          "leve": 'Fase 2: Procedimiento 1 de 3 incompleto.',
          "moderado": 'Fase 2: Procedimiento 1 de 3 completado: Extrae el agua y jugos celulares de la presencia vegetal, reduciendo su interferencia en la fase tóxica.',
          "exitoso": 'Fase 2: Procedimiento 1 de 3 completado: Extrae el agua y jugos celulares de la presencia vegetal, reduciendo su interferencia en la fase tóxica.',
          "critico": 'Fase 2: Procedimiento 1 de 3 completado: Extrae el agua y jugos celulares de la presencia vegetal, reduciendo su interferencia en la fase tóxica.',
        },

        "fac illum clamorem": {
          "leve": 'Fase 2: Procedimiento 2 de 3 incompleto.',
          "moderado": 'Fase 2: Procedimiento 2 de 3 completado: Condensa volátiles y elimina restos gaseosos de la presencia vegetal.',
          "exitoso": 'Fase 2: Procedimiento 2 de 3 completado: Condensa volátiles y elimina restos gaseosos de la presencia vegetal.',
          "critico": 'Fase 2: Procedimiento 2 de 3 completado: Condensa volátiles y elimina restos gaseosos de la presencia vegetal.',
        },

        "umbraculum faciunt": {
          "leve": 'Fase 2: Procedimiento 3 de 3 completado: Proyecta la esencia, revelando la toxina animal pura.<adding search="resuelve toxina animal" class="check-cards"></adding>',
          "moderado": 'Fase 2: Procedimiento 3 de 3 completado: Proyecta la esencia, revelando la toxina animal pura.<adding search="resuelve toxina animal" class="check-cards"></adding>',
          "exitoso": 'Fase 2: Procedimiento 3 de 3 completado: Proyecta la esencia, revelando la toxina animal pura.<adding search="resuelve toxina animal" class="check-cards"></adding>',
          "critico": 'Fase 2: Procedimiento 3 de 3 completado: Proyecta la esencia, revelando la toxina animal pura.<adding search="resuelve toxina animal" class="check-cards"></adding>',
        },

        "continentia bulla": {
          "leve": 'La burbuja de contención permite que todos los presentes se encuentren a salvo de la toxina animal.',
          "moderado": 'La burbuja de contención permite que todos los presentes se encuentren a salvo de la toxina animal.',
          "exitoso": 'La burbuja de contención permite que todos los presentes se encuentren a salvo de la toxina animal.',
          "critico": 'La burbuja de contención permite que todos los presentes se encuentren a salvo de la toxina animal.',
        },
      },
    },
    // fin ryū's breath

    "the price of silence": {
      "description": "El animal al que pertenece la toxina, es propio del suroeste asiático, pero aquello no es lo más exótico, sino que su compra y venta de veneno es ilegal. La investigación se mueve hacia algún contrabandista que quiera dar la información sobre dónde puede conseguirse dicho ingrediente para generar el veneno que, aparentemente, ha acabado con la vida de Sirius Black.",
      "image": "https://2img.net/i.imgur.com/GfHnpgi.png", "requisitos": ["un miembro del departamento del Seguridad Mágica", "Un personaje con Contrabando en Avanzado"],
      "users": [],
      "dependency": ["ryu's breath"],
      "type": "misión", "closed": false, "link": "", "tagged": ["sirius"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the price of silence

    "the beryl ash trail": {
      "description": "La chimenea escondida en el castillo Black, podría ser una pista hacia el culpable de la muerte del patriarca Black. Para ello, deberán adentrarse en los registros del Departamento de Transporte, para encontrar quiénes fueron las últimas personas en atravesar aquella chimenea.",
      "image": "https://2img.net/i.imgur.com/LzSqfVa.png", "requisitos": ["un miembro del departamento del Seguridad Mágica o del Departamento de Transporte"],
      "users": ["/u8", "/u101", "/u17"],
      "dependency": ["traces in black"],
      "type": "investigación", "closed": true, "link": "https://blackwave.foroactivo.com/t562-investigacion-the-beryl-ash-trail", "tagged": ["sirius"],

      "cards": [
        {
          "visible": { "attr": { "sab": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "examinar registro flu-19520819-7603-lon-0098",
          "cont": '<span>Se corresponden a las chimeneas del Hall de Entrada del Ministerio de Magia. El mismo código se puede apreciar en los ladrillos interiores.</span>',
        }
      ],

      "searchs": {
        "información red flu chim-lon/0098-p": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>ALTA DE PUNTO RED FLU</strong></div><br><strong>Código de registro</strong>: CHIM-LON/0098-P<br><strong>Fecha alta</strong>: 12 de Septiembre de 1802.<br><strong>Oficina</strong>: Ministerio de Magia, Departamento de transporte, oficina 3.<br><br><div align="center"><strong>Información punto de conexión</strong></div><br><strong>Dirección</strong>: Castillo Black, Biblioteca.<br><br><strong>Tipo de Propiedad</strong>:<br>☐ Residencia Privada<br>☐ Comercial<br>☐ Institucional<br>☒ Clasificado<br><br><strong>Propietario Registrado</strong>: E. Black<br><br><div align="center"><strong>Detalles técnicos de la chimenea</strong></div><br><strong>Designación oficial de la red flu</strong>: LON-0098<br><br><strong>Tipo de conexión</strong>: <br>☒ Permanente<br>☐ Temporal<br><br><strong>Estado de seguridad mágica</strong>: <br>☐ Supervisada con runas<br>☒ Restringido (solo usuarios autorizados, ver anexo W-934)<br>☐ Abierta al público<br><br><strong>Encantamientos de protección aplicados</strong>:<br>☒ Sello de trazabilidad Flu<br>☒ Encantamiento de refracción muggle (nivel 3)<br>☒ Alarma de flujo inverso<br><br><strong>Documentación presentada</strong> (ver anexos):<br>☒ Contrato de responsabilidad<br>☐ Licencia de uso comercial<br>☒ Declaración jurada de propietario<br>☒ Informe de instalación: inspector Elspeth Jaxtyn.<br>☒ Comprobante de pago</span></span>',
        },

        "examinar registro flu-19520803-2139-lon-0098": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520803-2139-LON-0098</strong></div><br><strong>Chimenea</strong>: LON-0098<br><strong>Fecha y Hora</strong>: 03/08/1952 - 06:53 hs.<br><strong>Chimenea Destino</strong>: MIN-0076/G<br><strong>Usuario identificado</strong>: Black, Sirius<br><strong>Estado</strong>: Viaje concluido.</span></span>',
        },

        "examinar registro flu-19520811-8256-lon-0098": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520811-8256-LON-0098</strong></div><br><strong>Chimenea</strong>: LON-0098<br><strong>Fecha y Hora</strong>: 11/08/1952 - 21:24 hs.<br><strong>Chimenea Destino</strong>: MIN-0128<br><strong>Usuario identificado</strong>: Black, Sirius<br><strong>Estado</strong>: Viaje concluido.</span></span>',
        },

        "información red flu chim-min/0128-c": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "examinar registro flu-19520811-8256-lon-0098",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>ALTA DE PUNTO RED FLU</strong></div><br><strong>Código de registro</strong>: CHIM-MIN/0128-C<br><strong>Fecha alta</strong>: 09 de Mayo de 1829.<br><strong>Oficina</strong>: Ministerio de Magia, Departamento de transporte, oficina 1.<br><br><div align="center"><strong>Información punto de conexión</strong></div><br><strong>Dirección</strong>: Ministerio de Magia, Primer Piso, Oficina de Ministro.<br><br><strong>Tipo de Propiedad</strong>:<br>☐ Residencia Privada<br>☐ Comercial<br>☐ Institucional<br>☒ Clasificado<br><br><strong>Propietario Registrado</strong>: Ottaline Gambol<br><br><div align="center"><strong>Detalles técnicos de la chimenea</strong></div><br><strong>Designación oficial de la red flu</strong>: MIN-0128<br><br><strong>Tipo de conexión</strong>:<br>☒ Permanente<br>☐ Temporal<br><br><strong>Estado de seguridad mágica</strong>:<br>☒ Supervisada con runas<br>☐ Restringido (solo usuarios autorizados, ver anexo W-934)<br>☐ Abierta al público<br><br><strong>Encantamientos de protección aplicados</strong>:<br>☒ Sello de trazabilidad Flu<br>☒ Encantamiento de refracción muggle (nivel 3)<br>☒ Alarma de flujo inverso<br><br><strong>Documentación presentada</strong> (ver anexos):<br>☐ Contrato de responsabilidad<br>☐ Licencia de uso comercial<br>☐ Declaración jurada de propietario<br>☒ Informe de instalación: inspector R.B. Lytton.<br>☐ Comprobante de pago</span></span>',
        },

        "información red flu chim-nir/4973-p": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "examinar registro flu-19520812-4981-nir-4973",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>ALTA DE PUNTO RED FLU</strong></div><br><strong>Código de registro</strong>: CHIM-NIR/4973-P<br><strong>Fecha alta</strong>: 22 de Enero de 1912.<br><strong>Oficina</strong>: Ministerio de Magia, Departamento de transporte, oficina 14.<br><br><div align="center"><strong>Información punto de conexión</strong></div><br><strong>Dirección</strong>: Rowanshade Cottage, 12 Loughfern Lane, Glen Aibhne, County Antrim, BT47 3RA, Northern Ireland<br><br><strong>Tipo de Propiedad</strong>:<br>☒ Residencia Privada<br>☐ Comercial<br>☐ Institucional<br>☐ Clasificado<br><br><strong>Propietario Registrado</strong>: Morgana Dempsey<br><br><div align="center"><strong>Detalles técnicos de la chimenea</strong></div><br><strong>Designación oficial de la red flu</strong>: NIR-4973<br><br><strong>Tipo de conexión</strong>:<br>☒ Permanente<br>☐ Temporal<br><br><strong>Estado de seguridad mágica</strong>:<br>☐ Supervisada con runas<br>☒ Restringido (solo usuarios autorizados, ver anexo W-934)<br>☐ Abierta al público<br><br><strong>Encantamientos de protección aplicados</strong>:<br>☒ Sello de trazabilidad Flu<br>☐ Encantamiento de refracción muggle (nivel 3)<br>☐ Alarma de flujo inverso<br><br><strong>Documentación presentada</strong> (ver anexos):<br>☒ Contrato de responsabilidad<br>☐ Licencia de uso comercial<br>☒ Declaración jurada de propietario<br>☒ Informe de instalación: inspector R.B. Connor.<br>☒ Comprobante de pago</span></span>',
        },

        "información red flu chim-sco/3629-p": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "examinar registro flu-19520812-4984-sco-3629",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>ALTA DE PUNTO RED FLU</strong></div><br><strong>Código de registro</strong>: CHIM-SCO/3629-P<br><strong>Fecha alta</strong>: 30 de Junio de 1897.<br><strong>Oficina</strong>: Ministerio de Magia, Departamento de transporte, oficina 5.<br><br><div align="center"><strong>Información punto de conexión</strong></div><br><strong>Dirección</strong>: Caer Brannoch Hall, 7 Stag’s Rest Path, Loch Craen, Argyllshire, PA24 5DN, Scotland<br><br><strong>Tipo de Propiedad</strong>:<br>☒ Residencia Privada<br>☐ Comercial<br>☐ Institucional<br>☐ Clasificado<br><br><strong>Propietario Registrado</strong>: Jr. Merrythought<br><br><div align="center"><strong>Detalles técnicos de la chimenea</strong></div><br><strong>Designación oficial de la red flu</strong>: SCO-3629<br><br><strong>Tipo de conexión</strong>:<br>☒ Permanente<br>☐ Temporal<br><br><strong>Estado de seguridad mágica</strong>:<br>☐ Supervisada con runas<br>☒ Restringido (solo usuarios autorizados, ver anexo W-934)<br>☐ Abierta al público<br><br><strong>Encantamientos de protección aplicados</strong>:<br>☒ Sello de trazabilidad Flu<br>☐ Encantamiento de refracción muggle (nivel 3)<br>☒ Alarma de flujo inverso<br><br><strong>Documentación presentada</strong> (ver anexos):<br>☒ Contrato de responsabilidad<br>☐ Licencia de uso comercial<br>☒ Declaración jurada de propietario<br>☒ Informe de instalación: inspector R.B. Connor.<br>☒ Comprobante de pago</span></span>',
        },

        "examinar registro flu-19520812-4981-nir-4973": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520812-4981-NIR-4973</strong></div><br><strong>Chimenea</strong>: NIR-4973<br><strong>Fecha y Hora</strong>: 12/08/1952 - 19:45 hs.<br><strong>Chimenea Destino</strong>: LON-0098<br><strong>Usuario identificado</strong>: Dempsey, Morgana<br><strong>Estado</strong>: Viaje concluido</span></span>',
        },

        "examinar registro flu-19520812-4984-sco-3629": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520812-4984-SCO-3629</strong></div><br><strong>Chimenea</strong>: SCO-3629<br><strong>Fecha y Hora</strong>: 12/08/1952 - 19:50 hs.<br><strong>Chimenea Destino</strong>: LON-0098<br><strong>Usuario identificado</strong>: Merrythought, Edwin<br><strong>Estado</strong>: Viaje concluido</span></span>',
        },

        "examinar registro flu-19520816-1145-lon-0098": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520816-1145-LON-0098</strong></div><br><strong>Chimenea</strong>: LON-0098<br><strong>Fecha y Hora</strong>: <classified style="--char: 21"></classified><br><strong>Chimenea Destino</strong>: <classified style="--char: 7"></classified><br><strong>Usuario identificado</strong>: Black, Sirius<br><strong>Estado</strong>: Clasificado por Orden ORD-CLF-1952/WIZ/3078-B.<br><strong>Nota</strong>: Se detectó presencia no declarada de planta desconocida. Sin emisión mágica.</span></span>',
        },

        "examinar registro flu-19520819-7603-lon-0098": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520819-7603-LON-0098</strong></div><br><strong>Chimenea</strong>: LON-0098<br><strong>Fecha y Hora</strong>: 19/08/1952 - 07:10 hs.<br><strong>Chimenea Destino</strong>: MIN-0076/G<br><strong>Usuario identificado</strong>: Black, Sirius<br><strong>Estado</strong>: Viaje concluido.</span></span>',
        },

        "examinar registro flu-19520826-7014-lon-0098": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520826-7014-LON-0098</strong></div><br><strong>Chimenea</strong>: LON-0098<br><strong>Fecha y Hora</strong>: 26/08/1952 - 23:55 hs.<br><strong>Chimenea Destino</strong>: SCO-3629<br><strong>Usuario identificado</strong>: Black, Sirius<br><strong>Estado</strong>: Viaje concluido.</span></span>',
        },

        "examinar registro flu-19520828-8150-lon-0098": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520828-8150-LON-0098</strong></div><br><strong>Chimenea</strong>: LON-0098<br><strong>Fecha y Hora</strong>: 28/08/1952 - 16:18 hs.<br><strong>Chimenea Destino</strong>: NIR-4973<br><strong>Usuario identificado</strong>: Black, Sirius<br><strong>Estado</strong>: Viaje concluido.</span></span>',
        },
      },

      "actions": {},
    },
    // fin the beryl ash trail

    "golden pathways": {
      "description": "Los rastros de la chimenea, llevan a varias preguntas, entre ellas, ¿Por qué Wilhelmina Tuft convocó a los tres mandatarios al inicio del mes de Agosto? Aparentemente, solo una persona reunida puede responder esa petición y es la Ministra de Magia, quien al escuchar la necesidad de comunicarse con ella, ha despejado un espacio en su ocupada agenda.",
      "image": "https://2img.net/i.imgur.com/UnoEX43.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["/u55", "/u8", "/u94"],
      "dependency": ["the beryl ash trail"],
      "type": "interrogatorio", "closed": true, "link": "https://blackwave.foroactivo.com/t646-interrogatorio-golden-pathways", "tagged": ["sirius"],

      "cards": [],
      "searchs": {},

      "actions": {
        "relicta notitia": {
          "leve": 'No revela información adicional.',
          "moderado": 'Revela que la profecía fue guardada por el mismo Sirius Black. Quien extrajo un recuerdo y lo guardó en la esfera.',
          "exitoso": 'Revela que la profecía fue guardada por el mismo Sirius Black. Quien extrajo un recuerdo y lo guardó en la esfera. Al finalizar la creación, se puede escuchar la voz distorcionada de un joven: "Cuando la Estrella del Cazador se incline hacia la Sombra..."',
          "critico": 'Revela que la profecía fue guardada por el mismo Sirius Black. Quien extrajo un recuerdo y lo guardó en la esfera. Al finalizar la creación, se puede escuchar la voz distorcionada de un joven: "Cuando la Estrella del Cazador se incline hacia la Sombra...", Sirius deja de tocar la profecía, deteniendo el avance de la misma. Hay un papel debajo de la profecía donde se puede leer: "la ola llevará su huella como estigma y condena". Una vez que la profecía esta guardada, Sirius hace una pequeña bola con el pergamino y lo tira al fuego.',
        },
      },
    },
    // fin golden pathways

    "ember pass": {
      "description": "La investigación sobre los viajes realizados a través de la red flu, a dejado varias dudas por resolver. Protocolos, viajes realizados y mensajes clasificados. ¿Podrán resolver esas preguntas?",
      "image": "https://2img.net/i.imgur.com/e1LeX7A.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["/u8", "/u17", "/u101"],
      "dependency": ["the beryl ash trail"],
      "type": "investigación", "closed": true, "link": "/t659-investigacion-ember-pass", "tagged": ["sirius"],

      "cards": [],

      "searchs": {
        "peticionar información anexo 934": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Al solicitar al requisario la información sobre el anexo 934, el mismo produce el mismo sonido que los libros al moverse de un espacio para otro, hasta que, pasado un tiempo, extrae tres libros que son colocados en la bandeja de plata: [i]Chimeneas y Caminos[/i], [i]Los Sigilos de la Red Flu[/i] y [i]Travesías y Traslados[/i].</span>',
        },

        "leer 'chimeneas y camino' capítulo 6": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">La red flu en chimeneas particulares constituye un sistema de transporte mágico reservado a los miembros autorizados de un hogar. Por norma general, el uso de esta red está permitido al dueño de la residencia y a su descendencia directa, garantizando que la conexión flu se mantenga segura y confiable dentro del linaje familiar. Esta restricción inicial asegura que la red funcione bajo control de la familia propietaria y evita el acceso no autorizado.</span></span>',
        },

        "leer 'chimeneas y camino' capítulo 9": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">La red flu también autoriza el acceso a cualquier mago o bruja que la chimenea reconozca como miembro del hogar. Esta autorización no depende únicamente de la sangre, sino que se basa en la afinidad mágica y la frecuencia de presencia de la persona dentro de la residencia. La chimenea evalúa de manera instintiva la legitimidad de los usuarios, asegurando que solo quienes tengan un vínculo real con el hogar puedan utilizarla.</span></span>',
        },

        "leer 'chimeneas y camino' capítulo 11": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">En el caso de menores de once años, su acceso a la red flu está estrictamente regulado. Solo podrán desplazarse mediante la chimenea si se encuentran acompañados por sus padres o tutores legales. Esta medida protege tanto al menor como a la integridad de la red flu, evitando accidentes o traslados no supervisados que puedan resultar peligrosos.</span></span>',
        },

        "leer 'chimeneas y camino' capítulo 14": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">La propiedad de la chimenea y, por extensión, de su red flu, se transfiere automáticamente cuando se registra el fallecimiento del dueño. El nuevo propietario de la casa pasa a ser el titular de la chimenea, asegurando la continuidad de la red flu bajo la misma línea de residencia. En casos donde no exista una línea directa de herencia, se recomienda acudir al Departamento de Transporte Mágico para validar el alta de la chimenea y garantizar que el acceso se mantenga seguro y regulado.</span></span>',
        },

        "leer 'los sigilos de la red flu' capítulo 2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">Para conceder una autorización temporal de acceso a la red flu de una chimenea particular, es necesario realizar un sigilo específico acompañado de la pronunciación en latín del encantamiento: <i>Aperi ianuam [nombre del autorizado]</i> (Abre la puerta a nombre del autorizado). Esta autorización tiene una duración limitada, permaneciendo activa únicamente hasta la medianoche del día en que se realizó, tras lo cual se desactiva automáticamente. El procedimiento garantiza que los accesos temporales sean controlados y no comprometan la seguridad del hogar.</span></span>',
        },

        "leer 'los sigilos de la red flu' capítulo 10": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">En el caso de autorizaciones permanentes, se requiere un sigilo diferente, invocado mediante la frase latina: <i>Agnosce [nombre del autorizado] ut membrum familiae</i> (Reconoce a nombre del autorizado como parte de la familia). Este tipo de autorización concede acceso indefinido a la chimenea, integrando al autorizado en la red flu del hogar con los mismos privilegios que los miembros de la familia. Su implementación requiere precisión mágica y es recomendable que sea realizada únicamente por el propietario o un miembro de confianza del hogar.</span></span>',
        },

        "leer 'los sigilos de la red flu' capítulo 12": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">Para revocar un sigilo previamente establecido, se emplea el encantamiento: <i>Clude portas [nombre del desautorizado], eius visitationes non gratae sunt</i> (Cierra tus puertas a nombre del desautorizado, sus visitas ya no son bienvenidas). Este procedimiento anula cualquier permiso anterior, tanto temporal como permanente, asegurando que el acceso a la chimenea quede estrictamente limitado a quienes siguen autorizados por el propietario.</span></span>',
        },

        "leer 'los sigilos de la red flu' capítulo 16": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">Es importante destacar que la obtención de listas completas de personas autorizadas para el uso de la red flu no está permitida. La información sobre autorizaciones solo puede ser consultada a través de los sigilos correspondientes, respetando la privacidad y la seguridad de los usuarios. Esta restricción protege los hogares y evita la explotación indebida de la información confidencial asociada a la red flu.</span></span>',
        },

        "leer 'travesías y traslados' capítulo 3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">Los viajes por la red flu que se realizan sin la debida autorización activan automáticamente un encantamiento de protección. Este hechizo impide que el mago o bruja llegue a su destino, dejándolo temporalmente varado en la propia red. Cada incidente es registrado en el Departamento de Transporte Mágico, de manera que un miembro del personal autorizado pueda localizar al afectado y retornarlo de manera segura al Ministerio de Magia, evitando accidentes o pérdidas permanentes.</span></span>',
        },

        "leer 'travesías y traslados' capítulo 4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">Se ha observado que aquellos que quedan atrapados en la red flu suelen no recordar las experiencias previas ni la ubicación exacta de su extravío. Esto se debe a la naturaleza intrínseca de la red, que consiste en una serie de portales interconectados. La manipulación incorrecta o el extravío pueden ser extremadamente peligrosos, aunque algunos miembros del Departamento de Transporte describen la red flu de manera poética como "ríos de agua verde" que fluyen conectando puntos de manera aparentemente fluida pero potencialmente caótica.</span></span>',
        },

        "leer 'travesías y traslados' capítulo 17": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">El intento de acceder a chimeneas no autorizadas se considera una infracción administrativa. Los magos y brujas que lo realizan son automáticamente expulsados del hogar y registrados en el Departamento de Transporte Mágico. Aunque este acto no se considera un peligro grave para la seguridad, sí genera sanciones y se mantiene un registro formal de la infracción, garantizando la vigilancia del uso de la red flu en propiedades privadas.</span></span>',
        },

        "leer 'travesías y traslados' capítulo 23": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información anexo 934",
          "cont": '<span><span class="book-clipping">Todos los viajes realizados a través de la red flu son documentados de manera oficial por el Departamento de Transporte Mágico. Este registro sistemático asegura que cualquier incidencia pueda ser investigada y que la red flu permanezca un sistema seguro y controlado, garantizando tanto la protección de los usuarios como la integridad de las conexiones entre residencias, instituciones y puntos de transporte autorizados.</span></span>',
        },

        "peticionar información sobre pergaminos clasificados": {
          "visible": { "attr": { "int": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Al solicitar al requisario sobre cómo se clasifica la información, el mismo produce el sonido de pergaminos que ruedan de un espacio hacia otro, hasta que termina extrayendo un pergamino que se deposita en la bandeja de plata. En el mismo se puede encontrar la siguiente información: <span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Ministerio de Magia</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Clasificación de información mágica reservada</span></div><br>En el ámbito de la administración mágica y la gestión de secretos, la información clasificada se organiza en tres niveles principales, definidos por su grado de protección y los métodos requeridos para su acceso:<br><br><strong>Nivel 1: Información de acceso básico</strong> Esta categoría comprende datos que han sido protegidos mediante hechizos manuales de seguridad. Su resguardo depende de encantamientos sencillos y rutinarios, los cuales pueden ser identificados y neutralizados por magos con conocimientos estándar en seguridad mágica. Aunque su acceso requiere cierta destreza, el nivel 1 está diseñado para permitir una difusión controlada y rápida de información dentro de contextos educativos o administrativos.<br><br><strong>Nivel 2: Información protegida por departamento</strong> La información de nivel 2 se encuentra bajo la custodia de departamentos específicos del Ministerio de Magia o de instituciones oficiales. El acceso a estos datos no puede obtenerse mediante simples encantamientos; es necesario solicitar formalmente la información al departamento responsable. Este nivel asegura que la distribución de datos sensibles sea supervisada y registrada, garantizando responsabilidad administrativa y control interno.<br><br><strong>Nivel 3: Información de alta confidencialidad</strong> Este nivel está reservado para secretos de máxima seguridad, cuyo acceso está restringido al Wizengamot o a los magos directamente autorizados por este cuerpo. Los hechizos de protección utilizados en este nivel son indelebles y personales, diseñados para que solo el conjurador original pueda revelar la información. En caso de necesidad, la única alternativa autorizada para recuperar los datos es mediante la copia de seguridad oficial, custodiada en el Requisario.</span></span>',
        },

        "peticionar orden clasificada 'ord-clf-1952/wiz/3078-b'": {
          "visible": { "attr": { "sab": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar información sobre pergaminos clasificados",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>Viaje FLU-19520816-1145-LON-0098</strong></div><br><strong>Chimenea</strong>: LON-0098<br><strong>Fecha y Hora</strong>: 16/08/1952 - 11:20 hs.<br><strong>Chimenea Destino</strong>: WEL-5911<br><strong>Usuario identificado</strong>: Black, Sirius<br><strong>Estado</strong>: Clasificado por Orden ORD-CLF-1952/WIZ/3078-B.<br><strong>Nota</strong>: Se detectó presencia no declarada de planta desconocida. Sin emisión mágica.</span></span>',
        },

        "peticionar alta de punto red flu 'wel-5911'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "peticionar orden clasificada 'ord-clf-1952/wiz/3078-b'",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>ALTA DE PUNTO RED FLU</strong></div><br><strong>Código de registro</strong>: CHIM-WEL/5911-P<br><strong>Fecha alta</strong>: 15 de Agosto de 1912.<br><strong>Oficina</strong>: Ministerio de Magia, Departamento de transporte, oficina 3.<br><br><div align="center"><strong>Información punto de conexión</strong></div><br><strong>Dirección</strong>: 14 Maes Y Ddraig, Llanfaelawen, Ceredigion, SA44 7QP, Gales, Reino Unido.<br><br><strong>Tipo de Propiedad</strong>:<br>☒ Residencia Privada<br>☐ Comercial<br>☐ Institucional<br>☐ Clasificado<br><br><strong>Propietario Registrado</strong>: Celyn Covey<br><br><div align="center"><strong>Detalles técnicos de la chimenea</strong></div><br><strong>Designación oficial de la red fu</strong>: WEL-5911<br><br><strong>Tipo de conexión</strong>:<br>☒ Permanente<br>☐ Temporal<br><br><strong>Estado de seguridad mágica</strong>:<br>☐ Supervisada con runas<br>☐ Restringido (solo usuarios autorizados, ver anexo W-934)<br>☒ Abierta al público<br><br><strong>Encantamientos de protección aplicados</strong>:<br>☒ Sello de trazabilidad Flu<br>☒ Encantamiento de refracción muggle (nivel 2)<br>☐ Alarma de flujo inverso<br><br><strong>Documentación presentada</strong> (ver anexos):<br>☒ Contrato de responsabilidad<br>☐ Licencia de uso comercial<br>☒ Declaración jurada de propietario<br>☒ Informe de instalación: inspector Winifred Enfys.<br>☒ Comprobante de pago</span></span>',
        },
      },

      "actions": {},
    },
    // fin ember pass

    "underground roots": {
      "description": "Con una maceta vacía donde antes solía haber una planta, la investigación se mueve buscando resolver nuevas preguntas, ¿qué planta era? Y, ¿Por qué Sirius pidió que se la envuelvan para llevar? Para eso, deberán buscar a un especialista en Herbología que pueda identificar la planta y así poder comenzar a resolver preguntas.",
      "image": "https://2img.net/i.imgur.com/WgAQvWA.png", "requisitos": ["Un personaje con Herbología en Avanzado"],
      "users": ["/u9", "/u44", "/u8"],
      "dependency": ["traces in black"],
      "type": "investigación", "closed": true, "link": "https://blackwave.foroactivo.com/t563-investigacion-underground-roots", "tagged": ["sirius"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "10" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La planta ha sido arrancada de cuajo. Poco se puede decir más allá del tamaño de la maceta que indica que es una planta de tamaño mediano, y de cuidado frecuentes.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "15" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Por los huecos que se presentan en la tierra, se podría decir que es una planta tóxica, debido a que han utilizado guantes gruesos para poder extraerla.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "black", }, "place": "planta revelada",
          "cont": '<span>Hay una frase que a Sirius Black le encantaba decir: Los hombrelobos guardan sus secretos, pero sólo recuerdan la podredumbre que arrastran y ven sombras donde nosotros vemos la verdad.</span>',
        }
      ],

      "searchs": {},

      "actions": {
        "nutrimenta cresco": {
          "leve": '',
          "moderado": 'Paso #1: Enriquece el suelo para mejorar las condiciones de crecimiento de la planta.',
          "exitoso": 'Paso #1: Enriquece el suelo para mejorar las condiciones de crecimiento de la planta.',
          "critico": 'Paso #1: Enriquece el suelo para mejorar las condiciones de crecimiento de la planta.',
        },

        "calor crescit": {
          "leve": 'Paso #2: Reactiva el proceso metabólico de la planta, ayudándola a generar nuevas células en las raíces.',
          "moderado": 'Paso #2: Reactiva el proceso metabólico de la planta, ayudándola a generar nuevas células en las raíces.',
          "exitoso": 'Paso #2: Reactiva el proceso metabólico de la planta, ayudándola a generar nuevas células en las raíces.',
          "critico": 'Paso #2: Reactiva el proceso metabólico de la planta, ayudándola a generar nuevas células en las raíces.',
        },

        "umor infundo": {
          "leve": '',
          "moderado": 'Paso #3: Aporta humedad equilibrada al entorno para que las raíces puedan absorber agua sin pudrirse.',
          "exitoso": 'Paso #3: Aporta humedad equilibrada al entorno para que las raíces puedan absorber agua sin pudrirse.',
          "critico": 'Paso #3: Aporta humedad equilibrada al entorno para que las raíces puedan absorber agua sin pudrirse.',
        },

        "vapor creo": {
          "leve": '',
          "moderado": 'Paso #4: Entierra la planta sin dañar más las raíces. El hechizo puede formar un hueco ideal y cubrir la planta con precisión mágica, para mejorar las condiciones de su crecimiento.',
          "exitoso": 'Paso #4: Entierra la planta sin dañar más las raíces. El hechizo puede formar un hueco ideal y cubrir la planta con precisión mágica, para mejorar las condiciones de su crecimiento.',
          "critico": 'Paso #4: Entierra la planta sin dañar más las raíces. El hechizo puede formar un hueco ideal y cubrir la planta con precisión mágica, para mejorar las condiciones de su crecimiento.',
        },

        "ros instauro": {
          "leve": '',
          "moderado": 'Paso #5: Ayuda a que las hojas no se marchiten en un crecimiento acelerado mientras las raíces se regeneran.',
          "exitoso": 'Paso #5: Ayuda a que las hojas no se marchiten en un crecimiento acelerado mientras las raíces se regeneran.',
          "critico": 'Paso #5: Ayuda a que las hojas no se marchiten en un crecimiento acelerado mientras las raíces se regeneran.',
        },

        "herbivicus": {
          "leve": '',
          "moderado": 'Paso #6: Acelera el crecimiento de las plantas hasta el punto de hacerlas florecer. Si ya tienen todos los pasos solicitar intervención del staff.',
          "exitoso": 'Paso #6: Acelera el crecimiento de las plantas hasta el punto de hacerlas florecer. Si ya tienen todos los pasos solicitar intervención del staff.',
          "critico": 'Paso #6: Acelera el crecimiento de las plantas hasta el punto de hacerlas florecer. Si ya tienen todos los pasos solicitar intervención del staff.',
        },
      },
    },
    // fin underground roots

    "the withered pot": {
      "description": "Ya habiendo identificado la planta, la pregunta ahora, es ¿qué ha sido de ella? Por lo tanto, todas las investigaciones vuelven al Castillo Black buscando encontrar alguna señal que indiqué qué ha hecho Sirius con la misma.",
      "image": "https://2img.net/i.imgur.com/CmIJAA5.png", "requisitos": ["Uno de los integrantes debe ser un miembro de la familia Black"],
      "users": ["/u9", "/u17", "/u101"],
      "dependency": ["underground roots", "the beryl ash trail"],
      "type": "investigación", "closed": true, "link": "https://blackwave.foroactivo.com/t643-investigacion-the-withered-pot", "tagged": ["sirius"],

      "cards": [],
      "searchs": {
        "estudio de sirius black": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El estudio de Sirius Black es considerado una de las mejores salas del castillo. Sus amplios ventanales dan a los jardines. Las paredes de un color borgoña resaltan incluso sobre las decoraciones de plata y oro. Todos los muebles se encuentran tallados con símbolos rúnicos. Todos los sillones de un terciopelo negro se encuentran intactos a pesar del tiempo que llevan en ese hogar. Una pequeña biblioteca privada, contiene libros que se fueron llenando de polvo con el paso del mes.</span>',
        },

        "segundo estudio de sirius black": {
          "visible": { "attr": { "val": "min" }, "know": { "runas antiguas": "10" }, "job": "invalid", "name": "invalid", }, "place": "estudio de sirius black",
          "cont": '<span>Las runas antiguas siempre fueron importantes para la familia Black. La casa esconde muchos secretos debajo de ellas, protege la casa con ellas. No importan los años, siempre se mantienen presentes. Perthro (ᛈ), una runa marcada en la pared ha sido remarcada cientos de veces. Solo bastará remarcar la misma para poder abrir el espacio.</span>',
        },

        "conjurar runa perthro": {
          "visible": { "attr": { "des": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "segundo estudio de sirius black",
          "cont": '<span>La habitación parece girar con un ligero temblor y pronto toda la habitación queda espejada. Revelando, además, un baúl que antes no estaba presente.</span>',
        },

        "abrir baúl": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "conjurar runa perthro",
          "cont": '<span>Al abrir el baúl, no se encuentran con el interior inmediato, sino con una cámara de proyección aritmántica. En ella, las paredes, el suelo y el aire mismo muestran patrones cambiantes de símbolos y secuencias. Solo la secuencia adecuada, permitirá revelar su contenido.<br /><br />El baúl proyecta una ilusión donde nada parece tener sentido. Solo descifrando los patrones ocultos en los números y símbolos podrán encontrar la puerta real. Cada error hace que el entorno se reorganice fractalmente, desorientándolos más.</span>',
        },

        "la rama de acónito seca": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "segundo nivel del estudio",
          "cont": '<span>Sobre una pila de pergaminos enrollados, hay una rama de acónito que se ha secado con el paso del tiempo. Son varios pergaminos, si abren uno al azar encontrarán nombres de magos y brujas que han sido conocidos por sus habilidades en las pociones, la herbología o la alquimia.</span>',
        },

        "expediente de aidan flamel": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "la rama de acónito seca",
          "cont": '<span><span class="book-clipping"><div class="book-image" style="--image: url(https://64.media.tumblr.com/ff6d8f15a0ece847a2dd25a7ac8555f2/cb83e7c5bc169ee9-f4/s400x600/1417c283c576c9c343a6657db76036f3746f4c0e.gif)"></div><br><strong>Contrato</strong> Iniciado: 21/04/1952 | Terminado: 01/08/1952.<br><br><strong>Nombre Completo</strong> Aidan Nava Flamel<br><br><strong>Profesión</strong> Actual profesor de Herbología.<br><strong>Edad</strong> 33 años.<br><strong>Linaje</strong> Mestizo.<br><br><strong>Adjuntos</strong> <br>☒ Certificado de Nacimiento.<br>☒ Informe de Análisis de Sangre y Linaje<br>☒ Resultados TIMOs.<br>☒ Resultados EXTASIS<br></span></span>',
        },

        "amorío de lucian flamel": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de aidan flamel",
          "cont": '<span><span class="book-clipping">Se incluye una serie de fotografías que muestran a Lucian Flamel, padre del sujeto, con otra mujer. En una de las fotografías se puede observar que la mujer está embarazada. Las imágenes se encuentran rotuladas para que sepan qué están viendo en cada imagen.<br><br><div class="book-photos"><br><div class="book-image" style="--image: url(https://2img.net/i.imgur.com/3JLDtU0.gif)"></div><br><div class="book-image" style="--image: url(https://2img.net/i.imgur.com/8A1ErHu.gif)"></div><br><div class="book-image" style="--image: url(https://2img.net/i.imgur.com/E4JsSO9.gif)"></div><br></div></span></span>',
        },

        "acta de nacimiento del hijo ilegítimo": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "amorío de lucian flamel",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> <i>Thalric Hawkhurst</i><br><strong>Fecha de nacimiento:</strong> <i>8 de Junio de 1930</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo</i><br><strong>Nombre del padre:</strong> <i>Lucian Flamel</i><br><strong>Nombre de la madre:</strong> <i>Isolde Hawkhurst</i><br><strong>Linaje mágico:</strong> <i>Mestizo</i><br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Lyra Wyrm</i><br><strong>Observaciones médicas:</strong> <i>El recién nacido presenta un estado de salud estable.<br>Se recomienda control preventivo contra la fiebre de los duendecillos.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Irlanda, al 8 de Junio de 1930.</i></div><br><div align="right"><i class="fi fi-tr-signature"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

        "contrato de aidan flamel": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de aidan flamel",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Ministerio de Magia</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Contrato de Donación</span></div><br><hr><br><br><strong>Donante:</strong> <i>Sirius Altair Black</i> <br><strong>Beneficiario:</strong> <i>Aidan Nava Flamel</i> <br><strong>Fecha de formalización:</strong> <i>30 de Septiembre de 1952</i> <br><strong>Objeto de la donación:</strong> <i>Coldyard: Invernaderos de Leeds</i> <br><br><hr><br><br><strong>Cláusulas:</strong> <br>1. El donante entrega de manera libre y voluntaria el bien o cantidad señalada. <br>2. El beneficiario acepta la donación para fines personales. <br>3. La donación no podrá ser revocada salvo disposición contraria de los estatutos mágicos. <br>4. Ambas partes reconocen la validez del presente contrato bajo la legislación vigente en el mundo mágico. <br><br><hr><br><br><strong>Observaciones adicionales:</strong> <br><i>El contrato solo estará vigente cuando ambas partes firmen el contrato.</i> <br><br><hr><br><br><div align="left"><strong>Firma del Donante:</strong> <br><br>_______________________</div><br><div align="left"><strong>Firma del Beneficiario:</strong> <br><br>_______________________</div><br></span></span>',
        },

        "invernaderos de leeds": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "contrato de aidan flamel",
          "cont": '<span>Los invernaderos de Leeds, son una herencia familiar que ha pasado de generación en generación donde se cultivan plantas exóticas y algunas prohibidas. En él se encuentra la exclusividad para venta de algunas hierbas que pertenecen al monopolio de los Black y hacen a la herencia del mismo.</span>',
        },

        "expediente de aria fawley": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "la rama de acónito seca",
          "cont": '<span><span class="book-clipping"><div class="book-image" style="--image: url(https://64.media.tumblr.com/36a192b703125f1a469e8b2ca5a04f1d/638d96be1047a32f-ed/s400x600/0fe38dab46c44bcfb0af2f0be5ae0d3770e2f4d2.gif)"></div><br><strong>Contrato</strong> Iniciado: 21/04/1952 | Terminado: 01/08/1952.<br><br><strong>Nombre Completo</strong> Aria Joy Fawley<br><br><strong>Profesión</strong> Actual Sanadora de Daños Provocados por Hechizos.<br><strong>Edad</strong> 37 años.<br><strong>Linaje</strong> Semi-Veela.<br><br><strong>Adjuntos</strong><br>☒ Certificado de Nacimiento.<br>☒ Informe de Análisis de Sangre y Linaje<br>☒ Resultados TIMOs.<br>☒ Resultados EXTASIS<br>☒ Inclusión en ATM<br></span></span>',
        },

        "análisis de sangre de aria fawley": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de aria fawley",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Informe de Análisis de Sangre y Linaje</span></div><br><hr><br><br><strong>Nombre del paciente:</strong> <i>Aria J. Fawley</i> <br><strong>Edad:</strong> <i>3 meses</i> <br><strong>Fecha de la muestra:</strong> <i>9 de Mayo de 1915</i> <br><strong>Lugar de extracción:</strong> <i>Laboratorio de San Mungo</i> <br><br><hr><br><br><strong>Resultados del análisis:</strong> <br><i>La muestra ha sido sometida a encantamientos de revelación de linaje. <br>Se observa la siguiente clasificación:</i> <br><br>- <strong>Pureza sanguínea detectada:</strong> <i>Mestiza - Semi Veela</i><br><i>Se detecta linaje mágico estable y fuerte, con trazas de ascendencia no humana (veela). El individuo conserva capacidades mágicas completas, con características hereditarias propias de las veelas.</i> <br><br></span></span>',
        },

        "certificado de defunción": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de aria fawley",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>PERGAMINO DE DEFUNCIÓN</strong><br><i>Hospital San Mungo para Enfermedades y Heridas Mágicas – Archivo de los Caídos</i></div><br><strong>Nombre Completo del Paciente</strong>: Dominic.<br><strong>No. Expediente</strong>: SM-FD/1342-G<br><strong>Fecha de Ingreso</strong>: 25 de Marzo de 1939 - 07:05hs.<br><strong>Fecha de fallecimiento</strong>: 24 de Marzo de 1929 - 22:32hs.<br><br><strong>Edad</strong>: 32 años.<br><strong>Sangre</strong>: ☒ Pura &nbsp; ☐ Mestiza &nbsp; ☐ Muggle &nbsp; ☐ Criatura<br><br><strong>Motivo del ingreso</strong>: El cuerpo de Dominic fue hallado fallecido y llevado al hospital.<br><strong>Causa de fallecimiento</strong>: No hay causas suficientes, se supone causas naturales, aunque se notaron rastros de magia negra en su sangre.<br><br><strong>Área médica asignada</strong>: Archivo de los caídos.<br><strong>Atendido por</strong>: Thalia Wyrm, nigromante.<br><strong>Acompañante familiar</strong>: Esposa, Aria Fawley.<br><br><strong>Anexos</strong>:<br>☒ Firma de Thalia Wyrm.<br>☒ Firma de Aria Fawley.<br>☒ Sello de defunción emitido.</span></span>',
        },

        "certificado de nacimiento de theolonius covey": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de aria fawley",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> <i>Theolonius Dimitri Covey</i><br><strong>Fecha de nacimiento:</strong> <i>21 de Marzo de 1929</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo</i><br><strong>Nombre del padre:</strong> <i>Dominic.</i><br><strong>Nombre de la madre:</strong> <i>Myrna Covey</i><br><strong>Linaje mágico:</strong> <i>Mestizo</i><br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Medimaga Lyra Wyrm</i><br><strong>Observaciones médicas:</strong> <i>El recién nacido presenta un estado de salud estable.<br>Se recomienda control preventivo contra la fiebre de los duendecillos.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Irlanda, al 21 de marzo de 1929.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

        "contrato de aria fawley": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de aria fawley",
          "cont": '<span><span class="book-clipping"><span class="notebook">A quien corresponda,<br><br>Por medio de la presente, en calidad de Candidato principal de la Alianza de la Tradición Mágica y en representación propia, tengo el honor de recomendar a Aria Fawley para el ejercicio del cargo Subdirectora de San Mungo dentro de las estructuras políticas de nuestro mundo mágico.<br><br>Durante su trayectoria, Aria ha demostrado: <br>- Compromiso con los principios de la Alianza. <br>- Notable capacidad de liderazgo y organización. <br>- Firmeza en la defensa de los valores compartidos por nuestro grupo. <br>- Dedicación al bienestar de la comunidad mágica en su conjunto.<br><br>Por todo lo anterior, consideramos que su nombramiento en un cargo político superior <br>sería de gran beneficio tanto para nuestra organización como para la sociedad en general.<br><br><div align="left"><strong>_______________________</strong> <br><i>Nombre y cargo del firmante</i></div><br><br><div align="left"><strong>_______________________</strong> <br><i>Sello y respaldo de la organización política</i></div></span><br></span></span>',
        },

        "expediente de theolonius covey": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "la rama de acónito seca",
          "cont": '<span><span class="book-clipping"><div class="book-image" style="--image: url(https://64.media.tumblr.com/0aa548376e05f133aa04ce84ba7eac6c/d9bc33bac1d5011b-ca/s400x600/40a528716b1409ba67fd9499c0103a7fe3c093bc.gif)"></div><br><strong>Contrato</strong> Iniciado: 07/08/1952 | Cancelado: 16/08/1952.<br><br><strong>Nombre Completo</strong> Theolonius Dimitri Covey<br><br><strong>Profesión</strong> Desempleado<br><strong>Edad</strong> 23 años.<br><strong>Linaje</strong> <classified style="--char: 7"></classified> Puro.<br><br><strong>Adjuntos</strong><br>☒ Certificado de Nacimiento.<br>☒ Informe de Análisis de Sangre y Linaje.<br>☒ Evidencias de poderes de clarividencia.<br>☒ Resultados TIMOs.<br>☒ Resultados EXTASIS.<br></span></span>',
        },

        "certificado de cambio de nombre": {
          "visible": { "attr": { "sab": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de theolonius covey",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Ministerio de Magia</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Cambio de Nombre</span></div><br><hr><br><br><strong>Nombre original:</strong> <i>Myrna Selwyn</i><br><strong>Nuevo nombre registrado:</strong> <i>Myrna Covey</i><br><strong>Fecha de modificación:</strong> <i>17 de agosto de 1921</i><br><strong>Lugar de registro:</strong> <i>Oficinas del Wizengamot</i><br><br><hr><br><br><strong>Motivo de la solicitud:</strong> <i>Personales.</i><br><br><strong>Hechicero/a certificador:</strong> <i>Fletcher Silverwind</i><br><br><hr><br><br><div align="right"><i>En virtud de los estatutos mágicos en vigor,<br>se reconoce el cambio de nombre con efectos legales inmediatos.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello del Ministerio de Magia</i></div><br></span></span>',
        },
      },

      "actions": {
        "gematria veritas": {
          "leve": 'Paso #1: Se reinicia el desafío.',
          "moderado": 'Paso #1: Permite visualizar una puerta, aunque desaparece al instante impidiendo su ingreso. Se reinicia el desafío.',
          "exitoso": 'Paso #1: La puerta aparece materializada frente a ellos. Una vez encontrada la entrada, un torrente de energía caótica bloquea el paso, siendo necesario una estabilización. Si fallan, la energía colapsa en un vórtice que reinicia el desafío.',
          "critico": 'Paso #1: La puerta aparece materializada frente a ellos. Una vez encontrada la entrada, un torrente de energía caótica bloquea el paso, siendo necesario una estabilización. Si fallan, la energía colapsa en un vórtice que reinicia el desafío.',
        },

        "numerus occultus": {
          "leve": 'Paso #1: Se reinicia el desafío.',
          "moderado": 'Paso #1: Permite visualizar una puerta, aunque desaparece al instante impidiendo su ingreso. Se reinicia el desafío.',
          "exitoso": 'Paso #1: La puerta aparece materializada frente a ellos. Una vez encontrada la entrada, un torrente de energía caótica bloquea el paso, siendo necesario una estabilización. Si fallan, la energía colapsa en un vórtice que reinicia el desafío.',
          "critico": 'Paso #1: La puerta aparece materializada frente a ellos. Una vez encontrada la entrada, un torrente de energía caótica bloquea el paso, siendo necesario una estabilización. Si fallan, la energía colapsa en un vórtice que reinicia el desafío.',
        },

        "iteratio perfectum": {
          "leve": 'Paso #2: Se reinicia el desafío.',
          "moderado": 'Paso #2: Balancea múltiples corrientes de magia simultáneas y mantiene el equilibrio mediante repeticiones precisas. Habilita una entrada a lo que parece ser un segundo nivel. Sin embargo, es una entrada fractal que solo se abre si encuentran la proporción áurea exacta dentro de un entramado geométrico.',
          "exitoso": 'Paso #2: Balancea múltiples corrientes de magia simultáneas y mantiene el equilibrio mediante repeticiones precisas. Habilita una entrada a lo que parece ser un segundo nivel. Sin embargo, es una entrada fractal que solo se abre si encuentran la proporción áurea exacta dentro de un entramado geométrico.',
          "critico": 'Paso #2: Balancea múltiples corrientes de magia simultáneas y mantiene el equilibrio mediante repeticiones precisas. Habilita una entrada a lo que parece ser un segundo nivel. Sin embargo, es una entrada fractal que solo se abre si encuentran la proporción áurea exacta dentro de un entramado geométrico.',
        },

        "aequatio incantamenta": {
          "leve": 'Paso #2: Se reinicia el desafío.',
          "moderado": 'Paso #2: Balancea múltiples corrientes de magia simultáneas y mantiene el equilibrio mediante repeticiones precisas. Habilita una entrada a lo que parece ser un segundo nivel. Sin embargo, es una entrada fractal que solo se abre si encuentran la proporción áurea exacta dentro de un entramado geométrico.',
          "exitoso": 'Paso #2: Balancea múltiples corrientes de magia simultáneas y mantiene el equilibrio mediante repeticiones precisas. Habilita una entrada a lo que parece ser un segundo nivel. Sin embargo, es una entrada fractal que solo se abre si encuentran la proporción áurea exacta dentro de un entramado geométrico.',
          "critico": 'Paso #2: Balancea múltiples corrientes de magia simultáneas y mantiene el equilibrio mediante repeticiones precisas. Habilita una entrada a lo que parece ser un segundo nivel. Sin embargo, es una entrada fractal que solo se abre si encuentran la proporción áurea exacta dentro de un entramado geométrico.',
        },

        "porta fractalis": {
          "leve": 'Paso #3: Se reinicia el desafío.',
          "moderado": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio" class="check-cards"></adding>',
          "exitoso": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio" class="check-cards"></adding>',
          "critico": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio" class="check-cards"></adding>',
        },

        "sectio aurea": {
          "leve": 'Paso #3: Se reinicia el desafío.',
          "moderado": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio" class="check-cards"></adding>',
          "exitoso": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio - " class="check-cards"></adding>',
          "critico": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio" class="check-cards"></adding>',
        },

        "modus symmetria": {
          "leve": 'Paso #3: Se reinicia el desafío.',
          "moderado": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio" class="check-cards"></adding>',
          "exitoso": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio" class="check-cards"></adding>',
          "critico": 'Paso #3: La energía es colocada en los patrones correctos, habilitando una escalera que desciende a un nivel inferior.<br /><adding search="segundo nivel del estudio" class="check-cards"></adding>',
        },
      },
    },
    // fin the withered pot

    "the lupine killer": {
      "description": "Aidan Flamel se encuentra bajo la lupa del Ministerio de Magia, que busca descubrir si el Acónito que Sirius alejó del castillo está relacionada con su correspondiente muerte. Y lo más importante, esa planta fue utilizada para algo más.",
      "image": "https://2img.net/i.imgur.com/xPVXOxC.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["i/u108", "/u146"],
      "dependency": ["the withered pot"],
      "type": "interrogatorio", "closed": false, "link": "", "tagged": ["sirius"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the lupine killer

    "the fortune of the three eyes": {
      "description": "Theolonius Covey se encuentra bajo la lupa del Ministerio de Magia, que busca descubrir si poseía el Acónito de Sirius Black, si guarda alguna relación con la profecía del mismo y por qué el contrato con el ex-candidato ha sido cancelado.",
      "image": "https://2img.net/i.imgur.com/MAA4xsy.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["i/u97", "/u8"],
      "dependency": ["the withered pot", "ember pass"],
      "type": "interrogatorio", "closed": false, "link": "/t847-interrogatorio-the-fortune-of-the-three-eyes", "tagged": ["sirius"],

      "cards": [],
      "searchs": {},
                        
      "actions": {
        "legeremens": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'El personaje puede acceder a los recuerdos del 16 de agosto, visualizar a Theolonius al lado de su madre quien yace recostada en una cama. El reloj sobre la misma, marca las 11:05 am. Sin embargo, hay un pequeño vacío. Las luces cambian de lugar, Theolonius sigue al lado de su madre, pero el reloj marca las 12:30hs.',
          "exitoso": 'El personaje puede acceder a los recuerdos del 16 de agosto, visualizar a Theolonius al lado de su madre quien yace recostada en una cama. El reloj sobre la misma, marca las 11:05 am. Sin embargo, hay un pequeño vacío. Las luces cambian de lugar, Theolonius sigue al lado de su madre, pero el reloj marca las 12:30hs.',
          "critico": 'El personaje puede acceder a los recuerdos del 16 de agosto, visualizar a Theolonius al lado de su madre quien yace recostada en una cama. El reloj sobre la misma, marca las 11:05 am. Sin embargo, hay un pequeño vacío. Las luces cambian de lugar, Theolonius sigue al lado de su madre, pero el reloj marca las 12:30hs.',
        },

        "veritas relego": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'El personaje interrogado deberá revelar si esta mintiendo o no.',
          "exitoso": 'El personaje interrogado deberá revelar si esta mintiendo o no.',
          "critico": 'El personaje interrogado deberá revelar si esta mintiendo o no.',
        },

        "murmura futuri": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'Se escuchan los agresivos pasos de las personas que caminan de un lado hacia otro, mientras de fondo se escucha una voz decir: Esto no es un simulacro. Código rojo. Código rojo. Sigan el procedimiento.',
          "exitoso": 'Se escuchan los agresivos pasos de las personas que caminan de un lado hacia otro, mientras de fondo se escucha una voz decir: Esto no es un simulacro. Código rojo. Código rojo. Sigan el procedimiento.',
          "critico": 'Se escuchan los agresivos pasos de las personas que caminan de un lado hacia otro, mientras de fondo se escucha una voz decir: Esto no es un simulacro. Código rojo. Código rojo. Sigan el procedimiento.',
        },

        "veniens empathy": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'El vidente puede percibir la desesperación, como un suspiro contenido que busca retener una aire faltante.',
          "exitoso": 'El vidente puede percibir la desesperación, como un suspiro contenido que busca retener una aire faltante.',
          "critico": 'El vidente puede percibir la desesperación, como un suspiro contenido que busca retener una aire faltante.',
        },

        "prophetia": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'La voz se pierde en un eco. Una profecía naciente: "Cuando el metal de las insignias pierda su brillo ante el cielo ceniza, no será el fuego lo que devore los cimientos, sino lo que el mar oculta. Donde antes hubo orden, la marea sembrará la duda; donde hubo valor, la espuma dejará miedo. Los guardianes, cuya mano nunca tembló al alzar la madera, sentirán el peso. Porque cuando la ola rompa contra las puertas del Ministerio, no habrá refugio para los pastores, solo el deber de ser el muro mientras el mundo, a sus espaldas, se ahoga en silencio".',
          "exitoso": 'La voz se pierde en un eco. Una profecía naciente: "Cuando el metal de las insignias pierda su brillo ante el cielo ceniza, no será el fuego lo que devore los cimientos, sino lo que el mar oculta. Donde antes hubo orden, la marea sembrará la duda; donde hubo valor, la espuma dejará miedo. Los guardianes, cuya mano nunca tembló al alzar la madera, sentirán el peso. Porque cuando la ola rompa contra las puertas del Ministerio, no habrá refugio para los pastores, solo el deber de ser el muro mientras el mundo, a sus espaldas, se ahoga en silencio".',
          "critico": 'La voz se pierde en un eco. Una profecía naciente: "Cuando el metal de las insignias pierda su brillo ante el cielo ceniza, no será el fuego lo que devore los cimientos, sino lo que el mar oculta. Donde antes hubo orden, la marea sembrará la duda; donde hubo valor, la espuma dejará miedo. Los guardianes, cuya mano nunca tembló al alzar la madera, sentirán el peso. Porque cuando la ola rompa contra las puertas del Ministerio, no habrá refugio para los pastores, solo el deber de ser el muro mientras el mundo, a sus espaldas, se ahoga en silencio".',
        },
      },
    },
    // fin the fortune of the three eyes

    "through the green abyss": {
      "description": "Siguiendo los mapas encontrados en el estudio de Sirius y las indicaciones del alquimista. Es necesario adentrarse a uno de los lugares más peligrosos del mundo mágico: o coração do curupira (El corazón del Curupira). Una de las partes más espesas de la selva brasilera que dicen que está protegida por el mismo Curupira.",
      "image": "https://2img.net/i.imgur.com/c4omOwT.png", "requisitos": ["Un miembro debe tener CCM en Avanzado", "Un miembro del Dpto de Seguridad Mágica"],
      "users": [],
      "dependency": ["the lupine killer"],
      "type": "misión", "closed": false, "link": "", "tagged": ["sirius"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin through the green abyss

    "the fenris project": {
      "description": "Si bien muchos consideran que la investigación sobre las pistas del asesinato terminaron. Con los últimos descubrimientos, varias mentes brillantes se juntan para comprobar si la teoría de Sirius es cierta y es posible crear una poción que permita eliminar las secuelas que producen la licantropía.",
      "image": "https://2img.net/i.imgur.com/LhHwm7Y.png", "requisitos": ["Un miembro debe tener Alquimia en Avanzado", "Un miembro debe tener CCM en Avanzado", "Un licántropo voluntario"],
      "users": [],
      "dependency": ["through the green abyss"],
      "type": "misión", "closed": false, "link": "", "tagged": ["sirius"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the fenris project

    "the foretold story": {
      "description": "Tras descubrir que Úrsula Flint está viva y estuvo en el castillo durante todo momento. Los miembros del departamento de Seguridad Mágica, consideraron que sería apropiado realizar algunas preguntas de manera oficial. Tratando de descubrir si sabe más de lo que ha olvidado con el paso de los años.",
      "image": "https://2img.net/i.imgur.com/uhzqWY8.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["/u50", "/u13"],
      "dependency": ["traces in black"],
      "type": "interrogatorio", "closed": false, "link": "/t660-interrogatorio-the-foretold-story", "tagged": ["sirius"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the foretold story

    "whispers of the future": {
      "description": "Con la historia que lograron recabar del interrogatorio de la señora Flint, lo único que queda es validar que sea verdad. Por lo tanto, un miembro del departamento de seguridad y un inefable, se internarán dentro de los pasillos de la cámara de las profecías para ver si Úrsula tenía razón o si solo eran los dichos de una señora que ya entró en la edad de inventar aquello que no recuerda.",
      "image": "https://2img.net/i.imgur.com/NhDTPNU.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica", "Un inefable"],
      "users": [],
      "dependency": ["the foretold story"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["sirius"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin whispers of the future

    "in search of the deathly hallows": {
      "description": "Las reliquias de la muerte muchas veces fueron buscadas y muchas fuentes confirman que solo se tratan de una fábula para enseñar algo importante a los niños y nada más. Sin embargo, hay quienes creen en ellas. Y no solo eso, suelen tener bastantes registros históricos tratando de rastrear dónde se encontraron. The Deadly Club, es un espacio que se encuentra en Hogsmeade donde muchos magos se reúnen a investigar y compartir sus investigaciones. Mientras no cambien nada, cualquiera puede entrar a echar un vistazo.",
      "image": "https://2img.net/i.imgur.com/DWMLO6R.png", "requisitos": [],
      "users": [],
      "dependency": ["whispers of the future"],
      "type": "misión", "closed": false, "link": "", "tagged": ["wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin in search of the deathly hallows

    "bottle of sorrows": {
      "description": "Los laboratorios de San Mungo, se llenan con una nueva incógnita, ¿Qué está investigando Morgana? Con un frasco y una pequeña muestra de un líquido malva brillante, deberán descubrir qué buscaba realizar aquel elixir.",
      "image": "https://2img.net/i.imgur.com/l0Qfh5X.png", "requisitos": ["Un miembro debe tener Alquimia o Pociones en Avanzado"],
      "users": ["/u91", "/u8","/u134"],
      "dependency": ["wounds from the past"],
      "type": "investigación", "closed": false, "link": "https://blackwave.foroactivo.com/t837-investigacion-bottle-of-sorrows", "tagged": ["morgana"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "viridian", }, "place": "",
          "cont": '<span>Con su experiencia en pociones, puede reconocer que todo elixir que posea ese brillo y ese aroma no puede estar demasiado lejos de ser un veneno o efectos no del todo positivos. Podría recomendar al resto no pobrar la poción.</span>',
        }
      ],

      "searchs": {
        "probar la poción": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Los primeros síntomas generan un tipo de somnolencia, provocando que el personaje le cueste mantener los ojos abiertos. El cosquilleo en las extremidades es lo primero que se siente, antes de que todo el cuerpo entre en parálisis. Además de eso, la persona sentirá que todas sus emociones se encuentran totalmente apagadas, recibiendo solo un atisbo de ellas. El personaje no podrá realizar acciones o moverse, hasta que no se lo libere.</span>',
        },
        "antídoto para el elixir de morgana": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "15" }, "job": "invalid", "name": "invalid", }, "place": "probar la poción",
          "cont": '<span>La preparación del antídoto para Veneno Rosa, suena como una excelente posibilidad para recuperar el personaje que ha bebido el elixir.</span>',
        },
        "parecido con veneno color rosa": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "15" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El veneno color rosa, de un tono chillón de rosa, es una toxina de acción rápida que ataca el sistema nervioso, provocando un estado inicial de euforia seguido de desorientación, debilidad muscular y, finalmente, una parálisis progresiva. Por alguna razón, y aunque el elixir tiene un color diferente, mantiene una estructura similar.</span>',
        },
        "información de muted magic": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "o", }, "place": "intervención",
          "cont": '<span>Durante la investigación Muted Magic, donde investigaron los diarios de Morgana, habían encontrado una carta que indicaba que un buen inhibidor de los alelos licántropos podía llegar a ser la lágrima de mandrágora en estado puro. Sin embargo, iba acompañada de una lista de contras. Para quien lo ingería, en caso de que la proporción no fuera la correcta, podía generar parálisis total o, incluso, muerte. Para quien la recolectaba, las expectativas de vida eran parecidas, debido a que su llanto es fatal. Incluso, en el diario, encontraron una nota de Morgana indicando que ese no era el mejor camino a tomar. Textualmente: «No, gracias». Sin embargo, todo parecería indicar que no encontró mejor solución.</span>',
        },
        "efectos de las lágrimas de mandrágora en la poción": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "15" }, "job": "invalid", "name": "invalid", }, "place": "información de muted magic",
          "cont": '<span>Al revisar la lista de ingredientes, suponiendo que el último ingrediente son lágrimas de mandrágora se podría concluir que los efectos son suficientes como para dejar incapacitado a un gigante.</span>',
        },
        "sobre las lágrimas de mandrágora": {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "15" }, "job": "invalid", "name": "invalid", }, "place": "información de muted magic",
          "cont": '<span>Las lágrimas de mandrágora son extremadamente valiosas y peligrosas. Se dice que su llanto es mortal para quien lo recolecta, y que solo pueden ser utilizadas en proporciones mínimas para evitar efectos letales. Se intentó en varias ocasiones, sin embargo, herbologos de todas partes del mundo continuaban muriendo a causa del llanto de la planta. Finalmente, se dejó de intentar y comenzó a utilizarse únicamente sus raíces, pues eran más fáciles de recolectar.</span>',
        },
        "historia de las lágrimas": {
          "visible": { "attr": { "val": "min" }, "know": { "historia de la magia": "10" }, "job": "invalid", "name": "invalid", }, "place": "sobre las lágrimas de mandrágora",
          "cont": '<span>Durante muchos años se intentó la manera de recolectar este líquido. Dado que, en los primeros siglos donde se registró la magia, se utilizaba como un potente antídoto que, mezclado con las hierbas correctas, anulaba cualquier rastro de dolor. Sin embargo, el peligro de su recolección y las muertes que produjo, generó que en el XII, comenzara a recomendarse el uso de las raíces. Para cuando el Ministerio se formó, muchos años después, prohíbieron la comercialización de dichas lágrimas con el fin de evitar más muertes.</span>',
        },
        "alcance de la poción": {
          "visible": { "attr": { "val": "min" }, "know": { "alquimia": "10" }, "job": "invalid", "name": "invalid", }, "place": "efectos de las lágrimas de mandrágora en la poción",
          "cont": '<span>Si se tiene en cuenta que la poción buscaba aplicarse en licantropos, podría concluirse que si una persona tomaba la poción antes de la luna llena, lograría mantener su cuerpo paralisado durante todo el efecto de la luna. Recuperando la consciencia unas 12 o 15 horas después de haber ingerido la misma.</span>',
        },
        "conclusión de la poción": {
          "visible": { "attr": { "val": "min" }, "know": { "curación": "15" }, "job": "invalid", "name": "invalid", }, "place": "efectos de las lágrimas de mandrágora en la poción",
          "cont": '<span>Lo que Morgana logró no fue inhibir los alelos licantropos de su hermana, sino generar una poción tan potente que la mantendría inconsciente durante toda su transición de luna llena, recuperando la consciencia cuando el proceso hubiera terminado, se transformara o no. No era una solución a la licantropía, era un parche para evitar que Merlina se volviera peligrosa para ella o demás personas durante la luna llena.</span>',
        },
        "replicar la poción": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "15" }, "job": "invalid", "name": "invalid", }, "place": "efectos de las lágrimas de mandrágora en la poción",
          "cont": '<span>Por mucho que deseen intentar replicar la poción, la única forma de lograrlo sería poder recolectar lágrimas de mandrágora, las cuales, al no ser comercializables requerirán seguir los pasos de Morgana para descubrir dónde consiguió ella las mismas para elaborar aquella poción.</span>',
        },
        "revisar al ratón": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "15" }, "job": "invalid", "name": "invalid", }, "place": "efectos de las lágrimas de mandrágora en la poción",
          "cont": '<span>Al revisar la jaula donde se encontraba el pequeño ratón, pueden descubrir que, aunque la poción hizo efecto, la ingesta era demasiado para alguien de su tamaño y, en conclusión, ha fallecido.</span>',
        },
      },

      "actions": {
        "revelio potionis": {
          "leve": '<span>Paso #1: no es suficiente para revelar información.</span>',
          "moderado": '<span>Paso #1: Permite identificar los siguientes ingredientes: Tentáculo de Murtlap, Lavanda seca, Cuerno en polvo de Bicornio, Agua de Luna, veneno de Acromántula, Hojas de Belladona y un ingrendiente adicional que no se llega a reconocer.</span>',
          "exitoso": '<span>Paso #1: Permite identificar los siguientes ingredientes: Tentáculo de Murtlap, Lavanda seca, Cuerno en polvo de Bicornio, Agua de Luna, veneno de Acromántula, Hojas de Belladona y un ingrendiente adicional que no se llega a reconocer.</span>',
          "critico": '<span>Paso #1: Permite identificar los siguientes ingredientes: Tentáculo de Murtlap, Lavanda seca, Cuerno en polvo de Bicornio, Agua de Luna, veneno de Acromántula, Hojas de Belladona y un ingrendiente adicional que no se llega a reconocer.</span>',
        },
        "ignis mortis": {
          "leve": '<span>Paso #2: Permite sin reconocer la sustancia original, que fue agregada en escencia pura.</span>',
          "moderado": '<span>Paso #2: Permite sin reconocer la sustancia original, que fue agregada en escencia pura.</span>',
          "exitoso": '<span>Paso #2: Permite sin reconocer la sustancia original, que fue agregada en escencia pura.</span>',
          "critico": '<span>Paso #2: Permite sin reconocer la sustancia original, que fue agregada en escencia pura.</span>',
        },
        "unus multis": {
          "leve": '<span>Paso #3: Al realizarse copias y analisis de las mismas, se puede llegar a la conclusión de que el elixir mantiene propiedades que generan un bloqueo emocional y parálisis.</span>',
          "moderado": '<span>Paso #3: Al realizarse copias y analisis de las mismas, se puede llegar a la conclusión de que el elixir mantiene propiedades que generan un bloqueo emocional y parálisis.</span>',
          "exitoso": '<span>Paso #3: Al realizarse copias y analisis de las mismas, se puede llegar a la conclusión de que el elixir mantiene propiedades que generan un bloqueo emocional y parálisis.</span>',
          "critico": '<span>Paso #3: Al realizarse copias y analisis de las mismas, se puede llegar a la conclusión de que el elixir mantiene propiedades que generan un bloqueo emocional y parálisis.</span>',
        },
        "ut solem creare aliquid novi": {
          "leve": '<span>Paso #4: No es suficiente para revelar información.</span>',
          "moderado": '<span>Paso #4: Al acelerar la fermentacion de la sustancia, permitiendo su transformación en nuevos compuestos con propiedades alteradas, pueden llegar a la siguiente conclusión: El componente desconocido es la causa del bloqueo emocional y la parálisis corporal, mientras que los ingredientes conocidos refuerzan los alelos propios de los magos y brujas. Notificar al staff cuando tengan los cuatro pasos completados.</span>',
          "exitoso": '<span>Paso #4: Al acelerar la fermentacion de la sustancia, permitiendo su transformación en nuevos compuestos con propiedades alteradas, pueden llegar a la siguiente conclusión: El componente desconocido es la causa del bloqueo emocional y la parálisis corporal, mientras que los ingredientes conocidos refuerzan los alelos propios de los magos y brujas. Notificar al staff cuando tengan los cuatro pasos completados.</span>',
          "critico": '<span>Paso #4: Al acelerar la fermentacion de la sustancia, permitiendo su transformación en nuevos compuestos con propiedades alteradas, pueden llegar a la siguiente conclusión: El componente desconocido es la causa del bloqueo emocional y la parálisis corporal, mientras que los ingredientes conocidos refuerzan los alelos propios de los magos y brujas. Notificar al staff cuando tengan los cuatro pasos completados.</span>',
        },
      },
    },
    // fin bottle of sorrows

    "muted magic": {
      "description": "Con el diario de investigaciones de Morgana y las notas que encontraron en su casa, la investigación es dejada en manos de quienes más saben, para poder llegar a comprender qué estaba investigando la ex Directora de San Mungo y hasta dónde llegaban sus investigaciones.",
      "image": "https://2img.net/i.imgur.com/3KEU7L5.png", "requisitos": ["Un miembro debe poseer Historia de la Magia en Avanzado", "Un miembro debe tener Curacion en Avanzado"],
      "users": ["/u55", "/u8","/u91"],
      "dependency": ["wounds from the past"],
      "type": "investigación", "closed": false, "link": "https://blackwave.foroactivo.com/t836-investigacion-muted-magic", "tagged": ["morgana"],

      "cards": [],

      "searchs": {
        "secciones del cuaderno": {
          "visible": { "attr": {"int": "1"}, "know": {"val": "min"}, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El cuaderno se encuentra separado en 8 partes correspondientes a cada fase lunar. Entre cada parte hay hojas en blanco con anotaciones de Morgana o información adicional.</span>',
        },
        "luna nueva": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "secciones del cuaderno",
          "cont": '<span class="book-clipping"><u><strong>LUNA NUEVA</strong></u><br><br><strong>Se observan los siguientes comportamientos</strong>: Introspección profunda. Periodo de calma forzada, reclusión. Aislamiento voluntario para planear cómo manejar la siguiente fase.<br><br><strong>Emociones frecuentes</strong>: Serenidad, pero con una melancolía subyacente. Establece intenciones para el ciclo.<br><br><strong>Alelos Genéticos</strong>: Baja: 1/8. El gen licántropo está en su punto de menor expresión, casi inactivo.<br></span>',
        },
        "luna creciente": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "secciones del cuaderno",
          "cont": '<span class="book-clipping"><u><strong>LUNA CRECIENTE</strong></u><br><br><strong>Se observan los siguientes comportamientos</strong>: Iniciativa para pequeñas tareas sociales o mágicas. Busca amistad y apoyo emocional. Nutre planes o relaciones iniciadas en la Luna Nueva.<br><br><strong>Emociones frecuentes</strong>: Optimismo, cautela. Ligeros picos de suerte o éxito en tareas menores.<br><br><strong>Alelos Genéticos</strong>: Baja-Media: 2/8. El gen comienza a "despertar", incrementando ligeramente la sensibilidad a ruidos o movimientos.<br></span>',
        },
        "luna cuarto creciente": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "secciones del cuaderno",
          "cont": '<span class="book-clipping"><u><strong>LUNA CUARTO CRECIENTE</strong></u><br><br><strong>Se observan los siguientes comportamientos</strong>: Actúa con fuerza y determinación para lograr una intención. Periodos de gran creatividad mental o mágica. Ciertos cierres o resoluciones de problemas.<br><br><strong>Emociones frecuentes</strong>: Calma superficial, pero con aumento de la motivación y la energía física. Irritabilidad creciente si se frustra.<br><br><strong>Alelos Genéticos</strong>: Media: 4/8. La mitad de la influencia lunar. Aumento notable de la energía y la necesidad de movimiento. Primeros indicios de una postura más defensiva.<br></span>',
        },
        "luna creciente gibosa": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "secciones del cuaderno",
          "cont": '<span class="book-clipping"><u><strong>LUNA CRECIENTE GIBOSA</strong></u><br><br><strong>Se observan los siguientes comportamientos</strong>: Revisar y doble-chequear planes. Muestra paciencia extrema. Aumenta la perspectiva sobre su condición. Puede mostrar colaboración si se siente segura.<br><br><strong>Emociones frecuentes</strong>: Tranquilidad forzada. Sentimiento de gestación o espera inminente. Ligeros temblores o inquietud nocturna.<br><br><strong>Alelos Genéticos</strong>: Alta: 6/8. El gen está a un nivel de expresión crítica. La biología se prepara para la transformación. Aumento de la fuerza muscular y la agudeza sensorial.<br></span>',
        },
        "luna llena": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "secciones del cuaderno",
          "cont": '<span class="book-clipping"><u><strong>LUNA LLENA</strong></u><br><br><strong>Se observan los siguientes comportamientos</strong>: Máximo potencial de romance o sanación antes de la transformación. Muestra claridad momentánea sobre su estado. Necesidad de dejar ir y corregir viejas heridas. Carga energía (si se le permite el ritual). Transformación Licántropa.<br><br><strong>Emociones frecuentes</strong>: Exaltación, picos de ansiedad, y finalmente la rendición a la transformación. Miedo seguido de ira/salvajismo.<br><br><strong>Alelos Genéticos</strong>: Máxima: 8/8. Expresión total del gen licántropo. Alteración completa del sistema nervioso y físico.<br></span>',
        },
        "luna menguante gibosa": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "secciones del cuaderno",
          "cont": '<span class="book-clipping"><u><strong>LUNA MENGUANTE GIBOSA</strong></u><br><br><strong>Se observan los siguientes comportamientos</strong>: Generosidad post-transformación (si la transformación fue "exitosa"). Necesidad de purificación y descanso. Se esfuerza por romper con la sensación de maldición.<br><br><strong>Emociones frecuentes</strong>: Alivio, dolor físico. Sentimiento de abundancia de vida, aunque agotador. Intenta cosechar los frutos de su introspección.<br><br><strong>Alelos Genéticos</strong>: Alta: 6/8. El gen retrocede rápidamente, pero los efectos residuales (dolor, fatiga) son altos. El cuerpo está en modo de recuperación intensiva.<br></span>',
        },
        "luna cuarto menguante": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "secciones del cuaderno",
          "cont": '<span class="book-clipping"><u><strong>LUNA CUARTO CRECIENTE</strong></u><br><br><strong>Se observan los siguientes comportamientos</strong>: Se enfoca en la limpieza y purga de su entorno. Selección estricta de sus prioridades. Busca activamente la conclusión de temas pendientes.<br><br><strong>Emociones frecuentes</strong>: Sentimiento de reflexión profunda. Cierta frialdad emocional o desapego (para poder dejar ir las toxinas emocionales del ciclo).<br><br><strong>Alelos Genéticos</strong>: Media: 4/8. El gen sigue disminuyendo. Recuperación emocional más lenta que la física. Vuelve a una línea base de control.<br></span>',
        },
        "luna menguante": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "secciones del cuaderno",
          "cont": '<span class="book-clipping"><u><strong>LUNA MENGUANTE</strong></u><br><br><strong>Se observan los siguientes comportamientos</strong>: Necesidad de descanso y recuperación total. Muestra gran sabiduría al compartir sus aprendizajes. Símbolo de renacimiento personal después de la "muerte" del ciclo anterior.<br><br><strong>Emociones frecuentes</strong>: Profunda rendición al proceso. Una sanación mental y emocional que la prepara para la Luna Nueva.<br><br><strong>Alelos Genéticos</strong>: Baja-Media: 2/8. El gen está casi en el nivel de reposo. El cuerpo prioriza la curación celular y el descanso profundo.<br></span>',
        },
        "sobre: explicación de la marea lunar de nuestro querido amiguito": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "luna cuarto creciente",
          "cont": '<span class="book-clipping"><span class="notebook">Estimada señorita Dempsey,<br><br>Por petición de Amaya respondo a su consulta, pero quisiera dejar en claro que, la astronomía, para mí, es solo un pasatiempo. Prefiero dedicar mis conocimientos en la seguridad. Sin embargo, he aceptado formar parte de esta investigación y responderé la consulta que me presenta.<br><br>He analizado tus datos sobre la progresión de los alelos licántropos de tu hermana a lo largo del ciclo lunar. Mi teoría propone que la expresión del gen licántropo no es un simple interruptor de encendido/apagado, sino que funciona al igual que la marea, impulsada por la misma fuerza gravitacional que afecta a los océanos de nuestro planeta.<br><br>Las mareas terrestres son el resultado de la atracción gravitacional de la Luna, principalmente, y el sol sobre la tierra.<br><br>Durante el punto más alto, el agua se abulta en el lado de la Tierra más cercano a la luna y, crucialmente, también en el lado opuesto, debido a la inercia y al centro de la masa del sistema Tierra-Luna. Mientras que el punto más bajo ocurre en las zonas intermedias.<br><br>La masa de la Luna, al alcanzar su máximo potencial de visibilidad (lo que conocemos como Luna Llena), ejerce una atracción gravitacional que estimula directamente la expresión de los alelos licántropos en el torrente sanguíneo, el sistema nervioso o el cerebro.<br><br>La variación de los alelos, tu escala de 1/8 a 8/8, calca perfectamente el ciclo de una marea alta, luna llena, y una marea baja, luna nueva.<br><br>Desde la luna nueva, donde se genera la mínima influencia, la marea genética está en su punto más bajo. Los alelos están en estado de latencia, lo que explica la calma y la introspección. <br><br>Durante las lunas crecientes, el campo gravitacional percibido aumenta progresivamente. La energía lunar empieza a atraer o activar la expresión genética. Esto se traduce en el aumento de la energía, la creatividad y la irritabilidad.<br><br>El pico se produce durante la luna llena, la marea genética alcanza su punto máximo de expresión y saturación. Esto provoca la reacción biológica extrema de la transformación. La concentración de los alelos activos es tan alta que sobrepasa el umbral de control mágico o mental. <br><br>Inmediatamente después de la luna llena, la influencia decrece, y el cuerpo entra en un estrado de drenaje y purificación.<br><br>Por supuesto, mis conocimientos de sanación, se basan en curar rápidamente compañeros de trabajo, por lo tanto, no podría ayudarla con cuáles son los siguientes pasos para que enfoque sus intervenciones. <br><br>Sin embargo, dado el puesto de trabajo que ostento y aunque sus intenciones sean buenas, tengo que comentar mi desacuerdo con documentos oficiales en relación con su hermana. Si por el momento guardo silencio se debe a las promesas que le he hecho a Amaya y porque sé que Merlina es inocente de todos los sucesos acontecidos. Pese a eso, si intuyo que algún movimiento excede la protección de su hermana como licántropo, activaré las investigaciones correspondientes. En otras palabras, agradecería que, cualquier acción ilegal, la mantenga alejada de mi conocimiento.<br><br>Espero que esta analogía ayude a estructurar su investigación. La luna no solo se ilumina, también empuja. <br>Suerte con su búsqueda, espero, por el bien de los hombres lobos, que tenga éxito. <br><br>Saludos,<br>Edwin Merrythought.<br>2 de septiembre de 1938.</span><br></span>',
        },
        "sobre: opinión de tratamiento médico": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "luna menguante gibosa",
          "cont": '<span class="book-clipping"><span class="notebook">Señorita Dempsey,<br><br>Tras revisar sus notas sobre el estado de Merlina en sus diferentes estados de transformación, mi diagnóstico es claro: el cuerpo sufre un «síndrome de resaca celular». Cuando los alelos bajan de 8/8 a 6/8 bruscamente, el tejido muscular y óseo queda exhausto por la contracción acelerada.<br><br>Mi opinión profesional es que cualquier tratamiento debe evitar los sedantes mágicos fuertes en esta fase; el hígado ya está procesando el exceso de toxinas licántropas y añadir pociones para dormir podría inducir un coma. Recomiendo baños de sales para drenar la energía estática de los músculos y una dieta rica en hierro para recuperar la sangre perdida en la regeneración. La sanación aquí no es solo física, es homeostática. Hay que convencer al cuerpo de que la marea ya se ha ido.<br><br>Adjunto diferentes ideas que pueden llegar a recuperar el estado de su hermana y las notas que llevan a mis conclusiones.<br><br>Gracias por permitir que me quede en el anonimato, entenderás que no todos quieren estar relacionados con alguien como tú, excluiré la condición de Merlina de mi decisión, ella no tiene la culpa.<br></span></span>',
        },
        "conclusión notas fibras musculares": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "10"}, "job": "invalid", "name": "invalid", }, "place": "sobre: opinión de tratamiento médico",
          "cont": '<span class="book-clipping"><strong>Análisis de fibras musculares tras el retroceso de la fase 8/8 a 6/8</strong>:<br><br>Al observar las muestras de tejido de Merlina apenas doce horas después de la reversión, las células presentan una distorsión por tracción. No es una herida externa, es una fatiga estructural. El paso de la morfología loba a la humana en un tiempo tan reducido obliga a las mitocondrias mágicas a trabajar al triple de su capacidad. Suministrar un sedante fuerte ahora sería como intentar apagar un incendio inundando los cimientos: el sistema colapsaría por exceso de presión, no por falta de descanso.</span>',
        },
        "conclusión notas conteo de hematíes": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "10"}, "job": "invalid", "name": "invalid", }, "place": "sobre: opinión de tratamiento médico",
          "cont": '<span class="book-clipping"><strong>Conteo de hematíes en la fase de Luna Menguante Gibosa</strong>:<br><br>He detectado una anemia súbita y severa justo cuando la marea genética, como la has llamado, empieza a retirarse. La regeneración acelerada de heridas y el cambio de pelaje a piel consumen las reservas de hierro de forma voraz. Si no se repone mediante una dieta específica, el cuerpo empezará a canibalizar su propia energía vital para mantener la temperatura corporal. La palidez de Merlina no es por el trauma, es por el consumo interno de recursos.</span>',
        },
        "conclusión notas conductividad eléctrica en la piel": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "10"}, "job": "invalid", "name": "invalid", }, "place": "sobre: opinión de tratamiento médico",
          "cont": '<span class="book-clipping"><strong>Medición de la conductividad eléctrica en la piel post-transformación</strong>:<br><br>El cuerpo de un licántropo retiene una carga residual de magia lunar que yo llamo "energía estática de marea". Esta carga mantiene los músculos en un estado de tensión involuntaria (micro-espasmos). Los baños de sales no son un lujo estético, Morgana; actúan como un polo a tierra. El sodio y el magnesio en el agua atraen esa estática hacia afuera, permitiendo que las fibras musculares finalmente "suelten" la forma del lobo y acepten la forma humana.</span>',
        },
        "conclusión notas toxinas en el torrente sanguíneo": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "10"}, "job": "invalid", "name": "invalid", }, "place": "sobre: opinión de tratamiento médico",
          "cont": '<span class="book-clipping"><strong>Filtración de toxinas en el torrente sanguíneo</strong>:<br><br>Durante la transformación, el metabolismo cambia tan rápido que genera subproductos químicos que el hígado humano no está diseñado para procesar en grandes cantidades. Mis notas indican que el hígado de Merlina está operando al límite de su capacidad metabólica durante la Luna Menguante. Cualquier poción compleja o "filtro de sueño" adicional en este momento actuaría como un veneno, ya que el órgano simplemente no tendría cómo filtrarlo. Debemos limpiar el filtro antes de añadir más líquido.</span>',
        },
        "sobre: sugerencia de ingredientes de nuestro querido amiguito": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "5"}, "job": "invalid", "name": "invalid", }, "place": "luna cuarto menguante",
          "cont": '<span class="book-clipping"><span class="notebook">Morgana,<br><br>Si vas a intentar fabricar un regulador que logre limitar los efectos lunares en los cuerpos de tu hermana, necesitarás componentes que actúen como «anclas» o «diques» para frenar el flujo genético. <br><br>Sé que mi rigidez legal te exaspera y que ves en mi prudencia un obstáculo para tu ambición. No pretendo disculparme, mi lealtad a los protocolos de seguridad es lo que me mantiene con vida en mi profesión. Aunque coincido en que un regulador es una necesidad humanitaria para quienes portan esta condición, no puedo —ni quiero— permitir que experimentes con tu propia hermana en la sombra.<br><br>La experimentación humana no se vuelve aceptable porque el fin sea noble. Una poción de esta naturaleza, mal calibrada, podría derivar en resultados catastróficos: desde un colapso multiorgánico letal hasta una fijación genética irreversible que la deje atrapada en su forma lupina de manera permanente.<br><br>Por lo tanto, mi colaboración se detiene aquí hasta que reciba una confirmación escrita y consciente de Merlina. Ella debe conocer los riesgos, entender que su propia biología es el campo de pruebas y aceptar las consecuencias de un posible fallo. Sin su consentimiento explícito, no habrá más ingredientes, ni más teorías, ni más ayuda por mi parte.<br><br>Espero que tu deseo de salvarla no nuble tu respeto por su voluntad.<br><br>Atentamente,<br>Edwin Merrythought.<br></span></span>',
        },
        "segunda parte": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "10"}, "job": "invalid", "name": "invalid", }, "place": "sobre: sugerencia de ingredientes de nuestro querido amiguito",
          "cont": '<span class="book-clipping"><span class="notebook">Morgana,<br><br>Acuso recibo de la confirmación de Merlina. Debo decir que, aunque su saludo de «Estimado Idiota» me resulta del todo innecesario, la validez del consentimiento es lo único que me compete en este asunto, al menos una de las dos se atreve a decir lo que piensa.<br><br>Como te anticipé, para fabricar un regulador capaz de contener la marea genética, requerirás componentes que funcionen como «diques» biológicos. Mi propuesta principal se centra en las lágrimas de mandrágora. He estudiado sus efectos desde mi infancia en las plantaciones familiares, poseen una naturaleza dual única al estar ancladas a la tierra, pero dotadas de una reactividad nerviosa extrema.<br><br>A diferencia de la raíz, cuyo uso es más tosco, las lágrimas actúan directamente sobre el sistema nervioso central. Su propósito no es anular la transformación física —un error común que suele llevar a la muerte— sino preservar un hilo de conciencia humana durante el pico de saturación 8/8. Actúan como un sedante para el instinto atávico, permitiendo que la psique de Merlina flote sobre la marea en lugar de ser devorada por ella.<br><br>Además, su potencia analgésica facilitará que la transición entre fases, especialmente el salto crítico de 4/8 a 6/8, sea un deslizamiento elástico y no un choque violento. Esto debería prevenir las microrroturas de tejido que causan su agotamiento crónico.<br><br>Sin embargo, mi advertencia es severa: una dosificación excesiva o una destilación impura provocaría un «silencio nervioso» permanente. Merlina no solo dejaría de sentir la luna; podría perder la capacidad de procesar cualquier emoción o estímulo mágico, quedando en un estado catatónico irreversible.<br><br>Puedes complementar la fórmula con plata coloidal en dosis homeopáticas para fortalecer la resistencia de la membrana celular contra la mutación, y esencia de díctamo para sellar las fisuras neuronales post-ciclo. Pero ten cuidado: si la pureza de la plata no es absoluta, provocarás un choque anafiláctico inmediato.<br><br>Procede con cautela, si es que conoces el significado de la palabra.<br><br>Atentamente,<br>Edwin Merrythought.<br></span></span>',
        },
        "reporte de herbología": {
          "visible": { "attr": {"val": "min"}, "know": {"curación": "10"}, "job": "invalid", "name": "invalid", }, "place": "segunda parte",
          "cont": '<span class="book-clipping"><span class="notebook">Señorita Dempsey,<br><br>Siento decirle que lo que pretende, implica un alto riesgo. Entiendo que haya llegado a la conclusión de que las lágrimas de mandrágora tienen mejores efectos que las raíces, pero, han muerto cientos de herbólogos tratando de dar con ellas. Actualmente, no encontrará nadie que brinde ese ingrediente y le tengo que decir que es extremadamente peligroso que usted lo intente. Mi consejo es que renuncie a la idea. Busque algo más. Puedo ofrecer la lista de sugerencias, pero descarte la que le han dado.<br><br>Si mi opinión no parece suficiente, le contaré lo que pasa cuando se acerca a una mandrágora y escucha su llanto.<br><br>El llanto produce una vibración que no golpea los oídos. Al instante, los pulmones se bloquean y el corazón estalla en un espasmo violento.. Creame, no es algo lindo de ver. Las estadísticas marcan que 9 de cada 10 herbologos expertos en la materia, han fallecido tratando de recolectar aquel elemento. No pierda su vida de aquella manera.<br><br>(En la letra de Morgana se puede leer una nota al final que reza: No, gracias).</span></span>',
        },
      },

      "actions": {
        "relicta notitia": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'El hechizo revela a Morgana tomando notas en el cuaderno, marcando cada luna nueva donde Merlina se transforma. Hasta que en un momento, por la cantidad de hojas se pueden determinar unos cinco años apróximadamente de registros, arranca las hojas y coloca nuevas, organizando la información de la misma manera que se encuentra ahora.',
          "exitoso": 'El hechizo revela a Morgana tomando notas en el cuaderno, marcando cada luna nueva donde Merlina se transforma. Los registros marcan la fecha, la conducta agresiva del 1 al 10. Hasta que en un momento, por la cantidad de hojas se pueden determinar unos cinco años apróximadamente de registros, arranca las hojas y coloca nuevas, organizando la información de la misma manera que se encuentra ahora.',
          "critico": 'El hechizo revela a Morgana tomando notas en el cuaderno, marcando cada luna nueva donde Merlina se transforma. Los registros marcan la fecha, la conducta agresiva del 1 al 10. Hasta que en un momento, el último registro marca 24 de octubre de 1920, arranca las hojas y coloca nuevas, organizando la información de la misma manera que se encuentra ahora.',
        },
        "tempus revela": {
          "leve": 'No es suficiente para revelar información adicional.',
          "moderado": 'El cuaderno fue comprado a inicios de 1900.',
          "exitoso": 'El cuaderno fue comprado en 1907 por Morgana Dempsey.',
          "critico": 'El cuaderno fue comprado en Julio de 1907 por Morgana Dempsey.',
        },
      },
    },
    // fin muted magic

    "the murmuring woods": {
      "description": "Con las diferentes informaciones obtenidas, deberán ir al invernadero que Edwin había prestado a Morgana para encontrar cuál era el ingrediente secreto que posee el elixir y así poder replicar su fórmula y averiguar si aquello es o no una cura para los squibs.",
      "image": "https://2img.net/i.imgur.com/VMpvsfT.png", "requisitos": ["Un miembro debe tener Herbología en Avanzado", "Un miembro debe tener Encantamientos en Consagrado", "Se recomienda que un miembro posea Música en Principiante o una hija de Banshees"],
      "users": [],
      "dependency": ["bottle of sorrows", "muted magic"], "tagged": ["morgana"],
      "type": "misión", "closed": false, "link": "",

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the murmuring woods

    "unlocking the veiled": {
      "description": "Con la investigación realizada del elixir de Morgana, un pocionista o alquimista tratarán de replicar la fórmula para saber verdaderamente sus efectos y poder determinar si son o no una cura para los squibs.",
      "image": "https://2img.net/i.imgur.com/gr7QrwZ.png", "requisitos": ["Un miembro debe tener Alquimia en Avanzado", "Un miembro debe tener Pociones en Avanzado"],
      "users": [],
      "dependency": ["the murmuring woods"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["morgana"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin unlocking the veiled

    "promise in crimson": {
      "description": "Con la pulsera de Merlina Dempsey, se deberá realizar una investigación para comprender qué pasó con ella. ¿Habrá sido su muerte tan sospechosa como la de su hermana? Investigar los archivos de los caídos, siempre es un buen inicio para esos casos.",
      "image": "https://2img.net/i.imgur.com/9HSXJzG.png", "requisitos": ["Un Nigromante o Alto cargo de San Mungo"],
      "users": ["/u8", "/u78", "/u7"],
      "dependency": ["secrets of the silent dead"],
      "type": "investigación", "closed": true, "link": "https://blackwave.foroactivo.com/t561-investigacion-promise-in-crimson", "tagged": ["morgana"],

      "cards": [
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mensajes ocultos",
          "cont": '<span><span class="book-clipping">El señor, Brian Dempsey, fue detenido tras impedir el correcto cuidado de su hija. Sus acciones posiblemente llevaron a que los sanadores no pudieran realizar sus correspondientes maniobras para mantener a Merlina viva. <br /><br />Merlina es trasladada para ser atendida por Fergus Vance, nigromante de turno.</span></span>',
        },
      ],

      "searchs": {
        "leer noticia 'fallece trágicamente merlina dempsey tras un violento ataque'": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="fallece trágicamente merlina dempsey tras un violento ataque"></section></span>',
        },

        "leer noticia 'fallece trágicamente merlina dempsey tras brote de licantropía'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "documentos ocultos",
          "cont": '<span><section class="bring-news" title="fallece trágicamente merlina dempsey tras brote de licantropía"></section></span>',
        },

        "leer noticia 'la familia dempsey denuncia falta de regulación contra la licantropía'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "documentos ocultos",
          "cont": '<span><section class="bring-news" title="la familia dempsey denuncia falta de regulación contra la licantropía"></section></span>',
        },

        "pergamino de defunción sm-fd/1124-q": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>PERGAMINO DE DEFUNCIÓN</strong><br><i>Hospital San Mungo para Enfermedades y Heridas Mágicas – Archivo de los Caídos</i></div><br><strong>Nombre Completo del Paciente</strong>: Meliora Densley<br><strong>No. Expediente</strong>: SM-FD/1124-Q<br><strong>Fecha de Ingreso</strong>: 23 de Diciembre de 1911<br><strong>Fecha de fallecimiento</strong>: 14 de Febrero de 1912 - 21:56 hs.<br><br><strong>Edad</strong>: 63 años.<br><strong>Sangre</strong>: ☐ Pura &nbsp; &nbsp; ☐ Mestiza &nbsp; &nbsp; &nbsp;☒ Muggle &nbsp; &nbsp; &nbsp;☐ Criatura<br><br><strong>Motivo del ingreso</strong>: Envenenamiento progresivo por esporas de musgo iridiscente, inhaladas accidentalmente durante una limpieza en invernadero sellado.<br><strong>Causa de fallecimiento</strong>: Colapso pulmonar mágico por reacción alérgica extrema a estructuras cristalinas vegetales.<br><br><strong>Área médica asignada</strong>: Archivo de los caídos.<br><strong>Atendido por</strong>: M. Thatch, nigromante.<br><strong>Acompañante familiar</strong>: Hijo, Yan Powell<br><br><strong>Anexos</strong>:<br>☒ Firma de M. Thatch.<br>☒ Firma de Yan Powell<br>☒ Sello de defunción emitido</span></span>',
        },

        "pergamino de defunción sm-fd/873-a": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>PERGAMINO DE DEFUNCIÓN</strong><br><i>Hospital San Mungo para Enfermedades y Heridas Mágicas – Archivo de los Caídos</i></div><br><strong>Nombre Completo del Paciente</strong>: Morwenna Daltry<br><strong>No. Expediente</strong>: SM-FD/873-A<br><strong>Fecha de Ingreso</strong>: 12 de junio de 1941<br><strong>Fecha de fallecimiento</strong>: 14 de junio de 1941 – 19:42 hs.<br><br><strong>Edad</strong>: 41 años.<br><strong>Sangre</strong>: ☐ Pura &nbsp; ☒ Mestiza &nbsp; ☐ Muggle &nbsp; ☐ Criatura<br><br><strong>Motivo del ingreso</strong>: Maleficio crónico no identificado alojado en sistema nervioso<br><strong>Causa de fallecimiento</strong>: Falla neuromágica fulminante. Se presume intervención de magia antigua o residual. Intervención de inefables solicitado post mortem.<br><br><strong>Área médica asignada</strong>: Archivo de los caídos.<br><strong>Atendido por</strong>: E. Rowntree, nigromante.<br><strong>Acompañante familiar</strong>: Padre, John Daltry<br><br><strong>Anexos</strong>:<br>☒ Firma de E. Rowntree.<br>☒ Firma de John Daltry<br>☒ Sello de defunción emitido</span></span>',
        },

        "pergamino de defunción sm-fd/1293-g": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>PERGAMINO DE DEFUNCIÓN</strong><br><i>Hospital San Mungo para Enfermedades y Heridas Mágicas – Archivo de los Caídos</i></div><br><strong>Nombre Completo del Paciente</strong>: Merlina Dempsey<br><strong>No. Expediente</strong>: SM-FD/1293-G<br><strong>Fecha de Ingreso</strong>: 14 de Junio de 1907<br><strong>Fecha de fallecimiento</strong>: 14 de Junio de 1907 - 03:04 hs.<br><br><strong>Edad</strong>: 14 años.<br><strong>Sangre</strong>: ☐ Pura &nbsp; &nbsp; ☒ Mestiza &nbsp; &nbsp; &nbsp;☐ Muggle &nbsp; &nbsp; &nbsp;☐ Criatura<br><br><strong>Motivo del ingreso</strong>: violento ataque de licantropía.<br><strong>Causa de fallecimiento</strong>: El paciente mostraba heridas fatales físicas provocadas por una criatura mágica identificada como Hombre Lobo. Se identifica a la criatura a causa de los daños provocados por garras y mordeduras que coinciden con dicha criatura.<br><br><strong>Área médica asignada</strong>: Archivo de los caídos.<br><strong>Atendido por</strong>: X. Longbottom, nigromante.<br><strong>Acompañante familiar</strong>: Madre, Iris Dempsey (madre)<br><br><strong>Anexos</strong>:<br>☒ Firma de X. Longbottom.<br>☒ Firma de Iris Dempsey<br>☒ Sello de defunción emitido</span></span>',
        },

        "pergamino de defunción sm-fd/995-b": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>PERGAMINO DE DEFUNCIÓN</strong><br><i>Hospital San Mungo para Enfermedades y Heridas Mágicas – Archivo de los Caídos</i></div><br><strong>Nombre Completo del Paciente</strong>: Marietta Dampier<br><strong>No. Expediente</strong>: SM-FD/995-B<br><strong>Fecha de Ingreso</strong>: 29 de octubre de 1922<br><strong>Fecha de fallecimiento</strong>: 02 de noviembre de 1922 – 06:04 hs<br><br><strong>Edad</strong>: 34 años.<br><strong>Sangre</strong>: ☐ Pura &nbsp;☒ Mestiza &nbsp;☐ Muggle &nbsp;☐ Criatura<br><br><strong>Motivo del ingreso</strong>: Congelación súbita durante práctica de encantamientos de frío.<br><strong>Causa de fallecimiento</strong>: El cuerpo conservó rasgos vitales durante tres días antes de apagarse sin dolor aparente.<br><br><strong>Área médica asignada</strong>: Archivo de los caídos.<br><strong>Atendido por</strong>: E. Rowntree, nigromante.<br><strong>Acompañante familiar</strong>: Esposo, Ian Clapton<br><br><strong>Anexos</strong>:<br>☒ Firma de E. Rowntree.<br>☒ Firma de Ian Clapton<br>☒ Sello de defunción emitido</span></span>',
        },

        "informe de ingreso": {
          "visible": { "attr": { "sab": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "pergamino de defunción sm-fd/1293-g",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>FICHA DE INGRESO</strong><br><i>Hospital San Mungo para Enfermedades y Heridas Mágicas – Archivo de los Caídos</i></div><br><strong>Nombre Completo del Paciente</strong>: Merlina Dempsey<br><strong>No. Expediente</strong>: SM-ING-14-06-1907/1293-G<br><strong>Fecha de Ingreso</strong>: 14 de Junio de 1907<br><br><strong>Edad</strong>: 14 años.<br><strong>Sangre</strong>: ☐ Pura ☒ Mestiza ☐ Muggle ☐ Criatura<br><br><strong>Motivo del ingreso</strong>: violento ataque de licantropía.<br><br><strong>Síntomas</strong>:<br>El sangrado irregular, más oscuro o con olor metálico más fuerte de lo normal. <br>Fiebre súbita en las siguientes horas.<br>Espasmos musculares alrededor de la herida.<br><br><strong>Notas</strong>: La paciente ingresa con el cuerpo colapsado a causa de graves heridas provocadas por un ataque de licantropía. <br><br>Étaín Sayre, sanadora, intentó cicatrizar las heridas con magia para detener las hemorragias, sin embargo, la herida es demasiado profunda para cerrarla con magia convencional. Ante ese resultado, Amaya Flamel, sanadora, intentó aplicar un ungüento de murtlap, pero obtuvo los mismos resultados.<br><br>Pese a los muchos intentos, a las 04:21 hs, anuncian la hora de fallecimiento.<br><br><classified style="--char: 25"></classified><br><classified style="--char: 54"></classified><br><classified style="--char: 34"></classified><br><br><strong>Transferencia</strong>: Archivo de los caídos.<br><br><strong>Anexos</strong>:<br>☒ Firma de Étaín Sayre, sanadora.<br>☒ Firma de Amaya Flamel, sanadora.<br>☒ Firma de Iris Dempsey, madre de la paciente.<br>☒ Aprobación de traslado al Archivo de los Caídos.</span></span>',
        },

        "leer noticia 'trágica pérdida en la comunidad norirlandesa'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer noticia 'la familia dempsey denuncia falta de regulación contra la licantropía'",
          "cont": '<span><section class="bring-news" title="trágica pérdida en la comunidad norirlandesa"></section></span>',
        },

        "leer noticia 'incendio devasta la destilería dempsey'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer noticia 'trágica pérdida en la comunidad norirlandesa'",
          "cont": '<span><section class="bring-news" title="incendio devasta la destilería dempsey"></section></span>',
        },
      },

      "actions": {
        "aparecium": {
          "leve": '',
          "moderado": '<span><adding search="mensajes ocultos" class="check-cards"></adding></span>',
          "exitoso": '<span><adding search="mensajes ocultos" class="check-cards"></adding></span>',
          "critico": '<span><adding search="mensajes ocultos" class="check-cards"></adding></span>',
        },
        "revelio": {
          "leve": '',
          "moderado": '<span><adding search="documentos ocultos" class="check-cards"></adding></span>',
          "exitoso": '<span><adding search="documentos ocultos" class="check-cards"></adding></span>',
          "critico": '<span><adding search="documentos ocultos" class="check-cards"></adding></span>',
        },
      },
    },
    // fin promise in crimson

    "full of emptiness": {
      "description": "Con los reportes adulterados, la mejor alternativa es ir con la fuente de todos los datos, aquella persona cuya firma se encuentra en los pergaminos y que debe tener las respuestas de qué sucedió verdaderamente con Merlina Dempsey. Deberán interrogar a los siguientes personajes: Cora M. Vance (tío - nigromante).",
      "image": "https://2img.net/i.imgur.com/Bm8BRJM.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["/u130", "/u8", "/u55", "/u7"],
      "dependency": ["promise in crimson"],
      "type": "investigación", "closed": true, "link": "/t661-investigacion-full-of-emptiness", "tagged": ["morgana"],

      "cards": [{
        "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "caja de madera rúnica",
        "cont": '<span>Dentro de la caja rúnica hay un relicario redondo de oro. El labrado es tal que parece juntar dos alas hacia el centro del mismo.</span>',
      }
      ],

      "searchs": {
        "ático": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "cora", }, "place": "",
          "cont": '<span>El ático de la casa es un espacio pequeño. No tiene más de metro y medio en el espacio más alto. Una pequeña ventana permite el ingreso de luz, permitiendo observar el lugar cubierto de polvo por el paso del tiempo. A pesar de tratarse de un ático pequeño, parece estar bastante ordenado. Hay varios calderos de diferentes tamaños y materiales que han almacenado polvo con tiempo. Y cinco baúles que se distribuyen en todo el lugar. Los mismos han sido etiquetados.</span>',
        },
        "baúl con la etiqueta 'libros'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ático",
          "cont": '<span>Al abrir el baúl se revelan libros que han sido acomodados en grupos. Cada pilón tiene un pergamino que etiqueta su contenido: curación, herbología, pociones y nigromancia. Si se revisa su contenido, pueden darse cuenta de que corresponde al material indicado.</span>',
        },
        "baúl con la etiqueta 'hogwarts'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ático",
          "cont": '<span>Al abrir el baúl se pueden observar objetos de Hogwarts, libros de diversas asignaturas como Encantamientos, Transformaciones, DCAO e Historia de la Magia. Hay varias túnicas de Slytherin, pergaminos viejos, placa de prefecto, uniforme de quidditch, tinteros viejos y algunas fotografías de sus épocas de estudiante.</span>',
        },
        "baúl con la etiqueta 'san mungo'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ático",
          "cont": '<span>Al abrir el baúl con la etiqueta de San Mungo, se puede observar varios libros, particularmente de nigromancia. Túnicas viejas como nigromante, algunos objetos que le han regalado algunos pacientes. Varios ramos de flores secas que ha conservado. También hay un historial de pacientes que tuvo que atender. En la lista se puede observar el nombre de Merlina Dempsey.</span>',
        },
        "baúl con la etiqueta 'ropa'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ático",
          "cont": '<span>Al abrir el baúl de ropa, se pueden observar varias prendas de invierno. Túnicas gruesas, abrigos de lana y también varias frazadas. Sin embargo, entre todas las prendas se puede encontrar un cofre negro que se encuentra cerrado.</span>',
        },
        "baúl con la etiqueta 'familia'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ático",
          "cont": '<span>Dentro del baúl etiquetado como "Familia" se encuentran cajas de fotografías familiares, objetos que fueron pasados de generación en generación. Un libro de pociones escrito a mano que había pertenecido a su abuela. También se encuentran unas bolsas, dentro de las mismas hay varios galeones.</span>',
        },
        "caja de madera rúnica": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revela cofre",
          "cont": '<span>Dentro del cofre se puede encontrar una pequeña caja de madera de cedro, con unas grabadas en ella.</span>',
        },
        "abrir relicario": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "caja de madera rúnica",
          "cont": '<span>Al abrir el relicario, dentro hay una nota que dice «Estimado Fergus, quería hacerte saber que estoy a salvo y he logrado encontrar un pedacito de felicidad después de todo lo que ha ocurrido. Solo me queda decirte gracias, y enviarte este recuerdo como agradecimiento».</span>',
        },
        "sobre verde": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "contenido revelado del cofre",
          "cont": '<span>Varios pergaminos aparecen en el interior del sobre. Una noticia del periódigo, una habilitación de San Mungo y una nota escrita a mano.</span>',
        },
        "leer noticia 'desaparece delyth kova de las salas de salud mental'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "sobre verde",
          "cont": '<span><section class="bring-news" title="desaparece delyth kova de las salas de salud mental"></section></span>',
        },
        "habilitación de procedimiento experimental": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "sobre verde",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Habilitación de Procedimiento Experimental</span></div><br><hr><br><br><strong>Nombre del Paciente:</strong> <i>Delyth Kova</i><br><strong>Fecha de nacimiento:</strong> <i>23 de febrero de 1883</i><br><strong>Lugar de Procedimiento:</strong> <i>Laboratorios, San Mungo.</i><br><br><hr><br><br><strong>Procedimiento:</strong> Con el fin de minimizar sus habilidades empáticas se sugiere aplicar el hechizo <i>Obliviorum Sugo</i> bajo efectos de belladona, con el fin de drenar sus conocimientos aprendidos de legeremancia. De aprobarse esta autorización, el procedimiento se llevará a cabo el siguiente 20 de Octubre.<br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Londres, a 15 de Octubre de 1904.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },
        "nota de morgana": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "sobre verde",
          "cont": '<span><span class="notebook">Estimado Fergus,<br><br>No creas que no estoy agradecida por todo lo que has hecho por nosotras, sin embargo, teníamos un acuerdo y aún no lo veo por cumplido. <br><br>He intentado hablar contigo en severas ocasiones, te he enviado cartas que nunca tuvieron respuestas, por lo tanto, espero que esta sea lo suficientemente contundente para poder recibir lo que espero.<br><br>Descubrí tu secreto, no fue demasiado difícil de averiguar.<br><br>Debo decir que me sorprende que los aurores no hayan encontrado nada, aunque asumo que hubo un poco de dinero de por medio. Delyth vive en Prešov, su nombre es Eseniya. Se la ve feliz, fue un acto muy generoso de su parte ayudarla a escaparse. Es una pena que eso pueda quitarte tu puesto de nigromante si la verdad saliera a la luz.<br><br>Es tu decisión,<br>Morgana.</span><br /></span>',
        },
        "sobre celeste": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "contenido revelado del cofre",
          "cont": '<span>Dentro del sobre existen dos pergaminos que, en un principio, aparentan ser iguales.</span>',
        },
        "donacion brian": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "sobre celeste",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Ministerio de Magia</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Contrato de Donación</span></div><br><hr><br><br><strong>Donante:</strong> <i>Brian Dempsey</i> <br><strong>Beneficiario:</strong> <i>Fergus Vance</i> <br><strong>Fecha de formalización:</strong> <i>20 de Junio de 1907</i> <br><strong>Objeto de la donación:</strong> <i>Rainbow Lane</i> <br><br><hr><br><br><strong>Cláusulas:</strong> <br>1. El donante entrega de manera libre y voluntaria el bien o cantidad señalada. <br>2. El beneficiario acepta la donación para fines personales. <br>3. La donación no podrá ser revocada salvo disposición contraria de los estatutos mágicos. <br>4. Ambas partes reconocen la validez del presente contrato bajo la legislación vigente en el mundo mágico. <br><br><hr><br><br><strong>Observaciones adicionales:</strong> <br><i>El contrato solo estará vigente cuando ambas partes firmen el contrato.</i> <br><br><hr><br><br><div align="left"><strong>Firma del Donante:</strong><br><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_______________________</div><br><br><div align="left"><strong>Firma del Beneficiario:</strong><br><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_______________________</div><br></span></span>',
        },
        "donacion fergus": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "sobre celeste",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Ministerio de Magia</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Contrato de Donación</span></div><br><hr><br><br><strong>Donante:</strong> <i>Fergus Vance</i> <br><strong>Beneficiario:</strong> <i>Morgana Dempsey</i> <br><strong>Fecha de formalización:</strong> <i>13 de Enero de 1914</i> <br><strong>Objeto de la donación:</strong> <i>Rainbow Lane</i> <br><br><hr><br><br><strong>Cláusulas:</strong> <br>1. El donante entrega de manera libre y voluntaria el bien o cantidad señalada. <br>2. El beneficiario acepta la donación para fines personales. <br>3. La donación no podrá ser revocada salvo disposición contraria de los estatutos mágicos. <br>4. Ambas partes reconocen la validez del presente contrato bajo la legislación vigente en el mundo mágico. <br><br><hr><br><br><strong>Observaciones adicionales:</strong> <br><i>El contrato solo estará vigente cuando ambas partes firmen el contrato.</i> <br><br><hr><br><br><div align="left"><strong>Firma del Donante:</strong><br><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_______________________</div><br><br><div align="left"><strong>Firma del Beneficiario:</strong><br><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_______________________</div><br></span></span>',
        }
      },

      "actions": {
        "alohomora": {
          "leve": '<span>No es suficiente para revelar su contenido.</span>',
          "moderado": '<span>Abre el cofre revelando su contenido.<adding search="revela cofre" class="check-cards"></adding></span>',
          "exitoso": '<span>Abre el cofre revelando su contenido.<adding search="revela cofre" class="check-cards"></adding></span>',
          "critico": '<span>Abre el cofre revelando su contenido.<adding search="revela cofre" class="check-cards"></adding></span>',
        },
        "identificar runa": {
          "leve": '<span>No es suficiente para identificar las runas.</span>',
          "moderado": '<span>Existen tres runas grabadas en la caja, Gebo (ᚷ), Dagaz (ᛞ) y Tiwaz (ᛏ).</span>',
          "exitoso": '<span>Existen tres runas grabadas en la caja, Gebo (ᚷ), Dagaz (ᛞ) y Tiwaz (ᛏ).</span>',
          "critico": '<span>Existen tres runas grabadas en la caja, Gebo (ᚷ), Dagaz (ᛞ) y Tiwaz (ᛏ).</span>',
        },
        "interpretar runas": {
          "leve": '<span>No es suficiente para interpretar las runas.</span>',
          "moderado": '<span>Las runas en la caja se pueden interpretar de la siguiente manera, Gebo (ᚷ) significa dar y recibir; Dagaz (ᛞ), significa vida nueva y fin de los problemas; y Tiwaz (ᛏ) representa el honor.</span>',
          "exitoso": '<span>Las runas en la caja se pueden interpretar de la siguiente manera, Gebo (ᚷ) significa dar y recibir; Dagaz (ᛞ), significa vida nueva y fin de los problemas; y Tiwaz (ᛏ) representa el honor.</span>',
          "critico": '<span>Las runas en la caja se pueden interpretar de la siguiente manera, Gebo (ᚷ) significa dar y recibir; Dagaz (ᛞ), significa vida nueva y fin de los problemas; y Tiwaz (ᛏ) representa el honor.</span>',
        },
        "revelio": {
          "leve": '<span>No es suficiente para revelar el contenido del cofre.</span>',
          "moderado": '<span>En el fondo del cofre se puede observar dos sobres que habían sido ocultos a primera vista. Un sobre color verde y otro color celeste. <adding search="contenido revelado del cofre" class="check-cards"></adding></span>',
          "exitoso": '<span>En el fondo del cofre se puede observar dos sobres que habían sido ocultos a primera vista. Un sobre color verde y otro color celeste. <adding search="contenido revelado del cofre" class="check-cards"></adding></span>',
          "critico": '<span>En el fondo del cofre se puede observar dos sobres que habían sido ocultos a primera vista. Un sobre color verde y otro color celeste. <adding search="contenido revelado del cofre" class="check-cards"></adding></span>',
        },
      },
    },
    // fin full of emptiness

    "green to blue": {
      "description": "Con los reportes adulterados, la mejor alternativa es ir con la fuente de todos los datos, aquella persona cuya firma se encuentra en los pergaminos y que debe tener las respuestas de qué sucedió verdaderamente con Merlina Dempsey. Deberán interrogar a los siguientes personajes: Iarlaith C. Sayre (abuela - sanadora).",
      "image": "https://2img.net/i.imgur.com/dYv886y.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["i/u38", "/u130", "/u8"],
      "dependency": ["promise in crimson"],
      "type": "interrogatorio", "closed": true, "link": "/t662-interrogatorio-green-to-blue", "tagged": ["morgana"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin green to blue

    "distorted memories": {
      "description": "Con los reportes adulterados, la mejor alternativa es ir con la fuente de todos los datos, aquella persona cuya firma se encuentra en los pergaminos y que debe tener las respuestas de qué sucedió verdaderamente con Merlina Dempsey. Deberán interrogar a los siguientes personajes: Aidan N. Flamel y Neptune E. Merrythought (tía y madre - sanadora).",
      "image": "https://2img.net/i.imgur.com/sjiXJ68.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["i/u108", "i/u119", "/u7", "/u8"],
      "dependency": ["promise in crimson"],
      "type": "interrogatorio", "closed": true, "link": "/t663-interrogatorio-distorted-memories", "tagged": ["morgana"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin distorted memories

    "journey of a bird": {
      "description": "Con los reportes adulterados, la mejor alternativa es ir con la fuente de todos los datos, aquella persona que podría saber los secretos de Morgana y Merlina, dado que es hijo de una de ellas: Damien A. Ashford-Dempsey.",
      "image": "https://2img.net/i.imgur.com/bjwrBd2.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["i/u127", "/u78", "/u55"],
      "dependency": ["promise in crimson"],
      "type": "interrogatorio", "closed": false, "link": "https://blackwave.foroactivo.com/t834-interrogatorio-journey-of-a-bird", "tagged": ["morgana"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin journey of a bird

    "frozen sunflowers": {
      "description": "Con los reportes adulterados, la investigación lleva a los personajes a asegurarse qué hay en el cementerio de magia irlandés. ¿Se encontrará allí que ha sucedido con Merlina Dempsey?",
      "image": "https://2img.net/i.imgur.com/RMYPxuz.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["/u8", "/u78", "/u55", "/u131"],
      "dependency": ["promise in crimson"],
      "type": "misión", "closed": true, "link": "/t664-mision-frozen-sunflowers", "tagged": ["morgana"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "",
          "cont": '<span>Nina presenta en sus túnicas los emblemas del Ministerio de Magia, lo que indica que lleva puesto el uniforme oficial. Sus botas de caña alta están ajustadas hasta arriba con un doble nudo y barro fresco en sus botas, lo cual podría considerarse usual, debido al trabajo y al temporal.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "jasper" }, "place": "",
          "cont": '<span>Debido a que Wenn Wraithwood fue miembro de la casa Gryffindor puedes conocerla. Sin embargo, si ella te conoce, no parece demostrar señales.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "shun", }, "place": "",
          "cont": '<span>Debido a que Wenn Wraithwood fue miembro de la casa Gryffindor puedes conocerla. Sin embargo, si ella te conoce, no parece demostrar señales.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "contrabando": "10" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>La vida del contrabandista nunca es sencilla. Algunos nombres se escuchan algunas veces. El nombre de Wenn definitivamente lo has escuchado, solo que se hacía llamar Wraith Hood. Una joven que vendía ciertas estupefacientes a aquellos que lo necesitaban, hasta que el consumo hizo que termine en un desastre.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "historia de la magia": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Puede que no conozcan el nombre de Nina, pero el nombre de Wenn se hizo conocer hace no mucho. Hacía poco tiempo que el nombre de la joven salió en todos los periódicos. Joven del Departamento de Seguridad Mágica fallece en una redada. Todo era su culpa, su muerte y la de sus compañeros. Se suponía que la actividad era regular, demasiado sencilla para que fuera a salir mal, pero la joven con altos consumos de alcohol había soltado un <i>Bombarda</i> en el lugar incorrecto, provocando una explosión y un posterior incendio que termino con tres muertes y siete heridos.<br><br>Los miembros del Departamento, pueden elegir si estuvieron en dicha redada.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "",
          "cont": '<span>Puede elegir si fue el que hizo la autopsia de Wenn y sus compañeros o si solamente escuchó los resultados. Wenn tenía altos consumos de alcohol y estupefacientes, el reporte terminó dando a la joven como culpable de la situación en la que se vio involucrada.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "vuelo": "5" }, "job": "invalid", "name": "invalid", }, "place": "mapa del cementerio",
          "cont": '<span>Gohbán Delaney fue un jugador de Quidditch del Ballycastle Bats, durante 1870, máximo goleador del equipo durante sus años y participó en aquel partido que marcó el récord de mayor cantidad de puntos registrados en un partido de quidditch. Sin embargo, al ser hijo de muggles, muchos magos y brujas no lo reconocieron. Una vez que su carrera de quidditch acabó, rápidamente trataron de hacer que las personas olvidaran su nombre.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "historia de la magia": "5" }, "job": "invalid", "name": "invalid", }, "place": "mapa del cementerio",
          "cont": '<span>La familia Denman fue conocida hace hará unos cinco o seis años, cuando sus nombres salieron en primera plana en el diario El Profeta. La familia de pocionistas, pasaban su tiempo realizando prácticas de magia oscura y nigromancia. Hasta que sacrificaron a sus seis hijos de entre 12 años y 2 meses para realizar un ritual que acabó con la vida de todos. Habían usado artefactos de magia negra y las investigaciones resultaron en que habían intentado traer a la vida a uno de los hermanos de la mujer. Toda la familia falleció durante el ritual. </span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "herbología": "5" }, "job": "invalid", "name": "invalid", }, "place": "mapa del cementerio",
          "cont": '<span>Las secciones del mapa representan diferentes árboles y forman el calendario celta de los árboles una tradición antigua de los celtas.</span>',
        },
        {
          "visible": { "attr": { "int": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "tumba de merlina dempsey",
          "cont": '<span>Tras derrotar al Wraith puede confirmarse que la tumba esta vacía y siempre estuvo vacía.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "dcao": "15" }, "job": "invalid", "name": "invalid", }, "place": "tumba de brian dempsey",
          "cont": '<span>Tras derrotar al Inferi puede confirmarse que la tumba esta vacía, sin embargo, también puede confirmarse que el Inferi que derrotaron era, efectivamente Brian.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mapa del cementerio",
          "cont": '<span>El espacio de los Dempsey cuenta con varias placas conmemorativas. Algunos nombres ya no se pueden leer por el paso del tiempo. Sin embargo, se pueden distinguir las placas más recientes: Brian, Iris, Merlina y Morgana Demsey, siendo la de la última la más reciente.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "dcao": "15" }, "job": "invalid", "name": "invalid", }, "place": "tumba de iris dempsey",
          "cont": '<span>Tras derrotar al Inferi puede confirmarse que la tumba esta vacía, sin embargo, también puede confirmarse que el Inferi que derrotaron era, efectivamente Iris.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "tumba de iris dempsey",
          "cont": '<span>Los inferius son sensibles a los hechizos de fuego.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "dcao": "15" }, "job": "invalid", "name": "invalid", }, "place": "seguir el sonido",
          "cont": '<span>La explosión fue mágica, es evidente en el ambiente. Y por un breve segundo, llegas a ver a Nina con una capa negra, varita en mano y el atrevimiento de sonreír y guiñar el ojo antes de marcharse.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "tumba de brian dempsey",
          "cont": '<span>Los inferius son sensibles a los hechizos de fuego.</span>',
        }
      ],

      "searchs": {
        "mapa del cementerio": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>No muy alejado de la entrada, se encuentra un cartel de hierro que tiene las secciones del cementerio. En el mapa, se puede observar que el Cementerio tiene doce secciones: Ash, Alder, Willow, Hawthorn, Oak, Holly, Hazel, Vine, Ivy, Reed, Elder, Birch, Rowan. Bajo el mapa, se encuentran las familias en cada una de las secciones. Los Dempsey se encuentran en la zona Holly entre Delaney y Denman.</span>',
        },
        "tumba de merlina dempsey": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revela tumbas",
          "cont": '<span>La tumba de Merlina posee flores secas. Las hojas y pétalos sueltos alrededor de la placa indicaban que alguien se acercaba a dejar rosas con frecuencia. En la placa se puede leer <i>Adorada hermana. Partió demasiado pronto.</i><br><br>Al abrir su tumba un Wraith sale de ella, dejando la tumba vacía. Deberán enfrentarse al mismo respetando sus características: +5 fue, +5 con / 70 pv.</span>',
        },
        "tumba de brian dempsey": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revela tumbas",
          "cont": '<span>La tumba de Brian se encuentra vacía y cubierta de hojas que fueron llevadas con el tiempo. En la placa, cubierta de tierra, apenas permite leer <i>Amado esposo</i><br><br>Al abrir su tumba un Inferi sale de ella, dejando la tumba vacía. Deberán enfrentarse al mismo respetando sus características: +10 fue, +10 con / 150 pv.</span>',
        },
        "tumba de iris dempsey": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revela tumbas",
          "cont": '<span>La tumba de Iris se encuentra vacía y cubierta de hojas que fueron llevadas con el tiempo. En la placa, cubierta de tierra, apenas permite leer <i>Amada esposa</i><br><br>Al abrir su tumba un Inferi sale de ella, dejando la tumba vacía. Deberán enfrentarse al mismo respetando sus características: +10 fue, +10 con / 150 pv.</span>',
        },
        "presencia de wenn wraithwood": {
          "visible": { "attr": { "sab": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revela presencias",
          "cont": '<span>El conjuro, por lo común, revela la huella de lo humano y lo vivo, pero las almas que han pasado a mejor vida eluden su detección con una facilidad desconcertante, como si pertenecieran a un texto cuyas páginas se han arrancado. Aun así, algo logra perforar la quietud: entre la negrura de la espesura, la silueta fantasmagórica de Wenn permanece inmóvil, observándolos. Su presencia, grave y gélida, se mantiene a una distancia calculada, justo en el umbral de la percepción, asegurando que su vigilancia, silenciosa y constante, pase casi inadvertida. Cuando nota que se han fijado en ella, comienza a desaparecer hacia el bosque.</span>',
        },
        "perseguir a wenn wraithwood": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "presencia de wenn wraithwood",
          "cont": '<span>La luz tenúe de la figura de Wenn guía el paso entre la oscuridad. Sus mudos pasos que se abren paso hacia una dirección desconocida. Si le hablan, la misma no responde, demasiada abstraída de la realidad. Hasta que un sonido, muy similar al estruendo de una bomba se escucha en todo el ambiente. En ese momento, Wenn se gira y sonrié—: <strong>Demasiado tarde</strong></span>',
        },
        "seguir el sonido": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "perseguir a wenn wraithwood",
          "cont": '<span>Si siguen la fuente del sonido, llegarán hasta la tumba de los Denman, que alguien ha destruído con un Bombarda. Si algo fue retirado de la misma, se desconoce. En caso de querer investigarlo, deberán solicitar la investigación en "Tramites Narrativos".</span>',
        },
        "regresar a la entrada": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "seguir el sonido",
          "cont": '<span>Al regresar a la entrada, pueden notar que ninguna de las hermanas está presente, pero desde la pequeña casa del guardián del Cementerio, se pueden observar unos pies en el suelo. Al acercarse, pueden notar que es un guardia al que han dejado inconsciente. En caso de querer investigarlo, deberán solicitar la investigación en "Tramites Narrativos".</span>',
        },
      },

      "actions": {
        "defodio": {
          "leve": 'No es suficiente para revelar el contenido.',
          "moderado": '<adding search="revela tumbas" class="check-cards"></adding>',
          "exitoso": '<adding search="revela tumbas" class="check-cards"></adding>',
          "critico": '<adding search="revela tumbas" class="check-cards"></adding>',
        },
        "vestigium sanguinis": {
          "leve": 'No es suficiente para revelar el contenido.',
          "moderado": 'Guía al grupo hasta la sección Holly, entre las tumbas pueden distinguir el nombre de la familia Dempsey.',
          "exitoso": 'Guía al grupo hasta la sección Holly, entre las tumbas pueden distinguir el nombre de la familia Dempsey.',
          "critico": 'Guía al grupo hasta la sección Holly, entre las tumbas pueden distinguir el nombre de la familia Dempsey.',
        },
        "mutareforma": {
          "leve": 'Convierte la tierra en sal provocando un círculo que trata de contener al Wraith. Adiciona +5 de ataque.',
          "moderado": 'Convierte la tierra en sal provocando un círculo que trata de contener al Wraith. Adiciona +10 de ataque.',
          "exitoso": 'Convierte la tierra en sal provocando un círculo que trata de contener al Wraith. Adiciona +15 de ataque.',
          "critico": 'Convierte la tierra en sal provocando un círculo que trata de contener al Wraith. Adiciona +25 de ataque.',
        },
        "homenum revelio": {
          "leve": '<adding search="revela presencias" class="check-cards"></adding>',
          "moderado": '<adding search="revela presenciasrevela tumbas" class="check-cards"></adding>',
          "exitoso": '<adding search="revela presencias" class="check-cards"></adding>',
          "critico": '<adding search="revela presencias" class="check-cards"></adding>',
        },
        "mortis vox": {
          "leve": 'No es suficiente para revelar su contenido.',
          "moderado": 'Al realizarse sobre los inferius revela las identidades de Brian e Iris Depmsey, y la persona que los convirtió a Inferius: Merlina Dempsey.',
          "exitoso": 'Al realizarse sobre los inferius revela las identidades de Brian e Iris Depmsey, y la persona que los convirtió a Inferius: Merlina Dempsey.',
          "critico": 'Al realizarse sobre los inferius revela las identidades de Brian e Iris Depmsey, y la persona que los convirtió a Inferius: Merlina Dempsey.',
        },
        "memoriae vestigium": {
          "leve": 'No es suficiente para revelar su contenido.',
          "moderado": 'Al realizarse sobre los inferius revela las identidades de Brian e Iris Depmsey, y la persona que los convirtió a Inferius: Merlina Dempsey.',
          "exitoso": 'Al realizarse sobre los inferius revela las identidades de Brian e Iris Depmsey, y la persona que los convirtió a Inferius: Merlina Dempsey.',
          "critico": 'Al realizarse sobre los inferius revela las identidades de Brian e Iris Depmsey, y la persona que los convirtió a Inferius: Merlina Dempsey.',
        },
        "mobilicorpus": {
          "leve": 'Nina logra defenderse del hechizo, sin embargo, como su hermana ya había dicho. Era tarde, y con un objeto entre sus manos, se retira con el chasquido propio de una aparición.',
          "moderado": 'Nina logra defenderse del hechizo, sin embargo, como su hermana ya había dicho. Era tarde, y con un objeto entre sus manos, se retira con el chasquido propio de una aparición.',
          "exitoso": 'Nina logra defenderse del hechizo, sin embargo, como su hermana ya había dicho. Era tarde, y con un objeto entre sus manos, se retira con el chasquido propio de una aparición.',
          "critico": 'Nina logra defenderse del hechizo, sin embargo, como su hermana ya había dicho. Era tarde, y con un objeto entre sus manos, se retira con el chasquido propio de una aparición.',
        }
      },
    },
    // fin frozen sunflowers

    "the apple house": {
      "description": "Visitar las granjas galesas suele ser un sueño para muchos y una pesadilla para otros, pero deberán llegar a la casa que les mencionaron, para investigar lo sucedido con Merlina Dempsey de primera mano. En aquella granja algunas respuestas podrán encontrarse y otras implicarán nuevas investigaciones.",
      "image": "https://2img.net/i.imgur.com/cX0CEv6.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": [],
      "dependency": ["full of emptiness", "green to blue", "distorted memories", "journey of a bird", "frozen sunflowers"],
      "type": "interrogatorio", "closed": false, "link": "", "tagged": ["morgana"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the apple house

    "commander's orders": {
      "description": "La primera pista que Edwin les dejó fue Galatea, el nombre de su tía. Por esta razón, deberán adentrarse en los archivos del Ministerio de Magia, para encontrar cualquier información valiosa sobre la ex-profesora de Defensa contra las Artes Oscuras y esperar que, entre todos esos archivos, se encuentre una pista que pueda revelar el paradero del cuaderno de Edwin.",
      "image": "https://2img.net/i.imgur.com/m4Mton6.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": ["/u55", "/u7", "/u50"],
      "dependency": ["haunted dwelling"],
      "type": "investigación", "closed": true, "link": "/t523-investigacion-commander-s-orders", "tagged": ["edwin"],

      "cards": [],
      "actions": {},

      "searchs": {
        "leer noticia 'nace la hija de las estrellas y los duelos'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="nace la hija de las estrellas y los duelos"></section></span>',
        },

        "leer noticia 'galatea merrythought resuelve su primer caso'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="galatea merrythought resuelve su primer caso"></section></span>',
        },

        "leer noticia 'el ascenso de merrythought'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="el ascenso de merrythought"></section></span>',
        },

        "leer noticia 'galatea merrythought es nombrada jefa de seguridad mágica'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="galatea merrythought es nombrada jefa de seguridad mágica"></section></span>',
        },

        "leer noticia 'órdenes de la comandante'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="órdenes de la comandante"></section></span>',
        },

        "leer noticia 'galatea merrythought se ve obligada a retirarse forzadamente como jefa de seguridad mágica'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="galatea merrythought se ve obligada a retirarse forzadamente como jefa de seguridad mágica"></section></span>',
        },

        "leer noticia 'nueva comandante de las aulas'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="nueva comandante de las aulas"></section></span>',
        },

        "leer noticia 'galatea merrythought se despide de hogwarts'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="galatea merrythought se despide de hogwarts"></section></span>',
        },

        "leer noticia 'la comunidad mágica se despide de galatea merrythought'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="la comunidad mágica se despide de galatea merrythought"></section></span>',
        },

        "leer noticia 'adiós, comandante'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><section class="bring-news" title="adiós, comandante"></section></span>',
        },
      },
    },
    // fin commander's orders

    "unveiling the unseen": {
      "description": "Si bien la información sobre Galatea fue considerada bastante instructiva, un dato sobresalió de todos ellos. La casa que le heredó a Edwin la cual se llama 'El Escudo'. Deberán adentrarse a los bosques de Escocia para encontrar la famosa casa y descubrir si Edwin estaba haciendo uso o no de la misma. Para ello necesitarán un guardián del secreto que les proporcioné toda la información que necesitan.",
      "image": "https://2img.net/i.imgur.com/faVXbWl.png", "requisitos": ["Un miembro de la familia Merrythrought o un amigo cercano a la familia", "Un miembro del Dpto de Seguridad Mágica", "Un miembro debe poseer Astronomía en Avanzado"],
      "users": ["/u7", "/u50", "/u8", "/u55", "/u130"],
      "dependency": ["commander's orders"],
      "type": "misión", "closed": false, "link": "/t665-mision-unveiling-the-unseen", "tagged": ["edwin"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "venus", }, "place": "",
          "cont": '<span>Ingresar al observatorio Galatea sería una tarea difícil, si su padre no les hubiera revelado la entrada hace mucho tiempo. Para hacerlo, deben meterse dentro del armario y dibujar la constelación de Perseo.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "5" }, "job": "invalid", "name": "invalid", }, "place": "jardín de galatea",
          "cont": '<span>Los puntos del portón forman la constelación de Eridanus. Hace referencia al río Erídano de la mitología clásica, río a medio caballo entre el mito y la realidad. Su última estrella significa "el final del río".</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "5" }, "job": "invalid", "name": "merrythought", }, "place": "jardín de galatea",
          "cont": '<span>Para poder ingresar, hay que tirarle agua al portón.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "5" }, "job": "invalid", "name": "invalid", }, "place": "observatorio galatea",
          "cont": '<span>Las puertas se abren revelando un camino de piedras. El observatorio no parece más que una casa a simple vista, y si miran para atrás pueden observar que han dejado atrás el cobertizo. La casa de estilo georgiano, posee casi todas sus paredes repletas de una hiedra inglesa. Sin embargo, una parte parece haber sido alterada con el paso de los años, cortando aquella forma austera con una estructura circular. Frente a ellos se encuentra el observatorio Galatea, llamado así por Edwin tras la muerte de su tía.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "merrythought", }, "place": "observatorio galatea",
          "cont": '<span>El observatorio siempre fue como un segundo hogar, aquel con amplios jardines para jugar y una biblioteca cargada de libros. Todos en la familia le tenían mucho cariño al lugar, sin embargo, las respuestas que buscan las encontrarán en el observatorio.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "tercer código",
          "cont": '<span>Todos los mensajes que hay en la pared pertenecen al mismo año: 1936. Cuando esta información es revelada, se escucha el suspiro de Galatea «Dije que solo una persona muy inteligente podría revelarlo, pero, seré generosa, solo porque hay un Merrythought entre ustedes: miren la maqueta».</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mensaje oculto",
          "cont": '<span>Inicien la investigación en Dayflower Garden.</span>',
        }
      ],

      "searchs": {
        "jardín de galatea": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "armario bajo la escalera",
          "cont": '<span>Al volver a abrir la puerta del armario, un pasillo empedrado los lleva a un portón de hierro. Las paredes del jardín están cubiertas de Calatheas de todos los colores, aunque por las fechas ya sus flores han desaparecido. En el portón pueden observarse distintos puntos que pueden moverse. Y la simetría labrada de hierro parece mostrar lo que indicaría un laberinto.</span>',
        },
        "ingreso al observatorio": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "observatorio galatea",
          "cont": '<span>Al ingresar a la casa, muchas de las decoraciones son azules y con detalles de estrellas. La casa se encuentra en silencio. Una gran escalera en el centro divide el camino en dos, uno hacia las habitaciones y otro hacia el observatorio cuyas puertas de madera están abiertas. La sala circular tiene un techo de cristal en forma de domo, ideal para ver las estrellas. Sus paredes parecen de pizarra para que cualquiera pueda tomar notas y varias constelaciones han sido dibujadas con el paso de los años. En el escritorio se pueden observar varios papeles, un té negro, con una rodaja de limón a medio tomar. Y sobre una chimenea, un retrato de Galatea Merrythought los observa, espera a que noten su presencia antes de preguntar.<br><br>—<strong>Ha muerto, ¿verdad?</strong> —su mirada es triste, porque teme la respuesta, incluso aunque ya la sabe—. <strong>Demasiado tiempo sin venir a verme</strong>.<br/><u>Nota</u>: Podrán narrar las preguntas y respuestas de la manera que más les convenga, siempre manteniendo un tono sofisticado de parte de Galatea. Cualquier otra pregunta la ignorará.</span>',
        },
        "preguntar sobre algún comportamiento extraño de edwin": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ingreso al observatorio",
          "cont": '<span>La mujer niega—. <strong>El último tiempo se ha pasado investigando. Estaba nervioso, pero todos los aurores están nerviosos cuando están por descubrir algo.</strong></span>',
        },
        "preguntar sobre sirius y morgana": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ingreso al observatorio",
          "cont": '<span>—<strong>Vinieron aquí una noche, los tres estaban bastante entusiasmados. Dempsey fue la única en saludarme, el otro ni me miró</strong> —respondió la mujer—. <strong>Estaban programando una excursión. Iban a ir cuando la luna menguante estuviera en Tauro. No supe más nada tras ello.</strong>.</span>',
        },
        "luna menguante en tauro": {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "5" }, "job": "invalid", "name": "invalid", }, "place": "preguntar sobre sirius y morgana",
          "cont": '<span>Al buscar en los mapas estelares, se puede observar que entre el 26 y 27 de Agosto de ese mismo año, la luna menguante estaba en Tauro.</span>',
        },
        "preguntar sobre tareas de tuft": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ingreso al observatorio",
          "cont": '<span>La mujer asintió, aunque muy levemente—. <strong>No era demasiado extraordinario, un poco abstracto para ser la preparación para el próximo Ministro de Magia, en mi opinión. Escuché su plan, su estructura sobre salud, seguridad y sociedad. ¿Qué palabras había usado? Ahh sí, <i>Protocolo Estrella Polar</i>, demasiado confuso, pero era su nombre clave.</strong> —La mujer hace una pausa—. <strong>Pero Eddie siempre quiso saber más, comenzó a preparar otro plan. <i>Plan Centinela</i>, quería ver si había algo en las estrellas que pudieran prevenir algún acontecimiento. Fue cuando lo encontró. Betelguese, Sirius y Rigel, formarían una línea recta. Los tres a punto de colapsar, recuerdo que dijo que tenía que advertirles, luego de eso sé que se reunieron un par de veces, pero no me enteré de nada más. Mi consejo fue que no compartiera con ellos, el desarrollo como Ministro es una carrera que es mejor recorrer en soledad.</strong></span>',
        },
        "preguntar por el cuaderno de edwin": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar sobre algún comportamiento extraño de edwin",
          "cont": '<span>La mujer parece confusa por un breve momento— <strong>¿Qué clase de inepto guardaría toda la información de su vida en un cuaderno?</strong> —preguntó Galatea bastante horrorizada por la idea de que alguien guardase tanta información en un lugar que cualquier podría leer. Sin embargo, después de un momento, agregó— <strong>Si te refieres a sus notas, están en las paredes. Edwin sabía que este lugar era seguro y cifró las mismas solo para que alguien con su nivel de inteligencia pudiera resolverlas.</strong></span>',
        },
        "betelguese, sirius y rigel": {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "10" }, "job": "invalid", "name": "invalid", }, "place": "preguntar sobre tareas de tuft",
          "cont": '<span>Si bien podría existir una explicación simbólica de una alineación entre las tres estrellas. La cual físicamente sería muy improbable que sucediera, dado que Betelguese y Rigel se encuentran en la misma constelación. Sin embargo, en la astrología: <u>Betelguese</u>, se considera una estrella de acción, coraje, logros y honor. Marca fuertes ambiciones, las cuales pueden producir grandes resultados o grandes pérdidas. <u>Sirius</u>, está asociada con el éxito, fama, gloria y poder espiritual. Marca la luz y trascendencia espiritual como destino final. Finalmente, <u>Rigel</u>, representa la sabiduría, conocimiento, enseñanza y habilidad estratégica. Marca la sabiduría y el conocimiento como guía de acción.</span>',
        },
        "observar las paredes": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar por el cuaderno de edwin",
          "cont": '<span>Al prestar atención a las paredes, puede observar que los dibujos hechos en realidad son palabras encadenadas. Por ejemplo, en una parte indica: «OIEK TE MEAIEID TE BSP CQERE OIESCOG X KESK, JG CGLSTD CEFOQCE, KQK JEIBGCDK BECLSDCGAGC PD FEHQECD HQE EIG, CD FDTISGBDK JGAEIPE FQEKOD TE DOIG BGCEIG».<br><br><adding search="intervención uno" class="check-cards"></adding></span>',
        },

        "segundo código": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "intervención uno",
          "cont": '<span>Un nuevo mensaje revela: HQSCLE TE GAISP TE BSP CQERE OIESCOG X KESK, IETGTG EC PG OSECTG TE FDLSDCEK TE NCDLNOQIC. EP PDOE TE GBDIOECOSG LGTQLGTG DPSG G MPDIEK TE LEIEWD, ECVGCDKGBECOE PEOGP. JEBDK KEPPGTD 200 RSGPEK. EP TQECD GPEVD "MEIBECOGLSDC FISBGREIGP". CD JG LDPGTD.</span>',
        },

        "tercer código": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "intervención uno",
          "cont": '<span>Un nuevo mensaje revela: RESCOSQCD TE UQPSD TE BSP CQERE OIESCOG X KESK, FEIKELQLSDC LDKOEIG EYSODKG. EP KDKFELJDKD SCOECOD ERGTSICDK QKGCTD QC OIGCKMSVQIGTDI TE GIECG FGIG LIEGI QC PGAEISCOD. TEKBGCOEPE EP JELJSWD LDC QC KSBFPE MSCSOE. SCLGQOGTG PG RGISOG.</span>',
        },

        "maqueta del sistema solar": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "tercer código",
          "cont": '<span>En el medio de todos los dibujos hay un cuadro que tiene una maqueta del sistema solar. El sol se encuentra en el centro y cada esfera del color que corresponde ubican su correspondiente posición. Sin embargo, cada plantea se encuentra sobre un alambre que parece tener ocho posiciones. Y en el lienzo negro que hace de fondo se puede notar que alguien marcó los puntos cardinales: N (norte), NE (noreste), E (este), SE (sureste), S (sur), SO (suroeste), O (oeste) y NO (noroeste). Como si cada planeta podría ser movido de lugar. Las posiciones actuales son: Mercurio en NO, Venus en SO, Tierra en E, Marte en SE, Júpiter en SE, Saturno en NW, Urano en SO y Neptuno en E.</span>',
        },

        "mover planeta neptuno": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "maqueta del sistema solar",
          "cont": '<span>Al mover el último planeta, se mueve al SW y presionar el sol, la cupula del observatorio pierde la gravedad por un momento provocando que todos comiencen a flotar, el observatorio en su totalidad parece girar y cuando termina, la gravedad vuelve en sí. Todos los personajes pieden 20PV. Las paredes han perdido todos sus dibujos y en el cuadro Galatea bufa «Aún no hemos llegado a la década del noventa, queridos». Las únicas combinaciones posibles, son las que aparecen a continuación, cualquier otra combinación, revela paredes vacías.</span>',
        },

        "generar secuencia: mercurio (no) - venus(so) - tierra (e) - marte (n) - júpiter (so) - saturno (e) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: DCLE TE CDRSEBAIE TE BSP CQERE LQGIECOG X QCD, PDVSKOSLG TE VQEIIG. KQFEIRSKSDC TEP OIGKPGTD TE GIOEMGLODK BGVSLDK KECKSAPEK G PQVGIEK KEVQIDK. PG IQOG TEAE KEI BDTSMSLGTG LGTG 72 JDIGK.</span>',
        },

        "generar secuencia: mercurio (no) - venus(se) - tierra (e) - marte (o) - júpiter (ne) - saturno (o) - urano (so) - neptuno (e)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: TSEW TE DLOQAIE TE BSP CQERE OIESCOG X TDK, BSKSDC TE FEIKELQLSDC EYSODKG EC VGPEK TEP CDIOE. EP DAUEOSRD EIG QC MGPKSMSLGTDI TE VGPEDCEK. PG LDDITSCGLSDC LDC EP EKLQGTIDC MQE SBFELGAPE.</span>',
        },

        "generar secuencia: mercurio (no) - venus(s) - tierra (e) - marte (so) - júpiter (o) - saturno (e) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: DCLE TE GVDKOD TE BSP CQERE LQGIECOG X LQGOID, BSKSDC TE SCMSPOIGLSDC. KE JG DAOECSTD SCMDIBGLSDC RSOGP: PG REITGTEIG CGOQIGPEWG TE PDK DAUEOSRDK TEP ECEBSVD. EKOE LDCDLSBSECOD TEAE KEI LPGKSMSLGTD SCBETSGOGBECOE.</span>',
        },

        "generar secuencia: mercurio (no) - venus(n) - tierra (e) - marte (o) - júpiter (e) - saturno (so) - urano (ne) - neptuno (s)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee, sin embargo, el resto de los dibujos aparecen borroneados: DCLE TE ECEID TE BSP CQERE LSCLQECOG X TDK, KGOQIC, BS CSCG...</span>',
        },

        "generar secuencia: mercurio (ne) - venus(ne) - tierra (e) - marte (no) - júpiter (e) - saturno (o) - urano (so) - neptuno (e)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: RESCOE TE KEFOSEBAIE TE BSP CQERE OIESCOG X OIEK, ECMDLGIKE EC EP ECOIECGBSECOD TE CQERDK IELPQOGK. EP LQIISLQPQB CELEKSOG QCG KELLSDC TETSLGTG G PG DLQPOGLSDC GRGCWGTG.</span>',
        },

        "generar secuencia: mercurio (n) - venus(s) - tierra (e) - marte (e) - júpiter (n) - saturno (se) - urano (ne) - neptuno (s)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: LQGOID TE KEFOSEBAIE TE BSP CQERE LQGIECOG X CQERE, IEKDPQLSDC TE PG LISKSK TEP "VGPEDC". KE PDVID SCOEILEFOGI EP LGIVGBECOD. PG SCMDIBGLSDC KQVSEIE HQE QC BSEBAID SCOEICD TEP BSCSKOEISD EKOQRD SBFPSLGTD.</span>',
        },

        "generar secuencia: mercurio (n) - venus(ne) - tierra (e) - marte (so) - júpiter (o) - saturno (se) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: OIEK TE UQCSD TE BSP CQERE LQGIECOG X LSCLD, GKLECKD G UEME TE GQIDIEK. BS FISBEIG GLLSDC EK PG IERSKSDC ODOGP TE PGK PEXEK TE VQEIIG BGVSLG. EK QC CQERD LGFSOQPD FGIG PG DMSLSCG.</span>',
        },

        "generar secuencia: mercurio (n) - venus(ne) - tierra (e) - marte (o) - júpiter (so) - saturno (no) - urano (so) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: RESCOSCQERE TE BGIWD TE BSP CQERE OIESCOG X CQERE, GPEIOG IDUG. EP ISEKVD TE LDCOGVSD BGVSLD EK IEGP TEASTD G PG EKLGPGTG EC EP LDCOSCECOE. ODTD EP TEFGIOGBECOD TE GQIDIEK EC BGYSBG GPEIOG.</span>',
        },

        "generar secuencia: mercurio (e) - venus(o) - tierra (e) - marte (s) - júpiter (s) - saturno (no) - urano (so) - neptuno (e)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: KESK TE CDRSEBAIE TE BSP CQERE OIESCOG X KSEOE, PG GBECGWG KE SCOECKSMSLG. PDVIE SCOEILEFOGI QCG LDBQCSLGLSDC LSMIGTG ECOIE VIQFDK EYOIGCUEIDK. KE IEHQSEIE TEKLSMIGTD SCBETSGOD TEP BECKGUE.</span>',
        },

        "generar secuencia: mercurio (e) - venus(ne) - tierra (e) - marte (o) - júpiter (o) - saturno (se) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: OIESCOG TE ECEID TE BSP CQERE LQGIECOG X KESK, EYSOD EC PG IEDIVGCSWGLSDC GTBSCSKOIGOSRG. LIEGLSDC TE PG QCSTGT TE IELQFEIGLSDC TE DAUEODK DKLQIDK. PG PSBFSEWG FDKO-VQEIIG IEHQEISIG GCDK.</span>',
        },

        "generar secuencia: mercurio (e) - venus(n) - tierra (e) - marte (ne) - júpiter (s) - saturno (e) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: OIEK TE GVDKOD TE BSP CQERE LQGIECOG X TDK, SBFPEBECOGLSDC TE PG IEMDIBG TE EBEIVECLSG. EP ECMDHQE KE BQERE TE PG FIERECLSDC GP LDBAGOE GLOSRD. PDK GQIDIEK GJDIG KE TEKFPSEVGC EC FGIEUGK GIBGTGK.</span>',
        },

        "generar secuencia: mercurio (so) - venus(o) - tierra (e) - marte (so) - júpiter (ne) - saturno (so) - urano (ne) - neptuno (s)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: TDK TE TSLSEBAIE TE BSP CQERE LSCLQECOG X QCD, KE GKEVQIG PG SCMDIBGLSDC BGK KECKSAPE. BS FISCLSFGP OEBDI EK PG MSPOIGLSDC TEKTE TECOID. BSKSDC LDBFPEOGTG.</span>',
        },

        "generar secuencia: mercurio (se) - venus(se) - tierra (e) - marte (se) - júpiter (so) - saturno (e) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: OIESCOG X QCD TE ECEID TE BSP CQERE LQGIECOG X OIEK, EP RDPQBEC TE LGKDK KE JG TQFPSLGTD. KE GFIDAD PG KDPSLSOQT TE BGK FEIKDCGP X IELQIKDK. EP TEKVGKOE EC PG MQEIWG EK FIEDLQFGCOE. CELEKSTGT TE IDOGLSDC.</span>',
        },

        "generar secuencia: mercurio (se) - venus(no) - tierra (e) - marte (so) - júpiter (s) - saturno (no) - urano (so) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: OIEK TE MEAIEID TE BSP CQERE OIESCOG X DLJD, EYFETSECOE I.B.O. GASEIOD. PG SCREKOSVGLSDC KE LECOIGIG EC QC UDREC TE JGASPSTGTEK EYLEFLSDCGPEK.</span>',
        },

        "generar secuencia: mercurio (se) - venus(ne) - tierra (e) - marte (se) - júpiter (ne) - saturno (se) - urano (ne) - neptuno (s)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: LGODILE TE GVDKOD TE BSP CQERE LSCLQECOG, SCREKOSVGLSDC SCOEICG SCSLSGTG. KE IEHQSEIE QCG GQTSODISG FIDMQCTG TE PDK MDCTDK DFEIGOSRDK X TE PG PEGPOGT TEP FEIKDCGP. CD FDTEBDK LDCMSGI EC CGTSE.</span>',
        },

        "generar secuencia: mercurio (s) - venus(s) - tierra (e) - marte (n) - júpiter (e) - saturno (o) - urano (so) - neptuno (e)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: TSELSCQERE TE BGXD TE BSP CQERE OIESCOG X LQGOID, EP GILJSRD 77, RSVSPGCLSG TE BGVDK DKLQIDK BECDIEK, LIELE. GKSVCGLSDC TE IELQIKDK GTSLSDCGPEK.</span>',
        },

        "generar secuencia: mercurio (s) - venus(o) - tierra (e) - marte (no) - júpiter (so) - saturno (se) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: LGODILE TE GVDKOD TE BSP CQERE LQGIECOG X KSEOE, TEKLQAISBSECOD X CEQOIGPSWGLSDC TEP MQEIOE SPEVGP LDKOEID. KE PDVID LDCMSKLGI QC GIKECGP TE RGISOGK BDTSMSLGTGK. EP LDCOIGAGCTD EK EP CQERD MIECOE.</span>',
        },

        "generar secuencia: mercurio (s) - venus(o) - tierra (e) - marte (no) - júpiter (se) - saturno (e) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: LSCLD TE ECEID TE BSP CQERE LQGIECOG, CQERDK EKMQEIWDK EC PG DMSLSCG. KE EKOG MDIBGCTD QCG GPSGCWG SCOEICGLSDCGP TE GQIDIEK. BS IDP KEIG EP TE ECPGLE FISCLSFGP.</span>',
        },

        "generar secuencia: mercurio (o) - venus(s) - tierra (e) - marte (ne) - júpiter (se) - saturno (o) - urano (so) - neptuno (e)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: RESCOSCQERE TE UQPSD TE BSP CQERE OIESCOG X LSCLD, TEKGFGISLSDC TEP OEKOSVD T.B. MIGLGKD DFEIGOSRD. KE IEHQSEIE QCG IERSKSDC TE ODTDK PDK FIDODLDPDK TE FIDOELLSDC. GPOD CSREP TE EKOIEK EC PG QCSTGT.</span>',
        },

        "generar secuencia: mercurio (o) - venus(o) - tierra (e) - marte (so) - júpiter (n) - saturno (o) - urano (so) - neptuno (e)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: HQSCLE TE MEAIEID TE BSP CQERE OIESCOG X QCD, SCSLSGLSDC. BSK FISBEIDK IEFDIOEK KDC FIDBEOETDIEK. ECMDHQE: TEOELLSDC TE LDCMQCTQK EC FDKSAPEK OEKOSVDK.</span>',
        },

        "generar secuencia: mercurio (o) - venus(no) - tierra (e) - marte (n) - júpiter (so) - saturno (se) - urano (ne) - neptuno (se)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta neptuno",
          "cont": '<span>La sala vuelve a girar haciendo que todos los personajes pierdan 20 puntos de vida. La pared se encuentra completa de dibujos de constelaciones que marcan todo un año de notas, al leer el primero se lee: RESCOSLQGOID TE MEAIEID TE BSP CQERE LQGIECOG X DLJD, EP FEPSVID KE TSKMIGWG. SCSLSD TE PG RSVSPGCLSG TE BGVSG ECLQASEIOG EC SCKOSOQLSDCEK ETQLGOSRGK. PG LDIIQFLSDC FQETE EBFEWGI EC LQGPHQSEI FGIOE.</span>',
        },

        "mover planeta tierra": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "maqueta del sistema solar",
          "cont": '<span>Por más que lo intenten, el planeta Tierra se mantiene en su lugar. Y al notar el alambre que simula su recorrido, no contiene ninguna marca como sucede con el resto de los planetas.</span>',
        },

        "posición planeta tierra": {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "5" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta tierra",
          "cont": '<span>La posición del plantea Tierra marca los meses comprendidos en el verano. Para ser más preciso, marca lo posición del solsticio de verano.</span>',
        },

        "obtención de notas": {
          "visible": { "attr": { "val": "min" }, "know": { "astronomía": "5" }, "job": "invalid", "name": "invalid", }, "place": "mover planeta tierra",
          "cont": '<span>Para poder obtener la combinación de los planetas en el año 1952 deben encontrar la posición de los planetas en dicho año. Si le preguntan a Galatea la misma responderá «¿Me has visto cara de enciclopedia? Lo que una tiene que escuchar. Las revistas de astronomía están en el armario». Basta buscar la entrega de Julio 1952 para encontrar las posiciones correspondientes.</span>',
        },

        "posición de mercurio en 1952": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "obtención de notas",
          "cont": '<span>Mercurio se encuentra aproximadamente en el Noroeste.</span>',
        },

        "posición de venus en 1952": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "obtención de notas",
          "cont": '<span>Venus se encuentra aproximadamente en el Norte.</span>',
        },

        "posición de marte en 1952": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "obtención de notas",
          "cont": '<span>Marte se encuentra aproximadamente en el Oeste.</span>',
        },

        "posición de júpiter en 1952": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "obtención de notas",
          "cont": '<span>Júpiter se encuentra aproximadamente en el Este.</span>',
        },

        "posición de saturno en 1952": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "obtención de notas",
          "cont": '<span>Saturno se encuentra aproximadamente en el Suroeste.</span>',
        },

        "posición de urano en 1952": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "obtención de notas",
          "cont": '<span>Urano se encuentra aproximadamente en el Noreste.</span>',
        },

        "posición de neptuno en 1952": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "obtención de notas",
          "cont": '<span>Neptuno se encuentra aproximadamente en el Sur.</span>',
        },

        "mensaje en el medio de la pared": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "generar secuencia: mercurio (no) - venus(n) - tierra (e) - marte (o) - júpiter (e) - saturno (so) - urano (ne) - neptuno (s)",
          "cont": '<span>Si bien todo ha sido borrado, un mensaje aparece casi en el centro y en el cual se puede leer: Ks qcd te bsk jsudk ke eclqecoig ec ep viqfd, ekfeid hqe kefg lqgcod pd ksecod. Ks cscvqcd te eppdk ekog fiekecoe, fdi mgrdi, jgvgc ppevgi ep beckgue.<br><br>Ke hqe bdisie ekog cdlje, x xg je sbgvscgtd pd hqe kqleteig, x cd fqetd jglei cgtg bgk hqe fetsi feitdc. Bs bqeioe pg je lgqkgtd xd bskbd. Odtd glod osece ldckelqeclsg x cd oebd g pg bqeioe. Oebd g pdk ielqeitdk hqe oigeig bs bqeioe g bsk jsudk.<br><br>Ks jgc ppevgtd jgkog ghqs, bgihqec bs bqeioe ldbd gllstecoe.<br><br>G bsk aeaek... fgfg pdk gbg. Pd ksecod, pek je mgppgtd gp uqigi fidoeveipdk.</span>',
        },

        "revelar mensaje para miembros que no sean merrythought (incluye letra a)": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "a", }, "place": "mensaje en el medio de la pared",
          "cont": '<span>Al final del mensaje, en letras de otro color, aparece un mensaje que ningún Merrythought puede leer: «Dejen a mis niños fuera del caso» y, a continuación, un código cifrado: Kdpd pg kgcvie bdkoigig ep iekod te pg scmdibglsdc hqe fqetec celeksogi.</span>',
        },

        "revelar mensaje para miembros que no sean merrythought (incluye letra w)": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "w", }, "place": "mensaje en el medio de la pared",
          "cont": '<span>Al final del mensaje, en letras de otro color, aparece un mensaje que ningún Merrythought puede leer: «Dejen a mis niños fuera del caso» y, a continuación, un código cifrado: Kdpd pg kgcvie bdkoigig ep iekod te pg scmdibglsdc hqe fqetec celeksogi.</span>',
        },
      },

      "actions": {
        "stellaris illustra": {
          "leve": 'No es suficiente para dibujar la constelación.',
          "moderado": 'No es suficiente para dibujar la constelación.',
          "exitoso": 'Dibuja la constelación de Perseo a la perfección ingresando al Observatorio Galatea.<adding search="armario bajo la escalera" class="check-cards"></adding>',
          "critico": 'Dibuja la constelación de Perseo a la perfección ingresando al Observatorio Galatea.<adding search="armario bajo la escalera" class="check-cards"></adding>',
        },
        "aguamenti": {
          "leve": 'No es suficiente para resolver el problema.',
          "moderado": 'No es suficiente para resolver el problema.',
          "exitoso": 'El agua moja el portón las constelaciones brillan y sus puertas se abren.<adding search="observatorio galatea" class="check-cards"></adding>',
          "critico": 'El agua moja el portón las constelaciones brillan y sus puertas se abren.<adding search="observatorio galatea" class="check-cards"></adding>',
        },
        "numerus occultus": {
          "leve": 'Las primeras palabras hasta la coma indican la fecha en la que fueron escritos.',
          "moderado": 'Las primeras palabras hasta la coma indican la fecha en la que fueron escritos.',
          "exitoso": 'Las primeras palabras hasta la coma indican la fecha en la que fueron escritos.',
          "critico": 'Las primeras palabras hasta la coma indican la fecha en la que fueron escritos.',
        },
        "gematria veritas": {
          "leve": 'No es suficiente para resolver el problema.',
          "moderado": 'El método de cifrado consiste en que el alfabeto esta ordenado de una manera diferente, pero no indica el patrón.',
          "exitoso": 'El método de cifrado consiste en que el alfabeto esta ordenado de una manera diferente, pero no indica el patrón.',
          "critico": 'El método de cifrado consiste en que el alfabeto esta ordenado de una manera diferente, pero no indica el patrón.',
        },
        "diffindo": {
          "leve": 'Ignorar mensaje de arriba y aplicar las siguientes consecuencias: el personaje logra hacer un corte en la palma perdiendo 10PV. <adding search="mensaje oculto" class="check-cards"></adding>',
          "moderado": 'Ignorar mensaje de arriba y aplicar las siguientes consecuencias: el personaje logra hacer un corte en la palma perdiendo 5PV. <adding search="mensaje oculto" class="check-cards"></adding>',
          "exitoso": 'Ignorar mensaje de arriba y aplicar las siguientes consecuencias: el personaje logra hacer un corte en la palma perdiendo 2PV. <adding search="mensaje oculto" class="check-cards"></adding>',
          "critico": 'Ignorar mensaje de arriba y aplicar las siguientes consecuencias: el personaje logra hacer un corte en la palma perdiendo 0PV. <adding search="mensaje oculto" class="check-cards"></adding>',
        },
        "colloshoo": {
          "leve": '<span>No es suficiente para generar efectos.</span>',
          "moderado": '<span>El personaje se libra de la perdida de puntos por los cambios en la maqueta.</span>',
          "exitoso": '<span>El personaje se libra de la perdida de puntos por los cambios en la maqueta.</span>',
          "critico": '<span>El personaje se libra de la perdida de puntos por los cambios en la maqueta.</span>',
        },
        "arresto momentum": {
          "leve": '<span>No es suficiente para generar efectos.</span>',
          "moderado": '<span>Se puede escuchar el suspiro de Galatea de fondo— <strong>La maqueta produce dos hechizos, uno es ese, ¿Qué te hace pensar que es la solución?</strong>.</span>',
          "exitoso": '<span>Se puede escuchar el suspiro de Galatea de fondo— <strong>La maqueta produce dos hechizos, uno es ese, ¿Qué te hace pensar que es la solución?</strong>.</span>',
          "critico": '<span>Se puede escuchar el suspiro de Galatea de fondo— <strong>La maqueta produce dos hechizos, uno es ese, ¿Qué te hace pensar que es la solución?</strong>.</span>',
        },
        "wingardium leviosa": {
          "leve": '<span>No es suficiente para generar efectos.</span>',
          "moderado": '<span>Se puede escuchar la risa baja de Galatea, quien se cubre la boca con una mano— <strong>Ese no es...</strong></span>',
          "exitoso": '<span>Se puede escuchar la risa baja de Galatea, quien se cubre la boca con una mano— <strong>Ese no es...</strong></span>',
          "critico": '<span>Se puede escuchar la risa baja de Galatea, quien se cubre la boca con una mano— <strong>Ese no es...</strong></span>',
        },
        "locomotor": {
          "leve": '<span>No es suficiente para generar efectos.</span>',
          "moderado": '<span>El bufido de Galatea se hace escuchar— <strong>Les hace falta un Ravenclaw en el equipo.</strong></span>',
          "exitoso": '<span>El bufido de Galatea se hace escuchar— <strong>Les hace falta un Ravenclaw en el equipo.</strong></span>',
          "critico": '<span>El bufido de Galatea se hace escuchar— <strong>Les hace falta un Ravenclaw en el equipo.</strong></span>',
        },
      },
    },
    // fin unveiling the unseen

    "stargazer's night": {
      "description": "La investigación los lleva a un nuevo espacio guíado por el mismo Edwin Merrythought, aunque no saben a dónde conduce. EDITAR",
      "image": "https://2img.net/i.imgur.com/3N0DmMz.png", "requisitos": ["Un miembro debe poseer Aritmancia en Avanzado"],
      "users": [],
      "dependency": ["unveiling the unseen"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["edwin"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin stargazer's night

    "velvet death": {
      "description": "Los frascos encontrados son enviados a los laboratorios de San Mungo para que estos puedan investigar qué poseían en el mismo y por qué Edwin los trató de descartar.",
      "image": "https://2img.net/i.imgur.com/Bt35Exz.png", "requisitos": ["Un miembro debe poseer Alquimia o Pociones en Avanzado"],
      "users": [],
      "dependency": ["unveiling the unseen"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["edwin"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin velvet death

    "lethal trail": {
      "description": "La marca del Ministerio de Magia localizada en los frascos, solo lleva a un lugar. Los frascos habían sido proporcionados por la ministra Tuft, pero por qué, con qué fin. En esta misión la administración participará como Wilhelmina para que pueda hacerse el interrogatorio.",
      "image": "https://2img.net/i.imgur.com/MbBcQcL.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica"],
      "users": [],
      "dependency": ["velvet death", "stargazer's night"],
      "type": "interrogatorio", "closed": false, "link": "", "tagged": ["edwin", "wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin lethal trail

    "the wounded dragon": {
      "description": "Reportes han llegado a la reserva Natural de Flint, un dragón que ha sido volando por las tierras irlandesas. No solo son los rastros de sangre los que generan confianza de una gran herida, sino también el llanto que podía ser escuchado por toda la zona. La reserva se mueve y envía a alguien a encontrar al dragón herido para poder curarlo.",
      "image": "https://2img.net/i.imgur.com/JyNcMmD.png", "requisitos": ["Un miembro debe tener CCM en Avanzado", "Un miembro debe poseer Curación en Avanzado"],
      "users": [],
      "dependency": ["the apple house", "stargazer's night", "in search of the deathly hallows"],
      "type": "misión", "closed": false, "link": "", "tagged": ["wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the wounded dragon

    "heaven of the forgotten": {
      "description": "Si bien el dragón fue transportado a la reserva, se ha reportado que, el lugar donde el dragón cayó se trataba de un espacio que antes solía utilizar la Orden de los Ancestros. Y, como era de esperarse, mandaron al departamento de Seguridad a investigar.",
      "image": "https://2img.net/i.imgur.com/chnJil9.png", "requisitos": ["Un miembro del Dpto de Seguridad Mágica", "Se recomienda una persona que crea en la Orden de los Ancestros"],
      "users": [],
      "dependency": ["the wounded dragon"],
      "type": "misión", "closed": false, "link": "", "tagged": ["wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin heaven of the forgotten

    "reflections of the deep": {
      "description": "Capaz es ilógico pensar en algo como el destino, o que algo como las muertes pudieron ser anunciadas tantos años atrás. Capaz es solo una oportunidad para demostrar que aquellos que creen en religiones no poseen la razón o quizá, solo quizá, hay una respuesta que pide a gritos ser escuchada. La laguna de los lamentos es donde inicia, donde podrá verse el futuro, el pasado y el presente.",
      "image": "https://2img.net/i.imgur.com/K4LFLIJ.png", "requisitos": ["Un miembro debe poseer Adivinación en Consagrado o ser vidente"],
      "users": [],
      "dependency": ["heaven of the forgotten", "nothing but the truth"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin reflections of the deep

    "wings gone astray": {
      "description": "En la reserva tratan de descubrir qué pasó con el dragón y qué le generó las heridas que posee. Mientras intentan hacer lo imposible para poder curarlo, algunas señales pueden confirmar el inicio de la herida. ¿Habrá algo más grande que pueda herir a un dragón?",
      "image": "https://2img.net/i.imgur.com/f4NsoJy.png", "requisitos": [],
      "users": [],
      "dependency": ["the wounded dragon"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin wings gone astray

    "arcane families": {
      "description": "Mientras en la reserva trataban de encontrar con una cura para el dragón, un grupo de magos deberá ir a una isla que permanecía cerrada para muggles, magos y brujas, para investigar qué ha sucedido con el dragón y quién lo ha herido.",
      "image": "https://2img.net/i.imgur.com/0E6XyJW.png", "requisitos": ["Un miembro debe poseer CCM en Avanzado", "Un miembro del Dpto de Seguridad Mágica"],
      "users": [],
      "dependency": ["the wounded dragon"],
      "type": "misión", "closed": false, "link": "", "tagged": ["wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin arcane families

    "nothing but the truth": {
      "description": "Esta misión posee una serie de temas en flashback que la administración irá desbloqueando para que los usuarios puedan ganar conocimiento sobre ciertas situaciones que ocurrieron en el pasado y como los hechos llegaron a hasta la situacion actual.",
      "image": "https://2img.net/i.imgur.com/lVnrOfx.png", "requisitos": ["La administración abrirá un tema con las condiciones para desbloquear esta trama"],
      "users": [],
      "dependency": ["lethal trail"],
      "type": "misión", "closed": false, "link": "", "tagged": ["edwin", "morgana", "sirius", "wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin nothing but the truth

    "the obsidian tide": {
      "description": "Esta misión posee una serie de temas en flashback que la administración irá desbloqueando para que los usuarios puedan ganar conocimiento sobre ciertas situaciones que ocurrieron en el pasado y como los hechos llegaron a hasta la situacion actual.",
      "image": "https://2img.net/i.imgur.com/BgdlkCZ.png", "requisitos": ["La administración abrirá un tema con las condiciones para desbloquear esta trama"],
      "users": [],
      "dependency": ["nothing but the truth"],
      "type": "misión", "closed": false, "link": "", "tagged": ["wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the obsidian tide

    "the black wave": {
      "description": "La administración abrirá un evento para esta misión particular debido a que aplicará a todos los personajes.",
      "image": "https://2img.net/i.imgur.com/AFEm2I9.png", "requisitos": ["La administración abrirá un tema con las condiciones para desbloquear esta trama"],
      "users": [],
      "dependency": ["the obsidian tide"],
      "type": "misión", "closed": false, "link": "", "tagged": ["wave"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin the black wave

    "the rest of us": {
      "description": "Un ataque se ha llevado a cabo en la Residencia Hawksmoor, donde han secuestrado a 6 niños y 3 adultos de diferentes especies mágicas. A ellos se suman 2 coordinadores y 2 Loriens.",
      "image": "https://2img.net/i.imgur.com/zZ5WNNh.png", "requisitos": ["Un personaje tendrá que tener curación en avanzado", "Un personaje tendrá que tener Transformaciones en Avanzado", "Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u1","/u8","/u24","/u12","/u145"],
      "dependency": [],
      "type": "misión", "closed": false, "link": "https://blackwave.foroactivo.com/t933-mision-the-rest-of-us", "tagged": ["original"],

      "cards": [],
      "searchs": {
        "vidrios rotos": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Lo primero que se puede observar al ingresar a la residencia, es que la mayoría de los vidrios de la sala de estar, se encuentran rotos. En algunos faltan algunas partes, otros se encuentran trizados.</span>',
        },
        "forma de la ruptura de los vidrios": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "vidrios rotos",
          "cont": '<span>Por la forma en la que se encuentran rotos y trizados los vidrios, se puede concluir que el origen fue el mismo para todo lo que era de vidrio del lugar. Algo provocó un estallido que tuvo como consecuencia, los vidrios rotos.</span>',
        },
        "preguntar: ¿por qué aun no repararon los vidrios?": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "vidrios rotos",
          "cont": '<span>Uno de los coordinadores responde a la pregunta: «Un miembro del Departamento de seguridad, nos pidió que no tocaramos nada hasta que alguien pudiera analizar la escena. Y como queremos que encuentren a todos, no lo hemos hecho. Estabamos esperando que encuentren todo lo que necesiten para poder reparar todo, en especial los vidios».</span>',
        },
        "origen de la explosión": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "forma de la ruptura de los vidrios",
          "cont": '<span>Lo que haya hecho explotar los vidrios, lo hizo en un costado de la sala, cerca de un juego de niños, unos cubos con letras. Es donde más daño hay y desde allí se propaga. Lo que parecería indicar que el origen fue un niño de la residencia.</span>',
        },
        "preguntar: ¿a qué niño le gusta jugar con esos juegos?": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "origen de la explosión",
          "cont": '<span>Uno de los lorien responde: «Pertenecen a Velisse. En realidad, pertenecen a todos, pero Velisse es quien más juega con ellos. Uno de los Lorien desaparecidos la encontró y como es muy retraida no quisimos dejarla en el orfanato.».</span>',
        },
        "preguntar: ¿velisse ya ha realizado sus primera muestra de magia?": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar: ¿a qué niño le gusta jugar con esos juegos?",
          "cont": '<span>Uno de los lorien responde: «Velisse no es una bruja, nació de una banshee y un muggle. Llegamos a dar con el muggle, pero dejó en claro que no la quería porque se desperaba a la noche gritando... Por eso la abandonó».</span>',
        },
        "preguntar: ¿tienen algún protocolo de emergencia?": {
          "visible": { "attr": { "int": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Uno de los coordinadores responde: «Por supuesto, son demasiadas criaturas en un solo lugar. En caso de una emergencia, tienen que abrir las puertas y dejarlas trabajadas. A veces, las hijas de banshee pueden trabar las mismas con sus gritos y luego los demás quedan encerrados. Ocurre lo mismo en caso de terremoto. Luego deben hacer una fila y caminar pegados a las paredes, liberar el centro de los pasillos en caso de incendio. Todos se retiran hasta el jardín trasero, donde se debe hacer el conteo de cabezas y esperar que un coordinador de indicaciones».</span>',
        },
        "preguntar: ¿cada cuánto realizan un simulacro?": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar: ¿tienen algún protocolo de emergencia?",
          "cont": '<span>Uno de los coordinadores responde: «Una vez cada tres meses, es importante que sepan qué deben hacer en caso de una emergencia».</span>',
        },
        "preguntar: ¿quiénes fueron secuestrados?": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Uno de los coordinadores responde: «Wiley y Nessa, eran los coordinadores del día. Baird era uno de los Lorien que cuidaba a los más pequeños. Y luego estaban: Bonnie, Dalia, Fridric, Edda, Loch y Velisse».</span>',
        },
        "preguntar: ¿había alguien más en el lugar?": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar: ¿quiénes fueron secuestrados?",
          "cont": '<span>Uno de los coordinadores responde: «No, ellos eran todos los que estaban en la residencia anoche».</span>',
        },
        "preguntar: ¿qué es lo último que supieron de ellos?": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Uno de los coordinadores responde: «Era como cualquier otro día. La mayoría no pasamos la noche aquí, salvo que sea luna llena y solo por prevención. Se habían quedado dos coordinadores y un lorien para cuidar a todos, pero al día siguiente llegamos y no había nadie. Shea fue la primera en llegar, me avisó a mi y luego al Departamento de Seguridad... y aquí estamos. Como nos han dicho, no hemos tocado nada más allá de revisar las habitaciones. En caso de que lo pregunten, no, no están en las habitaciones».</span>',
        },
        "seguir protocolo de seguridad": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar: ¿tienen algún protocolo de emergencia?",
          "cont": '<span>Al seguir el protocolo de seguridad, pueden notar que todas las puertas están cerradas, pero ninguna de ellas se encuentra trabada. Salvo la puerta que da al jardín que se encuentra cerrada con llave, aunque la misma se encuentra colgada al lado de la puerta.</span>',
        },
        "preguntar: ¿esta llave abre la puerta?": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "seguir protocolo de seguridad",
          "cont": '<span>Un Lorien responde: «Sí, la cerramos cuando ya no estamos todos. El resto de las puertas al exterior se cierran cuando todos van a dormir».</span>',
        },
        "conclusión sobre el protocolo de seguridad": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "seguir protocolo de seguridad",
          "cont": '<span>La falta de movimiento y que la llave este colgada como si nada hubiera pasado, indica que el protocolo no se siguió aquella noche.</span>',
        },
        "preguntar sobre los poderes de banshee de velisse": {
          "visible": { "attr": { "int": "4" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar: ¿velisse ya ha realizado sus primera muestra de magia?",
          "cont": '<span>Un Lorien responde: «La encontró Baird cuando tenía tres años y medio. Ya era pequeña, pero ya podía ver trágicos futuros con claridad, a muchos les daba miedo. Aterró a más de un semi gigante. Creemos que por eso es tan introvertida, no se relaciona demasiado con las personas. Le tiene mucho miedo a sus propios poderes, teme que todo lo que ve pase».</span>',
        },
        "preguntar: ¿dónde se esconde velisse cuando tiene miedo?": {
          "visible": { "attr": { "int": "4" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar sobre los poderes de banshee de velisse",
          "cont": '<span>Un Lorien responde: «Por lo general, a los brazos de Baird, si él no esta, busca una sala que tenemos para banshees que esta asilada».</span>',
        },
        "visitar la sala": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar: ¿dónde se esconde velisse cuando tiene miedo?",
          "cont": 'completar',
        },
        "la canción de cuna": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "visitar la sala",
          "cont": '<span>Pueden escuchar una canción de cuna al otro lado de la puerta -> los desvía a otro lugar</span>',
        },
        "marcas de pisadas": {
          "visible": { "attr": { "sab": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "marcas del suelo",
          "cont": '<span>En el suelo se marcan unas pisadas. Por su tamaño, podría deducirse que se trata de un hombre. Los pasos recorren todas las habitaciones.</span>',
        },
        "dirección de las pisadas": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "marcas del suelo",
          "cont": '<span>Las marcas de las pisadas entran y salen, y por el peso de las mismas, se puede deducir que no llevaba carga extra al salir. Aunque el caminar delata que iba borrando su paso al salir.</span>',
        },
        "cuadro roto": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Un cuadro se encuentra roto. Es un cuadro dibujado por un niño. Parece que alguien lo ha golpeado.</span>',
        },
      },

      "actions": {
        "revelio": {
          "leve": '<span>No es suficiente para generar efectos.</span>',
          "moderado": '<span>Pueden notarse unas marcas en el piso. Pisadas realizadas con barro que fueron removidas con un hechizo de limpieza.<adding search="marcas del suelo" class="check-cards"></adding></span>',
          "exitoso": '<span>Pueden notarse unas marcas en el piso. Pisadas realizadas con barro que fueron removidas con un hechizo de limpieza.<adding search="marcas del suelo" class="check-cards"></adding></span>',
          "critico": '<span>Pueden notarse unas marcas en el piso. Pisadas realizadas con barro que fueron removidas con un hechizo de limpieza.<adding search="marcas del suelo" class="check-cards"></adding></span>',
        },
      },
    },
    // the rest of us

    "the night watchman's route": {
      "description": "Completar",
      "image": "https://2img.net/i.imgur.com/zZ5WNNh.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u1"],
      "dependency": ["the rest of us"],
      "type": "misión", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // the night watchman's route

    "archives beneath the frame": {
      "description": "Completar",
      "image": "https://2img.net/i.imgur.com/zZ5WNNh.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u1"],
      "dependency": ["the rest of us"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // archives beneath the frame

    "the chaser's wrath": {
      "description": "Completar",
      "image": "https://2img.net/i.imgur.com/zZ5WNNh.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u1"],
      "dependency": ["the night watchman's route", "archives beneath the frame"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // the chaser's wrath

    "the echo of the lost sisterhood": {
      "description": "Completar",
      "image": "https://2img.net/i.imgur.com/zZ5WNNh.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u1"],
      "dependency": ["the chaser's wrath"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // the echo of the lost sisterhood

    "the throne of the nightingales": {
      "description": "Completar",
      "image": "https://2img.net/i.imgur.com/zZ5WNNh.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u1"],
      "dependency": ["the echo of the lost sisterhood"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // the throne of the nightingales

    "silent sentinel": {
      "description": "Tras los sucesos de Frozen Sunflower, se busca interrogar al guardia que fue incapacitado por Nina Wraithwood, para comprender si posee una información que pueda dar más luz al objeto robado.",
      "image": "https://2img.net/i.imgur.com/fDwQ2CI.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u8", "c/u55", "/u146", "/u130"],
      "dependency": ["frozen sunflowers"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // silent sentinel

    "clandestine melodies": {
      "description": "Aquellos que se mueven en los círculos saben perfectamente que existe una banda de trovadores cuyos cánticos ocultan un precio y las guitarras, un secreto. Para poder obtener más información de la familia Denmar deberán infiltrarse a los ensaños de la banda Fhómhair quiénes suelen tener toda la información sobre los trabajos más clandestinos de la sociedad.",
      "image": "https://2img.net/i.imgur.com/tKGTsc9.png", "requisitos": ["Un miembro debe tener Contrabando en Avanzado", "Un miembro debe tener Magia Oscura en Consagrado"],
      "users": ["c/u131","/u8","/u55","/u9","/u145"],
      "dependency": ["frozen sunflowers"],
      "type": "misión", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // clandestine melodies

    "midnight ashes": {
      "description": "La redada en la que Wrenn Wraithwood falleció, oculta una verdad que se ha vuelto necesaria descubrir. Por lo tanto, deberán conseguir toda la información que puedan de la misma para comprender la relación de Wrenn y Nina.",
      "image": "https://2img.net/i.imgur.com/5xLMKUg.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u8", "c/u55","/u78","/u146"],
      "dependency": ["frozen sunflowers"],
      "type": "investigación", "closed": false, "link": "https://blackwave.foroactivo.com/t934-investigacion-midnight-ashes", "tagged": ["original"],

      "cards": [],

      "searchs": {
        "diario de misión 11 de enero de 1952 - wrenn wraithwood": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "",
          "cont": '<span>A continuación, se presenta las bitácoras de los hechos correspondiente al incidente de Wrenn Wraithwood que acabó con su vida y las de tres personas. Siete heridos han sido registrados.</span>'
        },
        "bitácora de los hechos nro.01": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "diario de misión 11 de enero de 1952 - wrenn wraithwood",
          "cont": '<span>A las 8:30am del 11 de Enero, se llevó a cabo una redada que buscaba detener a un legeremante que había sido reportado por el Departamento de Seguridad. El legeremante, no identificado, había sido acusado de infiltrar información del Ministerio de Magia Británico a Ministerios de Magia del exterior, además de infiltrar información a los Ministros Muggles de diferentes partes del mundo.</span>'
        },
        "bitácora de los hechos nro.02": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "bitácora de los hechos nro.01",
          "cont": '<span>A las 9:05 am, el grupo compuesto por diez aurores del Departamento de Seguridad, se dirigió a la supuesta dirección del legeremante. Al llegar, se encontraron con un escenario de caos: había dos cuerpos ensangrentados cuyas vidas habían sido tomadas por, se supone, el legeremante. Dos personas, identificadas posteriormente, como nigromantes ilegales, presentaron un duelo a los aurores presentes.</span>'
        },
        "bitácora de los hechos nro.03": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "bitácora de los hechos nro.02",
          "cont": '<span>A las 9:08 am, la situación se encontraba bajo control total. Los aurores habían logrado incapacitar a los nigromantes para su correspondiente interrogatorio, y otros aurores ingresaban al lugar para realizar el correspondiente peritaje. Sin embargo, la aurora Wrenn Wraithwood, conjuró un hechizo explosivo, sin razón aparente, que terminó provocando una explosión que destruyó el lugar y causó heridas a varios aurores.</span>'
        },
        "bitácora de los hechos nro.04": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "bitácora de los hechos nro.03",
          "cont": '<span>A las 9:42 am, se registró la muerte de Wrenn Wraithwood, quien había sido herida por el hechizo explosivo. La aurora fue declarada muerta por el Departamento de Seguridad, junto a tres compañeros. Los heridos habían sido colocados en resguardo, sus heridas más graves habían sido curadas y solo debían esperar la llegada de los medimagos correspondientes. Los nigromantes, aprovecharon la situación para escapar.</span>'
        },
        "bitácora de los hechos nro.05": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "bitácora de los hechos nro.04",
          "cont": '<span>A las 10:30 am, Edwin Merrythought localizó a los nigromantes, los cuales fueron detenidos por el resto de los aurores del Departamento de Seguridad Mágica y fueron trasladados a la cárcel de Azkaban.</span>'
        },
        "informe de la morgue": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "bitácora de los hechos nro.05",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>PERGAMINO DE DEFUNCIÓN</strong><br><i>Hospital San Mungo para Enfermedades y Heridas Mágicas – Archivo de los Caídos</i></div><br><strong>Nombre Completo del Paciente</strong>: Wrenn Wraithwood<br><strong>No. Expediente</strong>: SM-FD/5034-G<br><strong>Fecha de Ingreso</strong>: 11 de Enero de 1952.<br><strong>Fecha de fallecimiento</strong>: 11 de Enero de 1952 a las 9:42 am.<br><br><strong>Edad</strong>: 31 años.<br><strong>Sangre</strong>: ☐ Pura &nbsp;☒ Mestiza &nbsp;☐ Muggle &nbsp;☐ Criatura<br><br><strong>Motivo del ingreso</strong>: Víctima de la explosión de un bombarda que ella misma conjuró.<br><strong>Causa de fallecimiento</strong>: Traumatismo masivo por la explosión que causó un daño multisistémico instantáneo; destrucción cerebral y del tallo encefálico, causando la desintegración de las estructuras vitales que controlan el cuerpo; exanguinación, la pérdida de sangre rápida y masiva por la rotura de grandes vasos y órganos; laceración y fragmentación de órganos virales, provocando un daño físico al corazón, pulmones y aorta que es incompatible con la vida.<br><br><strong>Área médica asignada</strong>: Archivo de los caídos.<br><strong>Atendido por</strong>: Jasper R. Gryffith, nigromante.<br><strong>Acompañante familiar</strong>: Nina Wraithwood (hermana)<br><br><strong>Anexos</strong>:<br>☒ Firma de Jasper R. Gryffith.<br>☒ Firma de Nina Wraithwood.<br>☒ Sello de defunción emitido.</span></span>'
        },
        "información adicional por presencia": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "parkinson", }, "place": "bitácora de los hechos nro.05",
          "cont": '<span>Como alguien que participó de aquella situación, puedes constatar que toda la información revelada ha sido la correcta. Se suponía que el caso era sencillo, atrapar al legeremante e irse. Solo que no era un legeremante, sino dos nigromantes. Había una veela que mantenían drogada y era la que usaban para extraer la información. Esa información está censurada para proteger la identidad de la víctima. La identidad de la víctima no fue revelada y se la llevaron a otro país donde pudiera iniciar su vida desde cero. Sin embargo, el personaje puede haber estado presente cuando se comprobó que se trataba de una veela.</span>'
        },
        "informe de asaldo 11 de enero de 1952": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "bitácora de los hechos nro.05",
          "cont": '<span><span class="book-clipping"><br><div align="center"><strong>INFORME DE ASALTO: 11 DE ENERO DE 1952 A LAS 10:30 AM</strong><br><i>Ministerio de Magia – Departamento de Seguridad</i></div><br><strong>Resumen Ejecutivo</strong>: Bajo la autorización directa del Jefe del Departamento, Edwin Merrythought, se procedió a la interceptación y captura de dos individuos vinculados a artes oscuras. Debido a la peligrosidad de los sujetos y la inmediatez del riesgo de fuga tras una escena del crimen activa, los protocolos de captura se formalizaron a posteriori de la intervención.<br><br><strong>Detalle del Enfrentamiento</strong>: La unidad de intervención localizó a los sospechosos en las afueras de Leeds. Se produjo un duelo mágico de alta intensidad con una duración aproximada de 25 minutos.<br><br>- Bajas/Heridos: Ninguna víctima fatal reportada.<br>- Intervención civil: Se requirió el despliegue del Comité de Disculpas para Muggles para la aplicación masiva de encantamientos desmemorizantes y reparación de daños estructurales en el área.<br><br><strong>Identificación de los detenidos</strong>: Los sujetos han sido identificados como: <br>- Yusuf Lochlan: Ex nigromante de San Mungo.<br>- Vinnie Grayson: Ex nigromante de San Mungo.<br><br>Antecedentes: Ambos sirvieron en el Archivo de los Caídos hasta 1938 y fueron reportados como desaparecidos de la sociedad mágica británica en 1947.<br><br><strong>Hallazgos y Evidencias</strong>: <br>- Marca Distintiva: Ambos detenidos presentan una quemadura queloide en el antebrazo con la forma de una "W" alargada y de puntas afiladas. Se investiga posible vinculación con organizaciones clandestinas.<br><br><strong>Declaraciones de los imputados</strong>: Tras el interrogatorio bajo los protocolos estándar de seguridad, ambos detenidos coincidieron en sus testimonios:<br><br><i>Los imputados admitieron haber actuado bajo estricta voluntad propia, negando coacción externa. Confesaron mantener a la Veela en cautiverio con el único fin de explotar sus facultades mágicas para la sustracción de información confidencial, la cual era posteriormente subastada al mejor postor en el mercado negro.</i><br><br>Firma: <i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_________________________<br>Nombre y título: Edwin Merrythought, Jefe del Departamento de Seguridad Mágica.<br></span></span>'
        },
      },

      "actions": {},
    },
    // midnight ashes

    "paper mask": {
      "description": "Para poder completar toda la información, deberán revisar toda la información que se tiene sobre la familia Wraithwood, incluyendo anomalías en el documento final de Wrenn Wraithwood.",
      "image": "https://2img.net/i.imgur.com/SvlR6WP.png", "requisitos": ["Un personaje debe ser Nigromante"],
      "users": ["c/u78","/u8","/u55","/u91"],
      "dependency": ["frozen sunflowers"],
      "type": "investigación", "closed": false, "link": "https://blackwave.foroactivo.com/t838-investigacion-18-paper-mask", "tagged": ["original"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "abrir cuerpo de wrenn wraithwood",
          "cont": '<span>El tejido visible era correoso y quebradizo, sin la elasticidad del cuerpo reciente. La explosión había dejado bordes irregulares y carbonizados en muchos de los fragmentos más grandes.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "abrir cuerpo de wrenn wraithwood",
          "cont": '<span>Si se toma una respiración profunda, puede sentirse en el ambiente una mezcla de azufre apagado, metal quemado y polvo industrial, un testimonio silencioso del momento final que se negaba a disiparse por completo.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "shun", }, "place": "origen de la canción",
          "cont": '<span>El día de la redada, el personaje no escuchó ninguna canción de banshee, no era algo que todos pudieran escuchar.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "hufflepuff", "name": "invalid", }, "place": "origen del tatuaje",
          "cont": '<span>Si el personaje jugaba quidditch y su casa ganó la copa en sus años como jugador, puede elegir si tiene el tatuaje o no. Sean conscientes de que el personaje lo habría conseguido de manera ilegal si era menor de edad.</span>',
        }
      ],

      "searchs": {
        "abrir cuerpo de wrenn wraithwood": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "",
          "cont": '<span>Lo que la explosión no había consumido o dispersado inmediatamente, ahora se presentaba como una colección de fragmentos orgánicos y restos esqueléticos, que alguien había tenido la amabilidad de presentar en la posición que correspondían. No era un cuerpo completo, sino un mosaico de tejido y hueso que desafiaba la imaginación.<br><br>Bajo la luz fría, los restos mostraban una gama de colores opacos, el blanco hueso de las piezas que ya no tenían brillo, los grises oscuros de tejidos deshidratados, y el marrón grisáceo donde el tejido se había corroído por el paso del tiempo.<br><br>La visión más perturbadora no era lo que quedaba, sin embargo, sino lo que faltaba. Las piezas que se habían dispuesto cuidadosamente en la larga bandeja de acero, demostraba un inventario de la ausencia de órganos, huesos y tejidos.<br><br>El olor, era otro tema. En un principio, el olor dominante era el del anexo de los caídos, una mezcla punzante y metálica de desinfectantes y el aire frío y estéril que se adhería a la ropa. Tras unos segundos de tener el cuerpo expuesto, comenzaba a notarse el olor denso y terroso, más parecido a un sótano húmedo o la tierra removida más que el de un cuerpo fresco. Y finalmente llegaba todo el aroma junto, el matiz rancio y graso que parecía aferrarse a cualquier espacio donde se encontrara.</span>',
        },
        "origen de la canción": {
          "visible": { "attr": { "val": "min" }, "know": { "ccm": "5" }, "job": "invalid", "name": "invalid", }, "place": "el efecto banshee",
          "cont": '<span>Por la forma en la que la canción resuena, se puede deducir que es proveniente de una banshee, o una hija de banshee con un fuerte poder, que genera emociones a quienes escuchan su canción. Con un <i>finite</i> o un <i>quieta</i> deberán desaparecer todos sus efectos.</span>',
        },
        "acta de ingreso de wrenn wraithwood a los aurores": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "",
          "cont": '<span class="book-clipping"><div class="book-image" style="--image: url(https://2img.net/i.imgur.com/7IFmFqm.png)"></div><strong>Fecha de Incorporación</strong>: 18 de Mayo de 1940.<br><strong>Posición</strong>: Auror.<br><br>Se adjunta:<br>☒ Resultados de la academia de aurores.<br>☒ EXTASIS<br>☒ Muestra de sangre.<br><br><br><strong>Comentarios</strong><br>Aunque sus calificaciones son buenas, los instructores de la academia han notado una tendencia a llegar tarde, saltear las normas y el uso de hechizos que pueden comprometer al personal si se los realiza de manera indebida. Tiende a querer sobrepasarse continuamente realizando algunas acciones que están fuera de sus capacidades.<br><br>Se aprueba su promoción a auror, pero se recomienda hacer seguimiento el primer año.</span>',
        },
        "aviso de conducta inaporpiada": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "acta de ingreso de wrenn wraithwood a los aurores",
          "cont": '<span class="book-clipping"><strong>Asunto</strong>: Informe de conducta indebida y requerimiento disciplinario - Auror Wrenn Wraithwood.<br><br>Mediante el presente, y con carácter de urgencia, se reporta la conducta profesional inapropiada de la Oficial Wrenn Wraithwood, adscrita a la Brigada de la Aplicación de la Ley.<br><br>La auror Wraithwood se presentó a sus deberes en la oficina el día de hoy bajo una evidente influencia de estupefacientes. Dicho estado compromete su juicio y la incapacita para ejecutar las funciones de la Brigada de la Aplicación de la Ley con la diligencia y precisión requeridas.<br><br>Por la gravedad de esta transgresión y en aras de salvaguardar la seguridad del personal y del público mágico, se establece la siguiente orden disciplinaria de cumplimiento inmediato:<br><br>1. Monitoreo Obligatorio: Durante los próximos treinta (30) días laborales, la auror Wraithwood deberá someterse a una prueba de Sangre y Magia diaria al inicio de su turno.<br><br>2. Objetivo de la Prueba: El propósito de estas pruebas es validar que la auror no presente rastro de sustancias ilícitas ni síntomas de efectos residuales que puedan suponer un peligro operativo para sí misma o para cualquier miembro de su equipo.<br><br>Consecuencia por Incumplimiento:<br>Cualquier transgresión o negativa a cumplir con esta orden de monitoreo resultará en la expulsión inmediata y automática de Wrenn Wraithwood de las fuerzas de seguridad del Ministerio de Magia Británico.<br><br>Atentamente,<br>Edwin Merrythought Jefe del Departamento de Seguridad Mágica, Ministerio de Magia Británico<br></span>',
        },
        "control de consumo de sustancias": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "aviso de conducta inaporpiada",
          "cont": '<span class="book-clipping"><strong>Registro de Monitoreo - Auror Wrenn Wraithwood</strong><br><br>— 30/11/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 03/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 04/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 05/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 06/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 07/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 10/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 11/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 12/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 13/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 14/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 17/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 18/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 19/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 20/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 21/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 24/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 25/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 26/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 27/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 28/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 31/12/1951: Limpio. La auror se encuentra capacitada para trabajar.<br>— 01/01/1952: Limpio. La auror se encuentra capacitada para trabajar.<br>— 02/01/1952: Limpio. La auror se encuentra capacitada para trabajar.<br>— 03/01/1952: Limpio. La auror se encuentra capacitada para trabajar.<br>— 04/01/1952: Limpio. La auror se encuentra capacitada para trabajar.<br>— 07/01/1952: Limpio. La auror se encuentra capacitada para trabajar.<br>— 08/01/1952: Limpio. La auror se encuentra capacitada para trabajar.<br>— 09/01/1952: Limpio. La auror se encuentra capacitada para trabajar.<br>— 10/01/1952: Limpio. La auror se encuentra capacitada para trabajar.<br></span>',
        },
        "acta de nacimiento de wrenn wraithwood": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "sanador", "name": "invalid", }, "place": "",
          "cont": '<span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> Wrenn Winifred Wraithwood<br><strong>Fecha de nacimiento:</strong> <i>30 de enero de 1921</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo, Londres</i><br><strong>Nombre del padre:</strong> Morian Wraithwood<br><strong>Nombre de la madre:</strong> Hadiya Wraithwood<br><strong>Linaje mágico:</strong> Sangre Mestiza<br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Medimaga Euphemia Strout</i><br><strong>Observaciones médicas:</strong> <i>El recién nacido presenta un estado de salud estable.<br>Se recomienda control preventivo contra la fiebre de los duendecillos.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Londres, a 30 de enero de 1921.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span>',
        },
        "acta de nacimiento de nina wraithwood": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "sanador", "name": "invalid", }, "place": "",
          "cont": '<span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> Nina Edwina Wraithwood<br><strong>Fecha de nacimiento:</strong> <i>30 de enero de 1921</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo, Londres</i><br><strong>Nombre del padre:</strong> Morian Wraithwood<br><strong>Nombre de la madre:</strong> Hadiya Wraithwood<br><strong>Linaje mágico:</strong> Sangre Mestiza<br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Medimaga Euphemia Strout</i><br><strong>Observaciones médicas:</strong> <i>El recién nacido presenta un estado de salud estable.<br>Se recomienda control preventivo contra la fiebre de los duendecillos.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Londres, a 30 de enero de 1921.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span>',
        },
        "leer noticia: fallecimiento de morian wraithwood": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "",
          "cont": '<span class="book-clipping"><strong>Recorte noticia, nota al pie</strong>:<br><br>Se ha notificado a las autoridades que el pasado 12 de marzo de 1930 ha fallecido el contrabandista que se hacía llamar Morian Wraithwood. Sus acciones de nigromante y el uso inapropiado de la magia oscura llevaron a las autoridades que presentar a Morian para que reciba el correspondiente beso de los dementores.<br><br>Sus hijas Nina y Wrenn Wraithwood fueron trasladadas a Francia, donde vivirán con su madre.</span>',
        },
        "origen del tatuaje": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "hufflepuff", "name": "invalid", }, "place": "tatuaje",
          "cont": '<span>Cada vez que Hufflepuff gana el torneo de quidditch, se escucha la pregunta si se harán el tatuaje de la casa. Corre la pregunta como un rumor, porque la mayoría son menores de edad para hacer una hazaña como aquella.</span>',
        },
        "significado del tatuaje": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "hufflepuff", "name": "invalid", }, "place": "origen del tatuaje",
          "cont": '<span>La leyenda dice que, si Hufflepuff gana el torneo de quidditch, al menos tres jugadores se tienen que hacer el tatuaje para que pueda volver a ganar el torneo nuevamente.</span>',
        },
        "interpretación del tatuaje": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "origen del tatuaje",
          "cont": '<span>Wrenn pertenció a la casa Gryffindor, en conscuencia, no puede haber tenido nunca aquel tatuaje.</span>',
        },
        "soly nisrine: información": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "soly",
          "cont": '<span>Soly Nisrine fue una estudiante que egresó de Hogwarts en 1920. Se dice que era una alumna muy brillante, con mucho potencial mágico. Trabajó como magizoologa en la Reserva Natural de Flint. Sin embargo, el 9 de Enero de 1952, sus padres confesaron encontrar a Soly muerta en el baño de la casa. La causa de la muerte fue suicidio.</span>',
        },
        "soly nisrine: certificado de defunción": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "soly",
          "cont": '<span>Jasper puede reconocer el nombre, dado que le informaron que había que hacer una autopsia y se encontró a los padres junto al personal del Ministerio y San Mungo, porque su hija había muerto y no querían que nadie realizara esas tareas sobre ellas. Después de una gran discusión, los padres se llevaron al cuerpo de su hija sin que se pueda realizar la autopsia.</span>',
        },
        "hechizos habilitados": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "nigromante", "name": "invalid", }, "place": "origen del tatuaje",
          "cont": '<span>Mientras el grupo debate, un memo volador llega al espacio de trabajo, firmado por el actual Director de San Mungo indicando: <span class="book-clipping">Gryffith, conseguí la autorización. Por el día de la fecha puedes realizar los siguientes hechizos de los inefables: memoriae vestigium, vestigium sanguinis y extractum genericae. Adjunto la información que me mandaron para que puedas realizarlos. Éxitos.</span></span>',
        },
      },

      "actions": {
        "aparecium": {
          "leve": '<span>No es suficiente para revelar la información.</span>',
          "moderado": '<span>Se puede ver en lo que sería el tobillo que aparece un pequeño tatuaje de un tejón volando sobre una escoba de quidditch.<adding search="tatuaje" class="check-cards"></adding></span>',
          "exitoso": '<span>Se puede ver en lo que sería el tobillo que aparece un pequeño tatuaje de un tejón volando sobre una escoba de quidditch.<adding search="tatuaje" class="check-cards"></adding></span>',
          "critico": '<span>Se puede ver en lo que sería el tobillo que aparece un pequeño tatuaje de un tejón volando sobre una escoba de quidditch.<adding search="tatuaje" class="check-cards"></adding></span>',
        },
        "corruptum lector": {
          "leve": '<span>No es suficiente para revelar la información.</span>',
          "moderado": '<span>Información completa: Revela que la causa de la muerte se debe a un <i>Bombarda Máxima</i> que causó: traumatismo masivo por la explosión que causó un daño multisistémico instantáneo; destrucción cerebral y del tallo encefálico, causando la desintegración de las estructuras vitales que controlan el cuerpo; exanguinación, la pérdida de sangre rápida y masiva por la rotura de grandes vasos y órganos; laceración y fragmentación de órganos virales, provocando un daño físico al corazón, pulmones y aorta que es incompatible con la vida.</span>',
          "exitoso": '<span>Información completa: Revela que la causa de la muerte se debe a un <i>Bombarda Máxima</i> que causó: traumatismo masivo por la explosión que causó un daño multisistémico instantáneo; destrucción cerebral y del tallo encefálico, causando la desintegración de las estructuras vitales que controlan el cuerpo; exanguinación, la pérdida de sangre rápida y masiva por la rotura de grandes vasos y órganos; laceración y fragmentación de órganos virales, provocando un daño físico al corazón, pulmones y aorta que es incompatible con la vida.</span>',
          "critico": '<span>Información completa: Revela que la causa de la muerte se debe a un <i>Bombarda Máxima</i> que causó: traumatismo masivo por la explosión que causó un daño multisistémico instantáneo; destrucción cerebral y del tallo encefálico, causando la desintegración de las estructuras vitales que controlan el cuerpo; exanguinación, la pérdida de sangre rápida y masiva por la rotura de grandes vasos y órganos; laceración y fragmentación de órganos virales, provocando un daño físico al corazón, pulmones y aorta que es incompatible con la vida.</span>',
        },
        "mortis vox": {
          "leve": '<span>No es suficiente para revelar la información.</span>',
          "moderado": '<span>Dada las circunstancias en las que se encuentra el cuerpo, es imposible realizar este hechizo.</span>',
          "exitoso": '<span>Dada las circunstancias en las que se encuentra el cuerpo, es imposible realizar este hechizo.</span>',
          "critico": '<span>Dada las circunstancias en las que se encuentra el cuerpo, es imposible realizar este hechizo.</span>',
        },
        "memoriae vestigium": {
          "leve": '<span>Se pueden observar los últimos recuerdos, la visión borrosa y el dolor punzante de una migraña, antes de convocar un <i>Bombarda Maxima</i> que rebotó de manera incorrecta y que disparó contra ella y el equipo. A lo lejos se escucha la voz de una mujer cantando lentamente una canción de cuna.</span>',
          "moderado": '<span>Se pueden observar los últimos recuerdos, la visión borrosa y el dolor punzante de una migraña, antes de convocar un <i>Bombarda Maxima</i> que rebotó de manera incorrecta y que disparó contra ella y el equipo. A lo lejos se escucha la voz de una mujer cantando lentamente una canción de cuna.</span>',
          "exitoso": '<span>Se pueden observar los últimos recuerdos, la visión borrosa y el dolor punzante de una migraña, antes de convocar un <i>Bombarda Maxima</i> que rebotó de manera incorrecta y que disparó contra ella y el equipo. A lo lejos se escucha la voz de una mujer cantando lentamente una canción de cuna.</span>',
          "critico": '<span>Se pueden observar los últimos recuerdos, la visión borrosa y el dolor punzante de una migraña, antes de convocar un <i>Bombarda Maxima</i> que rebotó de manera incorrecta y que disparó contra ella y el equipo. A lo lejos se escucha la voz de una mujer cantando lentamente una canción de cuna.</span>',
        },
        "vestigium sanguinis": {
          "leve": '<span>Si se realiza sobre la muestra de sangre que presentan los aurores Moody y Parkinson, el rastro del vínculo se pierde por un momento, revelando unos pisos adosados. No puede dar su ubicación precisa, pero puede asegurar que no están en el mismo país y podría estar casi seguro que no están en el mismo continente.</span>',
          "moderado": '<span>Si se realiza sobre la muestra de sangre que presentan los aurores Moody y Parkinson, el rastro del vínculo se pierde por un momento, revelando unos pisos adosados. No puede dar su ubicación precisa, pero puede asegurar que no están en el mismo país y podría estar casi seguro que no están en el mismo continente.</span>',
          "exitoso": '<span>Si se realiza sobre la muestra de sangre que presentan los aurores Moody y Parkinson, el rastro del vínculo se pierde por un momento, revelando unos pisos adosados. No puede dar su ubicación precisa, pero puede asegurar que no están en el mismo país y podría estar casi seguro que no están en el mismo continente.</span>',
          "critico": '<span>Si se realiza sobre la muestra de sangre que presentan los aurores Moody y Parkinson, el rastro del vínculo se pierde por un momento, revelando unos pisos adosados. No puede dar su ubicación precisa, pero puede asegurar que no están en el mismo país y podría estar casi seguro que no están en el mismo continente.</span>',
        },
        "homenum revelio": {
          "leve": '<span>No es suficiente para revelar la información.</span>',
          "moderado": '<span>Revela la presencia de los dos aurores, un nigromante y un sanador. No hay nadie más en la sala.</span>',
          "exitoso": '<span>Revela la presencia de los dos aurores, un nigromante y un sanador. No hay nadie más en la sala.</span>',
          "critico": '<span>Revela la presencia de los dos aurores, un nigromante y un sanador. No hay nadie más en la sala.</span>',
        },
        "revelio potionis": {
          "leve": '<span>No es suficiente para revelar la información.</span>',
          "moderado": '<span>Al realizarse sobre el cuerpo de Wrenn se revela que no había sustancias en su sistema. No hay rastros de alcohol o estupefacientes.</span>',
          "exitoso": '<span>Al realizarse sobre el cuerpo de Wrenn se revela que no había sustancias en su sistema. No hay rastros de alcohol o estupefacientes.</span>',
          "critico": '<span>Al realizarse sobre el cuerpo de Wrenn se revela que no había sustancias en su sistema. No hay rastros de alcohol o estupefacientes.</span>',
        },
        "finite": {
          "leve": '<span>No es suficiente para revelar la información.</span>',
          "moderado": '<span>Los síntomas de los efectos de la canción de Banshee desaparecen de todos los presentes.</span>',
          "exitoso": '<span>Los síntomas de los efectos de la canción de Banshee desaparecen de todos los presentes.</span>',
          "critico": '<span>Los síntomas de los efectos de la canción de Banshee desaparecen de todos los presentes.</span>',
        },
        "quieta": {
          "leve": '<span>No es suficiente para revelar la información.</span>',
          "moderado": '<span>Los síntomas de los efectos de la canción de Banshee desaparecen de todos los presentes.</span>',
          "exitoso": '<span>Los síntomas de los efectos de la canción de Banshee desaparecen de todos los presentes.</span>',
          "critico": '<span>Los síntomas de los efectos de la canción de Banshee desaparecen de todos los presentes.</span>',
        },
        "extractum genericae": {
          "leve": '<span>Permite identificar a la víctima como Soly Nisrine.<adding search="soly" class="check-cards"></adding></span>',
          "moderado": '<span>Permite identificar a la víctima como Soly Nisrine.<adding search="soly" class="check-cards"></adding></span>',
          "exitoso": '<span>Permite identificar a la víctima como Soly Nisrine.<adding search="soly" class="check-cards"></adding></span>',
          "critico": '<span>Permite identificar a la víctima como Soly Nisrine.<adding search="soly" class="check-cards"></adding></span>',
        },
        "specialis revelio": {
          "leve": '<span>No es suficiente para revelar la información.</span>',
          "moderado": '<span>Comienza a reproducirse los últimos efectos de una canción de cuna que se transmite como un eco, en una sintonía que produce una sensación de mareo entre los presentes. El personaje con menor consitución, comenzará a tener una sensación de vértigo: mareos, visión borrosa y la sensación de estar a punto de caerse sin siquiera moverse. En caso de empate, afecta a todos los personajes que tengan ese valor en constitución.<adding search="el efecto banshee" class="check-cards"></adding></span>',
          "exitoso": '<span>Comienza a reproducirse los últimos efectos de una canción de cuna que se transmite como un eco, en una sintonía que produce una sensación de mareo entre los presentes. El personaje con menor consitución, comenzará a tener una sensación de vértigo: mareos, visión borrosa y la sensación de estar a punto de caerse sin siquiera moverse. En caso de empate, afecta a todos los personajes que tengan ese valor en constitución.<adding search="el efecto banshee" class="check-cards"></adding></span>',
          "critico": '<span>Comienza a reproducirse los últimos efectos de una canción de cuna que se transmite como un eco, en una sintonía que produce una sensación de mareo entre los presentes. El personaje con menor consitución, comenzará a tener una sensación de vértigo: mareos, visión borrosa y la sensación de estar a punto de caerse sin siquiera moverse. En caso de empate, afecta a todos los personajes que tengan ese valor en constitución.<adding search="el efecto banshee" class="check-cards"></adding></span>',
        },
      },
    },
    // paper mask

    "price of the dark favor": {
      "description": "Nina y Wrenn se metieron donde no debían, y para escapar de esa situación tuvieron que pagar un alto precio. Un precio que ahora tocará descubrir, así como a quién le debió el favor.",
      "image": "https://2img.net/i.imgur.com/nVh3XB1.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": ["c/u8", "c/u55"],
      "dependency": ["paper mask", "midnight ashes", "clandestine melodies", "silent sentinel"],
      "type": "misión", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // price of the dark favor

    /*"dragonfly's secrets": {
      "description": "Los Moody poseían un depósito de obras de arte del museo, donde guardaban aquellas de más valor en un espacio seguro, sin embargo, Wrenn Wraithwood ha robado la llave del mismo y, ahora, deberán descubrir qué robó.",
      "image": "https://2img.net/i.imgur.com/9fKGJPH.png", "requisitos": ["Un personaje deberá ser miembro del Departamento de Seguridad"],
      "users": [],
      "dependency": ["yule", "frozen sunflowers"],
      "type": "investigación", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },*/
    // dragonfly's secrets

    "faded lineage": {
      "description": "En la cámara de la sangre, las investigaciones siempre resultan más que curiosas. En esta oportunidad, podrán investigar aquellas habilidades que, en el pasado existían y ahora han quedado olvidadas productos de una genética que se perdió.",
      "image": "https://2img.net/i.imgur.com/UpUxWLM.png", "requisitos": [],
      "users": ["c/u101", "/u9", "/u17"],
      "dependency": [],
      "type": "investigación", "closed": true, "link": "https://blackwave.foroactivo.com/t644-investigacion-faded-lineage", "tagged": ["original"],

      "cards": [],

      "searchs": {
        "leer 'tratado secreto sobre la herencia de los cambiaformas'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El libro de portada rojiza desgastada. Es un artículo tan viejo que su fecha de escritura se ha perdido con el tiempo. Ya no existen cambiaformas en el mundo, sino que han mutado a Animagos, optando por la forma de un único animal. Tampoco es una habilidad hereditaria, sino una que se realiza por ritual.</span>',
        },

        "leer capítulo iv de 'tratado secreto sobre la herencia de los cambiaformas'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'tratado secreto sobre la herencia de los cambiaformas'",
          "cont": '<span><span class="book-clipping">Se entiende por cambiaformas a los individuos, generalmente vinculados a linajes de magos y brujas, que poseen la singular facultad de alterar su apariencia corporal a voluntad adoptando la forma de cualquier animal. Esta aptitud no se consideraba fruto del aprendizaje común, sino de una herencia transmitida de generación en generación, como si se tratase de una propiedad sanguínea o un secreto de familia celosamente guardado. En muchas tradiciones, la primera manifestación de dicha habilidad ocurría en la juventud, al despertar las potencias ocultas del heredero.</span></span>',
        },

        "leer capítulo viii de 'tratado secreto sobre la herencia de los cambiaformas'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'tratado secreto sobre la herencia de los cambiaformas'",
          "cont": '<span><span class="book-clipping">Los ocultistas del siglo IX recogieron testimonios según los cuales la transmisión del don metamórfico exigía no sólo consanguinidad, sino también la iniciación ritual. Padres y madres instruían a sus descendientes en fórmulas y sellos arcanos que permitían orientar la transformación hacia determinada forma animal o humana. Así, cada estirpe de cambiaformas se distinguía por sus preferencias simbólicas: lobos, cuervos, serpientes o incluso figuras fantasmales. La práctica se preservaba en secreto, bajo amenaza de maldiciones contra quien revelase la tradición familiar.</span></span>',
        },

        "leer capítulo xi de 'tratado secreto sobre la herencia de los cambiaformas'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'tratado secreto sobre la herencia de los cambiaformas'",
          "cont": '<span><span class="book-clipping">Algunos médicos de inicios del siglo X interpretaron estas narraciones como metáforas heredadas de la histeria o de los trastornos de personalidad, pero lo cierto es que los relatos persistían con notable coherencia en ámbitos rurales y en círculos esotéricos urbanos. No era raro que sociedades ocultistas de Londres, París o Buenos Aires incluyeran entre sus miembros a descendientes autoproclamados de antiguas dinastías de cambiaformas, cuya sola presencia servía de aval para prácticas y ritos de transformación simbólica.</span></span>',
        },

        "leer capítulo xx de 'tratado secreto sobre la herencia de los cambiaformas'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'tratado secreto sobre la herencia de los cambiaformas'",
          "cont": '<span><span class="book-clipping">Desde un punto de vista antropológico, la idea de la herencia metamórfica en animales confirma la profunda relación entre sangre, memoria y poder mágico. La habilidad de cambiar de forma no era considerada un artificio individual, sino una obligación de linaje, un deber transmitido como las propiedades o los títulos. El cambiaformas, al alterar su aspecto, no sólo mostraba su maestría, sino que representaba a toda su genealogía, asegurando la continuidad del misterio a lo largo de los siglos.</span></span>',
        },

        "leer 'genealogías del lenguaje animal'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>El libro de portada de cuero marrón, ha sido escrito hace al menos cien años, actualmente no hay copias del mismo, debido a que las personas dejaron de leerlos dado que fue una habilidad pérdida en el tiempo.</span>',
        },

        "leer capítulo i de 'genealogías del lenguaje animal'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'genealogías del lenguaje animal'",
          "cont": '<span><span class="book-clipping">Se denomina zoógrafos o parlantes de bestias a los individuos que, según la tradición, poseen desde el nacimiento la capacidad de comprender y hacerse entender por los animales. Esta facultad, considerada un don hereditario, no podía adquirirse mediante estudio ni imitación: era un patrimonio exclusivo de ciertas familias, cuya genealogía se hallaba marcada por la singular afinidad con el reino animal. El don se manifestaba con particular claridad en la infancia, cuando los herederos respondían a los sonidos de aves o mamíferos como si se tratase de un lenguaje común.</span></span>',
        },

        "leer capítulo ix de 'genealogías del lenguaje animal'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'genealogías del lenguaje animal'",
          "cont": '<span><span class="book-clipping">Los cronistas del siglo VIII y IX señalaban con asombro que los descendientes de estas estirpes lograban calmar caballos indómitos, atraer aves migratorias o persuadir a canes desconocidos. La transmisión del talento no dependía de instrucción ni de fórmulas secretas, sino de la pura consanguinidad. En consecuencia, la habilidad era considerada tan natural como el color de los ojos o la estatura, aunque revestida de un carácter profundamente misterioso.</span></span>',
        },

        "leer capítulo xi de 'genealogías del lenguaje animal'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'genealogías del lenguaje animal'",
          "cont": '<span><span class="book-clipping">En los registros médicos y veterinarios de finales del siglo VI se encuentran menciones marginales a familias campesinas capaces de prever el comportamiento de sus animales con precisión extraordinaria. Tales testimonios, si bien interpretados por algunos facultativos como simples coincidencias o intuición aguda, fueron tomados por los ocultistas de la época como prueba de la existencia de una sensibilidad heredada que trasciende la mera observación empírica.</span></span>',
        },

        "leer capítulo xv de 'genealogías del lenguaje animal'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "leer 'genealogías del lenguaje animal'",
          "cont": '<span><span class="book-clipping">Desde el punto de vista antropológico, el legado de los zoógrafos muestra una continuidad entre lo humano y lo animal que contrasta con la separación tajante promovida por la ciencia moderna. Para estas familias, el don no constituía un privilegio extraordinario, sino una forma natural de convivencia con la fauna circundante. La herencia de esta facultad aseguraba no sólo la supervivencia práctica, sino también un vínculo espiritual con el mundo viviente.</span></span>',
        },
      },

      "actions": {},
    },
    // fin faded lineage

    "ancestral code": {
      "description": "En la cámara de la sangre, los inefables buscan descubrir qué partes de la genética contienen las habilidades heredadas por sangre y cómo se pueden activar.",
      "image": "https://2img.net/i.imgur.com/UpUxWLM.png", "requisitos": ["Un personaje con habilidad heredada"],
      "users": ["c/u101", "/u9", "/u97"],
      "dependency": ["faded lineage"],
      "type": "investigación", "closed": false, "link": "https://blackwave.foroactivo.com/t833-investigacion-ancestral-code", "tagged": ["original"],

      "cards": [],
      "searchs": {
        "tomar muestra de sangre de theolonius covey": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Permite tomar, con la varita mágica una muestra de sangre para analizar del individuo.</span>',
        },
        "tomar muestra de sangre de orion black": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Permite tomar, con la varita mágica una muestra de sangre para analizar del individuo.</span>',
        },
        "marcadores de la magia": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "resultados de la comparación",
          "cont": '<span>Los Marcadores de la Magia (o el Arcanum Nucleus) se observan en la estructura fundamental del ADN mágico de un individuo. Este marcador es esencialmente la fuente de energía mágica que diferencia a un ser mágico de uno no-mágico. En un análisis Extractum Genericae exitoso (Crítico), se manifiestan como una doble hélice luminiscente o un campo energético coherente que envuelve el núcleo genético, indicando la capacidad inherente de conjurar. La intensidad o el volumen de esta estructura es lo que se interpreta como el potencial mágico bruto de la persona. La simple presencia de esta estructura confirma que la persona es un mago o bruja.</span>',
        },
        "marcadores de la pureza de la magia": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "resultados de la comparación",
          "cont": '<span>Los Marcadores de la Pureza de la Sangre son indicadores de la integridad histórica del linaje mágico del individuo. Estos marcadores, que se evalúan a fondo con Sanguis Origo, se observan en el perfil genético-mágico como una "firma resonante" ancestral. En el Extractum Genericae, se visualizan como cadenas complementarias que rodean el Arcanum Nucleus, cuya uniformidad y antigüedad son cruciales. Una "sangre pura" proyectaría cadenas largas, ininterrumpidas y altamente estables, que el Sanguis Origo trazaría sin fisuras hasta ancestros lejanos que también poseen esa resonancia. La presencia de inconsistencias, rupturas o "puntos ciegos" en estas cadenas resonantes indican la introducción de linajes no-mágicos o mágicos externos en generaciones recientes.</span>',
        },
        "marcadores de las habilidades heredadas": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "resultados de la comparación",
          "cont": '<span>Los Marcadores de Habilidades Heredadas o Ancestros son mutaciones genéticas mágicas específicas que se transmiten a través del linaje y están ligadas a talentos únicos. Estos marcadores se observan como segmentos de código genético anómalos o "ramas doradas" que brotan del Arcanum Nucleus durante la proyección de Extractum Genericae. El análisis Sanguis Origo es el que les da contexto, trazando estas ramas doradas directamente a un ancestro específico en el árbol genealógico que manifestó o portó esa habilidad por primera vez. La actividad latente o potencial de la habilidad se mide por la luminosidad de la rama; en el caso de habilidades recesivas o latentes, la rama está presente pero tiene un brillo tenue o intermitente.</span>',
        },
      },
      "actions": {
        "extractum genericae": {
          "leve": '<span>No es suficiente para revelar el resultado.</span>',
          "moderado": '<span>Proyecta el Mapa Genético Mágico completo. Identifica claramente un Potencial Mágico Latente (Videncia) o una mutación mágica específica en su ADN, ligada a la habilidad, en el caso de aplicarlo a Theolonius. Se verificaría que la estructura genética mágica es estándar o "normal" para un mago de sangre pura, pero que carece del marcador/mutación específica, en caso de aplicarlo a Orion.</span>',
          "exitoso": '<span>Proyecta el Mapa Genético Mágico completo. Identifica claramente un Potencial Mágico Latente (Videncia) o una mutación mágica específica en su ADN, ligada a la habilidad, en el caso de aplicarlo a Theolonius. Se verificaría que la estructura genética mágica es estándar o "normal" para un mago de sangre pura, pero que carece del marcador/mutación específica, en caso de aplicarlo a Orion.</span>',
          "critico": '<span>Proyecta el Mapa Genético Mágico completo. Identifica claramente un Potencial Mágico Latente (Videncia) o una mutación mágica específica en su ADN, ligada a la habilidad, en el caso de aplicarlo a Theolonius. Se verificaría que la estructura genética mágica es estándar o "normal" para un mago de sangre pura, pero que carece del marcador/mutación específica, en caso de aplicarlo a Orion.</span>',
        },
        "sanguis origo": {
          "leve": '<span>No es suficiente para revelar el resultado.</span>',
          "moderado": '<span>Revela un Árbol Genealógico Completo que muestra una conexión con el linaje de la habilidad <strong>Videncia</strong>, en el caso de hacerlo sobre la muestra de sangre de Theolonius. No revela ninguna conexión en el caso de realizarse sobre Orion.</span>',
          "exitoso": '<span>Revela un Árbol Genealógico Completo que muestra una conexión con el linaje de la habilidad <strong>Videncia</strong>, en el caso de hacerlo sobre la muestra de sangre de Theolonius. No revela ninguna conexión en el caso de realizarse sobre Orion.</span>',
          "critico": '<span>Revela un Árbol Genealógico Completo que muestra una conexión con el linaje de la habilidad <strong>Videncia</strong>, en el caso de hacerlo sobre la muestra de sangre de Theolonius. No revela ninguna conexión en el caso de realizarse sobre Orion.</span>',
        },
        "scintillat": {
          "leve": '<span>No es suficiente para revelar el resultado.</span>',
          "moderado": '<span>La imagen se superpone a la realidad, lentamente, la Proyección Genética que observa, se encuentra rota, como si hubiera estallado en miles de pedazos. Se escuchan gritos de personas, el llanto desconsolado de una mujer.</span>',
          "exitoso": '<span>La imagen se superpone a la realidad, lentamente, la Proyección Genética que observa, se encuentra rota, como si hubiera estallado en miles de pedazos. Se escuchan gritos de personas, el llanto desconsolado de una mujer.</span>',
          "critico": '<span>La imagen se superpone a la realidad, lentamente, la Proyección Genética que observa, se encuentra rota, como si hubiera estallado en miles de pedazos. Se escuchan gritos de personas, el llanto desconsolado de una mujer.</span>',
        },
        "veniens empathy": {
          "leve": '<span>No es suficiente para revelar el resultado.</span>',
          "moderado": '<span>La sensación proviene del exterior. Puede sentirse el nerviosismo, la prisa. Como si estuviera en el medio de un hucaracán esperando un milagro.</span>',
          "exitoso": '<span>La sensación proviene del exterior. Puede sentirse el nerviosismo, la prisa. Como si estuviera en el medio de un hucaracán esperando un milagro.</span>',
          "critico": '<span>La sensación proviene del exterior. Puede sentirse el nerviosismo, la prisa. Como si estuviera en el medio de un hucaracán esperando un milagro.</span>',
        },
        "murmura futuri": {
          "leve": '<span>No es suficiente para revelar el resultado.</span>',
          "moderado": '<span>Puedes escuchar varios, murmullos, una conversación que no logras entender hasta que alguien demanda silencio y pregunta "Hesper, ¿puedes solucionar esto o no?"</span>',
          "exitoso": '<span>Puedes escuchar varios, murmullos, una conversación que no logras entender hasta que alguien demanda silencio y pregunta "Hesper, ¿puedes solucionar esto o no?"</span>',
          "critico": '<span>Puedes escuchar varios, murmullos, una conversación que no logras entender hasta que alguien demanda silencio y pregunta "Hesper, ¿puedes solucionar esto o no?"</span>',
        },
      },
    },
    // fin ancestral code

    "borrowed bloodline": {
      "description": "En la cámara de la sangre, los inefables buscan descubrir si es posible traspasar habilidades heredadas a otros magos y brujas. ¿Podrán conseguirlo?",
      "image": "https://2img.net/i.imgur.com/UpUxWLM.png", "requisitos": ["Un personaje con habilidad heredada"],
      "users": ["c/u101"],
      "dependency": ["ancestral code"],
      "type": "misión", "closed": false, "link": "", "tagged": ["original"],

      "cards": [],
      "searchs": {},
      "actions": {},
    },
    // fin borrowed bloodline

    "operation birth ledger": {
      "description": "Los archivos de San Mungo e historial de pacientes, rara vez son entregados, salvo cuando un auror aparece para preguntar sobre registros particulares que buscan encontrar a un primo que la familia ha olvidado.",
      "image": "https://2img.net/i.imgur.com/t8KMfpL.png", "requisitos": ["Personal de San Mungo"],
      "users": ["c/u55", "/u7", "/u91"],
      "dependency": [],
      "type": "investigación", "closed": true, "link": "https://blackwave.foroactivo.com/t645-investigacion-operation-birth-ledger", "tagged": ["original"],

      "cards": [],

      "searchs": {
        "expediente x. parkinson": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "san mungo", "name": "invalid", }, "place": "",
          "cont": '<span>Al abrir la carpeta, se pueden visualizar todos los pergaminos correspondientes a la prima de Shun Parkinson y madre de la criatura que se encuentrn en busqueda.</span>',
        },

        "análisis de pureza de sangre": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente x. parkinson",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Informe de Análisis de Sangre y Linaje</span></div><br><hr><br><br><strong>Nombre del paciente:</strong> <i>X. Parkinson</i> &nbsp;<br><strong>Edad:</strong> <i>2 años</i> &nbsp;<br><strong>Fecha de la muestra:</strong> <i>25 de noviembre</i> &nbsp;<br><strong>Lugar de extracción:</strong> <i>Laboratorio de San Mungo</i> &nbsp;<br><br><hr><br><br><strong>Resultados del análisis:</strong> &nbsp;<br><i>La muestra ha sido sometida a encantamientos de revelación de linaje. &nbsp;<br>Se observa la siguiente clasificación:</i> &nbsp;<br><br>- <strong>Pureza sanguínea detectada:</strong> <i>99.99% Sangre Pura.</i> &nbsp;<br><br></span></span>',
        },

        "poción antigripal": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente x. parkinson",
          "cont": '<span>El siguiente resultado aparece apróximadamente dos veces al año. Salvo en 1937<br /><br /><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Receta Médica</span></div><br><hr><br><br><strong>Paciente:</strong> <i>X. Parkinson</i> <br><strong>Edad:</strong> <i>19 años</i> <br><strong>Fecha de emisión:</strong> <i>3 de enero</i> <br><strong>Medimago tratante:</strong> <i>Suzana Kralj</i> <br><br><hr><br><br><strong>Poción prescrita:</strong> <i>Poción Antigripal de San Mungo</i> <br><br><strong>Ingredientes principales:</strong> <br>- Infusión de raíz de jengibre<br>- Hojas secas de eucalipto<br>- 3 gotas de esencia de mandrágora diluida <br>- Una pizca de polvo de cuerno de unicornio (grado médico) <br>- Melaza de escaramujo <br><br><strong>Indicaciones de preparación:</strong> <br>1. Hervir agua a fuego lento durante 7 minutos. <br>2. Añadir la raíz de jengibre y las hojas de eucalipto. <br>3. Incorporar la esencia de mandrágora y remover en sentido antihorario. <br>4. Agregar el polvo de cuerno de unicornio y dejar reposar 3 minutos. <br>5. Endulzar con melaza de escaramujo antes de consumir. <br><br><strong>Dosis recomendada:</strong> <br><i>Una cucharada sopera, tres veces al día durante 5 días. <br>No administrar a menores de 5 años sin supervisión de un medimago.</i> <br><br><hr><br><br><div align="right"><i>Emitido en Londres, a 3 de enero</i></div><br><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

        "derivación a maternal": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente x. parkinson",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Derivación a Sala Maternal</span></div><br><hr><br><br><strong>Nombre de la paciente:</strong> <i>X. Parkinson</i><br><strong>Edad:</strong> <i>Desconocida.</i><br><strong>Fecha de emisión:</strong> <i>29 de Noviembre de 1936</i> <br><strong>Medimago remitente:</strong> <i>Jozefa Koren</i><br><br><hr><br><br><strong>Motivo de la derivación:</strong> <br><i>La paciente presenta signos correspondientes a etapa avanzada de gestación. <br>Se recomienda ingreso en la Sala Maternal para control y seguimiento especializado.</i> <br><br><hr><br><br><strong>Instrucciones adicionales:</strong> <br>- Monitoreo regular de constantes vitales. <br>- Evaluación con encantamientos preventivos. <br>- Preparar historial médico para el área de partos. <br><br><hr><br><br><div align="right"><i>Se autoriza el traslado inmediato a la Sala Maternal.</i></div><br><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br /><strong>_______________________</strong> <br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

        "hoja del diario": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "shun", }, "place": "",
          "cont": '<span><span class="notebook">No puedo hablar de esto, pero quería ver como se veían escritos:<br><br>Ascanius Parkinson<br>Aeneas Parkinson<br>Ilus Parkinson<br>Evander Parkinson<br>Turnus Parkinson</span></span>',
        },

        "certificado de nacimiento 'ascacius heally'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "shun", }, "place": "hoja del diario",
          "cont": '<span><span class="book-clipping"> <div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div> <div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> <i>Ascacius Heally</i><br><strong>Fecha de nacimiento:</strong> <i>15 de noviembre de 1936</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo</i><br><strong>Nombre del padre:</strong> <i>Cormac Heally</i><br><strong>Nombre de la madre:</strong> <i>Maeve O’Rourke</i><br><strong>Linaje mágico:</strong> <i>Sangre pura</i><br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Medimaga Euphemia Strout</i><br><strong>Observaciones médicas:</strong> <i>El recién nacido presenta vitalidad notable. Se aconseja seguimiento por antecedentes familiares de asma mágica.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Londres, a 16 de noviembre de 1936.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

        "certificado de nacimiento 'aeneas maher'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "shun", }, "place": "hoja del diario",
          "cont": '<span><span class="book-clipping"> <div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div> <div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> <i>Aeneas Maher</i><br><strong>Fecha de nacimiento:</strong> <i>7 de enero de 1937</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo</i><br><strong>Nombre del padre:</strong> <i>Donnacha Maher</i><br><strong>Nombre de la madre:</strong> <i>Brigid Walsh</i><br><strong>Linaje mágico:</strong> <i>Mestizo</i><br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Medimaga Euphemia Strout</i><br><strong>Observaciones médicas:</strong> <i>Ligeramente bajo de peso al nacer, evolución favorable. Se recomienda poción fortificante mensual.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Londres, a 8 de enero de 1937.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

        "certificado de nacimiento 'ilus dwyer'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "shun", }, "place": "hoja del diario",
          "cont": '<span><span class="book-clipping"> <div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div> <div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> <i>Ilus Dwyer</i><br><strong>Fecha de nacimiento:</strong> <i>22 de octubre de 1937</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo</i><br><strong>Nombre del padre:</strong> <i>Eoghan Dwyer</i><br><strong>Nombre de la madre:</strong> <i>Sorcha Kavanagh</i><br><strong>Linaje mágico:</strong> <i>Sangre pura</i><br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Medimaga Euphemia Strout</i><br><strong>Observaciones médicas:</strong> <i>Sin incidencias destacables. Se recomienda vigilancia por historial familiar de hipersensibilidad a encantamientos de luz.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Londres, a 23 de octubre de 1937.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

        "certificado de nacimiento 'turnus sheridan'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "shun", }, "place": "hoja del diario",
          "cont": '<span><span class="book-clipping"> <div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div> <div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> <i>Turnus Sheridan</i><br><strong>Fecha de nacimiento:</strong> <i>3 de marzo de 1938</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo</i><br><strong>Nombre del padre:</strong> <i>Malachy Sheridan</i><br><strong>Nombre de la madre:</strong> <i>Róisín Byrne</i><br><strong>Linaje mágico:</strong> <i>Mestizo</i><br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Medimaga Euphemia Strout</i><br><strong>Observaciones médicas:</strong> <i>El recién nacido responde bien a estímulos mágicos básicos. Se recomienda evaluación de reflejos en 6 meses.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Londres, a 4 de marzo de 1938.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

        "certificado de nacimiento 'turnus mooney'": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "shun", }, "place": "hoja del diario",
          "cont": '<span><span class="book-clipping"> <div align="center"><span style="font-size: 14px; line-height: normal"><strong>Hospital San Mungo de Magia y Enfermedades</strong></span></div> <div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> <i>Turnus Mooney</i><br><strong>Fecha de nacimiento:</strong> <i>29 de septiembre de 1938</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, San Mungo</i><br><strong>Nombre del padre:</strong> <i>Padraig Mooney</i><br><strong>Nombre de la madre:</strong> <i>Deirdre Malley</i><br><strong>Linaje mágico:</strong> <i>Sangre pura</i><br><br><hr><br><br><strong>Hechicero/a responsable del alumbramiento:</strong> <i>Medimaga Euphemia Strout</i><br><strong>Observaciones médicas:</strong> <i>El niño goza de excelente salud. Se recomienda control rutinario anual.</i><br><br><hr><br><br><div align="right"><i>En fe de lo cual, se expide el presente certificado<br>en Londres, a 30 de septiembre de 1938.</i></div><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de San Mungo</i></div></span></span>',
        },

      },

      "actions": {
      },
    },
    // fin operation birth ledger

    "enrolled origins": {
      "description": "Hogwarts contiene los registros de todos los magos que asistieron, así como todo los registros de las familias con las que tuvieron que hablar para informar que un integrante de ellos era un mago que cuenta con una plaza en el Castillo. Un excelente lugar para tratar de buscar a un mago que no sabe que pertenece a una familia de magos y brujas.",
      "image": "https://2img.net/i.imgur.com/t8KMfpL.png", "requisitos": ["Personal de Hogwarts"],
      "users": ["c/u55", "/u91", "/u7", "/u110"],
      "dependency": ["operation birth ledger"],
      "type": "investigación", "closed": true, "link": "https://blackwave.foroactivo.com/t753-investigacion-enrolled-origins", "tagged": ["original"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "profesor", "name": "invalid", }, "place": "descubrir despacho del director",
          "cont": '<span>Era de común conocimiento para los empleados del castillo que Dippet desconfiaba de los elfos domésticos y, por dicha razón, había prohibido el ingreso a su despacho. Aunque, él no era lo suficientemente ordenado para que no se notara aquella decisión.</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "profesor", "name": "invalid", }, "place": "lista de estudiantes de primer año",
          "cont": '<span>El profesor puede notar que hay algo raro en el registro dado que Findlay McCrory debería aparecer como "sangre muggle", aunque siempre puede ser un mal entendimiento.</span>',
        }

      ],

      "searchs": {
        "abrir despacho del director": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "profesor", "name": "invalid", }, "place": "",
          "cont": '<span>Al ingresar a la estatua del grifo, cualquier profesor puede presentar la contraseña adecuada para que la misma abra. En ese caso, al pronunciar "Pluma ligera", la estatua comienza a girar revelando la escalera que asciende hasta el despacho del director.</span>',
        },

        "descubrir despacho del director": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "abrir despacho del director",
          "cont": '<span>El despacho del Director Dippet no era lo que se esperaría de un jefe de escuela: el trabajo y las ideas habían claramente tomado la delantera sobre la pulcritud. Los llamativos detalles azules y plateados de la casa de Ravenclaw quedaban relegados a un segundo plano ante el desorden, con pilas de ejemplares de El Profeta esparcidos por doquier, listos para ser releídos cuando el Director necesitaba un poco de perspectiva.</span>',
        },

        "investigar escritorio": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "descubrir despacho del director",
          "cont": '<span>En el escritorio pueden observarse varios libros de liderazgo, biografías de antiguos Ministros de Magia y un sinfín de tazas de té, algunas a medio tomar, que habían quedado como demostración de un trabajo en solidario—. <strong>No deberías husmear donde no los han llamado</strong> —advierte el retrato de un director, reclamando orden a quienes considera intrusos.</span>',
        },

        "subir las escaleras": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "profesor", "name": "invalid", }, "place": "descubrir despacho del director",
          "cont": '<span>Los profesores conocen que el archivo de todos los estudiantes se encuentra en lo que muchos llaman "El Ático", aunque en realidad se trata del segundo nivel del despacho del director. Un espacio que cuenta con una biblioteca privada y un registro de todos los estudiantes y empleados que habían pasado por el establecimiento.</span>',
        },

        "abrir archivos": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "subir las escaleras",
          "cont": '<span>Existen dos archivos importantes, dos muebles de caoba que guardan toda la información necesaria. <br><br>El primer mueble contiene cuatro diales que permiten seleccionar los números del cero a nueve hasta que se marca la fecha deseaba. Luego basta mover la manija para que se revelen los archivos correspondientes del año. Dicho mueble es llamado "El Cronario", dado que muestra por año el registro de estudiantes y profesores, además de empleados del ciclo lectivo. <br><br>El segundo mueble, contiene un dial oculto que permite seleccionar una letra a la vez, permitiendo buscar la información por apellido. A dicho mueble se lo conoce como "El Lexicón", dado que permite buscar por apellido todos los documentos que existen bajo esa primera letra.</span>',
        },

        "buscar en el cronario los registros de 1948": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "abrir archivos",
          "cont": '<span>Cuando en los cuatro diales se colan los numeros 1-9-4-8, fecha en la que se dedució que el niño ingresó a Hogwarts, y mover la manija, se pueden observar todos los registros de la fecha, en particular, aquellos estudiantes que ingresaron a primer año ese mismo año.</span>',
        },

        "lista de estudiantes de primer año": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "buscar en el cronario los registros de 1948",
          "cont": '<span>La lista de estudiantes de primer año, muestra la siguiente información. <br><span class="book-clipping"><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Ingresos de 1948</strong></span></div><br>— Alistair MacLeod (sangre pura): Gryffindor<br>— Bronwyn Pritchard (sangre pura): Gryffindor<br>— Damien A. Ashford-Dempsey (sangre mestiza): Ravenclaw<br>— Davies Driscoll (sangre muggle): Hufflepuff<br>— Findlay McCrory (sangre mestiza): Ravenclaw<br>— Gwendolyn Hughes (sangre mestiza): Hufflepuff<br>— Kieran Brennan (sangre mestiza): Slytherin<br>— Lachlan Kerr (sangre pura): Slytherin<br>— Montgomery Thatch (hijo de duendes): Hufflepuff<br>— Penelope Fairfax (sangre mestiza): Ravenclaw<br></span></span>',
        },

        "ingresar la letra 'd' en el lexicón": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "lista de estudiantes de primer año",
          "cont": '<span>Al ingresar la letra "D", pueden buscar dentro de los archivos, el expediente de "Davies Driscoll".</span>',
        },

        "expediente de davies driscoll": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ingresar la letra 'd' en el lexicón",
          "cont": '<span>Dentro del expediente se encuentra el siguiente documento:<br><br><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>AUTORIZACIÓN ANUAL DE TUTORES PARA ESTUDIANTES MENORES DE EDAD</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Colegio Hogwarts de Magia y Hechicería</span></div><br>Yo, Maeve Driscoll, por la presente, autorizo al alumno Davies Driscoll a: <br><br>1. Participar en todas las asignaturas obligatorias y optativas del plan de estudios de Hogwarts, incluyendo aquellas que involucren transformaciones, pociones, y el manejo de criaturas mágicas.<br>2. Utilizar equipos mágicos y de vuelo (incluyendo escobas) bajo la supervisión de un profesor o miembro del personal autorizado.<br>3. Permitir el uso de la Red Flu o el Traslador, solo para traslados de emergencia autorizados por la Dirección.<br><br><u>OBSERVACIONES IMPORTANTES</u>:<br>— El Colegio Hogwarts de Magia y Hechicería no se responsabiliza por la pérdida o daño de bienes personales, varitas o mascotas.<br>— El uso de magia fuera del colegio por parte de menores es una violación del Estatuto Internacional del Secreto y será investigado por el Ministerio.<br><br><strong>Firma del Padre/Madre/Tutor</strong>: <i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_________________________<br><br><strong>Relación con el Estudiante</strong>: Madre<br><strong>Fecha</strong>: 13 de Mayo de 1948.<br></span></span>',
        },

        "ingresar la letra 'm' en el lexicón": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "lista de estudiantes de primer año",
          "cont": '<span>Al ingresar la letra "M", pueden buscar dentro de los archivos, el expediente de "Findlay McCrory".</span>',
        },

        "expediente de findlay mccrory": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ingresar la letra 'm' en el lexicón",
          "cont": '<span>Dentro del expediente se encuentran los siguientes documentos:</span>',
        },

        "autorización de findlay mccrory": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de findlay mccrory",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>AUTORIZACIÓN ANUAL DE TUTORES PARA ESTUDIANTES MENORES DE EDAD</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Colegio Hogwarts de Magia y Hechicería</span></div><br><hr><br><br>Yo, Bruce McCrory Sr, por la presente, autorizo al alumno Aeneas Findlay McCrory a:<br><br>1. &nbsp;Participar en todas las asignaturas obligatorias y optativas del plan de estudios de Hogwarts, incluyendo aquellas que involucren transformaciones, pociones, y el manejo de criaturas mágicas.<br>2. &nbsp;Utilizar equipos mágicos y de vuelo (incluyendo escobas) bajo la supervisión de un profesor o miembro del personal autorizado.<br>3. &nbsp;Permitir el uso de la Red Flu o el Traslador, solo para traslados de emergencia autorizados por la Dirección.<br><br><u>OBSERVACIONES IMPORTANTES</u>:<br>— El Colegio Hogwarts de Magia y Hechicería no se responsabiliza por la pérdida o daño de bienes personales, varitas o mascotas.<br>— El uso de magia fuera del colegio por parte de menores es una violación del Estatuto Internacional del Secreto y será investigado por el Ministerio.<br><br><strong>Firma del Padre/Madre/Tutor</strong>: <i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_________________________<br><strong>Relación con el Estudiante</strong>: Abuelo<br><strong>Fecha</strong>: 30 de Mayo de 1948<br></span></span>',
        },

        "analisis de paternidad": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de findlay mccrory",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>SERVICIO NACIONAL DE SALUD (NHS) ESCOCIA</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">DEPARTAMENTO DE PATOLOGÍA E INVESTIGACIÓN</span></div><br><strong>INFORME DE PRUEBA DE PATERNIDAD POR ANÁLISIS DE ADN</strong><br>REFERENCIA DE LABORATORIO: QEUH-PT-1939-0482<br>FECHA DE TOMA DE MUESTRAS: 15/09/1939<br>FECHA DE EMISIÓN DEL INFORME: 22/09/1939<br><br><strong>SUJETOS ANALIZADOS (MUESTRAS ORALES)</strong>:<br>1. Presunto Padre (PP): Bruce McCrory Jr | Identificador Único: NHS-645321<br>2. Niño (N): Aeneas Findlay McCrory | Identificador Único: NHS-789012<br>3. Madre (M): No localizable<br><br><strong>METODOLOGÍA DE ANÁLISIS</strong>:<br>El análisis fue realizado mediante la técnica de Reacción en Cadena de la Polimerasa (PCR) para amplificar y evaluar 16 Marcadores de Repeticiones Cortas en Tándem (STR) del ADN nuclear. La prueba compara el perfil genético del niño con el del presunto padre para determinar la coincidencia de alelos heredados.<br><br><strong>RESULTADOS DEL ANÁLISIS DE MARCADORES (STR)</strong>:<br>| Marcador (Locus) | Alelos del Niño | Alelos del Presunto Padre (PP) | Conclusión |<br>| :---: | :---: | :---: | :---: |<br>| D3S1358 | 15, 17 | 17, 18 | Coincidencia ( 17 ) |<br>| vWA | 16, 19 | 16, 20 | Coincidencia ( 16 ) |<br>| FGA | 22, 23 | 23, 25 | Coincidencia ( 23 ) |<br>| D8S1179 | 11, 14 | 14, 15 | Coincidencia ( 14 ) |<br>| TPOX | 8, 9 | 8, 11 | Coincidencia ( 8 ) |<br>| *(...Marcadores Adicionales...)* | *...* | *...* | Coincidencia |<br><br><strong>CÁLCULO DE PROBABILIDAD Y CONCLUSIÓN</strong>:<br>Índice de Paternidad Combinado (CPI): 5,684,103,921<br>Probabilidad de Paternidad: 99.99999%<br><br><strong>CONCLUSIÓN FINAL</strong>:<br>Basándose en el análisis de los 16 marcadores genéticos STR, el presunto padre, Bruce McCrory Jr, NO PUEDE SER EXCLUIDO como el padre biológico del niño, Findlay McCrory.<br><br>La Probabilidad de Paternidad es del 99.99999% en comparación con un hombre no relacionado de la misma población étnica.<br><br>Firma: <i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_________________________<br>Nombre y Título: Dr. Iain Murray, Director de Genética Forense.<br></span></span>',
        },

        "certificado de nacimiento de bruce mccrory jr": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "expediente de findlay mccrory",
          "cont": '<span><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>Queen Elizabeth University Hospital</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Certificado de Nacimiento</span></div><br><hr><br><br><strong>Nombre completo del recién nacido:</strong> Bruce McCrory Junior<br><strong>Fecha de nacimiento:</strong> <i>25 de marzo de 1913</i><br><strong>Lugar de nacimiento:</strong> <i>Sala de Maternidad, Queen Elizabeth University Hospital, Glasgow</i><br><strong>Nombre del padre:</strong> Bruce McCrory<br><strong>Nombre de la madre:</strong> Amelia Findlay<br><br><hr><br><br>Se confirma mediante la presente que Bruce McCrory Junior nació a las 12:24 del día veinticinco de marzo de mil nueve trece, sin problemas notables de salud.<br><br><div align="right"><i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br><strong>_______________________</strong><br><i>Firma y sello de Queen Elizabeth University Hospital</i></div></span></span>',
        },

        "ingresar la letra 'h' en el lexicón": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "lista de estudiantes de primer año",
          "cont": '<span>Al ingresar la letra "H", pueden buscar dentro de los archivos, el expediente de "Gwendolyn Hughes".</span>',
        },

        "expediente de gwendolyn hughes": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ingresar la letra 'h' en el lexicón",
          "cont": '<span>Dentro del expediente se encuentra el siguiente documento:<br><br><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>AUTORIZACIÓN ANUAL DE TUTORES PARA ESTUDIANTES MENORES DE EDAD</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Colegio Hogwarts de Magia y Hechicería</span></div><br>Yo, Rhiannon Hughes, por la presente, autorizo al alumno Gwendolyn Hughes a: <br><br>1. Participar en todas las asignaturas obligatorias y optativas del plan de estudios de Hogwarts, incluyendo aquellas que involucren transformaciones, pociones, y el manejo de criaturas mágicas.<br>2. Utilizar equipos mágicos y de vuelo (incluyendo escobas) bajo la supervisión de un profesor o miembro del personal autorizado.<br>3. Permitir el uso de la Red Flu o el Traslador, solo para traslados de emergencia autorizados por la Dirección.<br><br><u>OBSERVACIONES IMPORTANTES</u>:<br>— El Colegio Hogwarts de Magia y Hechicería no se responsabiliza por la pérdida o daño de bienes personales, varitas o mascotas.<br>— El uso de magia fuera del colegio por parte de menores es una violación del Estatuto Internacional del Secreto y será investigado por el Ministerio.<br><br><strong>Firma del Padre/Madre/Tutor</strong>: <i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_________________________<br><br><strong>Relación con el Estudiante</strong>: Madre<br><strong>Fecha</strong>: 24 de Mayo de 1948.<br></span></span>',
        },

        "ingresar la letra 'b' en el lexicón": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "lista de estudiantes de primer año",
          "cont": '<span>Al ingresar la letra "B", pueden buscar dentro de los archivos, el expediente de "Kieran Brennan".</span>',
        },

        "expediente de kieran brennan": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ingresar la letra 'b' en el lexicón",
          "cont": '<span>Dentro del expediente se encuentra el siguiente documento:<br><br><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>AUTORIZACIÓN ANUAL DE TUTORES PARA ESTUDIANTES MENORES DE EDAD</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Colegio Hogwarts de Magia y Hechicería</span></div><br>Yo, Gareth Brennan, por la presente, autorizo al alumno Kieran Brennan a: <br><br>1. Participar en todas las asignaturas obligatorias y optativas del plan de estudios de Hogwarts, incluyendo aquellas que involucren transformaciones, pociones, y el manejo de criaturas mágicas.<br>2. Utilizar equipos mágicos y de vuelo (incluyendo escobas) bajo la supervisión de un profesor o miembro del personal autorizado.<br>3. Permitir el uso de la Red Flu o el Traslador, solo para traslados de emergencia autorizados por la Dirección.<br><br><u>OBSERVACIONES IMPORTANTES</u>:<br>— El Colegio Hogwarts de Magia y Hechicería no se responsabiliza por la pérdida o daño de bienes personales, varitas o mascotas.<br>— El uso de magia fuera del colegio por parte de menores es una violación del Estatuto Internacional del Secreto y será investigado por el Ministerio.<br><br><strong>Firma del Padre/Madre/Tutor</strong>: <i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_________________________<br><br><strong>Relación con el Estudiante</strong>: Padre<br><strong>Fecha</strong>: 03 de Mayo de 1948.<br></span></span>',
        },

        "ingresar la letra 'f' en el lexicón": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "lista de estudiantes de primer año",
          "cont": '<span>Al ingresar la letra "F", pueden buscar dentro de los archivos, el expediente de "Penelope Fairfax".</span>',
        },

        "expediente de penelope fairfax": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "ingresar la letra 'f' en el lexicón",
          "cont": '<span>Dentro del expediente se encuentra el siguiente documento:<br><br><span class="book-clipping"><br><div align="center"><span style="font-size: 14px; line-height: normal"><strong>AUTORIZACIÓN ANUAL DE TUTORES PARA ESTUDIANTES MENORES DE EDAD</strong></span></div><div align="center"><span style="font-size: 12px; line-height: normal">Colegio Hogwarts de Magia y Hechicería</span></div><br>Yo, Eleanor Fairfax, por la presente, autorizo al alumno Penelope Fairfax a: <br><br>1. Participar en todas las asignaturas obligatorias y optativas del plan de estudios de Hogwarts, incluyendo aquellas que involucren transformaciones, pociones, y el manejo de criaturas mágicas.<br>2. Utilizar equipos mágicos y de vuelo (incluyendo escobas) bajo la supervisión de un profesor o miembro del personal autorizado.<br>3. Permitir el uso de la Red Flu o el Traslador, solo para traslados de emergencia autorizados por la Dirección.<br><br><u>OBSERVACIONES IMPORTANTES</u>:<br>— El Colegio Hogwarts de Magia y Hechicería no se responsabiliza por la pérdida o daño de bienes personales, varitas o mascotas.<br>— El uso de magia fuera del colegio por parte de menores es una violación del Estatuto Internacional del Secreto y será investigado por el Ministerio.<br><br><strong>Firma del Padre/Madre/Tutor</strong>: <i class="fi fi-tr-signature" style="font-size: 30px; margin-bottom: -25px; display: block; margin-right: 30px;"></i><br>_________________________<br><br><strong>Relación con el Estudiante</strong>: Madre<br><strong>Fecha</strong>: 15 de Junio de 1948.<br></span></span>',
        },

      },
      "actions": {},
    },
    // fin enrolled origins

    "under: evacuación": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u7", "/u94", "/u17", "/u55", "/u9", "/u130", "/u8"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "inefable", "name": "invalid", }, "place": "",
          "cont": '<span>Los inefables pueden ver todas las runas en las puertas siendo: <br>- Cámara del Pensamiento: Fehu (ᚠ) y Uruz (ᚢ).<br>- Cámara de la Muerte: Thurisaz (ᚦ) y Ansuz (ᚨ).<br>- Cámara de las Profecías: Raido (ᚱ) y Kaunan (ᚲ).<br>- Cámara del Amor: Gebo (ᚷ) y Wunjo (ᚹ).<br>- Cámara del Espacio: Haglaz (ᚺ) y Naudiz (ᚾ).<br>- Cámara del Tiempo: Isaz (ᛁ) y Jeran (ᛃ).<br>- Cámara de las Almas: Ihaz (ᛇ) y Pertho (ᛈ).<br>- Cámara del Caos: Algiz (ᛉ) y Sowilo (ᛊ).<br>- Cámara de la Sangre: Tiwaz (ᛏ) y Berkanan (ᛒ).<br>- Cámara del Silencio: Ehwaz (ᛖ) y Mannaz (ᛗ).<br>- Cámara de la Oscuridad: Laguz (ᛚ) y Ingwaz (ᛜ).<br>- Cámara de los Sueños: Othalan (ᛟ) y Dagaz (ᛞ).</span>',
        },
        {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "inefable", "name": "invalid", }, "place": "",
          "cont": '<span>Los inefables conocen bien el departamento, cuando se ingresa al mismo, el vestíbulo es el centro del mismo. Los ascensores los dejan donde se encuentran las puertas y cada vez que llega o una puerta se cierra, el vestíbulo gira. Las camaras se encuentran como anillos detrás de las puertas. Sin embargo, hay un tercera anillo, el de los corredores, el cual permite conectar mejor las cámaras entre sí. El orden es el de la tarjeta de arriba. Siendo la cámara del pensamiento el corredor I y la cámara de los sueños el corredor XII, estos dos últimos se conectan entre sí para completar el círculo.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara del pensamiento",
          "cont": '<span>La cámara del pensamiento es un espacio de lozas azules que se abren a diferentes oficinas. En las mismas encontrarán 5 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara de la muerte",
          "cont": '<span>La cámara de la muerte es una habitación redonda con un velo suspendido en el centro. Encontrarán 3 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara de las profecías",
          "cont": '<span>La cámara de las profecías es inmensa, llena de estanterías y orbes de cristal. En las mismas encontrarán 8 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara del amor",
          "cont": '<span>La cámara del amor es un espacio de luz rosa cálida, con una fuente de líquido desconocido en el centro. En las mismas encontrarán 2 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara del espacio",
          "cont": '<span>La cámara del espacio es oscura y su techo simula un cielo estrellado sin fin, al menos lo sería si una grieta no dividiera la sala en la mitad ingresando esquirlas y si no llenara la sala de una niebla demasiado tóxica para cualquiera. Duplica el daño. Encuentran 4 empleados, pero han fallecido, excepto uno que llega a decir «No se pudo finalizar el hechizo». <br /><br />Todos los personajes pierden 30 puntos de vida + el dado obtenido de ingreso a la cámara. Y perderán 20 puntos de vida por cada rol hasta que logren cerrar la grieta. La grieta tiene 80 puntos. Cuando los puntos obtenidos sean 40 o más, se pierde la penalidad de puntos de vida por rol.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara del tiempo",
          "cont": '<span>La cámara del tiempo está repleta de relojes de todos los tamaños y un gigantesco péndulo. En las mismas encontrarán 5 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara de las almas",
          "cont": '<span>La cámara de las almas es un espacio frío, con estatuas de piedra cubiertas de escarcha. No hay empleados en la sala.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara del caos",
          "cont": '<span>La cámara del caos tiene un suelo roto y está llena de objetos que desafían la gravedad. En las mismas encontrarán 7 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara de la sangre",
          "cont": '<span>La cámara de la sangre es una sala sombría donde el aire huele a metal. En las mismas encontrarán 4 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara de la oscuridad",
          "cont": '<span>La cámara de la oscuridad no tiene fuente de luz conocida; solo se ven sombras en movimiento. En las mismas encontrarán 2 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara del silencio",
          "cont": '<span>La cámara del silencio es insonorizada. Un silencio total y opresivo inunda el lugar. En las mismas encontrarán 2 empleados.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cámara de los sueños",
          "cont": '<span>La cámara de los sueños es una niebla de colores pastel donde las visiones se manifiestan. En las mismas encontrarán 3 empleados.</span>',
        },
      ],

      "searchs": {
        "vestíbulo del despartamento de misterios": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "",
          "cont": "<span>El vestíbulo es un espacio circular de paredes negras. Ni bien las puertas se abren, las puertas a las respectivas cámaras cambian de lugar, girando para distraer a aquel que no ha hecho el juramento de los inefables. Las puertas son de color negro y salvo el picaporte, no tienen ninguna distinción.</span>"
        },

        "inicia en profecías": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "danielle" },
          "place": "",
          "cont": "<span>El personaje inicia en la Cámara de las Profecías.<adding search=\"cámara de las profecías\" class=\"check-cards\"></adding></span>"
        },

        "inicia en oscuridad": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "black" },
          "place": "",
          "cont": "<span>El personaje inicia en la Cámara de la Oscuridad.<adding search=\"cámara de la oscuridad\" class=\"check-cards\"></adding></span>"
        },

        "inicia en sueños": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "regulus" },
          "place": "",
          "cont": "<span>El personaje inicia en la Cámara de los Sueños.<adding search=\"cámara de los sueños\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DEL PENSAMIENTO (FEHU/URUZ) - CORREDOR I --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta fehu": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del pensamiento\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta uruz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del pensamiento\" class=\"check-cards\"></adding></span>"
        },
        "cámara del pensamiento a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del pensamiento",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor i\" class=\"check-cards\"></adding></span>"
        },
        "cámara del pensamiento a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del pensamiento",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor i a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor i",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor ii\" class=\"check-cards\"></adding></span>"
        },
        "corredor i a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor i",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor xii\" class=\"check-cards\"></adding></span>"
        },
        "corredor i a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor i",
          "cont": "<span>Regresa a la cámara del pensamiento.<adding search=\"cámara del pensamiento\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DE LA MUERTE (THURISAZ/ANSUZ) - CORREDOR II --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta thurisaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de la muerte\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta ansuz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de la muerte\" class=\"check-cards\"></adding></span>"
        },
        "cámara de la muerte a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de la muerte",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor ii\" class=\"check-cards\"></adding></span>"
        },
        "cámara de la muerte a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de la muerte",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor ii a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor ii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor iii\" class=\"check-cards\"></adding></span>"
        },
        "corredor ii a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor ii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor i\" class=\"check-cards\"></adding></span>"
        },
        "corredor ii a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor ii",
          "cont": "<span>Regresa a la cámara de la muerte.<adding search=\"cámara de la muerte\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DE LAS PROFECÍAS (RAIDO/KAUNAN) - CORREDOR III --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta raido": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de las profecías\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta kaunan": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de las profecías\" class=\"check-cards\"></adding></span>"
        },
        "cámara de las profecías a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de las profecías",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor iii\" class=\"check-cards\"></adding></span>"
        },
        "cámara de las profecías a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de las profecías",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor iii a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor iii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor iv\" class=\"check-cards\"></adding></span>"
        },
        "corredor iii a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor iii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor ii\" class=\"check-cards\"></adding></span>"
        },
        "corredor iii a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor iii",
          "cont": "<span>Regresa a la cámara de las profecías.<adding search=\"cámara de las profecías\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DEL AMOR (GEBO/WUNJO) - CORREDOR IV --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta gebo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del amor\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta wunjo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del amor\" class=\"check-cards\"></adding></span>"
        },
        "cámara del amor a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del amor",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor iv\" class=\"check-cards\"></adding></span>"
        },
        "cámara del amor a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del amor",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor iv a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor iv",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor v\" class=\"check-cards\"></adding></span>"
        },
        "corredor iv a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor iv",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor iii\" class=\"check-cards\"></adding></span>"
        },
        "corredor iv a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor iv",
          "cont": "<span>Regresa a la cámara del amor.<adding search=\"cámara del amor\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DEL ESPACIO (HAGLAZ/NAUDIZ) - CORREDOR V --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta haglaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del espacio\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta naudiz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del espacio\" class=\"check-cards\"></adding></span>"
        },
        "cámara del espacio a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del espacio",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor v\" class=\"check-cards\"></adding></span>"
        },
        "cámara del espacio a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del espacio",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor v a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor v",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor vi\" class=\"check-cards\"></adding></span>"
        },
        "corredor v a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor v",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor iv\" class=\"check-cards\"></adding></span>"
        },
        "corredor v a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor v",
          "cont": "<span>Regresa a la cámara del espacio.<adding search=\"cámara del espacio\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DEL TIEMPO (ISAZ/JERAN) - CORREDOR VI --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta isaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del tiempo\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta jeran": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del tiempo\" class=\"check-cards\"></adding></span>"
        },
        "cámara del tiempo a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del tiempo",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor vi\" class=\"check-cards\"></adding></span>"
        },
        "cámara del tiempo a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del tiempo",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor vi a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor vi",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor vii\" class=\"check-cards\"></adding></span>"
        },
        "corredor vi a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor vi",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor v\" class=\"check-cards\"></adding></span>"
        },
        "corredor vi a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor vi",
          "cont": "<span>Regresa a la cámara del tiempo.<adding search=\"cámara del tiempo\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DE LAS ALMAS (IHAZ/PERTHO) - CORREDOR VII --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta ihaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de las almas\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta pertho": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de las almas\" class=\"check-cards\"></adding></span>"
        },
        "cámara de las almas a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de las almas",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor vii\" class=\"check-cards\"></adding></span>"
        },
        "cámara de las almas a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de las almas",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor vii a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor vii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor viii\" class=\"check-cards\"></adding></span>"
        },
        "corredor vii a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor vii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor vi\" class=\"check-cards\"></adding></span>"
        },
        "corredor vii a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor vii",
          "cont": "<span>Regresa a la cámara de las almas.<adding search=\"cámara de las almas\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DEL CAOS (ALGIZ/SOWILO) - CORREDOR VIII --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta algiz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del caos\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta sowilo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del caos\" class=\"check-cards\"></adding></span>"
        },
        "cámara del caos a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del caos",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor viii\" class=\"check-cards\"></adding></span>"
        },
        "cámara del caos a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del caos",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor viii a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor viii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor ix\" class=\"check-cards\"></adding></span>"
        },
        "corredor viii a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor viii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor vii\" class=\"check-cards\"></adding></span>"
        },
        "corredor viii a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor viii",
          "cont": "<span>Regresa a la cámara del caos.<adding search=\"cámara del caos\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DE LA SANGRE (TIWAZ/BERKANAN) - CORREDOR IX --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta tiwaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de la sangre\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta berkanan": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de la sangre\" class=\"check-cards\"></adding></span>"
        },
        "cámara de la sangre a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de la sangre",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor ix\" class=\"check-cards\"></adding></span>"
        },
        "cámara de la sangre a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de la sangre",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor ix a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor ix",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor x\" class=\"check-cards\"></adding></span>"
        },
        "corredor ix a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor ix",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor viii\" class=\"check-cards\"></adding></span>"
        },
        "corredor ix a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor ix",
          "cont": "<span>Regresa a la cámara de la sangre.<adding search=\"cámara de la sangre\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DEL SILENCIO (EHWAS/MANNAZ) - CORREDOR X --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta ehwaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del silencio\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta mannaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara del silencio\" class=\"check-cards\"></adding></span>"
        },
        "cámara del silencio a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del silencio",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor x\" class=\"check-cards\"></adding></span>"
        },
        "cámara del silencio a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara del silencio",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor x a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor x",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor xi\" class=\"check-cards\"></adding></span>"
        },
        "corredor x a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor x",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor ix\" class=\"check-cards\"></adding></span>"
        },
        "corredor x a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor x",
          "cont": "<span>Regresa a la cámara del silencio.<adding search=\"cámara del silencio\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DE LA OSCURIDAD (LAGUZ/INGWAZ) - CORREDOR XI --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta laguz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de la oscuridad\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta ingwaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de la oscuridad\" class=\"check-cards\"></adding></span>"
        },
        "cámara de la oscuridad a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de la oscuridad",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor xi\" class=\"check-cards\"></adding></span>"
        },
        "cámara de la oscuridad a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de la oscuridad",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor xi a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor xi",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor xii\" class=\"check-cards\"></adding></span>"
        },
        "corredor xi a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor xi",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor x\" class=\"check-cards\"></adding></span>"
        },
        "corredor xi a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor xi",
          "cont": "<span>Regresa a la cámara de la oscuridad.<adding search=\"cámara de la oscuridad\" class=\"check-cards\"></adding></span>"
        },

        /* ----------------------------------------------------- */
        /* --- CÁMARA DE LOS SUEÑOS (OTHALAN/DAGAZ) - CORREDOR XII --- */
        /* ----------------------------------------------------- */
        "vestíbulo a puerta othalan": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de los sueños\" class=\"check-cards\"></adding></span>"
        },
        "vestíbulo a puerta dagaz": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "vestíbulo del despartamento de misterios",
          "cont": "<span>Al ingresar por la puerta las luces permanecen apagadas hasta que se cierre la puerta detrás de uno.<adding search=\"cámara de los sueños\" class=\"check-cards\"></adding></span>"
        },
        "cámara de los sueños a puerta de atrás": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de los sueños",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor xii\" class=\"check-cards\"></adding></span>"
        },
        "cámara de los sueños a vestíbulo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "cámara de los sueños",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"vestíbulo del despartamento de misterios\" class=\"check-cards\"></adding></span>"
        },
        "corredor xii a puerta norte": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor xii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor i\" class=\"check-cards\"></adding></span>"
        },
        "corredor xii a puerta sur": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor xii",
          "cont": "<span>Al ingresar por la puerta de atrás, se regresa a un corredor de lozas y paredes negras.<adding search=\"corredor xi\" class=\"check-cards\"></adding></span>"
        },
        "corredor xii a puerta este": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid" },
          "place": "corredor xii",
          "cont": "<span>Regresa a la cámara de los sueños.<adding search=\"cámara de los sueños\" class=\"check-cards\"></adding></span>"
        }
      },

      "actions": {
        "anapneo": {
          "leve": '<span>La víctima recupera 20pv.</span>',
          "moderado": '<span>La víctima recupera 30pv</span>',
          "exitoso": '<span>La víctima recupera 50pv</span>',
          "critico": '<span>La víctima recupera 60pv</span>',
        },
        "episkey": {
          "leve": '<span>La víctima recupera 20pv.</span>',
          "moderado": '<span>La víctima recupera 30pv</span>',
          "exitoso": '<span>La víctima recupera 50pv</span>',
          "critico": '<span>La víctima recupera 60pv</span>',
        },
        "reparifors": {
          "leve": '<span>La víctima recupera 20pv.</span>',
          "moderado": '<span>La víctima recupera 30pv</span>',
          "exitoso": '<span>La víctima recupera 50pv</span>',
          "critico": '<span>La víctima recupera 60pv</span>',
        },
        "evacuare nasum": {
          "leve": '<span>La víctima recupera 20pv.</span>',
          "moderado": '<span>La víctima recupera 30pv</span>',
          "exitoso": '<span>La víctima recupera 50pv</span>',
          "critico": '<span>La víctima recupera 60pv</span>',
        },
        "memoria lucida": {
          "leve": '<span>La víctima recupera 20pv.</span>',
          "moderado": '<span>La víctima recupera 30pv</span>',
          "exitoso": '<span>La víctima recupera 50pv</span>',
          "critico": '<span>La víctima recupera 60pv</span>',
        },
        "curatio naturalis": {
          "leve": '<span>La víctima recupera 20pv.</span>',
          "moderado": '<span>La víctima recupera 30pv</span>',
          "exitoso": '<span>La víctima recupera 50pv</span>',
          "critico": '<span>La víctima recupera 60pv</span>',
        },
        "finite": {
          "leve": '<span>Adiciona al cierre de la grieta el valor del dado.</span>',
          "moderado": '<span>Adiciona al cierre de la grieta el valor del dado + 10.</span>',
          "exitoso": '<span>Adiciona al cierre de la grieta el valor del dado + 20.</span>',
          "critico": '<span>Adiciona al cierre de la grieta el valor del dado + 30.</span>',
        },
      },
    },
    // under: evacuación

    "under: recuperación encantamientos": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u118", "/u112", "/u38"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "liderazgo": "10" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para poder calmar el pánico colectivo y su penalidad, se deberá tirar un <i>vox imperium</i>. La prioridad la tendrá la primera intervención del <u>profesor</u>.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Los hechizos de protección que suman puntos a la protección son: "protego", "protego totalum", "vocare telwaz", "bulla galea", "cave inimicum" y "modus symmetria".</span>',
        }
      ],
      "searchs": {},

      "actions": {
        "vox imperium": {
          "leve": '<span>Las penalidades se reduce a 2 puntos.</span>',
          "moderado": '<span>Las penalidades se reduce a 2 puntos.</span>',
          "exitoso": '<span>La penalidad se reduce a 0 puntos.</span>',
          "critico": '<span>La penalidad se reduce a 0 puntos.</span>',
        },
        "protego": {
          "leve": '<span>Suma 10 puntos a la protecciones.</span>',
          "moderado": '<span>Suma 25 puntos a las protecciones.</span>',
          "exitoso": '<span>Suma 40 puntos a las protecciones.</span>',
          "critico": '<span>Suma 65 puntos a las protecciones.</span>',
        },
        "protego totalum": {
          "leve": '<span>Suma 10 puntos a la protecciones.</span>',
          "moderado": '<span>Suma 40 puntos a las protecciones.</span>',
          "exitoso": '<span>Suma 65 puntos a las protecciones.</span>',
          "critico": '<span>Suma 100 puntos a las protecciones.</span>',
        },
        "vocare telwaz": {
          "leve": '<span>Suma 10 puntos a la protecciones.</span>',
          "moderado": '<span>Suma 75 puntos a las protecciones.</span>',
          "exitoso": '<span>Suma 100 puntos a las protecciones.</span>',
          "critico": '<span>Suma 150 puntos a las protecciones.</span>',
        },
        "bulla galea": {
          "leve": '<span>Suma 10 puntos a la protecciones.</span>',
          "moderado": '<span>Suma 35 puntos a las protecciones.</span>',
          "exitoso": '<span>Suma 50 puntos a las protecciones.</span>',
          "critico": '<span>Suma 75 puntos a las protecciones.</span>',
        },
        "cave inimicum": {
          "leve": '<span>Suma 10 puntos a la protecciones.</span>',
          "moderado": '<span>Suma 40 puntos a las protecciones.</span>',
          "exitoso": '<span>Suma 65 puntos a las protecciones.</span>',
          "critico": '<span>Suma 100 puntos a las protecciones.</span>',
        },
        "modus symmetria": {
          "leve": '<span>Suma 10 puntos a la protecciones.</span>',
          "moderado": '<span>Suma 50 puntos a las protecciones.</span>',
          "exitoso": '<span>Suma 80 puntos a las protecciones.</span>',
          "critico": '<span>Suma 120 puntos a las protecciones.</span>',
        },
      },
    },
    // under: recuperación

    "under: recuperación herbología": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u108", "/u119", "/u63"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "liderazgo": "10" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para poder calmar el pánico colectivo y su penalidad, se deberá tirar un <i>vox imperium</i>. La prioridad la tendrá la primera intervención del <u>profesor</u>.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Deberán plantas y hacer crecer los árboles Vitalizantes que puedan ser transplantados en espacios claves para mejorar el oxígeno de la zona. Para poder hacerlos crecer, los estudiantes tendrán que lanzar los hechizos: Deprimo, Ros Instauro y Herbivicus; mientras que el profesor deberá lanzar: Calor Crescit y Planta Ordo.</span>',
        }
      ],
      "searchs": {},

      "actions": {
        "vox imperium": {
          "leve": '<span>Las penalidades se reduce a 2 puntos.</span>',
          "moderado": '<span>Las penalidades se reduce a 2 puntos.</span>',
          "exitoso": '<span>La penalidad se reduce a 0 puntos.</span>',
          "critico": '<span>La penalidad se reduce a 0 puntos.</span>',
        },
        "deprimo": {
          "leve": '<span>Permite enterrar dos plantines del árbol</span>',
          "moderado": '<span>Permite enterrar cuatro plantines del árbol</span>',
          "exitoso": '<span>Permite enterrar seis plantines del árbol.</span>',
          "critico": '<span>Permite enterrar diez plantines del árbol.</span>',
        },
        "ros instauro": {
          "leve": '<span>Permite regar dos plantines estableciendo los árboles.</span>',
          "moderado": '<span>Permite regar cuatro plantines estableciendo los árboles.</span>',
          "exitoso": '<span>Permite regar seis plantines estableciendo los árboles.</span>',
          "critico": '<span>Permite regar diez plantines estableciendo los árboles.</span>',
        },
        "herbivicus": {
          "leve": '<span>Permite hacer crecer dos plantines en árboles jóvenes.</span>',
          "moderado": '<span>Permite hacer crecer cuatro plantines en árboles jóvenes.</span>',
          "exitoso": '<span>Permite hacer crecer seis plantines en árboles jóvenes.</span>',
          "critico": '<span>Permite hacer crecer diez plantines en árboles jóvenes.</span>',
        },
        "calor crescit": {
          "leve": '<span>Permite estimula el crecimiento de cuatro árboles adultos a árboles maduros.</span>',
          "moderado": '<span>Permite estimula el crecimiento de seis árboles adultos a árboles maduros.</span>',
          "exitoso": '<span>Permite estimula el crecimiento de diez árboles adultos a árboles maduros.</span>',
          "critico": '<span>Permite estimula el crecimiento de doce árboles adultos a árboles maduros.</span>',
        },
        "planta ordo": {
          "leve": '<span>Permite guiar el crecimiento de cuatro árboles jóvenes a árboles adultos.</span>',
          "moderado": '<span>Permite guiar el crecimiento de seis árboles jóvenes a árboles adultos.</span>',
          "exitoso": '<span>Permite guiar el crecimiento de diez árboles jóvenes a árboles adultos.</span>',
          "critico": '<span>Permite guiar el crecimiento de doce árboles jóvenes a árboles adultos.</span>',
        },
      },
    },
    // under: recuperación

    "under: recuperación pociones": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u120", "/u12", "/u134"],
      "dependency": [],
      "type": "quidditch", "closed": true, "link": "", "tagged": ["quidditch"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "liderazgo": "10" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para poder calmar el pánico colectivo y su penalidad, se deberá tirar un <i>vox imperium</i>. La prioridad la tendrá la primera intervención del <u>profesor</u>.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Se debrán realizar las siguientes pociones teniendo en cuenta los siguientes resultados: Poción Calmante (terminarla finaliza en 15 frascos); Poción Herbovitalizante (terminarla finaliza en 15 frascos); Poción para las heridas (terminarla finaliza en 20 frascos); y Poción para la tos (terminarla finaliza en 20 fracos).</span>',
        }
      ],
      "searchs": {},

      "actions": {
        "vox imperium": {
          "leve": '<span>Las penalidades se reduce a 2 puntos.</span>',
          "moderado": '<span>Las penalidades se reduce a 2 puntos.</span>',
          "exitoso": '<span>La penalidad se reduce a 0 puntos.</span>',
          "critico": '<span>La penalidad se reduce a 0 puntos.</span>',
        },
      },
    },
    // under: recuperación

    "under: recuperación transformaciones": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u24", "/u8", "/u132", "/u127", "/u110"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "cards": [
        {
          "visible": { "attr": { "val": "min" }, "know": { "liderazgo": "10" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para poder calmar el pánico colectivo y su penalidad, se deberá tirar un <i>vox imperium</i>. La prioridad la tendrá la primera intervención del <u>profesor</u>.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para crear sacos de dormir se deberá seguir los siguientes pasos: Vitafigura, Pilonis Filum y Filumtexto.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para generar almohadas se deberán seguir los siguientes pasos: Vitafigura y Silentiaforma.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para generar un colchón se debe usar: Silentiaforma en las ovejas.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para ordenar a los magos y brujas en cada habitación se deberá usar Fortitudo Cordis.</span>',
        }
      ],
      "searchs": {},

      "actions": {
        "vox imperium": {
          "leve": '<span>Las penalidades se reduce a 1 punto.</span>',
          "moderado": '<span>Las penalidades se reduce a 1 punto.</span>',
          "exitoso": '<span>La penalidad se reduce a 0 puntos.</span>',
          "critico": '<span>La penalidad se reduce a 0 puntos.</span>',
        },
        "fortitudo cordis": {
          "leve": '<span>Ordena diez magos y brujas en el aula.</span>',
          "moderado": '<span>Ordena quince magos y brujas en el aula.</span>',
          "exitoso": '<span>Ordena veinte magos y brujas en el aula.</span>',
          "critico": '<span>Ordena treinta magos y brujas en el aula.</span>',
        },
        "vitafigura": {
          "leve": '<span>Convierte un grupo de cinco troncos en un número idéntico de Ovejas o Gansos.</span>',
          "moderado": '<span>Convierte un grupo de diez troncos en un número idéntico de Ovejas o Gansos.</span>',
          "exitoso": '<span>Convierte un grupo de quince troncos en un número idéntico de Ovejas o Gansos.</span>',
          "critico": '<span>Convierte un grupo de veinte troncos en un número idéntico de Ovejas o Gansos.</span>',
        },
        "pilonis filum": {
          "leve": '<span>Esquila cinco Ovejas regresando el número identico de Lanas.</span>',
          "moderado": '<span>Esquila diez Ovejas regresando el número identico de Lanas.</span>',
          "exitoso": '<span>Esquila quince Ovejas regresando el número identico de Lanas.</span>',
          "critico": '<span>Esquila veinte Ovejas regresando el número identico de Lanas.</span>',
        },
        "filumtexto": {
          "leve": '<span>Convierte hasta cinco Lanas en un número identico de Sacos de dormir.</span>',
          "moderado": '<span>Convierte hasta diez Lanas en un número identico de Sacos de dormir.</span>',
          "exitoso": '<span>Convierte hasta quince Lanas en un número identico de Sacos de dormir.</span>',
          "critico": '<span>Convierte hasta veinte Lanas en un número identico de Sacos de dormir.</span>',
        },
        "silentiaforma": {
          "leve": '<span>Permite convertir hasta cinco Gansos en un número identico de almohadas; O convertir hasta cinco Ovejas en un número identico de colchones.</span>',
          "moderado": '<span>Permite convertir hasta cinco Gansos en un número identico de almohadas; O convertir hasta cinco Ovejas en un número identico de colchones.</span>',
          "exitoso": '<span>Permite convertir hasta diez Gansos en un número identico de almohadas; O convertir hasta diez Ovejas en un número identico de colchones.</span>',
          "critico": '<span>Permite convertir hasta quince Gansos en un número identico de almohadas; O convertir hasta quince Ovejas en un número identico de colchones.</span>',
        },
      },
    },
    // under: recuperación

    "under: disipación": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u101", "/u55", "/u13", "/u132", "/u110", "/u7"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "cards": [
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para levantar las protecciones se deberá usar: Protego o Continentia Bulla.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Para fortalecer las protecciones se deberá usar: Fianto Duri o Modus Sysmmetria.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Las protecciones tienen que estar levantadas en los tres lugares antes de lanzar los hechizos que disiparán la niebla.</span>',
        }
      ],
      "searchs": {},

      "actions": {
        "protego": {
          "leve": '<span>Genera 10 puntos de protección.</span>',
          "moderado": '<span>Genera 20 puntos de protección.</span>',
          "exitoso": '<span>Genera 30 puntos de protección.</span>',
          "critico": '<span>Genera 40 puntos de protección.</span>',
        },
        "protego totalum": {
          "leve": '<span>Genera 15 puntos de protección.</span>',
          "moderado": '<span>Genera 25 puntos de protección.</span>',
          "exitoso": '<span>Genera 35 puntos de protección.</span>',
          "critico": '<span>Genera 45 puntos de protección.</span>',
        },
        "continentia bulla": {
          "leve": '<span>Genera 15 puntos de protección.</span>',
          "moderado": '<span>Genera 25 puntos de protección.</span>',
          "exitoso": '<span>Genera 35 puntos de protección.</span>',
          "critico": '<span>Genera 45 puntos de protección.</span>',
        },
        "fianto duri": {
          "leve": '<span>Adiciona 10 puntos a la barrera.</span>',
          "moderado": '<span>Adiciona 15 puntos a la barrera.</span>',
          "exitoso": '<span>Duplica el puntaje de protección.</span>',
          "critico": '<span>Triplica el puntaje de protección.</span>',
        },
        "modus symmetria": {
          "leve": '<span>Adiciona 10 puntos a la barrera.</span>',
          "moderado": '<span>Adiciona 15 puntos a la barrera.</span>',
          "exitoso": '<span>Duplica el puntaje de protección.</span>',
          "critico": '<span>Triplica el puntaje de protección.</span>',
        },
        "ventus": {
          "leve": '<span>Paso 1 de 3: Incompleto.</span>',
          "moderado": '<span>Paso 1 de 3: Completado.</span>',
          "exitoso": '<span>Paso 1 de 3: Completado.</span>',
          "critico": '<span>Paso 1 de 3: Completado.</span>',
        },
        "purga tox": {
          "leve": '<span>Paso 2 de 3: Incompleto.</span>',
          "moderado": '<span>Paso 2 de 3: Completado.</span>',
          "exitoso": '<span>Paso 2 de 3: Completado.</span>',
          "critico": '<span>Paso 2 de 3: Completado.</span>',
        },
        "finite": {
          "leve": '<span>Paso 3 de 3: Incompleto.</span>',
          "moderado": '<span>Paso 3 de 3: Completado.</span>',
          "exitoso": '<span>Paso 3 de 3: Completado.</span>',
          "critico": '<span>Paso 3 de 3: Completado.</span>',
        },
      },
    },
    // under: disipación

    "under: elaboración": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u44", "/u91", "/u78", "/u97", "/u134", "/u136"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "cards": [],

      "searchs": {
        "calentar el agua de luna": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Iniciar con una base líquida siempre es lo más seguro. Al incorporar el agua de luna al caldero, se debe dejar hervir hasta que tome un color azulado.</span>',
        },
        "añadir el aceite de mandrágora": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "calentar el agua de luna",
          "cont": '<span>Para neutralizar la poción, se incorporan tres gotas de mandrágora a la poción. La misma toma un color morado de manera inmediata.</span>',
        },
        "revolver en sentido de las agujas del reloj": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "añadir el aceite de mandrágora",
          "cont": '<span>Al comenzar a remover en sentido de las agujas del reloj, la mezcla comienza a soltar olor a quemado y a evaporarse en el ambiente. Los pasos no fueron los correctos, debe volver al paso uno: calentar el agua de luna.</span>',
        },
        "añadir bezoar en espiral": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "calentar el agua de luna",
          "cont": '<span>Para neutralizar la poción, se incorpora el bezoar pulverizado en espiral, teniendo cuidado de hacerlo en sentido contrario a las agujas del reloj.</span>',
        },
        "añadir dos hojas de díctamo": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "calentar el agua de luna",
          "cont": '<span>Para neutralizar la poción, se incorporan dos hijas de díctamo a la poción.  Se debe esperar a que las hojas se disuelvan.</span>',
        },
        "esperar a que se disuelvan las hojas": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "añadir dos hojas de díctamo",
          "cont": '<span>Cuando las hojas se disuelven, generan reacción en el agua que toma un color negro y se vuelve demasiado espeso para resolver. Los pasos no fueron los correctos, debe volver al paso uno: calentar el agua de luna.</span>',
        },
        "remover desapacio": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "añadir bezoar en espiral",
          "cont": '<span>Una vez agregado el bezoar remover despacio hasta que el agua tome un color malva brillante.</span>',
        },
        "incorporar la raíz de asfódelo": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "remover desapacio",
          "cont": '<span>Una vez neutralizada la poción, se debe añadir una raíz de asfódelo. La poción no reacciona de manera inmediata, pero pasados unos minutos la raíz comienza a disolverse en la poción. Deberán esperar a que se termine de disolver.</span>',
        },
        "remover siete veces en sentido horario": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "incorporar la raíz de asfódelo",
          "cont": '<span>Con cada vuelta con la que se remueve, en sentido horario, no parece suceder nada, hasta que en la séptima vuelta la poción pierde color y brillo. Sus propiedades mágicas se han perdido. Los pasos no fueron los correctos, debe volver al paso uno: calentar el agua de luna.</span>',
        },
        "remover siete veces en sentido antihorario": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "incorporar la raíz de asfódelo",
          "cont": '<span>Con cada vuelta con la que se remueve, en sentido contrario a las agujas del reloj, no parece suceder nada, hasta que en la séptima vuelta la poción poco a poco se vuelve verde, manteniendo un color traslúcido con el color malva que previamente poseía.</span>',
        },
        "dejar coser por diez minutos": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "remover siete veces en sentido antihorario",
          "cont": '<span>La poción espesa suavemente. Se la debe remover con suavidad y bajar el fuego a mínimo.</span>',
        },
        "dejar coser por veinte minutos": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "remover siete veces en sentido antihorario",
          "cont": '<span>La poción espesa suavemente. Se la debe remover con suavidad y bajar el fuego a mínimo.</span>',
        },
        "dejar coser por treinta minutos": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "remover siete veces en sentido antihorario",
          "cont": '<span>La poción espesa demasiado hasta volverse una sustancia gomosa que rompe el caldero corroyendo todo a su paso. Los pasos no fueron los correctos, debe volver al paso uno: calentar el agua de luna.</span>',
        },
        "agregar una hoja de díctamo": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "dejar coser por diez minutos",
          "cont": '<span>Al momento en que ingresar una hoja a la poción, la misma explota. Los pasos no fueron los correctos, debe volver al paso uno: calentar el agua de luna.</span>',
        },
        "agregar tres hojas de díctamo": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "dejar coser por veinte minutos",
          "cont": '<span>Por cada hoja de díctamo que se agrega, la poción va liberando un aroma fresco y refrescante, hasta que con la tercera hoja el color de la poción se vuelve vibrante. Deberán subir el fuego al máximo.</span>',
        },
        "introducir el cuarzo": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "agregar tres hojas de díctamo",
          "cont": '<span>Parece ser momento de añadir el cuarzo y dejar disolver hasta que solo queden brillos en la poción.</span>',
        },
        "espolvorear el polvo de escama de colacuerno": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "introducir el cuarzo",
          "cont": '<span>Con el fuego en máximo, es necesario espolvorear rápido el polvo de escama de colacuerno, lo que generará un destello azul; esperar a que se apague.</span>',
        },
        "volver fuego a mínimo": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "espolvorear el polvo de escama de colacuerno",
          "cont": '<span>Una vez que se apagó el destello azul, se deberá bajar el fuego a mínimo y esperar un momento a que termine de unificarse todo el polvo de escama de dragón, en caso contrario podría generar chispas de fuego.</span>',
        },
        "mantener fuego al máximo": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "espolvorear el polvo de escama de colacuerno",
          "cont": '<span>Una vez que se apagó el destello azul, la poción comienza a hervir para prenderse fuego segundos después. Los pasos no fueron los correctos, debe volver al paso uno: calentar el agua de luna.</span>',
        },
        "verter gotas de aceite de mandrágora": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "volver fuego a mínimo",
          "cont": '<span>Las gotas de aceite de mandrágora se tienen que agregar una a una y esperar un momento después de cada una. Al añadir la primera gota, la poción se mantiene igual; a la segunda gota, la poción toma un color amarillento; a la tercera toma un color dorado; y a la cuarta retoma el aroma fresco y a hierbas.</span>',
        },
        "remover tres veces": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "verter gotas de aceite de mandrágora",
          "cont": '<span>Una vez que la poción tomó color dorado y aroma a hierbas, se deberá apagar el fuego y remover tres veces mientras termina de perder todo el calor.</span>',
        },
        "dejar enfriar": {
          "visible": { "attr": { "val": "min" }, "know": { "pociones": "5" }, "job": "invalid", "name": "invalid", }, "place": "remover tres veces",
          "cont": '<span>Una vez que la poción se enfría y la pueden envasar. La mezcla espesa y brillante debe ser aplicada en el pecho de los pacientes. Sin embargo, antes debe ser probada. Un cuidador se lleva uno de los frascos, dejando a los elaboradores de la poción solos por unos minutos. Poco después se escuchan unos pasos que suben corriendo, hasta que el mismo cuidador abre la puerta e indica que la poción funcionó. ¡Felicitaciones!<br /><u>Nota</u>: Si lo desean pueden acompañar al cuidador. También podrán elegir un nombre para la poción y enviar los resultados a la administración.</span>',
        },
      },

      "actions": {},
    },
    // under: elaboración

    "yule": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u8", "/u24", "/u9", "/u7", "/u55", "/u12", "/u44", "/u120", "/u91", "/u118", "/u110", "/u17", "/u50", "/u38"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "cards": [
        {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>Briseida lleva puesto un colgante muy delicado. Una cadena de oro de la que cuelga una delicada libélula, pero si se presta atención, se podrá notar que la libélula es, en realidad, una llave.</span>',
        },
        {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "preguntar a briseida si se encuentra bien",
          "cont": '<span>La cadena de oro que Briseida llevaba, actualmente no se encuentra en su cuello. Ha desaparecido.</span>',
        }
      ],

      "searchs": {
        "perseguir a nina wraithwood": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>En el momento en que comienzan a perseguir a Nina, la misma se voltea el tiempo justo antes de saludarlos con un guiño y desaparecerse del lugar con el característico chasquido.</span>',
        },
        "investigar bebidas": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "cuarta intervención",
          "cont": '<span>Cuando se dirigen a las bebidas, pueden valir que las mismas han sido adulterados con una poción de sueño profundo.</span>',
        },
        "analisis de heridos": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>La cantidad de personas (pnj) afectadas sera compuesta por el resultado de esta acción + 20, adicionales a los personajes que interactúan en la trama. Una vez que todos se encuentren despiertos podrán dar por finalizado ese conflicto.</span>',
        },
        "asegurar a la ministra tuft": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "seguridad", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>Cuando los cuerpos comenzaron a desplomarse del lugar. La seguridad personal de la Ministra se cerró entorno a ella. Uno de los de seguridad se encargó de retirar a la Ministra a un lugar seguro, evacuando a la misma del lugar. Posteriormente, les llegará el patronus de un pitbull que indicará que la Ministra esta a salvo.</span>',
        },
        "tomar pulso de los heridos": {
          "visible": { "attr": { "val": "min" }, "know": { "curación": "10" }, "job": "invalid", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>Cuando se toma el pulso a las personas que se desvanecieron, se puede percibir que es tan bajo que casi desaparece. El hechizo a realizar es el <i>Cordivivus</i>.</span>',
        },
        "investigar caja musical": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "tercera intervención",
          "cont": '<span>Los personajes de la caja musical podrán notar que carecen de sus varitas mágicas y, además, sus pies comienzan a transformarse en madera.</span>',
        },
        "magia de la caja musical": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "investigar caja musical",
          "cont": '<span>La caja musical fue intervenida con magia, pero construida a tamaño real. Al haber sido contruida a tamaño real, es lo que ha permitido que hayan sido incorporados dentro de la misma.</span>',
        },
        "abrir compuerta": {
          "visible": { "attr": { "int": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "magia de la caja musical",
          "cont": '<span>Como la caja musical fue hecha en tamaño real, pueden localizar en el suelo, una compuerta que lleva al mecánismo de la misma, y tratar de comprender cómo liberarse de aquella maldición.</span>',
        },
        "investigar mecánismo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "abrir compuerta",
          "cont": '<span>Al abrir la compuerta, se puede observar una escalera que baja hasta el mismo mecánismo, en el cual se puede observar: el muelle (fuente de la caja musical que empuja mecánismo hacia delante), el tambor (cilindro con púas que define la melodía), el peine (una placa de metal con dientes que suenan al ser golpeadas por las púas) y el regulador (unas aspas que giran rápido para determinar la velocidad de la música).</span>',
        },
        "revertir la maldición": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "investigar mecánismo",
          "cont": '<span>Como la maldición avanza con el objetivo de convertirlos en madera, a medida que la música avanza, para revertir la misma, deberán hacer que la melodía vaya en reversa, de modo que, cuando llegue al inicio, puedan salir de la caja musical.</span>',
        },
        "bloquear el muelle (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "fue": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revertir la maldición",
          "cont": '<span>El primer paso de una estrategia para poder hacer que la música vaya en sentido contrario es bloquear el muelle. Para que la música se detenga. Para ello dos personajes van a tener que sostener el muelle mientras otro lo desacopla. En este paso no se realiza ninguna acción, es una explicación hipótetica.</span>',
        },
        "sostener el muelle (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "fue": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revertir la maldición",
          "cont": '<span>Hay que tener en cuenta que una vez que el muelle este desacoplado, dos personajes deberán tener el mismo hasta que se realicen todos los pasos y pueda volver a conectarse. En este paso no se realiza ninguna acción, es una explicación hipótetica.</span>',
        },
        "desacoplar el engranaje (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "des": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revertir la maldición",
          "cont": '<span>Para poder desacoplar el engranaje que conecta el muelle con el cilindro consta de girar manualmente los engranajes del lado izquierdo y derecho. En este paso no se realiza ninguna acción, es una explicación hipótetica.</span>',
        },
        "aflojar el tornillo del peine (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "des": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "revertir la maldición",
          "cont": '<span>Para poder hacer que la música gire en sentido contrario, un personaje deberá ir al otro lado del peine y flojar el tornillo, podrá hacerlo con las manos. En este paso no se realiza ninguna acción, es una explicación hipótetica.</span>',
        },
        "cambiar sentido del peine (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "des": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "aflojar el tornillo del peine (solo para quienes están dentro de la caja)",
          "cont": '<span>Para poder cambiar el sentido del peine, dos personajes deberán girarlo de manera que cambie el sentido en el que avanza la música. En este paso no se realiza ninguna acción, es una explicación hipótetica.</span>',
        },
        "girar el cilindro en sentido contrario (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "des": "2" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cambiar sentido del peine (solo para quienes están dentro de la caja)",
          "cont": '<span>Para validar que la música va en sentido contrario, deberán mover manualmente el cilindro. En este paso no se realiza ninguna acción, es una explicación hipótetica.</span>',
        },
        "aclopar todas las piezas (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "girar el cilindro en sentido contrario (solo para quienes están dentro de la caja)",
          "cont": '<span>Finalmente, deberán volver a acoplar las piezas. Utilizando el regulador para que marque el nuevo sentido del cilindro.</span>',
        },
        "aplicar todos los pasos (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "aclopar todas las piezas (solo para quienes están dentro de la caja)",
          "cont": '<span>Al aplicar todos los pasos, la música comienza a sonar haciendo un sonido extraño y poco musical, pero los personajes comienzan poco a poco a perder sus partes de madera.</span>',
        },
        "regresar arriba (solo para quienes están dentro de la caja)": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "aplicar todos los pasos (solo para quienes están dentro de la caja)",
          "cont": '<span>Al subir las escaleras, solo deberán esperar que tres personajes pasen, para que la maldición sea revertida. Pasados esos tres turnos, los personajes salen de la caja musical recuperando su tamaño habitual y sus varitas.</span>',
        },
        "maldición de la caja musical": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "rompemaldiciones", "name": "invalid", }, "place": "revertir la maldición",
          "cont": '<span>La caja musical se trata de la caja musical realizada por Luthier. Un antiguo mago que se dedicaba a la creación de varitas mágicas, pero que, al ver enfermar a su hija quiso hacer una caja musical donde ella pudiera vivir para siempre. Para poder hacer la caja musical, tuvo que tallar la madera en tamaño real. Sin embargo, su hija falleció antes de que pudiera terminar su creación y la caja se perdió con el tiempo.</span>',
        },
        "romper la maldición de la caja luthier": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "rompemaldiciones", "name": "invalid", }, "place": "maldición de la caja musical",
          "cont": '<span>Para romper la maldición de la caja de la caja de Luthier, se deberá volcar una lágrima de un padre de las personas atrapadas. Solicitar intervención, una vez que hayan regresado a Astorius o Briseida del sueño profundo.</span>',
        },
        "investigar envenenamiento de los invitados": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cuarta intervención",
          "cont": '<span>Al preguntar a Astorius Moody sobre las bebidas. El mismo responde que es imposible, porque se utilizaron más de 30 botellas diferentes, las cuales llegaron de diferentes proveedores y todas estaban cerradas.</span>',
        },
        "revelio potionis sobre la bebida de una copa": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "pociones": "10", "name": "invalid", }, "place": "investigar envenenamiento de los invitados",
          "cont": '<span>Al aplicar el hechizo revelio potionis sobre la bebida dentro de una copa, se encuentra presencia de veneno, pero en muy pequeñas cantidades. El hechizo revela que el veneno usado fue filtro de muertos en vida en pequeñas cantidades.</span>',
        },
        "revelio potionis sobre la bebida en una botella": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "pociones": "10", "name": "invalid", }, "place": "investigar envenenamiento de los invitados",
          "cont": '<span>Al aplicar el hechizo revelio potionis sobre la bebida, se revela que todas las bebidas alcoholicas, no estaban envenadas, sino que poseían el contenido que deberían haber tenido en un principio.</span>',
        },
        "posibilidad de envenenamiento de las copas": {
          "visible": { "attr": { "int": "4" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "investigar envenenamiento de los invitados",
          "cont": '<span>Si las bebidas no estaban envenenadas, entonces el veneno debía estar en las copas, sería una buena teoría, aunque para aquello deberán aplicarse hechizos alquímicos.</span>',
        },
        "preguntar a briseida si se encuentra bien": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "cuarta intervención",
          "cont": '<span>La mujer se encuentra horrorizada por lo que acaba de suceder y no sabe bien cómo explicar lo ocurrido. Sin embargo, cuando le preguntan si se encuentra bien, se lleva una mano al cuello, mencionando que sintió como si un fantasma la atravesara. Aunque ninguno de los invitados pareció sentir lo mismo.</span>',
        },
        "solución para los invitados que no lograron recuperarse": {
          "visible": { "attr": { "int": "3" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "solución para los invitados",
          "cont": '<span>Dado que las copas estaban envenenadas, la solución sería limpiar las mismas para poder volver a consumir líquidos sin envenenar a nadie en el proceso. Además, si se limpian las copas, con una bebida fuerte, pueden reponerse todas las personas que hayan despertado a medias.</span>',
        },
        "ofrecer hidromiel a los que personajes que no lograron recuperarse": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "copas limpias",
          "cont": '<span>Una vez limpias las copas, si se les ofrece hidromiel a los que no lograron recuperarse, podrán reponerse completamente. Todos ellos.</span>',
        },
      },

      "actions": {
        "cordivivus": {
          "leve": '<span>El personaje puede despertar, pero se encontrará somniolento, no podrá realizar acciones hasta que el hechizo no sea aplicado correctamente.</span>',
          "moderado": '<span>El personaje despierta del sueño profundo.</span>',
          "exitoso": '<span>El personaje despierta del sueño profundo.</span>',
          "critico": '<span>El personaje despierta del sueño profundo.</span>',
        },
        "reparifarge": {
          "leve": '<span>Si se aplica sobre la caja musical, no produce ningún efecto.</span>',
          "moderado": '<span>Si se aplica sobre la caja musical, no produce ningún efecto.</span>',
          "exitoso": '<span>Si se aplica sobre la caja musical, no produce ningún efecto.</span>',
          "critico": '<span>Si se aplica sobre la caja musical, no produce ningún efecto.</span>',
        },
        "finite": {
          "leve": '<span>Si se aplica sobre la caja musical, no produce ningún efecto.</span>',
          "moderado": '<span>Si se aplica sobre la caja musical, no produce ningún efecto.</span>',
          "exitoso": '<span>Si se aplica sobre la caja musical, no produce ningún efecto.</span>',
          "critico": '<span>Si se aplica sobre la caja musical, no produce ningún efecto.</span>',
        },
        "calor vitalis": {
          "leve": '<span>No es suficiente para producir un efecto.</span>',
          "moderado": '<span>Elimina el estado somniolento de un personaje.</span>',
          "exitoso": '<span>Elimina el estado somniolento de un personaje.</span>',
          "critico": '<span>Elimina el estado somniolento de un personaje.</span>',
        },
        "memoria lucida": {
          "leve": '<span>No es suficiente para producir un efecto.</span>',
          "moderado": '<span>Elimina el estado somniolento de un personaje.</span>',
          "exitoso": '<span>Elimina el estado somniolento de un personaje.</span>',
          "critico": '<span>Elimina el estado somniolento de un personaje.</span>',
        },
        "fac illum clamorem": {
          "leve": '<span>No es suficiente para producir un efecto.</span>',
          "moderado": '<span>Al aplicar sobre las copas de cristal, revela un vapor color azulado, revelando que el veneno no estaba en las bebidas, sino en las copas.<adding search="solución para los invitados" class="check-cards"></adding></span>',
          "exitoso": '<span>Al aplicar sobre las copas de cristal, revela un vapor color azulado, revelando que el veneno no estaba en las bebidas, sino en las copas.<adding search="solución para los invitados" class="check-cards"></adding></span>',
          "critico": '<span>Al aplicar sobre las copas de cristal, revela un vapor color azulado, revelando que el veneno no estaba en las bebidas, sino en las copas.<adding search="solución para los invitados" class="check-cards"></adding></span>',
        },
        "tergeo": {
          "leve": '<span>No es suficiente para producir un efecto.</span>',
          "moderado": '<span>Limpia todas las copas eliminando cualquier rastro de veneno restante.<adding search="copas limpias" class="check-cards"></adding></span>',
          "exitoso": '<span>Limpia todas las copas eliminando cualquier rastro de veneno restante.<adding search="copas limpias" class="check-cards"></adding></span>',
          "critico": '<span>Limpia todas las copas eliminando cualquier rastro de veneno restante.<adding search="copas limpias" class="check-cards"></adding></span>',
        },
        "engorgio": {
          "leve": '<span>Si se aplica sobre la caja musical, los personajes dentro de la misma sienten un temblor, pero no produce ningún efecto.</span>',
          "moderado": '<span>Si se aplica sobre la caja musical, los personajes dentro de la misma sienten un temblor, pero no produce ningún efecto.</span>',
          "exitoso": '<span>Si se aplica sobre la caja musical, los personajes dentro de la misma sienten un temblor, pero no produce ningún efecto.</span>',
          "critico": '<span>Si se aplica sobre la caja musical, los personajes dentro de la misma sienten un temblor, pero no produce ningún efecto.</span>',
        },
      },
    },
    // fin yule

    "la caceria del diricawl": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u9", "/u12", "/u136", "/u24", "/u120", "/u8", "/u110", "/u118", "/u55", "/u135", "/u127", "/u91"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "creatures": {
        "diricawl": {
		  "debilidad": ["mobilicorpus","levare"],
          "ataques": {
            "leve": 'No ataca, sin embargo, se queda mirando a sus atacantes.',
            "moderado": 'No ataca, sin embargo se escapa a la siguiente zona. En caso de que no haya zonas hacia arriba, irá a la zona de abajo.',
            "exitoso": 'No ataca, sin embargo se escapa a la zona de al lado, alejándose del grupo.',
            "critico": 'No ataca, sin embargo se escapa del grupo en una dirección incierta.',
          },

          "defensas": {
            "leve": 'Se ha sentido atacado y trata de huir a la zona de abajo o arriba. Adiciona +6 en defensa.',
            "moderado": 'Se ha sentido atacado y trata de huir a la zona de los costados. Adiciona +8 en defensa.',
            "exitoso": 'Se ha sentido atacado y trata de huir con una desaparición en una direccion incierta. Adiciona +10 en defensa.',
            "critico": 'Se ha sentido atacado y trata de huir con una desaparición en una direccion incierta. Adiciona +12 en defensa.',
          },
        },
      },

      "cards": [
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 16",
          "cont": '<span>Has encontrado al Diricawl, agrega al mismo como personaje no jugable y comprueba si puedes atraparlo (Hasta que el equipo actual no lo resuelva, la criatura no se moverá por acciones del resto).</span>',
        },

        // descripción de zonas
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 1",
          "cont": '<span>Has ingresado a la zona A1, el bosquecillo de robles y fresnos despojados de sus hojas se encuentran cubiertos de nieve y musgo. A sus pies las hojas verdes de helechos que se resisten a rendirse ante el frío otorgan un paisaje blanco y verde que solo puede notarse ante pequeñas luces que cuelgan de los árboles y permiten guiar el camino de los cazadores.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 2",
          "cont": '<span>Has ingresado a la zona B1, el bosquecillo de robles y fresnos despojados de sus hojas se encuentran cubiertos de nieve y musgo. A sus pies las hojas verdes de helechos que se resisten a rendirse ante el frío otorgan un paisaje blanco y verde que solo puede notarse ante pequeñas luces que cuelgan de los árboles y permiten guiar el camino de los cazadores.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 3",
          "cont": '<span>Has ingresado a la zona C1, el bosquecillo de robles y fresnos despojados de sus hojas se encuentran cubiertos de nieve y musgo. A sus pies las hojas verdes de helechos que se resisten a rendirse ante el frío otorgan un paisaje blanco y verde que solo puede notarse ante pequeñas luces que cuelgan de los árboles y permiten guiar el camino de los cazadores.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 4",
          "cont": '<span>Has ingresado a la zona D1, el bosquecillo de robles y fresnos despojados de sus hojas se encuentran cubiertos de nieve y musgo. A sus pies las hojas verdes de helechos que se resisten a rendirse ante el frío otorgan un paisaje blanco y verde que solo puede notarse ante pequeñas luces que cuelgan de los árboles y permiten guiar el camino de los cazadores.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 5",
          "cont": '<span>Has ingresado a la zona A2, los árboles del bosque comienzan a tomar tamaño y los fresnos se mezclan con las hayas que aún mantienen sus hojas cobrizas a pesar de la nieve y que parecen susurrar una canción cada vez que el viento las mueve.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 6",
          "cont": '<span>Has ingresado a la zona B2, los árboles del bosque comienzan a tomar tamaño y los fresnos se mezclan con las hayas que aún mantienen sus hojas cobrizas a pesar de la nieve y que parecen susurrar una canción cada vez que el viento las mueve.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 7",
          "cont": '<span>Has ingresado a la zona C2, los árboles del bosque comienzan a tomar tamaño y los fresnos se mezclan con las hayas que aún mantienen sus hojas cobrizas a pesar de la nieve y que parecen susurrar una canción cada vez que el viento las mueve.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 8",
          "cont": '<span>Has ingresado a la zona D2, los árboles del bosque comienzan a tomar tamaño y los fresnos se mezclan con las hayas que aún mantienen sus hojas cobrizas a pesar de la nieve y que parecen susurrar una canción cada vez que el viento las mueve.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 9",
          "cont": '<span>Has ingresado a la zona A3, el bosque de hayas deslumbra con sus hojas cobrizas, en esa zona donde solo esta dicho árbol, puede notarse que alguien ha encantado las hojas para que sean de cobre produciendo una canción de cuna en la zona, además de una imagen hermosa.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 10",
          "cont": '<span>Has ingresado a la zona B3, el bosque de hayas deslumbra con sus hojas cobrizas, en esa zona donde solo esta dicho árbol, puede notarse que alguien ha encantado las hojas para que sean de cobre produciendo una canción de cuna en la zona, además de una imagen hermosa.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 11",
          "cont": '<span>Has ingresado a la zona C3, el bosque de hayas deslumbra con sus hojas cobrizas, en esa zona donde solo esta dicho árbol, puede notarse que alguien ha encantado las hojas para que sean de cobre produciendo una canción de cuna en la zona, además de una imagen hermosa.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 12",
          "cont": '<span>Has ingresado a la zona D3, el bosque de hayas deslumbra con sus hojas cobrizas, en esa zona donde solo esta dicho árbol, puede notarse que alguien ha encantado las hojas para que sean de cobre produciendo una canción de cuna en la zona, además de una imagen hermosa.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 13",
          "cont": '<span>Has ingresado a la zona A4, mientras las hayas se desvanecen, los fresnos vuelven a hacerse notar, al igual que unos alisos en cuyas ramas y a los pies del árbol pueden encontrarse conos leñosos. Aunque alguien se ha encarcado de pintar la mayoría de los que se encuentra en el suelo con colores navideños.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 14",
          "cont": '<span>Has ingresado a la zona B4, mientras las hayas se desvanecen, los fresnos vuelven a hacerse notar, al igual que unos alisos en cuyas ramas y a los pies del árbol pueden encontrarse conos leñosos. Aunque alguien se ha encarcado de pintar la mayoría de los que se encuentra en el suelo con colores navideños.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 15",
          "cont": '<span>Has ingresado a la zona C4, mientras las hayas se desvanecen, los fresnos vuelven a hacerse notar, al igual que unos alisos en cuyas ramas y a los pies del árbol pueden encontrarse conos leñosos. Aunque alguien se ha encarcado de pintar la mayoría de los que se encuentra en el suelo con colores navideños.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 16",
          "cont": '<span>Has ingresado a la zona D4, mientras las hayas se desvanecen, los fresnos vuelven a hacerse notar, al igual que unos alisos en cuyas ramas y a los pies del árbol pueden encontrarse conos leñosos. Aunque alguien se ha encarcado de pintar la mayoría de los que se encuentra en el suelo con colores navideños.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 17",
          "cont": '<span>Has ingresado a la zona A5, al final del bosque pueden encontrase abedules, con su corteza blanca casi imitando la nieve, las guirlandas de luces crecen por sus troncos hasta unas cintas de colores que advierten que más allá de sus límites no encontrarán a la criatura.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 18",
          "cont": '<span>Has ingresado a la zona B5, al final del bosque pueden encontrase abedules, con su corteza blanca casi imitando la nieve, las guirlandas de luces crecen por sus troncos hasta unas cintas de colores que advierten que más allá de sus límites no encontrarán a la criatura.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 19",
          "cont": '<span>Has ingresado a la zona C5, al final del bosque pueden encontrase abedules, con su corteza blanca casi imitando la nieve, las guirlandas de luces crecen por sus troncos hasta unas cintas de colores que advierten que más allá de sus límites no encontrarán a la criatura.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 20",
          "cont": '<span>Has ingresado a la zona D5, al final del bosque pueden encontrase abedules, con su corteza blanca casi imitando la nieve, las guirlandas de luces crecen por sus troncos hasta unas cintas de colores que advierten que más allá de sus límites no encontrarán a la criatura.</span>',
        },

        // trampas
        {
          "visible": { "attr": { "int": "11" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 9",
          "cont": '<span>Oh no, te has cruzado un Lazo del Diablo, agrega el mismo como PNJ, posee 80PV, 8 de Fuerza y 6 de Constitución.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 6",
          "cont": '<span>Oh no, te has cruzado un Lazo del Diablo, agrega el mismo como PNJ, posee 80PV, 8 de Fuerza y 6 de Constitución.</span>',
        },
        {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 7",
          "cont": '<span>Oh no, te has cruzado un Lazo del Diablo, agrega el mismo como PNJ, posee 80PV, 8 de Fuerza y 6 de Constitución.</span>',
        },
        {
          "visible": { "attr": { "int": "11" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 16",
          "cont": '<span>Oh no, te has cruzado un Lazo del Diablo, agrega el mismo como PNJ, posee 80PV, 8 de Fuerza y 6 de Constitución.</span>',
        }
      ],

      "searchs": {
        "dejar comida": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Has dejado comida en esa zona, el Diricawl se ha acercado.</span>',
        },
		"diricawl por hechizo": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "diricawl encontrado",
          "cont": '<span>Has encontrado al Diricawl, agrega al mismo como personaje no jugable y comprueba si puedes atraparlo (Hasta que el equipo actual no lo resuelva, la criatura no se moverá por acciones del resto).</span>',
        },
        // zona A
        "iniciar zona a1": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><adding search="zona 1" class="check-cards"></adding></span>',
        },
        "regresar de zona a1 al inicio": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 1",
          "cont": '<span><adding search="partida" class="check-cards"></adding></span>',
        },
        "ir de zona a1 a zona a2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 1",
          "cont": '<span><adding search="zona 5" class="check-cards"></adding></span>',
        },
        "ir de zona a2 a zona a1": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 5",
          "cont": '<span><adding search="zona 1" class="check-cards"></adding></span>',
        },
        "ir de zona a2 a zona a3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 5",
          "cont": '<span><adding search="zona 9" class="check-cards"></adding></span>',
        },
        "ir de zona a3 a zona a2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 9",
          "cont": '<span><adding search="zona 5" class="check-cards"></adding></span>',
        },
        "ir de zona a3 a zona a4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 9",
          "cont": '<span><adding search="zona 13" class="check-cards"></adding></span>',
        },
        "ir de zona a4 a zona a3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 13",
          "cont": '<span><adding search="zona 9" class="check-cards"></adding></span>',
        },
        "ir de zona a4 a zona a5": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 13",
          "cont": '<span><adding search="zona 17" class="check-cards"></adding></span>',
        },
        "ir de zona a5 a zona a4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 17",
          "cont": '<span><adding search="zona 13" class="check-cards"></adding></span>',
        },

        // zona B
        "iniciar zona b1": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><adding search="zona 2" class="check-cards"></adding></span>',
        },
        "regresar de zona b1 al inicio": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 2",
          "cont": '<span><adding search="partida" class="check-cards"></adding></span>',
        },
        "ir de zona b1 a zona b2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 2",
          "cont": '<span><adding search="zona 6" class="check-cards"></adding></span>',
        },
        "ir de zona b2 a zona b1": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 6",
          "cont": '<span><adding search="zona 2" class="check-cards"></adding></span>',
        },
        "ir de zona b2 a zona b3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 6",
          "cont": '<span><adding search="zona 10" class="check-cards"></adding></span>',
        },
        "ir de zona b3 a zona b2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 10",
          "cont": '<span><adding search="zona 6" class="check-cards"></adding></span>',
        },
        "ir de zona b3 a zona b4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 10",
          "cont": '<span><adding search="zona 14" class="check-cards"></adding></span>',
        },
        "ir de zona b4 a zona b3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 14",
          "cont": '<span><adding search="zona 10" class="check-cards"></adding></span>',
        },
        "ir de zona b4 a zona b5": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 14",
          "cont": '<span><adding search="zona 18" class="check-cards"></adding></span>',
        },
        "ir de zona b5 a zona b4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 18",
          "cont": '<span><adding search="zona 14" class="check-cards"></adding></span>',
        },

        // zona C
        "iniciar zona c1": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><adding search="zona 3" class="check-cards"></adding></span>',
        },
        "regresar de zona c1 al inicio": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 3",
          "cont": '<span><adding search="partida" class="check-cards"></adding></span>',
        },
        "ir de zona c1 a zona c2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 3",
          "cont": '<span><adding search="zona 7" class="check-cards"></adding></span>',
        },
        "ir de zona c2 a zona c1": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 7",
          "cont": '<span><adding search="zona 3" class="check-cards"></adding></span>',
        },
        "ir de zona c2 a zona c3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 7",
          "cont": '<span><adding search="zona 11" class="check-cards"></adding></span>',
        },
        "ir de zona c3 a zona c2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 11",
          "cont": '<span><adding search="zona 7" class="check-cards"></adding></span>',
        },
        "ir de zona c3 a zona c4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 11",
          "cont": '<span><adding search="zona 15" class="check-cards"></adding></span>',
        },
        "ir de zona c4 a zona c3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 15",
          "cont": '<span><adding search="zona 11" class="check-cards"></adding></span>',
        },
        "ir de zona c4 a zona c5": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 15",
          "cont": '<span><adding search="zona 19" class="check-cards"></adding></span>',
        },
        "ir de zona c5 a zona c4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 19",
          "cont": '<span><adding search="zona 15" class="check-cards"></adding></span>',
        },

        // zona D
        "iniciar zona d1": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span><adding search="zona 4" class="check-cards"></adding></span>',
        },
        "regresar de zona d1 al inicio": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 4",
          "cont": '<span><adding search="partida" class="check-cards"></adding></span>',
        },
        "ir de zona d1 a zona d2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 4",
          "cont": '<span><adding search="zona 8" class="check-cards"></adding></span>',
        },
        "ir de zona d2 a zona d1": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 8",
          "cont": '<span><adding search="zona 4" class="check-cards"></adding></span>',
        },
        "ir de zona d2 a zona d3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 8",
          "cont": '<span><adding search="zona 12" class="check-cards"></adding></span>',
        },
        "ir de zona d3 a zona d2": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 12",
          "cont": '<span><adding search="zona 8" class="check-cards"></adding></span>',
        },
        "ir de zona d3 a zona d4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 12",
          "cont": '<span><adding search="zona 16" class="check-cards"></adding></span>',
        },
        "ir de zona d4 a zona d3": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 16",
          "cont": '<span><adding search="zona 12" class="check-cards"></adding></span>',
        },
        "ir de zona d4 a zona d5": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 16",
          "cont": '<span><adding search="zona 20" class="check-cards"></adding></span>',
        },
        "ir de zona d5 a zona d4": {
          "visible": { "attr": { "int": "1" }, "know": { "val": "min" }, "job": "invalid", "name": "invalid", }, "place": "zona 20",
          "cont": '<span><adding search="zona 16" class="check-cards"></adding></span>',
        },
      },

      "actions": {
        "vocare sowuli": {
          "leve": '<span>Aleja al Diricawl una casilla.</span>',
          "moderado": '<span>Aleja al Diricawl una casilla.</span>',
          "exitoso": '<span>Aleja al Diricawl una casilla.</span>',
          "critico": '<span>Aleja al Diricawl una casilla.</span>',
        },
        "lumos": {
          "leve": '<span></span>',
          "moderado": '<span></span>',
          "exitoso": '<span>Aleja al Diricawl una casilla.</span>',
          "critico": '<span>Aleja al Diricawl una casilla.</span>',
        },
        "lumos maxima": {
          "leve": '<span>Aleja al Diricawl una casilla.</span>',
          "moderado": '<span>Aleja al Diricawl una casilla.</span>',
          "exitoso": '<span>Aleja al Diricawl una casilla.</span>',
          "critico": '<span>Aleja al Diricawl una casilla.</span>',
        },
        "lumos solem": {
          "leve": '<span>Aleja al Diricawl una casilla.</span>',
          "moderado": '<span>Aleja al Diricawl una casilla.</span>',
          "exitoso": '<span>Aleja al Diricawl una casilla.</span>',
          "critico": '<span>Aleja al Diricawl una casilla.</span>',
        },

        "concentus incantatus": {
          "leve": '<span>No es suficiente para atraer al Diricawl.</span>',
          "moderado": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "exitoso": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "critico": '<span>El diricawl aparece en el lugar donde se encuentre el personaje.<adding search="diricawl encontrado" class="check-cards"></adding></span>',
        },

        "harmonia universalis": {
          "leve": '<span>No es suficiente para atraer al Diricawl.</span>',
          "moderado": '<span>No es suficiente para atraer al Diricawl.</span>',
          "exitoso": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "critico": '<span>El diricawl aparece en el lugar donde se encuentre el personaje.<adding search="diricawl encontrado" class="check-cards"></adding></span>',
        },

        "melodia solaminis": {
          "leve": '<span>No es suficiente para atraer al Diricawl.</span>',
          "moderado": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "exitoso": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "critico": '<span>El diricawl aparece en el lugar donde se encuentre el personaje.<adding search="diricawl encontrado" class="check-cards"></adding></span>',
        },

        "tectumque": {
          "leve": '<span>No es suficiente para atraer al Diricawl.</span>',
          "moderado": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "exitoso": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "critico": '<span>El diricawl aparece en el lugar donde se encuentre el personaje.<adding search="diricawl encontrado" class="check-cards"></adding></span>',
        },

        "resonare numeris": {
          "leve": '<span>No es suficiente para atraer al Diricawl.</span>',
          "moderado": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "exitoso": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "critico": '<span>El diricawl aparece en el lugar donde se encuentre el personaje.<adding search="diricawl encontrado" class="check-cards"></adding></span>',
        },

        "aguamenti": {
          "leve": '<span>No es suficiente para atraer al Diricawl.</span>',
          "moderado": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "exitoso": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "critico": '<span>El diricawl aparece en el lugar donde se encuentre el personaje.<adding search="diricawl encontrado" class="check-cards"></adding></span>',
        },

        "spongify": {
          "leve": '<span>No es suficiente para atraer al Diricawl.</span>',
          "moderado": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "exitoso": '<span>Atrae al Diricawl una casilla hacia ti.</span>',
          "critico": '<span>El diricawl aparece en el lugar donde se encuentre el personaje.<adding search="diricawl encontrado" class="check-cards"></adding></span>',
        },

        "diffindo": {
          "leve": '<span>No es suficiente para brindar información adicional.</span>',
          "moderado": '<span>No es suficiente para brindar información adicional.</span>',
          "exitoso": '<span>Libera a un personaje atrapado por el lazo del diablo.</span>',
          "critico": '<span>Libera a un personaje atrapado por el lazo del diablo.</span>',
        },

        "lacarnum inflamarae": {
          "leve": '<span>Los personajes tendrán 15 turnos para apagar el fuego de cada area. Por cada personaje que postee las áreas que limitan con un área prendida fuego, también se prenden fuego.</span>',
          "moderado": '<span>Los personajes tendrán 12 turnos para apagar el fuego de cada area. Por cada personaje que postee las áreas que limitan con un área prendida fuego, también se prenden fuego.</span>',
          "exitoso": '<span>Los personajes tendrán 8 turnos para apagar el fuego de cada area. Por cada personaje que postee las áreas que limitan con un área prendida fuego, también se prenden fuego.</span>',
          "critico": '<span>Los personajes tendrán 5 turnos para apagar el fuego de cada area. Por cada personaje que postee las áreas que limitan con un área prendida fuego, también se prenden fuego.</span>',
        },

        "pestis incendium": {
          "leve": '<span>El fuego se propaga, los personajes del mismo grupo deberán lanzar dado de salud. Por cada turno que pasa todas las áreas que esten a dos espacios se prenden fuego.</span>',
          "moderado": '<span>El fuego se propaga, los personajes del mismo grupo deberán lanzar dado de salud. Por cada turno que pasa todas las áreas que esten a dos espacios se prenden fuego.</span>',
          "exitoso": '<span>El fuego se propaga, los personajes del mismo grupo deberán lanzar dado de salud. Por cada turno que pasa todas las áreas que esten a dos espacios se prenden fuego.</span>',
          "critico": '<span>El fuego se propaga, los personajes del mismo grupo deberán lanzar dado de salud. Por cada turno que pasa todas las áreas que esten a dos espacios se prenden fuego.</span>',
        },

        "vocare kanu": {
          "leve": '<span>El fuego se propaga, los personajes del mismo grupo deberán lanzar dado de salud. Por cada turno que pasa todas las áreas que esten a dos espacios se prenden fuego.</span>',
          "moderado": '<span>El fuego se propaga, los personajes del mismo grupo deberán lanzar dado de salud. Por cada turno que pasa todas las áreas que esten a dos espacios se prenden fuego.</span>',
          "exitoso": '<span>El fuego se propaga, los personajes del mismo grupo deberán lanzar dado de salud. Por cada turno que pasa todas las áreas que esten a dos espacios se prenden fuego.</span>',
          "critico": '<span>El fuego se propaga, los personajes del mismo grupo deberán lanzar dado de salud. Por cada turno que pasa todas las áreas que esten a dos espacios se prenden fuego.</span>',
        },
        "arresto momentum": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Relentiza el movimiento del Diricawl, haciendo que se quede en la zona actual, si se mueve en el ataque.</span>',
          "critico": '<span>Relentiza el movimiento del Diricawl, haciendo que se quede en la zona actual, si se mueve en el ataque.</span>',
        },
        "confundus": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Relentiza el movimiento del Diricawl, haciendo que se quede en la zona actual, si se mueve en el ataque.</span>',
          "critico": '<span>Relentiza el movimiento del Diricawl, haciendo que se quede en la zona actual, si se mueve en el ataque.</span>',
        },
        "emancipare": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Libera a un personaje atrapado por el lazo del diablo.</span>',
          "critico": '<span>Libera a un personaje atrapado por el lazo del diablo.</span>',
        },
        "expulso": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Libera al personaje de las ataduras del lazo del diablo, si se utiliza con magia no verbal.</span>',
          "critico": '<span>Libera al personaje de las ataduras del lazo del diablo, si se utiliza con magia no verbal.</span>',
        },
        "golpe de impulso": {
          "leve": '<span>No es un buen ataque, el lazo del diablo aprieta con más fuerza restando 5 PV al personaje.</span>',
          "moderado": '<span>No es un buen ataque, el lazo del diablo aprieta con más fuerza restando 10 PV al personaje.</span>',
          "exitoso": '<span>No es un buen ataque, el lazo del diablo aprieta con más fuerza restando 15 PV al personaje.</span>',
          "critico": '<span>No es un buen ataque, el lazo del diablo aprieta con más fuerza restando 30 PV al personaje.</span>',
        },
        "golpe encantado": {
          "leve": '<span>No es un buen ataque, el lazo del diablo aprieta con más fuerza restando 5 PV al personaje.</span>',
          "moderado": '<span>No es un buen ataque, el lazo del diablo aprieta con más fuerza restando 10 PV al personaje.</span>',
          "exitoso": '<span>No es un buen ataque, el lazo del diablo aprieta con más fuerza restando 15 PV al personaje.</span>',
          "critico": '<span>No es un buen ataque, el lazo del diablo aprieta con más fuerza restando 30 PV al personaje.</span>',
        },
        "anima vincula": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
          "critico": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
        },
        "memoriflorus": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
          "critico": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
        },
        "lux exemplari": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
          "critico": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
        },
        "nervus flemere": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
          "critico": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
        },
        "quieta": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
          "critico": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
        },
        "vox imperium": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
          "critico": '<span>Logra transmitir calma a un compañero atrapado por el lazo del diablo, liberando al mismo.</span>',
        },
        "sensus mitigo": {
          "leve": '<span>No es suficiente para revelar información.</span>',
          "moderado": '<span>No es suficiente para revelar información.</span>',
          "exitoso": '<span>Logra serenar al Diricawl, permitiendo su captura.</span>',
          "critico": '<span>Logra serenar al Diricawl, permitiendo su captura.</span>',
        },
      },
    },
    // fin baile

    "quidditch": {
      "description": "",
      "image": "", "requisitos": [],
      "users": ["/u118", "/u24", "/u34", "/u63", "/u119", "/u38", "/u12"],
      "dependency": [],
      "type": "quidditch", "closed": false, "link": "", "tagged": ["quidditch"],

      "cards": [
      ],

      "searchs": {
        "resultado buscadores": {
          "visible": { "attr": { "val": "min" }, "know": { "vuelo": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Has lanzado dado para ver tu resultado de Buscador:</span>',
        },

        "resultado cazadores": {
          "visible": { "attr": { "val": "min" }, "know": { "vuelo": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Has lanzado dado para ver tu resultado de Cazador:</span>',
        },

        "resultado golpeadores": {
          "visible": { "attr": { "val": "min" }, "know": { "vuelo": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Has lanzado dado para ver tu resultado de Golpeador:</span>',
        },

        "resultado guardianes": {
          "visible": { "attr": { "val": "min" }, "know": { "vuelo": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Has lanzado dado para ver tu resultado de Guardián:</span>',
        },

        "resultado capitanes": {
          "visible": { "attr": { "val": "min" }, "know": { "liderazgo": "5" }, "job": "invalid", "name": "invalid", }, "place": "",
          "cont": '<span>Has lanzado dado para ver tu resultado adicional de Capitán:</span>',
        },
      },

      "actions": {
        "resultado buscadores": {
          "leve": '<span>Atrapa la snitch al finalizar el <strong>4.to cuarto</strong>. Valor de desempate <quid exp="seeker"></quid>.</span>',
          "moderado": '<span>Atrapa la snitch al finalizar el <strong>4.to cuarto</strong>. Valor de desempate <quid exp="seeker"></quid>.</span>',
          "exitoso": '<span>Atrapa la snitch al finalizar el <strong>3.er cuarto</strong>. Valor de desempate <quid exp="seeker"></quid>.</span>',
          "critico": '<span>Atrapa la snitch al finalizar el <strong>2.do cuarto</strong>. Valor de desempate <quid exp="seeker"></quid>.</span>',
        },

        "resultado cazadores": {
          "leve": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br></span>',
          "moderado": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> vez a los aros rivales.<br></span>',
          "exitoso": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br></span>',
          "critico": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> El cazador lanza <quid exp="chaser"></quid> veces a los aros rivales.<br></span>',
        },

        "resultado golpeadores": {
          "leve": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> No logra distraer jugadores.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando 1 punto del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> No logra distraer jugadores.<br></span>',
          "moderado": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> No logra distraer jugadores.<br></span>',
          "exitoso": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Derriba un jugador.<br></span>',
          "critico": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Derriba un jugador y Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 1 cuarto si es buscador.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Distrae a un jugador restando <quid exp="beater"></quid> puntos del cuarto o adicionando 2 cuartos si es buscador.<br></span>',
        },

        "resultado guardianes": {
          "leve": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rival.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rival.<br></span>',
          "moderado": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rival.<br></span>',
          "exitoso": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br></span>',
          "critico": '<span><strong>1.er cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>2.do cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>3.er Tercer cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br><br><strong>4.to cuarto:</strong><br><i class="fa-solid fa-dash" aria-hidden="true"></i> Detiene <quid exp="keeper"></quid> balones rivales.<br></span>',
        },

        "resultado capitanes": {
          "leve": '<span><strong>Comodín:</strong> Reduce las penalidades de los golpeadores en <quid exp="cap"></quid> en un cuarto a elección.</span>',
          "moderado": '<span><strong>Comodín:</strong> Reduce las penalidades de los golpeadores en <quid exp="cap"></quid> en un cuarto a elección.</span>',
          "exitoso": '<span><strong>Comodín:</strong> Salva a un jugador de la Bludger y reduce las penalidades de los golpeadores en <quid exp="cap"></quid> en un cuarto a elección.</span>',
          "critico": '<span><strong>Comodín:</strong> Salva a un jugador de la Bludger y reduce las penalidades de los golpeadores en <quid exp="cap"></quid> en dos cuartos a elección.</span>',
        },
      },
    },
    // fin quidditch narrativo

    "enfrenta tus miedos": {
      "description": "Sin descripcion.",
      "image": "https://2img.net/i.imgur.com/Bm8BRJM.png", "requisitos": [],
      "users": ["/u110", "/u34", "/u38", "/u63", "/u24", "/u127"],
      "dependency": [],
      "type": "clase", "closed": true, "link": "", "tagged": ["clase"],

      "cards": [],

      "searchs": {
        "revelar boggart en el armario": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "profesor", "name": "invalid", }, "place": "",
          "cont": '<span>Revela por personaje el boggar que visualizan.</span>',
        },

        "boggart raven": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "raven", }, "place": "revelar boggart en el armario",
          "cont": '<span>El armario tambalea y cuando el boggart sale de la puerta, lo hace en forma de ola gigante. El agua es verdosa oscura, como las partes más oscuras del océano en un día de tormenta.</span>',
        },

        "boggart iarlaith": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "iarlaith", }, "place": "revelar boggart en el armario",
          "cont": '<span>Del armario sale un familiar de Iarlaith, puede elegir cual. Tras un momento de confusión, la pira se arma a los pies del mismo: los leños prendidos, las brasas ardientes y, finalmente, el fuego. Los gritos comienzan segundos después.</span>',
        },

        "boggart findlay": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "findlay", }, "place": "revelar boggart en el armario",
          "cont": '<span>El armario tambalea y cuando el boggart sale de la puerta nada aparece, hasta que desde el techo parece que hay un cuerpo cayendo. Tiene el uniforme militar de la fuerza área muggle. Cae lentamente, pero todos pueden ver que la caída será letal.</span>',
        },

        "boggart minerva": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "minerva", }, "place": "revelar boggart en el armario",
          "cont": '<span>El armario tambalea y cuando el boggart sale de la puerta lo hace en forma de una ola de varitas rotas, apilándose en el suelo de una clase mientras se escucha el sonido de las varitas que se rompen a medida que caen en el suelo.</span>',
        },

        "boggart damien": {
          "visible": { "attr": { "val": "min" }, "know": { "val": "min" }, "job": "invalid", "name": "damien", }, "place": "revelar boggart en el armario",
          "cont": '<span>La figura de Morgana sale por la puerta, su espalda derecha, sus manos cruzadas al frente. Esta sangrando, pero no parece importarle. Lanza una mirada al joven midiendo el mismo antes de murmurar: "qué decepción".</span>',
        },
      },

      "actions": {},
    },
    // fin enfrenta tus miedos

    "más allá de la defensa": {
      "description": "Sin descripcion.",
      "image": "https://2img.net/i.imgur.com/Bm8BRJM.png", "requisitos": [],
      "users": ["/u110", "/u119", "/u12", "/u118", "/u120", "/u124"],
      "dependency": [],
      "type": "clase", "closed": true, "link": "", "tagged": ["clase"],

      "cards": [],
      "searchs": {},

      "actions": {
        "incarcerous": {
          "leve": '<span></span>',
          "moderado": '<span></span>',
          "exitoso": '<span>La llave logra ser capturada exitosamente.</span>',
          "critico": '<span>La llave logra ser capturada exitosamente.</span>',
        },
        "alohomora": {
          "leve": '<span>Al pronunciar el hechizo, se revela una pequeña medalla metálica en forma de gragea en cuyo frente se puede leer «Rompemaldiciones Junior».</span>',
          "moderado": '<span>Al pronunciar el hechizo, se revela una pequeña medalla metálica en forma de gragea en cuyo frente se puede leer «Rompemaldiciones Junior».</span>',
          "exitoso": '<span>Al pronunciar el hechizo, se revela una pequeña medalla metálica en forma de gragea en cuyo frente se puede leer «Rompemaldiciones Junior».</span>',
          "critico": '<span>Al pronunciar el hechizo, se revela una pequeña medalla metálica en forma de gragea en cuyo frente se puede leer «Rompemaldiciones Junior».</span>',
        },
      },
    },
    // fin más allá de la defensa

    "grabado de runas": {
      "description": "Sin descripcion.",
      "image": "https://2img.net/i.imgur.com/Bm8BRJM.png", "requisitos": [],
      "users": ["/u110", "/u119", "/u12", "/u118", "/u120", "/u124"],
      "dependency": [],
      "type": "clase", "closed": true, "link": "", "tagged": ["clase"],

      "cards": [],
      "searchs": {},

      "actions": {
        "identificar runa": {
          "leve": '<span>El personaje deberá leer el libro para saber su nombre y significado.</span>',
          "moderado": '<span>El personaje podrá saber el nombre, pero necesitará del libro para saber su significado.</span>',
          "exitoso": '<span>El personaje podrá saber el nombre y su significado sin necesidad de leer el libro.</span>',
          "critico": '<span>El personaje podrá saber el nombre y su significado sin necesidad de leer el libro.</span>',
        },
                        
        "incísio fúndito": {
          "leve": '<span>El personaje deberá volver a intentar el grabado.</span>',
          "moderado": '<span>El grabado es moderado, el personaje puede volver a intentarlo o dejarlo de esa manera.</span>',
          "exitoso": '<span>El grabado es preciso, el personaje no debe volver a intentar. Se escuchá la felicitación del profesor Diggory que brinda 10 puntos a la correspondiente casa.</span>',
          "critico": '<span>El grabado es preciso, el personaje no debe volver a intentar. Se escuchá la felicitación del profesor Diggory que brinda 10 puntos a la correspondiente casa.</span>',
        },
                        
        "abolitio signi": {
          "leve": '<span>El personaje deberá volver a intentar anular los efectos.</span>',
          "moderado": '<span>El personaje lo ha logrado, puede intentar el grabado nuevamente.</span>',
          "exitoso": '<span>El personaje lo ha logrado, puede intentar el grabado nuevamente.</span>',
          "critico": '<span>El personaje lo ha logrado, puede intentar el grabado nuevamente.</span>',
        },
                        
        "deletio runicum": {
          "leve": '<span>El personaje deberá volver a intentar eliminar la runa.</span>',
          "moderado": '<span>El personaje lo ha logrado, puede intentar el grabado nuevamente. Gana 5 puntos para su casa por lograr la eliminación completa.</span>',
          "exitoso": '<span>El personaje lo ha logrado, puede intentar el grabado nuevamente. Gana 10 puntos para su casa por lograr la eliminación completa.</span>',
          "critico": '<span>El personaje lo ha logrado, puede intentar el grabado nuevamente. Gana 15 puntos para su casa por lograr la eliminación completa.</span>',
        },
      },
    },
    // fin grabado de runas
  };

  function getMission(mission) {
    return missions[mission] || null;
  }

  function getAllMissions() {
    return Object.keys(missions);
  }

  function getClosedMissionByTag(tag) {
    let closed = 0; let total = 0;
    for (const id of getAllMissions()) {
      const m = getMission(id);
      if (m.tagged.includes(tag)) {
        if (m.closed) { closed++; }
        total++;
      }
    }

    return { 'closed': closed, 'total': total };
  }

  return {
    getMission,
    getAllMissions,
    getClosedMissionByTag,
  };
})();
