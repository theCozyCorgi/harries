const DBModule = (function () {
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
        { name: "prácticas del sistema", path: "/f35-practicas-del-sistema" },
        { name: "temas inactivos", path: "/f30-temas-inactivos" }
    ];

    const CACHE_KEY = 'blackwave_db_cache_v9';
    const INDEX_KEY = 'current_index_blackwave_v9';
    const CACHE_DURATION = 2 * 60 * 60 * 1000;

    const hardcodedTopics = window._archiveTopics = window._archiveTopics || {};
    const archiveDices = window._archiveDices = window._archiveDices || {};
    const hardcodedInactiveTopics = window._archiveInactive = window._archiveInactive || {};
    const hardcodedDices = () => Object.values(archiveDices);

    // === DATOS DINÁMICOS (Lo único que va al Storage) ===
    let dynamicData = {
        topics: {},
        dices: []
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    // === CANDADO DE ESCANEO (una sola pestaña escanea a la vez) ===
    // La clave no empieza con "blackwave_" porque init borra esas claves viejas
    const SCAN_LOCK_KEY = 'bwdb_scan_lock';
    const SCAN_LOCK_TTL = 15000; // si la pestaña que escanea deja de renovarlo (se colgó), vence solo
    const tabId = Math.random().toString(36).slice(2);

    function readScanLock() {
        try { return JSON.parse(localStorage.getItem(SCAN_LOCK_KEY)); } catch (e) { return null; }
    }
    function writeScanLock() {
        try { localStorage.setItem(SCAN_LOCK_KEY, JSON.stringify({ id: tabId, t: Date.now() })); } catch (e) { }
    }
    function ownsScanLock() {
        const l = readScanLock();
        return !!l && l.id === tabId;
    }
    async function takeScanLock() {
        const l = readScanLock();
        if (l && l.id !== tabId && Date.now() - l.t < SCAN_LOCK_TTL) return false;
        writeScanLock();
        // Si dos pestañas lo toman a la vez, gana la última que escribió
        await delay(100);
        return ownsScanLock();
    }
    function releaseScanLock() {
        if (ownsScanLock()) localStorage.removeItem(SCAN_LOCK_KEY);
    }
    // Al cambiar de página se suelta enseguida, así la página nueva no espera a que venza
    window.addEventListener('pagehide', releaseScanLock);

    // Vuelve a leer la caché guardada (otra pestaña pudo haberla actualizado)
    function reloadCache() {
        try {
            const p = JSON.parse(localStorage.getItem(CACHE_KEY));
            if (p && p.data) {
                dynamicData.topics = p.data.topics || {};
                dynamicData.dices = Array.isArray(p.data.dices) ? p.data.dices : [];
            }
        } catch (e) { }
    }

    // Un tema no puede abrirse en un mes on-rol posterior al que corría cuando se escribió su primer post (la misma
    // cuenta que time.js): "05/06/1954" escrito en junio de 1953 queda "05/06/1953". Se respeta el día, se corrigen mes y año
    function capAmbientDate(fecha, firstPostDate) {
        const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(fecha || '');
        if (!m) return fecha;
        let tope = currentAmbientDate;
        const p = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(firstPostDate || '');
        if (p) {
            const realMonthsPassed = (+p[3] - forumOpeningDate.getFullYear()) * 12 + (+p[2] - 1 - forumOpeningDate.getMonth());
            tope = new Date(initialAmbientDate);
            tope.setMonth(initialAmbientDate.getMonth() + Math.floor((realMonthsPassed + 1) / 2));
        }
        const anio = tope.getFullYear(), mes = tope.getMonth() + 1;
        if (+m[3] * 12 + +m[2] <= anio * 12 + mes) return fecha;
        const dia = Math.min(+m[1], new Date(anio, mes, 0).getDate());
        return `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}/${anio}`;
    }

    function normalizeDate(text) {
        if (!text) return "";
        let t = text.trim();

        // FIX Bug 2: declarar todas las variables localmente
        let dia, mes, anio;

        const meses = {
            "ene": "01", "feb": "02", "mar": "03", "abr": "04", "may": "05", "jun": "06",
            "jul": "07", "ago": "08", "sep": "09", "oct": "10", "nov": "11", "dic": "12",
            "enero": "01", "febrero": "02", "marzo": "03", "abril": "04", "mayo": "05", "junio": "06",
            "julio": "07", "agosto": "08", "septiembre": "09", "octubre": "10", "noviembre": "11", "diciembre": "12",
            // Variantes: setiembre/sept/set y meses en inglés (las abreviaturas que coinciden con el español ya están arriba)
            "setiembre": "09", "sept": "09", "set": "09",
            "jan": "01", "apr": "04", "aug": "08", "dec": "12",
            "january": "01", "february": "02", "march": "03", "april": "04", "june": "06",
            "july": "07", "august": "08", "september": "09", "october": "10", "november": "11", "december": "12"
        };

        let match;

        // Formato: "Hoy a las 6:28" / "Ayer a las 14:55" (FA usa fechas relativas en los posts recientes):
        // se guarda la fecha real de hoy o de ayer, porque el texto deja de ser cierto al día siguiente
        match = t.match(/^(hoy|ayer)\b/i);
        if (match) {
            const d = new Date();
            if (match[1].toLowerCase() === 'ayer') d.setDate(d.getDate() - 1);
            return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
        }

        // Formato [AAAA/MM/DD]
        match = t.match(/\[(\d{4})\/(\d{2})\/(\d{2})\]/);
        if (match) return `${match[3]}/${match[2]}/${match[1]}`;

        // Si no se reconoce ningún formato se devuelve el texto sin limpiar: scanTopicPosts compara contra el título original
        const original = t;

        // Limpieza previa: lo que escriben a mano en <fecha> trae variantes que no cambian la fecha
        t = t
            // Día de la semana al principio, solo si sigue una fecha completa (así "Mar 3" sigue siendo marzo)
            .replace(/^(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo|monday|tuesday|wednesday|thursday|friday|saturday|sunday|lun|mar|mi[eé]r?|jue|vie|s[aá]b|dom|mon|tue|wed|thu|fri|sat|sun)\.?,?\s+(?=\d{1,2}(?:\s*(?:de\s+)?[a-z]|[\/\-.]\d))/i, '')
            // Ordinales: 1°, 1º, 1ro, 2do, 3rd, 4th...
            .replace(/\b(\d{1,2})\s?(?:°|º|ª|ro|er|do|to|vo|no|mo|st|nd|rd|th)(?=[\s,.]|$)/gi, '$1')
            // "del 1953" → "de 1953"
            .replace(/\bdel\b/gi, 'de')
            // Punto de abreviatura: "jun. 1953" → "jun 1953"
            .replace(/([a-z])\.(?=[\s,]|$)/gi, '$1')
            // Espacios alrededor de los separadores: "03 / 06 / 1953" → "03/06/1953"
            .replace(/\s*([\/\-])\s*/g, '$1')
            .replace(/(\d)\s*\.\s*(\d)/g, '$1.$2')
            // Puntuación al final: "03/06/1953." o "03/06/1953,"
            .replace(/[\s.,;:!]+$/, '');

        // Formato: Miér 04 Jun 2025...
        match = t.match(/^[a-záéí]{3,}\s+(\d{2})\s+([a-záéí]{3,})\s+(\d{4})/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase().substring(0, 3)];
            anio = match[3];
            return (dia && mes && anio) ? `${dia}/${mes}/${anio}` : original;
        }

        // Formato: Sábado 26 Julio 1952
        match = t.match(/(\d{1,2})\s+([a-záéíóúñ]+)\s+(\d{4})/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            return (dia && mes && anio) ? `${dia}/${mes}/${anio}` : original;
        }

        // Formato: 3 de Octubre (sin año → año actual)
        match = t.match(/^(\d{1,2})\s+de\s+([a-z]+)$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = currentAmbientDate.getFullYear();
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 1952/09/07 o 1952.09.07 → aaaa/mm/dd
        match = t.match(/^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})$/);
        if (match) {
            anio = match[1];
            mes = match[2].padStart(2, '0');
            dia = match[3].padStart(2, '0');
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: Octubre 3 (sin año)
        match = t.match(/^([a-z]+)\s+(\d{1,2})$/i);
        if (match) {
            mes = meses[match[1].toLowerCase()];
            dia = match[2].padStart(2, '0');
            anio = currentAmbientDate.getFullYear();
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: Oct 3 (sin año)
        match = t.match(/^([a-z]{3})\s+(\d{1,2})$/i);
        if (match) {
            mes = meses[match[1].toLowerCase()];
            dia = match[2].padStart(2, '0');
            anio = currentAmbientDate.getFullYear();
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 3.octubre.1952, 03-jun-1953 o 03/junio/1953
        match = t.match(/^(\d{1,2})[\.\/\-]([a-z]+)[\.\/\-](\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 3/10/1952, 03/10/52 o 03.10.1952
        match = t.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})$/);
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
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: Octubre, 1952 → 01/10/1952
        match = t.match(/^([a-z]+),?\s+(\d{4})$/i);
        if (match) {
            dia = '01';
            mes = meses[match[1].toLowerCase()];
            anio = match[2];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 5 Septiembre 1952
        match = t.match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (mes) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 20 de septiembre de 1952 o 20 de septiembre de 52 ("del" ya se limpió a "de")
        match = t.match(/^(\d{1,2})\s+de\s+([a-z]+)\s+de\s+(\d{2}|\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3].length === 2 ? `19${match[3]}` : match[3];
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

        // Formato: 20/09 (sin año, se asume año actual)
        match = t.match(/^(\d{1,2})[\/\-](\d{1,2})$/);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = match[2].padStart(2, '0');
            anio = currentAmbientDate.getFullYear();
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: Dom 25 Mayo 2025, 13:06 / Miér 04 Jun 2025, 22:14
        match = t.match(/^\w{2,}\s+(\d{1,2})\s+([a-záéíóúñ]{3,})\s+(\d{4})(?:,?\s*\d{1,2}:\d{2})?$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase().substring(0, 3)];
            anio = match[3];
            if (dia && mes && anio) return `${dia}/${mes}/${anio}`;
        }

        // Formato: Sábado 26 Julio 1952 (con día de semana largo)
        match = t.match(/^[a-záéíóúñ]+[\s,]+(\d{1,2})[\s,]+([a-záéíóúñ]+)[\s,]+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (dia && mes && anio) return `${dia}/${mes}/${anio}`;
        }

        // Formato: septiembre 3, 1952
        match = t.match(/^([a-záéíóúñ]+)\s+(\d{1,2}),?\s+(\d{4})$/i);
        if (match) {
            mes = meses[match[1].toLowerCase()];
            dia = match[2].padStart(2, '0');
            anio = match[3];
            if (dia && mes && anio) return `${dia}/${mes}/${anio}`;
        }

        // Formato: 9/7/2025, 22:15
        match = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4}),?\s*(\d{2}):(\d{2})$/);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = match[2].padStart(2, '0');
            anio = match[3];
            return `${dia}/${mes}/${anio}`;
        }

        // Formato: Septiembre 03 (sin año → 1953 por convención del foro)
        match = t.match(/^([a-záéíóúñ]+)\s+(\d{1,2})$/i);
        if (match) {
            mes = meses[match[1].toLowerCase()];
            dia = match[2].padStart(2, '0');
            if (dia && mes) return `${dia}/${mes}/1953`;
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

        // Formato: 11 de Marzo, 1953 (con o sin coma)
        match = t.match(/^(\d{1,2})\s+de\s+([a-záéíóúñ]+),?\s+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            if (dia && mes && anio) return `${dia}/${mes}/${anio}`;
        }

        return original;
    }

    function sanitizeTitle(title) {
        return title.replace(/\[.*?\]/g, '').toLowerCase().trim();
    }

    function countWords($content) {
        if (!$content || !$content.length) return 0;
        const $clone = $content.clone();
        $clone.find('div').remove();
        const text = $clone.text().replace(/\s+/g, ' ').trim();
        return text ? text.split(' ').length : 0;
    }

    function extractTopicKey(url) {
        if (!url) return null;
        // Extrae el ID numérico del final de la URL, ej: /t123-titulo → "123"
        const match = url.match(/\/t(\d+)/);
        return match ? match[1] : url.split('-')[0].replace(/\D/g, '') || null;
    }

    async function scanForum(url, forumName, forceRescan = false) {
        if (!url) return;
        await delay(2500); // Respiro al servidor para evitar el Error 429
        const response = await $.get(url);
        const $data = $(response);
        // El bloque del header_table ("Memos & Guías": anuncios globales, anuncios y fijos) sale como
        // .topicslist.announcement y se repite en cada foro: no es rol, así que no se lee.
        // Ojo: de la página 2 en adelante no hay memos y FA le pone "announcement" a la única lista, la de los temas;
        // por eso el filtro solo aplica cuando la página trae más de una lista
        const $lists = $data.find('.topicslist');
        const topicElements = ($lists.length > 1 ? $lists.not('.announcement') : $lists).find('.topic').toArray();

        for (let element of topicElements) {
            const $link = $(element).find('.topictitle');
            const fullUrl = $link.attr('href');
            if (!fullUrl) continue;

            const topicKey = extractTopicKey(fullUrl);
            if (!topicKey) continue;

            // Los temas hardcodeados están cerrados/archivados para siempre: no se vuelven a tocar.
            // El chequeo de "¿cambió la cantidad de respuestas?" solo aplica a los temas
            // que siguen vivos en dynamicData.
            const hardcodedTopic = typeof hardcodedTopics !== 'undefined' && hardcodedTopics[topicKey];
            const hardcodedInactive = typeof hardcodedInactiveTopics !== 'undefined' && hardcodedInactiveTopics[topicKey];
            // Ya hardcodeado: la copia de la caché (de cuando seguía abierto) sobra y solo ocupa lugar
            if (hardcodedTopic && dynamicData.topics[topicKey]) { delete dynamicData.topics[topicKey]; }
            const dynamicTopic = dynamicData.topics[topicKey];

            // Cantidad de respuestas que el listado del foro muestra AHORA para este tema
            const replyText = $(element).find('.topic-replies').text();
            const replyMatch = replyText.match(/(\d+)/);
            const liveReplyCount = replyMatch ? parseInt(replyMatch[1], 10) : null;

            // Los inactivos congelados solo se saltean mientras sigan quietos en su foro:
            // si los mueven o alguien responde, se releen a dynamicData (que gana en getUnifiedData).
            const inactiveFrozen = hardcodedInactive && forumName === 'temas inactivos'
                && (liveReplyCount === null || liveReplyCount === hardcodedInactive.replyCount);

            if (hardcodedInactive && !inactiveFrozen) {
                console.warn(`[DBModule] "${hardcodedInactive.simpleTitle}" (t${topicKey}) se reactivó o se movió → ahora en ${forumName}. Sacarlo de hardcodedInactiveTopics.`);
            }

            // Un tema dinámico puede moverse de foro (ej. al cerrarse, hacia "el pensadero")
            // sin que se le agregue ningún post nuevo: el replyCount no lo detecta solo,
            // así que el espacio actual también cuenta como señal de cambio.
            const movedForum = dynamicTopic && dynamicTopic.space !== forumName;
            // Temas guardados con el título como fecha (bug ya corregido en scanTopicPosts): se releen una vez
            const brokenDate = !!dynamicTopic && !!dynamicTopic.date && dynamicTopic.date === $link.text().trim();

            let isSaved;
            if (forceRescan) {
                isSaved = false;
            } else if (hardcodedTopic || inactiveFrozen) {
                isSaved = true;
            } else if (dynamicTopic) {
                // Temas guardados antes de este cambio no tienen replyCount todavía: los tratamos
                // como 0 para que la comparación dé "distinto" y se re-escaneen una vez,
                // dejando el dato real guardado para la próxima corrida.
                // null = lectura cortada a la mitad: nunca coincide, así se vuelve a leer
                const savedReplyCount = dynamicTopic.replyCount === null ? -1 : (dynamicTopic.replyCount ?? 0);
                isSaved = !movedForum && !brokenDate && (liveReplyCount === null || savedReplyCount === liveReplyCount);
            } else {
                isSaved = false;
            }

            if (!isSaved) {
                // forceRescan (ej. scanCleanForum) pide lectura profunda a propósito: el atajo no aplica ahí.
                const onlyMoved = !forceRescan && movedForum && !brokenDate && liveReplyCount !== null && dynamicTopic.replyCount !== null && (dynamicTopic.replyCount ?? 0) === liveReplyCount;
                // Solo respuestas nuevas sobre una lectura completa: se leen desde la última página hacia atrás.
                // Si bajó la cantidad (se borró un post) o la lectura anterior quedó cortada, se relee entero.
                const onlyNewReplies = !forceRescan && !brokenDate && liveReplyCount !== null
                    && !!dynamicTopic && dynamicTopic.replyCount != null && dynamicTopic.posts.length > 0
                    && liveReplyCount > dynamicTopic.replyCount;

                if (onlyMoved) {
                    // Solo cambió de foro, los posts siguen igual: alcanza con actualizar el espacio.
                    moveTopicSpace(dynamicTopic, forumName);
                } else if (onlyNewReplies) {
                    console.log(`Analizando respuestas nuevas: ${$link.text()}`);
                    moveTopicSpace(dynamicTopic, forumName);
                    dynamicTopic.url = fullUrl;
                    dynamicTopic.simpleTitle = sanitizeTitle($link.text());
                    const savedReplyCount = dynamicTopic.replyCount;
                    // Igual que en la lectura completa: null mientras lee, así un corte a la mitad obliga a releerlo
                    dynamicTopic.replyCount = null;
                    await scanNewTopicPosts(fullUrl, $link.text(), savedReplyCount);
                    dynamicTopic.replyCount = liveReplyCount;
                    DBModule.save();
                } else {
                    console.log(`Analizando tema: ${$link.text()}`);
                    // replyCount queda en null hasta terminar de leerlo: si se corta a la mitad (el usuario cambia de
                    // página), la próxima corrida lo ve distinto y lo vuelve a leer entero
                    dynamicData.topics[topicKey] = {
                        space: forumName,
                        url: fullUrl,
                        simpleTitle: sanitizeTitle($link.text()),
                        creator: $(element).find('.topic-started a').text(),
                        replyCount: null,
                        posts: []
                    };
                    await scanTopicPosts(fullUrl, $link.text());
                    dynamicData.topics[topicKey].replyCount = liveReplyCount;
                    // Se guarda tema por tema, no al final de la zona: si no, cada página nueva arrancaba la zona desde
                    // cero, repetía los mismos pedidos y Foroactivo terminaba cortando con 429 a quien no tenía caché
                    DBModule.save();
                }
            } else if (dynamicTopic && dynamicTopic.replyCount === undefined && liveReplyCount !== null) {
                // Tema guardado antes de este cambio, con 0 respuestas reales: completamos el dato sin re-escanear
                dynamicTopic.replyCount = liveReplyCount;
            }
        }

        const $nextPageLink = $data.find('.pagination .sprite-arrow_prosilver_right').parent('a');
        const nextUrl = $nextPageLink.attr('href');

        // Si hay una página 2, 3, etc., seguimos escaneando con la misma fuerza
        if (nextUrl) await scanForum(nextUrl, forumName, forceRescan);
    }

    // Un tema que cambia de foro lleva también sus dados (si no, quedaban con el foro viejo)
    function moveTopicSpace(topic, forumName) {
        if (topic.space === forumName) return;
        topic.space = forumName;
        const suyos = new Set((Array.isArray(topic.posts) ? topic.posts : Object.values(topic.posts || {})).map(p => p.url));
        dynamicData.dices.forEach(d => { if (suyos.has(d.url)) d.space = forumName; });
    }

    const POSTS_PER_PAGE = 20; // FA: la página 2 es /t174p20-…, la 3 /t174p40-…

    // URL de la página que arranca en el post número `start` (0 = la primera)
    function topicPageUrl(url, start) {
        const limpia = url.replace(/^(.*?\/t\d+)p\d+-/, '$1-');
        return start > 0 ? limpia.replace(/^(.*?\/t\d+)-/, `$1p${start}-`) : limpia;
    }

    function pagePostIds($data) {
        return $data.find('.viewtopic-replies').toArray()
            .map(r => $(r).find('.go-to').attr('id'))
            .filter(Boolean)
            .map(id => `r${id}`);
    }

    // Respuestas nuevas de un tema ya leído: arranca en la página del último post guardado y avanza con normalidad.
    async function scanNewTopicPosts(url, originalTitle, savedReplyCount) {
        const topicKey = extractTopicKey(url);
        const topic = dynamicData.topics[topicKey];
        if (!topicKey || !topic) return;

        // /r<post> lleva directo a la página de ese post, sin hacer la cuenta de p40
        const ultimo = topic.posts[topic.posts.length - 1].url;
        await delay(3000);
        let $data = $(await $.get('/' + ultimo));

        // Si ese post ya no está (lo borraron), se calcula la página por la cantidad de respuestas guardada.
        // Si esa página no trae ningún post guardado (se borraron otros y todo se corrió hacia atrás), retrocede una.
        // El primer post no cuenta como guardado: FA lo repite arriba de cada página.
        if (!pagePostIds($data).includes(ultimo)) {
            const primero = topic.posts[0].url;
            const conocidos = new Set(topic.posts.map(p => p.url));
            let start = Math.floor(savedReplyCount / POSTS_PER_PAGE) * POSTS_PER_PAGE;
            while (true) {
                await delay(3000);
                $data = $(await $.get(topicPageUrl(url, start)));
                if (start === 0 || pagePostIds($data).some(id => id !== primero && conocidos.has(id))) break;
                start -= POSTS_PER_PAGE;
            }
        }

        await processTopicPage($data, topicKey, originalTitle);
        const nextUrl = $data.find('.pagination .sprite-arrow_prosilver_right').parent('a').attr('href');
        if (nextUrl) await scanTopicPosts(nextUrl, originalTitle);
    }

    async function scanTopicPosts(url, originalTitle) {
        if (!url) return;
        await delay(3000);
        const response = await $.get(url);
        const $data = $(response);

        const topicKey = extractTopicKey(url);
        if (!topicKey) return;

        await processTopicPage($data, topicKey, originalTitle);

        const $nextPageLink = $data.find('.pagination .sprite-arrow_prosilver_right').parent('a');
        const nextUrl = $nextPageLink.attr('href');
        if (nextUrl) await scanTopicPosts(nextUrl, originalTitle);
    }

    // Guarda los posts (y sus dados y pociones) de una página de tema que todavía no estén guardados
    async function processTopicPage($data, topicKey, originalTitle) {
        // FIX: Cambiamos el .each() por un bucle for...of para poder usar await
        const replies = $data.find('.viewtopic-replies').toArray();

        for (let reply of replies) {
            const $post = $(reply);
            const postId = $post.find('.go-to').attr('id');
            const postDateText = $post.find('.post-action span[title]').attr('title');

            // FA repite el primer post arriba de cada página: si ya lo guardamos, ni el post ni sus dados se vuelven a sumar
            if (postId && dynamicData.topics[topicKey]?.posts.some(p => p.url === `r${postId}`)) continue;

            if (!dynamicData.topics[topicKey]?.date) {
                // Se valida por formato y no comparando con el título: normalizeDate lo devuelve recortado, y el título
                // de FA trae espacios alrededor, así que la comparación nunca coincidía y el título quedaba como fecha
                let ambientDate = normalizeDate(originalTitle);
                if (!/^\d{2}\/\d{2}\/\d{4}$/.test(ambientDate)) {
                    ambientDate = normalizeDate($post.find('fecha').text());
                }
                dynamicData.topics[topicKey].date = capAmbientDate(ambientDate, normalizeDate(postDateText));
                dynamicData.topics[topicKey].location = $post.find('lugar').text() || "Desconocida";
            }

            dynamicData.topics[topicKey].posts.push({
                url: `r${postId}`,
                author: $post.find('.poster-name').text().trim(),
                date: normalizeDate(postDateText),
                words: countWords($post.find('.rol-content'))
            });

            // Pociones mencionadas en cualquier post del tema (<span class="do-action" target="potions" data="...">):
            // medallas.js las usa para nombrar las pociones que se prepararon sin tirar el dado "potions"
            $post.find('.do-action[target="potions"]').each(function () {
                const nombre = String($(this).attr('data') || '').toLowerCase().trim();
                const tema = dynamicData.topics[topicKey];
                if (nombre && !(tema.pociones = tema.pociones || []).includes(nombre)) tema.pociones.push(nombre);
            });

            // === EXTRACCIÓN DE DADOS MEJORADA (DBModule) ===
            const rolesDivs = $post.find('.content:contains("Lanzada de dados"), .content:contains("ha efectuado la acción siguiente")').toArray();

            for (const roleDiv of rolesDivs) {
                let htmlStr = $(roleDiv).html();
                // Los posts viejos separan el encabezado con <br><br> en vez de <hr>
                const sep = htmlStr.includes('<hr>') ? '<hr>' : '<br><br>';
                if (!htmlStr.includes(sep)) continue;

                let h = htmlStr.split(sep)[0];
                let c = htmlStr.split(sep)[1];

                let pitcher = $(h).find('strong').first().text().trim();
                if (!pitcher) pitcher = $(roleDiv).find('strong').first().text().trim();

                let l = c.split('#');
                let chunks = l.length > 1 ? l.slice(1) : [l[0]];

                let spread = [];
                let diceTitle = "";

                for (let chunk of chunks) {
                    let lc = '<div>' + chunk.replace('</div>', '') + '</div>';

                    let rawSplit = $(lc).text().split("'");
                    if (rawSplit.length > 1) {
                        diceTitle = rawSplit[1].toLowerCase().trim();
                    }

                    // Extraemos los números del resultado: una tirada puede traer varios ('Acción' : 10, 4)
                    const strongs = $(lc).find('strong').map(function () { return parseInt($(this).text(), 10); }).get().filter(function (n) { return !isNaN(n); });
                    let matchResult = $(lc).text().match(/:\s*(\d+)/);
                    if (strongs.length > 0) {
                        spread.push(...strongs);
                    } else if (matchResult) {
                        spread.push(parseInt(matchResult[1], 10));
                    } else {
                        let nums = $(lc).text().match(/\d+/g);
                        if (nums && nums.length > 0) spread.push(parseInt(nums[nums.length - 1], 10));
                    }
                }

                if (pitcher && spread.length > 0 && diceTitle) {
                    let htmlResult = "";
                    let metaData = {};

                    if (typeof DiceModule !== 'undefined' && DiceModule.buildDiceHTML) {
                        const dicePackage = await DiceModule.buildDiceHTML(diceTitle, spread, pitcher, postId, $data);
                        htmlResult = dicePackage.html;
                        metaData = dicePackage.meta;
                    }

                    // title/key/knowledge/type son arrays (key/knowledge/type en paralelo); acepta string por si DiceModule es viejo
                    const aLista = (v) => Array.isArray(v) ? v : (v ? [v] : []);
                    const titulos = aLista(metaData.target);

                    dynamicData.dices.push({
                        pitcher,
                        spread,
                        title: titulos.length ? titulos : [diceTitle],
                        key: aLista(metaData.key),
                        knowledge: aLista(metaData.know),
                        type: aLista(metaData.type),
                        html: htmlResult,
                        url: 'r' + postId.replace('p', ''),
                        simpleTitle: dynamicData.topics[topicKey].simpleTitle,
                        space: dynamicData.topics[topicKey].space
                    });
                }
            }
        }
    }

    // Une listas de temas (las últimas ganan) y de dados (sin duplicar por post) y repara posts en objeto o repetidos.
    // La usan getUnifiedData (todo) y getArchivedData (solo lo cerrado y archivado en este archivo).
    function mergeData(topicSources, diceSources) {
        // --- FIX DADOS DUPLICADOS ---
        const allDices = diceSources.flatMap(l => Array.isArray(l) ? l : []);
        const uniqueDicesMap = new Map();

        allDices.forEach(d => {
            if (d && d.url) {
                let postId = '';

                // Si viene del formato viejo o de la propiedad posts ("r10015")
                if (d.url.startsWith('r')) {
                    postId = d.url.replace('r', '');
                }
                // Si viene del dinámico nuevo ("15#10015" o "/t15-tema#10015")
                else if (d.url.includes('#')) {
                    postId = d.url.split('#')[1].replace('p', '');
                } else {
                    postId = d.url;
                }

                // Forzamos a que todos los dados usen tu formato exacto
                d.url = 'r' + postId;

                // Usamos SOLO el número puro del post para que sea matemáticamente imposible duplicarlos
                uniqueDicesMap.set(postId, d);
            }
        });

        // --- FILTRO ANTI-DUPLICADOS DE TEMAS ---
        const mergedTopicsRaw = Object.assign({}, ...topicSources);
        const cleanTopics = {};

        for (let key in mergedTopicsRaw) {
            const tData = mergedTopicsRaw[key];
            if (!tData || !tData.url) continue;

            // FIX ERROR CRÍTICO: Faltaba el [1] para extraer la ID limpia
            const match = tData.url.match(/\/t(\d+)/);
            const trueKey = match ? match[1] : key;

            // Si ya existía, lo sobreescribe en lugar de crear uno nuevo duplicado
            cleanTopics[trueKey] = tData;

            // Reparación de Objetos a Arrays
            if (cleanTopics[trueKey].posts && !Array.isArray(cleanTopics[trueKey].posts)) {
                cleanTopics[trueKey].posts = Object.values(cleanTopics[trueKey].posts);
            } else if (!cleanTopics[trueKey].posts) {
                cleanTopics[trueKey].posts = [];
            }

            // Cachés viejas pueden traer el primer post repetido por página: nos quedamos con la primera aparición
            const seenPosts = new Set();
            cleanTopics[trueKey].posts = cleanTopics[trueKey].posts.filter(p => {
                if (!p || !p.url) return true;
                if (seenPosts.has(p.url)) return false;
                seenPosts.add(p.url);
                return true;
            });
        }

        return {
            topics: cleanTopics,
            dices: Array.from(uniqueDicesMap.values())
        };
    }

    return {
        normalizeDate,
        capAmbientDate,

        getLastCacheTime: function () {
            const last = { timestamp: null, zones: null };
            const saved = localStorage.getItem(CACHE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    last.timestamp = parsed.timestamp || null;
                    last.zones = `${currentIndex + 1}/${forums.length} zonas procesadas`;
                    return last;
                }
                catch (e) {
                    return last;
                }
            }
        },

        getUpdateWidget: function () {
            // 1. Creamos el contenedor como un objeto jQuery, no como texto plano
            const $widget = $('<div class="updateDB db-update-widget"><span class="update-message"></span>'
                + '<div class="update-buttons" style="display: flex; gap: 6px;">'
                + '<div class="update-button update-soft"><i class="fa-solid fa-magnifying-glass-arrows-rotate"></i></div>'
                + '<div class="update-button update-hard"><i class="fa-solid fa-broom-wide"></i></div>'
                + '</div></div>');

            // 2. Buscamos las partes internas
            const $updateBox = $widget.find('.update-message');
            const $buttons = $widget.find('.update-button');

            // 3. Obtenemos y formateamos la fecha
            const cacheData = this.getLastCacheTime ? this.getLastCacheTime() : null;

            const last = {
                timestamp: cacheData?.timestamp || Date.now(),
                zones: cacheData?.zones || (parseInt(localStorage.getItem(INDEX_KEY)) || 0)
            };

            const fecha = new Date(Number(last.timestamp));

            const dia = fecha.getDate().toString().padStart(2, '0');
            const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
            const anio = fecha.getFullYear();

            const horas = fecha.getHours().toString().padStart(2, '0');
            const minutos = fecha.getMinutes().toString().padStart(2, '0');
            const segundos = fecha.getSeconds().toString().padStart(2, '0');

            $updateBox.append(`<date>${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}</date>`);
            $updateBox.append('<zones>Zonas Actualizadas: ' + (last.zones) + ' / ' + forums.length + '</zones>');
            $widget.find('.update-soft').attr('title', 'Actualizar temas');
            $widget.find('.update-hard').attr('title', 'Limpiar y actualizar temas');

            // 4. Guardamos la referencia al DBModule para usarla dentro del click
            const self = this;

            // 5. Adherimos el evento click a los botones ANTES de insertarlos en la página
            $buttons.click(async function () {
                const $btn = $(this);
                const wipe = $btn.hasClass('update-hard');

                if ($btn.prop('disabled') || $btn.hasClass('disabled')) return;
                // Deshabilitamos ambos: no tiene sentido correr dos barridos a la vez
                $buttons.prop('disabled', true).addClass('disabled').css({ opacity: 0.5, cursor: 'not-allowed' });

                $updateBox.find('note').remove();
                const $note = $('<note>Iniciando actualización...</note>');
                $updateBox.append($note);

                await self.fullSweep(function (mensajeProgreso) {
                    console.log("%c[DBModule Progress] " + mensajeProgreso, "color: cyan;");

                    let textoLimpio = mensajeProgreso
                        .replace('[Foro ', 'Procesando zona ')
                        .replace('] Analizando:', ':');

                    $note.text(textoLimpio);
                }, wipe);

                $note.text('¡Actualización completada con éxito!');
                $buttons.prop('disabled', false).removeClass('disabled').css({ opacity: 1, cursor: 'pointer' });
                setTimeout(() => location.reload(), 1500);
            });

            // 6. Devolvemos el widget completamente funcional
            return $widget;
        },

        init: async function () {
            // Una sola vez por página: lo llama dbbase.js solo y, mientras siga activo, también stats.js
            if (this.iniciado) { return; }
            if (!Object.keys(hardcodedTopics).length) {
                console.warn("[DBModule] Todavía no llegaron los temas cerrados del worker: no se escanea en esta página.");
                return;
            }
            this.iniciado = true;
            // Borra las cachés y los índices de versiones anteriores
            Object.keys(localStorage).forEach(key => {
                if ((key.startsWith('blackwave_') && key !== CACHE_KEY) || (key.startsWith('current_index_blackwave_') && key !== INDEX_KEY)) {
                    localStorage.removeItem(key);
                }
            });

            const saved = localStorage.getItem(CACHE_KEY);
            let shouldReset = false;

            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    dynamicData.topics = parsed.data.topics || {};
                    dynamicData.dices = Array.isArray(parsed.data.dices) ? parsed.data.dices : [];

                    if (Date.now() - parsed.timestamp > CACHE_DURATION) {
                        console.log("DBModule: Caché expirada. Reiniciando escaneo dinámico...");
                        shouldReset = true;
                    }
                } catch (e) {
                    console.error("Caché corrupta. Reseteando.", e);
                    shouldReset = true;
                }
            }

            if (shouldReset) { this.resetIndex(); }
            await this.processNextBlock();
        },

        processNextBlock: async function () {
            let currentIndex = parseInt(localStorage.getItem(INDEX_KEY)) || 0;
            if (currentIndex >= forums.length) {
                console.log("DBModule: Escaneo al día.");
                return;
            }

            // Una sola pestaña escanea a la vez: con varias abiertas, todas leían la misma zona al mismo tiempo y
            // multiplicaban los pedidos. Las demás esperan y prueban de nuevo por si la que escanea se cierra.
            if (!(await takeScanLock())) {
                setTimeout(() => this.processNextBlock(), SCAN_LOCK_TTL);
                return;
            }
            const heartbeat = setInterval(() => { if (ownsScanLock()) writeScanLock(); }, SCAN_LOCK_TTL / 3);

            try {
                // Mientras esperaba, otra pestaña pudo haber guardado temas o terminado zonas
                reloadCache();
                currentIndex = parseInt(localStorage.getItem(INDEX_KEY)) || 0;
                if (currentIndex >= forums.length) {
                    console.log("DBModule: Escaneo al día.");
                    return;
                }

                const currentForum = forums[currentIndex];

                // "el pensadero" ya no se salta: scanForum solo re-lee temas hardcodeados (nunca)
                // o dinámicos con cambios/movimiento real, así que incluirlo acá no sale caro
                // y evita que un tema quede "abierto" para siempre por no actualizar el hardcode a mano.
                console.log(`[Bloque ${currentIndex + 1}/${forums.length}] Procesando: ${currentForum.name}`);
                await scanForum(currentForum.path, currentForum.name);

                this.save();
                localStorage.setItem(INDEX_KEY, currentIndex + 1);
                $(document).trigger("dbBlockFinished");
            } finally {
                clearInterval(heartbeat);
                releaseScanLock();
            }
        },

        save: function () {
            try {
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    timestamp: Date.now(),
                    data: dynamicData
                }));
                console.log(`DBModule: Guardado exitoso. (${Object.keys(dynamicData.topics).length} temas dinámicos).`);
            } catch (e) {
                console.error("DBModule: Error guardando (Probablemente Storage Lleno)", e);
            }
        },

        resetIndex: function () {
            localStorage.setItem(INDEX_KEY, 0);
        },

        // wipe = true  → HARD: vacía dynamicData y re-lee todo desde cero.
        // wipe = false → SOFT: recorre las 18 zonas sin borrar nada; scanForum solo
        //                re-lee los temas nuevos, movidos o con respuestas nuevas.
        fullSweep: async function (progressCallback, wipe = true) {
            if (!progressCallback) {
                console.log(`%c[DBModule] Iniciando BARRIDO COMPLETO ${wipe ? 'HARD' : 'SOFT'} (Modo Consola)...`, "color: yellow; font-size: 14px;");
            }

            if (wipe) {
                // === LA MAGIA: VACIAMOS LA MEMORIA RAM ANTES DE EMPEZAR ===
                dynamicData = { topics: {}, dices: [] };
                // ==========================================================
            }

            this.resetIndex();
            let currentIndex = 0;

            while (currentIndex < forums.length) {
                const currentForum = forums[currentIndex];
                if (progressCallback) {
                    progressCallback(`[Foro ${currentIndex + 1}/${forums.length}] Analizando: ${currentForum.name}...`);
                } else {
                    console.log(`%c[Barrido ${currentIndex + 1}/${forums.length}] Procesando foro: ${currentForum.name}...`, "color: cyan;");
                }

                await scanForum(currentForum.path, currentForum.name);

                currentIndex++;
                localStorage.setItem(INDEX_KEY, currentIndex);
                this.save();
            }

            if (progressCallback) {
                progressCallback(`¡Fin del análisis! Procesando resultados...`);
            } else {
                console.log("%c[DBModule] ¡BARRIDO COMPLETO FINALIZADO!", "color: lime; font-size: 16px;");
                console.log("Escribe DBModule.exportData() para sacar la copia.");
            }
        },

        // Solo lo cerrado que ya está archivado en el worker (temas y dados cerrados), sin la caché
        // del navegador ni los temas inactivos: es lo mismo para todos, también para los invitados.
        getArchivedData: function () {
            return mergeData([hardcodedTopics], [hardcodedDices()]);
        },

        // Cuántas zonas lleva escaneadas el navegador desde el último reinicio de la caché.
        getScanProgress: function () {
            const hecho = Math.min(parseInt(localStorage.getItem(INDEX_KEY)) || 0, forums.length);
            return { hecho, total: forums.length, completo: hecho >= forums.length };
        },

        getUnifiedData: function () {
            let currentTopics = dynamicData.topics || {};
            let currentDices = dynamicData.dices || [];

            if (Object.keys(currentTopics).length === 0) {
                const saved = localStorage.getItem(CACHE_KEY);
                if (saved) {
                    try {
                        const p = JSON.parse(saved);
                        currentTopics = p.data?.topics || {};
                        currentDices = p.data?.dices || [];
                    } catch (e) { }
                }
            }

            // Las fechas que ya estaban en la caché también se topan al mes on-rol de su primer post
            Object.values(currentTopics).forEach(t => {
                if (!t) return;
                const first = (Array.isArray(t.posts) ? t.posts : Object.values(t.posts || {}))[0];
                t.date = capAmbientDate(t.date, first && first.date);
            });

            // Inactivos primero: la caché les gana si el tema se reactivó o se movió.
            // Hardcoded al final: lo cerrado y archivado le gana a todo, también a una copia vieja que quedó en la caché
            // de cuando el tema seguía abierto (scanForum ya no relee los hardcodeados, así que esa copia nunca se corrige)
            return mergeData([hardcodedInactiveTopics, currentTopics, hardcodedTopics], [hardcodedDices(), currentDices]);
        },

        scanExtraTopic: async function (url, spaceName = "Zona Especial") {
            const topicKey = extractTopicKey(url);
            if (!topicKey) {
                console.error("URL inválida. Asegúrate de pasar la URL del tema (ej: /t15-tema)");
                return;
            }

            console.log(`%c[DBModule] Iniciando escaneo de: ${url}...`, "color: yellow;");

            if (!dynamicData.topics[topicKey]) {
                dynamicData.topics[topicKey] = {
                    space: spaceName,
                    url: url,
                    simpleTitle: "Tema Extra (" + topicKey + ")",
                    creator: "Sistema",
                    posts: []
                };
            } else {
                dynamicData.topics[topicKey].posts = [];
            }

            await scanTopicPosts(url, "Tema Extra");
            this.save();

            console.log(`%c[DBModule] ¡Tema extra escaneado y guardado! Los dados ya están en tu caché.`, "color: lime;");
        },

        exportData: function () {
            const e = this.getExport();
            console.log("%c === CONTENIDO PARA backup/data/archive-topics.js ===", "color: lime", e.temas);
            console.log("%c === CONTENIDO PARA backup/data/archive-dices.js ===", "color: cyan", e.dados);
            e.avisos.forEach(a => console.warn(a));
            console.log(`%c === CONTENIDO PARA backup/data/archive-inactive.js (${e.nInactivos} de ${e.nTotalInactivos}) ===`, "color: orange", e.inactivos);
            console.log("Después: node workers/data-api/scripts/sync.mjs archive_topics archive_dices archive_inactive --remote --delete, revisar y repetir con --apply");
        },

        // Lo mismo que exportData, pero devuelve los textos (la limpieza los ofrece con botones de copiar)
        getExport: function () {
            const allData = this.getUnifiedData();
            const filterBySpace = (space) => {
                const topics = Object.keys(allData.topics)
                    .filter(url => allData.topics[url].space.toLowerCase() === space)
                    .reduce((obj, key) => { obj[key] = allData.topics[key]; return obj; }, {});
                const dices = allData.dices.filter(d => d.space && d.space.toLowerCase() === space);
                return { topics, dices };
            };

            const pensadero = filterBySpace("el pensadero");
            const avisos = [];

            // Inactivos congelables: +90 días desde el último post, o a lo sumo 1 autor fuera de globalNoAdd.
            // Reemplaza archive-inactive.js entero: los que se movieron ya no salen acá, así que desaparecen solos.
            // Sus dados no se hardcodean: nadie cuenta dados fuera del pensadero.
            const noAdd = typeof globalNoAdd !== 'undefined' ? globalNoAdd : [];
            const diasDesde = (fecha) => {
                const [d, m, y] = (fecha || '').split('/').map(Number);
                return (d && m && y) ? (Date.now() - new Date(y, m - 1, d)) / 864e5 : 0;
            };
            const inactivos = filterBySpace("temas inactivos").topics;
            const congelables = {};
            for (const [key, t] of Object.entries(inactivos)) {
                if (t.replyCount == null) {
                    avisos.push(`[DBModule] "${t.simpleTitle}" (t${key}) no tiene replyCount: no se congela hasta re-escanearlo.`);
                    continue;
                }
                const autores = new Set(t.posts.map(p => p.author).filter(a => !noAdd.includes(a)));
                if (diasDesde(t.posts[t.posts.length - 1]?.date) > 90 || autores.size <= 1) congelables[key] = t;
            }
            const archivo = (variable, data) => 'const ' + variable + ' = ' + JSON.stringify(data, null, 4) + ';\n';
            const dadosPorUrl = {};
            pensadero.dices.forEach(d => { if (d.url) dadosPorUrl[d.url] = d; });
            Object.values(archiveDices).forEach(d => { if (d.url && !dadosPorUrl[d.url] && (d.space || '').toLowerCase() !== 'el pensadero') dadosPorUrl[d.url] = d; });
            return {
                temas: archivo('_archiveTopics', pensadero.topics), nTemas: Object.keys(pensadero.topics).length,
                dados: archivo('_archiveDices', dadosPorUrl), nDados: Object.keys(dadosPorUrl).length,
                inactivos: archivo('_archiveInactive', congelables), nInactivos: Object.keys(congelables).length, nTotalInactivos: Object.keys(inactivos).length,
                avisos
            };
        },

        scanCleanForum: async function (forumPath, forumName) {
            console.log(`%c[DBModule] Iniciando PURGA y ESCANEO profundo de: ${forumName}...`, "color: yellow; font-size: 14px;");

            // 1. Limpiamos cualquier dato previo de este foro en la memoria dinámica actual
            for (let key in dynamicData.topics) {
                if (dynamicData.topics[key].space === forumName) {
                    delete dynamicData.topics[key];
                }
            }
            dynamicData.dices = dynamicData.dices.filter(d => d.space !== forumName);

            // 2. Enviamos al escáner con la orden de FORZAR LECTURA (true)
            await scanForum(forumPath, forumName, true);

            // 3. Guardamos la memoria
            this.save();

            // 4. === EXPORTACIÓN AUTOMÁTICA DIRECTO A CONSOLA ===
            console.log(`%c[DBModule] ¡Foro ${forumName} escaneado! Preparando exportación...`, "color: lime; font-size: 14px;");

            const allData = this.getUnifiedData();
            const spaceLower = forumName.toLowerCase();

            const soloTemas = Object.keys(allData.topics)
                .filter(url => allData.topics[url].space.toLowerCase() === spaceLower)
                .reduce((obj, key) => { obj[key] = allData.topics[key]; return obj; }, {});

            const soloDados = allData.dices.filter(d => d.space && d.space.toLowerCase() === spaceLower);

            console.log(`%c === COPIA TUS TEMAS DE [${forumName.toUpperCase()}] ===`, "color: lime", JSON.stringify(soloTemas, null, 4));
            console.log(`%c === COPIA TUS DADOS DE [${forumName.toUpperCase()}] ===`, "color: cyan", JSON.stringify(soloDados, null, 4));

            console.log(`%cSi prefieres copiar los dados directo al portapapeles, escribe: copy(DBModule.getUnifiedData().dices.filter(d => d.space === '${forumName}'))`, "color: gray;");
        }
    };
})();

// Arranque de la base (antes vivía en stats.js, que se va a eliminar)
function startDBModule() {
    (window.bwDataReady || Promise.resolve()).then(function () { DBModule.init(); });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startDBModule);
} else {
    startDBModule();
}
