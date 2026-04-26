const DBModule = (function () {
    const noAdd = ["Black Wave", "Wolfsbane", "Asphodel", "Belladonna", "Gillyweed", "Dittany", "Valerian", "The Familiars"];

    const forums = [
        { name: "escocia", path: "/f15-escocia" },
        { name: "hogwarts", path: "/f19-hogwarts" },
        { name: "hogsmeade", path: "/f22-hogsmeade" },
        { name: "gales", path: "/f31-gales" },
        { name: "reserva natural de flint", path: "/f32-reserva-natural-de-flint" },
        { name: "inglaterra", path: "/f14-inglaterra" },
        { name: "callejón diagon", path: "/f21-callejon-diagon" },
        { name: "ministerio de magia", path: "/f20-ministerio-de-magia" },
        { name: "museo de mirabilia", path: "/f39-museo-de-mirabilia" },
        { name: "valle de godric", path: "/f24-valle-de-godric" },
        { name: "irlanda", path: "/f16-irlanda" },
        { name: "san mungo", path: "/f23-san-mungo" },
        { name: "irlanda del norte", path: "/f17-irlanda-del-norte" },
        { name: "biblioteca hollowshade castle", path: "/f33-biblioteca-hollowshade-castle" },
        { name: "resto del mundo", path: "/f18-resto-del-mundo" },
        { name: "el pensadero", path: "/f7-el-pensadero" },
        { name: "club de duelos", path: "/f37-club-de-duelos" },
        { name: "prácticas del sistema", path: "/f35-practicas-del-sistema" }
    ];

    const CACHE_KEY = 'blackwave_db_cache_v4';
    const INDEX_KEY = 'blackwave_db_current_index';
    const CACHE_DURATION = 15 * 60 * 1000;

    const hardcodedTopics = {};
    const hardcodedDices = [];

    let database = {
        topics: {},
        dices: [...hardcodedDices]
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    /**
     * Helper to normalize various date formats into dd/mm/aaaa
     * Based on cronologia.js logic
     */
    function normalizeDate(text) {
        if (!text) return "";
        let t = text.trim();
        const meses = {
            "ene": "01", "feb": "02", "mar": "03", "abr": "04", "may": "05", "jun": "06",
            "jul": "07", "ago": "08", "sep": "09", "oct": "10", "nov": "11", "dic": "12",
            "enero": "01", "febrero": "02", "marzo": "03", "abril": "04", "mayo": "05", "junio": "06",
            "julio": "07", "agosto": "08", "septiembre": "09", "octubre": "10", "noviembre": "11", "diciembre": "12"
        };

        let d, m, a;

        // Formato [AAAA/MM/DD]
        let match = t.match(/\[(\d{4})\/(\d{2})\/(\d{2})\]/);
        if (match) return `${match[3]}/${match[2]}/${match[1]}`;

        // Formato: Miér 04 Jun 2025...
        match = t.match(/^[a-záéí]{3,}\s+(\d{2})\s+([a-záéí]{3,})\s+(\d{4})/i);
        if (match) {
            d = match[1].padStart(2, '0');
            m = meses[match[2].toLowerCase().substring(0, 3)];
            a = match[3];
            return (d && m && a) ? `${d}/${m}/${a}` : t;
        }

        // Formato: Sábado 26 Julio 1952
        match = t.match(/(\d{1,2})\s+([a-záéíóúñ]+)\s+(\d{4})/i);
        if (match) {
            d = match[1].padStart(2, '0');
            m = meses[match[2].toLowerCase()];
            a = match[3];
            return (d && m && a) ? `${d}/${m}/${a}` : t;
        }

        // Formato: 3 de Octubre
        match = t.match(/^(\d{1,2})\s+de\s+([a-z]+)$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2]];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 1952/09/07 → aaaa/mm/dd
        match = t.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
        if (match) {
            anio = match[1];
            mes = match[2].padStart(2, '0');
            dia = match[3].padStart(2, '0');
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: Octubre 3
        match = t.match(/^([a-z]+)\s+(\d{1,2})$/i);
        if (match) {
            mes = meses[match[1]];
            dia = match[2].padStart(2, '0');
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: Oct 3
        match = t.match(/^([a-z]{3})\s+(\d{1,2})$/i);
        if (match) {
            mes = meses[match[1]];
            dia = match[2].padStart(2, '0');
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 3.octubre.1952
        match = t.match(/^(\d{1,2})\.([a-z]+)\.(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2]];
            anio = match[3];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 3/10/1952 o 03/10/52
        match = t.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = match[2].padStart(2, '0');
            anio = match[3].length === 2 ? `19${match[3]}` : match[3];
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: 20 de Septiembre 1952
        match = t.match(/^(\d{1,2})\s+de\s+([a-z]+)\s+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2]];
            anio = match[3];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: Octubre, 1952 → 01/10/1952
        match = t.match(/^([a-z]+),?\s+(\d{4})$/i);
        if (match) {
            dia = '01';
            mes = meses[match[1]];
            anio = match[2];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 5 Septiembre 1952
        match = t.match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2]];
            anio = match[3];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 20 de septiembre de 1952
        match = t.match(/^(\d{1,2})\s+de\s+([a-z]+)\s+de\s+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2]];
            anio = match[3];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 03.09.52
        match = t.match(/^(\d{1,2})\.(\d{1,2})\.(\d{2})$/);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = match[2].padStart(2, '0');
            anio = `19${match[3]}`;
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: 20/09 (sin año, se asume 1952)
        match = t.match(/^(\d{1,2})[\/\-](\d{1,2})$/);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = match[2].padStart(2, '0');
            anio = '1952';
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: Jue 19 Jun 2025
        match = t.match(/^\w{3}\s+(\d{1,2})\s+([a-z]{3})\s+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2]];
            anio = match[3];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: Hoy a las hh:mm
        if (t.startsWith('hoy')) {
            const today = new Date();
            dia = String(today.getDate()).padStart(2, '0');
            mes = String(today.getMonth() + 1).padStart(2, '0');
            anio = today.getFullYear();
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: Ayer a las hh:mm
        if (t.startsWith('ayer')) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            dia = String(yesterday.getDate()).padStart(2, '0');
            mes = String(yesterday.getMonth() + 1).padStart(2, '0');
            anio = yesterday.getFullYear();
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: Lun 16 Jun 2025, 14:10
        match = t.match(/^\w{3}\s+(\d{1,2})\s+([a-z]{3})\s+(\d{4})(?:,?\s*\d{1,2}:\d{2})?$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (dia && mes && anio) {
                return `${dia}/${mes}/${anio}`;
            }
        }

        // Formato: mar 01 jul 2025 04:28
        match = t.match(/^\w{3}\s+(\d{1,2})\s+([a-z]{3})\s+(\d{4})\s+\d{1,2}:\d{2}$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (dia && mes && anio) {
                return `${dia}/${mes}/${anio}`;
            }
        }

        // Formato: Dom 25 Mayo 2025, 13:06
        match = t.match(/^\w{3}\s+(\d{1,2})\s+([a-záéíóúñ]+)\s+(\d{4})(?:,?\s*\d{1,2}:\d{2})?$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (dia && mes && anio) {
                return `${dia}/${mes}/${anio}`;
            }
        }

        // Formato: Miér 04 Jun 2025, 22:14
        match = t.match(/^[a-záéí]{3,}\s+(\d{2})\s+([a-záéí]{3})\s+(\d{4}),?\s*(\d{2}):(\d{2})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (dia && mes && anio) {
                return `${dia}/${mes}/${anio}`;
            }
        }

        // Formato: Sábado 26 Julio 1952
        match = t.match(/^[a-záéíóúñ]+[\s,]+(\d{1,2})[\s,]+([a-záéíóúñ]+)[\s,]+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (dia && mes && anio) {
                return `${dia}/${mes}/${anio}`;
            }
        }

        // Formato: septiembre 3, 1952
        match = t.match(/^([a-záéíóúñ]+)\s+(\d{1,2}),?\s+(\d{4})$/i);
        if (match) {
            mes = meses[match[1].toLowerCase()];
            dia = match[2].padStart(2, '0');
            anio = match[3];
            if (dia && mes && anio) {
                return `${dia}/${mes}/${anio}`;
            }
        }

        // Formato: 9/7/2025, 22:15
        match = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4}),?\s*(\d{2}):(\d{2})$/);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = match[2].padStart(2, '0');
            anio = match[3];
            return `${dia}/${mes}/${anio}`;
        }

        return t;
    }

    /**
     * Cleans title: lowercase and removes anything inside brackets [bra-ckets]
     */
    function sanitizeTitle(title) {
        return title.replace(/\[.*?\]/g, '').toLowerCase().trim();
    }

    /**
     * Counts words in .rol-content, ignoring internal divs
     */
    function countWords($content) {
        const $clone = $content.clone();
        $clone.find('div').remove();
        const text = $clone.text().replace(/\s+/g, ' ').trim();
        return text ? text.split(' ').length : 0;
    }

    async function scanForum(url, forumName) {
        // Pausa de seguridad antes de cargar la lista de temas del foro
        await delay(1500);

        const response = await $.get(url);
        const $data = $(response);

        // Convertimos los elementos de los temas a un Array para poder usar for...of
        const topicElements = $data.find('.topic').toArray();

        // BUCLE SECUENCIAL: Procesa un tema a la vez
        for (let element of topicElements) {
            const $link = $(element).find('.topictitle');
            console.log("Analizando tema:", $link.text());
            const fullUrl = $link.attr('href');

            // Limpieza de la URL para usarla como ID único (topicKey)
            let topicKey = fullUrl.split('-')[0];
            if (topicKey.includes('p')) {
                topicKey = topicKey.split('p')[0];
            }

            // Solo entramos si el tema NO existe en nuestra base de datos (JS fijo o Caché)
            if (topicKey && !database.topics[topicKey]) {
                console.log(`Descubierto nuevo tema: ${topicKey} en ${forumName}`);

                database.topics[topicKey] = {
                    space: forumName,
                    url: fullUrl,
                    simpleTitle: sanitizeTitle($link.text()),
                    creator: $(element).find('.topic-started a').text(),
                    posts: []
                };

                // ESPERA a que scanTopicPosts termine (y sus páginas internas) 
                // antes de pasar al siguiente tema de la lista
                await scanTopicPosts(fullUrl, $link.text());
            }
        }

        // Al terminar todos los temas de esta página, buscamos si hay una siguiente página de FORO
        const nextPage = $data.find('.pagination .sprite-arrow_prosilver_right').parent('a').attr('href');
        if (nextPage) {
            console.log(`Siguiente página de foro encontrada: ${nextPage}`);
            await scanForum(nextPage, forumName);
        }
    }

    async function scanTopicPosts(url, originalTitle) {
        await delay(2000);
        const response = await $.get(url);
        const $data = $(response);
        let topicKey = url.split('-')[0];
        if (topicKey.includes('p')) { topicKey = topicKey.split('p')[0]; }

        $data.find('.viewtopic-replies').each(function () {
            const $post = $(this);
            const postId = $post.find('.go-to').attr('id');
            const postDateText = $post.find('.post-action span[title]').attr('title'); // Fecha sistema (posteo)

            // Si es el primer post y no tenemos metadatos del tema, los extraemos
            if (!database.topics[topicKey]?.creationDate) {
                database.topics[topicKey].creationDate = normalizeDate(postDateText);

                // Prioridad de la fecha de ambientación (date): 
                // 1. Del título [AAAA/MM/DD] 
                // 2. Del tag <fecha> del primer mensaje
                let ambientDate = normalizeDate(originalTitle);
                if (ambientDate === originalTitle) { // Si no cambió, no había corchetes con fecha
                    ambientDate = normalizeDate($post.find('fecha').text());
                }
                database.topics[topicKey].date = ambientDate;
                database.topics[topicKey].location = $post.find('lugar').text() || "Desconocida";
            }

            database.topics[topicKey].posts.push({
                url: `r${postId}`,
                author: $post.find('.poster-name').text().trim(),
                date: normalizeDate(postDateText),
                words: countWords($post.find('.rol-content'))
            });

            const $roles = $post.find('.post-content div');
            $roles.each(function () {
                const text = $(this).text();
                if (text.includes('ha efectuado la acción siguiente')) {
                    const res = $(this).find('strong').map(function () { return $(this).text().trim(); }).get();
                    if (res.length > 0) {
                        const pitcher = res.shift(); // Quien lanza
                        res.shift(); // Quitar nombre de la tirada
                        const spread = res.map(str => parseInt(str, 10)).filter(num => !isNaN(num));

                        if (pitcher && spread.length > 0) {
                            database.dices.push({
                                pitcher: pitcher,
                                spread: spread,
                                url: `${topicKey}#${postId}`,
                                simpleTitle: database.topics[topicKey].simpleTitle
                            });
                        }
                    }
                }
            });
        });

        const $nextPageLink = $data.find('.pagination .sprite-arrow_prosilver_right').parent('a');
        if ($nextPageLink.length > 0) {
            const nextPageUrl = $nextPageLink.attr('href');
            await scanTopicPosts(nextPageUrl, originalTitle);
        }
    }

    /**
     * Extracts only the [YYYY/MM/DD] part and converts it to DD/MM/YYYY
     */
    function extractDateFromTitle(title) {
        const match = title.match(/\[(\d{4})\/(\d{2})\/(\d{2})\]/);
        return match ? `${match[3]}/${match[2]}/${match[1]}` : null;
    }

    return {
        init: async function () {
            // 1. Cargar caché previa
            const saved = localStorage.getItem(CACHE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                database.topics = { ...hardcodedTopics, ...parsed.data.topics };
            }

            // 2. LLAMAR al proceso de bloque (esto es lo que faltaba)
            await this.processNextBlock();
        },

        processNextBlock: async function () {
            // 1. Recuperamos en qué número de foro nos quedamos
            let currentIndex = parseInt(localStorage.getItem(INDEX_KEY)) || 0;

            // 2. Si ya recorrimos todos, no hacer nada
            if (currentIndex >= forums.length) {
                console.log("DBModule: Todos los foros han sido procesados.");
                return;
            }

            const currentForum = forums[currentIndex];
            console.log(`[Bloque ${currentIndex + 1}/${forums.length}] Procesando: ${currentForum.name}`);

            await scanForum(currentForum.path, currentForum.name);

            // 3. Guardamos lo avanzado en este bloque (los temas nuevos encontrados)
            this.save();

            // 4. Avanzamos el índice para la próxima carga de página
            localStorage.setItem(INDEX_KEY, currentIndex + 1);

            $(document).trigger("dbBlockFinished");
        },

        // Tu función refresh ahora solo serviría para reiniciar el ciclo manualmente
        refresh: async function () {
            this.resetIndex();
            await this.init();
        },

        resetIndex: function () {
            localStorage.setItem(INDEX_KEY, 0);
            console.log("Índice reiniciado. Empezando desde el primer foro...");
        },

        save: function () {
            // Forzamos que database.topics tenga lo que ya procesamos
            const dataToSave = JSON.stringify({
                timestamp: Date.now(),
                data: {
                    topics: database.topics, // Usamos la variable en memoria que ya creció
                    dices: database.dices
                }
            });
            localStorage.setItem(CACHE_KEY, dataToSave);
            console.log("Datos guardados en caché. Total temas:", Object.keys(database.topics).length);
        },

        exportData: function () {
            const elPensaderoTopics = Object.keys(database.topics)
                .filter(url => database.topics[url].space.toLowerCase() === "el pensadero")
                .reduce((obj, key) => {
                    obj[key] = database.topics[key];
                    return obj;
                }, {});

            const elPensaderoDices = database.dices.filter(dice => {
                const topicKey = dice.url.split('#');
                return database.topics[topicKey] && database.topics[topicKey].space.toLowerCase() === "el pensadero";
            });

            console.log("%c === COPIA ESTO EN hardcodedTopics ===", "color: lime");
            console.log(JSON.stringify(elPensaderoTopics, null, 2));

            console.log("%c === COPIA ESTO EN hardcodedDices ===", "color: cyan");
            console.log(JSON.stringify(elPensaderoDices, null, 2));
        }
    };
})();