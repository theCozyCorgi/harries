const DBModule = (function () {
    const noAdd = ["Black Wave", "Wolfsbane", "Asphodel", "Belladonna", "Gillyweed", "The Familiars"];
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

    const CACHE_KEY = 'blackwave_db_cache_v7';
    const INDEX_KEY = 'current_index_blackwave_v7';
    const CACHE_DURATION = 2 * 60 * 60 * 1000;

    const hardcodedTopics = {};
    const hardcodedBeans = [
        {
            "pitcher": "Orion A. Black",
            "spread": [
                15
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Orion A. Black ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro15\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Caramelo</strong>Sumas un punto de conocimiento en Adivinación.</span></div></div></div>",
            "url": "r1295",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Cora M. Vance",
            "spread": [
                1
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Cora M. Vance ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro1\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Cera de Oídos</strong>A Dumbledore tampoco le gustan, lo sentimos, aquí no hay nada.</span></div></div></div>",
            "url": "r1297",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Asteria C. Lestrange",
            "spread": [
                11
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Asteria C. Lestrange ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro11\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Limón</strong>Sumas un punto de conocimiento en Transformaciones.</span></div></div></div>",
            "url": "r1301",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Aria J. Fawley",
            "spread": [
                7
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Aria J. Fawley ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro7\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Coco</strong>Sumas un punto de conocimiento en Runas Antiguas.</span></div></div></div>",
            "url": "r1303",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Raven Walters",
            "spread": [
                16
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Raven Walters ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro16\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Miel</strong>Sumas un punto de conocimiento en Aritmancia.</span></div></div></div>",
            "url": "r1307",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Vasilisa M. Kuznetzova",
            "spread": [
                9
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Vasilisa M. Kuznetzova ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro9\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Fresa</strong>Sumas un punto de conocimiento en Astronomía.</span></div></div></div>",
            "url": "r1311",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Cassiopea C. Black",
            "spread": [
                16
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Cassiopea C. Black ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro16\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Miel</strong>Sumas un punto de conocimiento en Aritmancia.</span></div></div></div>",
            "url": "r1314",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Walburga S. Black",
            "spread": [
                3
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Walburga S. Black ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro3\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Pasto</strong>Sumas un punto de conocimiento en CCM.</span></div></div></div>",
            "url": "r1316",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Regulus O. Black",
            "spread": [
                20
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Regulus O. Black ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro20\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Tutti frutti</strong>Ganas 200 Galeones y puedes indicar en qué conocimiento ganas un punto de conocimiento.</span></div></div></div>",
            "url": "r1346",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Minerva E. McGonagall",
            "spread": [
                8
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Minerva E. McGonagall ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro8\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Chocolate</strong>Sumas un punto de conocimiento en Arte.</span></div></div></div>",
            "url": "r1350",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "H. Shun Parkinson",
            "spread": [
                3
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>H. Shun Parkinson ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro3\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Pasto</strong>Sumas un punto de conocimiento en CCM.</span></div></div></div>",
            "url": "r1352",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Findlay McCrory",
            "spread": [
                6
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Findlay McCrory ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro6\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Malvavisco</strong>Sumas un punto de conocimiento en Alquimia.</span></div></div></div>",
            "url": "r1393",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Alastor Moody",
            "spread": [
                15
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Alastor Moody ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro15\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Caramelo</strong>Sumas un punto de conocimiento en Adivinación.</span></div></div></div>",
            "url": "r1406",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Cuthbert S. Selwyn",
            "spread": [
                9
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Cuthbert S. Selwyn ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro9\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Fresa</strong>Sumas un punto de conocimiento en Astronomía.</span></div></div></div>",
            "url": "r1611",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Adamantius Lovegood",
            "spread": [
                20
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Adamantius Lovegood ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro20\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Tutti frutti</strong>Ganas 200 Galeones y puedes indicar en qué conocimiento ganas un punto de conocimiento.</span></div></div></div>",
            "url": "r1771",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Dominicus R. Lestrange",
            "spread": [
                2
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Dominicus R. Lestrange ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro2\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Tinta</strong>Sumas un punto de conocimiento en Historia de la Magia.</span></div></div></div>",
            "url": "r1916",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        },
        {
            "pitcher": "Kaoru Satoo",
            "spread": [
                17
            ],
            "title": "grageas",
            "key": "",
            "knowledge": "",
            "type": "",
            "html": "<div class=\"dice\"><span class=\"dice-header\">Lanzada de dados</span><div class=\"dice-roll roll-grageas\"><span>Kaoru Satoo ha lanzado los dados \"grageas\"</span><div class=\"dice-results\"><span class=\"roll-result nro17\"><i class=\"game-icon game-icon-jelly-beans\"></i><strong>Gragea de Canela</strong>Sumas un punto de conocimiento en Curación.</span></div></div></div>",
            "url": "r2508",
            "simpleTitle": "Tema Extra (276)",
            "space": "Zona de Grageas"
        }
    ];
    const hardcodedDicesTopics = [];

    // hardcodedDices is hardcodedDicesTopics + hardcodedBeans
    const hardcodedDices = [...hardcodedDicesTopics, ...hardcodedBeans];

    // === DATOS DINÁMICOS (Lo único que va al Storage) ===
    let dynamicData = {
        topics: {},
        dices: []
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    function normalizeDate(text) {
        if (!text) return "";
        let t = text.trim();

        // FIX Bug 2: declarar todas las variables localmente
        let dia, mes, anio;

        const meses = {
            "ene": "01", "feb": "02", "mar": "03", "abr": "04", "may": "05", "jun": "06",
            "jul": "07", "ago": "08", "sep": "09", "oct": "10", "nov": "11", "dic": "12",
            "enero": "01", "febrero": "02", "marzo": "03", "abril": "04", "mayo": "05", "junio": "06",
            "julio": "07", "agosto": "08", "septiembre": "09", "octubre": "10", "noviembre": "11", "diciembre": "12"
        };

        let match;

        // Formato [AAAA/MM/DD]
        match = t.match(/\[(\d{4})\/(\d{2})\/(\d{2})\]/);
        if (match) return `${match[3]}/${match[2]}/${match[1]}`;

        // Formato: Miér 04 Jun 2025...
        match = t.match(/^[a-záéí]{3,}\s+(\d{2})\s+([a-záéí]{3,})\s+(\d{4})/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase().substring(0, 3)];
            anio = match[3];
            return (dia && mes && anio) ? `${dia}/${mes}/${anio}` : t;
        }

        // Formato: Sábado 26 Julio 1952
        match = t.match(/(\d{1,2})\s+([a-záéíóúñ]+)\s+(\d{4})/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = match[3];
            return (dia && mes && anio) ? `${dia}/${mes}/${anio}` : t;
        }

        // Formato: 3 de Octubre (sin año → año actual)
        match = t.match(/^(\d{1,2})\s+de\s+([a-z]+)$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
            anio = currentAmbientDate.getFullYear();
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

        // Formato: 3.octubre.1952
        match = t.match(/^(\d{1,2})\.([a-z]+)\.(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
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

        // Formato: 20 de septiembre de 1952
        match = t.match(/^(\d{1,2})\s+de\s+([a-z]+)\s+de\s+(\d{4})$/i);
        if (match) {
            dia = match[1].padStart(2, '0');
            mes = meses[match[2].toLowerCase()];
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

        return t;
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

    async function scanForum(url, forumName) {
        if (!url) return;
        await delay(1500);
        const response = await $.get(url);
        const $data = $(response);
        const topicElements = $data.find('.topic').toArray();

        for (let element of topicElements) {
            const $link = $(element).find('.topictitle');
            const fullUrl = $link.attr('href');
            if (!fullUrl) continue;

            // FIX Bug 1: usar extractTopicKey consistentemente
            const topicKey = extractTopicKey(fullUrl);
            if (!topicKey) continue;

            if (!hardcodedTopics[topicKey] && !dynamicData.topics[topicKey]) {
                console.log(`Analizando tema dinámico: ${$link.text()}`);
                dynamicData.topics[topicKey] = {
                    space: forumName,
                    url: fullUrl,
                    simpleTitle: sanitizeTitle($link.text()),
                    creator: $(element).find('.topic-started a').text(),
                    posts: []
                };
                await scanTopicPosts(fullUrl, $link.text());
            }
        }

        const $nextPageLink = $data.find('.pagination .sprite-arrow_prosilver_right').parent('a');
        const nextUrl = $nextPageLink.attr('href');
        if (nextUrl) await scanForum(nextUrl, forumName);
    }

    async function scanTopicPosts(url, originalTitle) {
        if (!url) return;
        await delay(2000);
        const response = await $.get(url);
        const $data = $(response);

        const topicKey = extractTopicKey(url);
        if (!topicKey) return;

        // FIX: Cambiamos el .each() por un bucle for...of para poder usar await
        const replies = $data.find('.viewtopic-replies').toArray();

        for (let reply of replies) {
            const $post = $(reply);
            const postId = $post.find('.go-to').attr('id');
            const postDateText = $post.find('.post-action span[title]').attr('title');

            if (!dynamicData.topics[topicKey]?.date) {
                let ambientDate = normalizeDate(originalTitle);
                if (ambientDate === originalTitle) {
                    ambientDate = normalizeDate($post.find('fecha').text());
                }
                dynamicData.topics[topicKey].date = ambientDate;
                dynamicData.topics[topicKey].location = $post.find('lugar').text() || "Desconocida";
            }

            dynamicData.topics[topicKey].posts.push({
                url: `r${postId}`,
                author: $post.find('.poster-name').text().trim(),
                date: normalizeDate(postDateText),
                words: countWords($post.find('.rol-content'))
            });

            // === EXTRACCIÓN DE DADOS MEJORADA (DBModule) ===
            const rolesDivs = $post.find('.content:contains("Lanzada de dados"), .content:contains("ha efectuado la acción siguiente")').toArray();

            for (const roleDiv of rolesDivs) {
                let htmlStr = $(roleDiv).html();
                if (!htmlStr.includes('<hr>')) continue;

                let h = htmlStr.split('<hr>')[0];
                let c = htmlStr.split('<hr>')[1];

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

                    // Extraemos el número del resultado
                    let matchResult = $(lc).text().match(/:\s*(\d+)/);
                    if (matchResult) {
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

                    dynamicData.dices.push({
                        pitcher,
                        spread,
                        title: metaData.target || diceTitle,
                        key: metaData.key || "",
                        knowledge: metaData.know || "",
                        type: metaData.type || "",
                        html: htmlResult,
                        url: 'r' + postId.replace('p', ''),
                        simpleTitle: dynamicData.topics[topicKey].simpleTitle,
                        space: dynamicData.topics[topicKey].space
                    });
                }
            }
        }

        const $nextPageLink = $data.find('.pagination .sprite-arrow_prosilver_right').parent('a');
        const nextUrl = $nextPageLink.attr('href');
        if (nextUrl) await scanTopicPosts(nextUrl, originalTitle);
    }

    return {
        normalizeDate,

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
            const $widget = $('<div class="updateDB db-update-widget"><span class="update-message"></span><div class="update-button"><i class="fa-jelly-duo fa-regular fa-arrow-rotate-right"></i></div></div>');

            // 2. Buscamos las partes internas
            const $updateBox = $widget.find('.update-message');
            const $buttonBox = $widget.find('.update-button');

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
            $updateBox.append('<zones>Zonas Actualizadas: ' + (last.zones) + ' / 18</zones>');
            $buttonBox.attr('title', 'Actualizar Base de Datos');

            // 4. Guardamos la referencia al DBModule para usarla dentro del click
            const self = this;

            // 5. Adherimos el evento click al botón ANTES de insertarlo en la página
            $buttonBox.click(async function () {
                const $btn = $(this);

                if ($btn.prop('disabled') || $btn.hasClass('disabled')) return;
                $btn.prop('disabled', true).addClass('disabled').css({ opacity: 0.5, cursor: 'not-allowed' });

                $updateBox.find('note').remove();
                const $note = $('<note>Iniciando actualización...</note>');
                $updateBox.append($note);

                await self.fullSweep(function (mensajeProgreso) {
                    console.log("%c[DBModule Progress] " + mensajeProgreso, "color: cyan;");

                    let textoLimpio = mensajeProgreso
                        .replace('[Foro ', 'Procesando zona ')
                        .replace('] Analizando:', ':');

                    $note.text(textoLimpio);
                });

                $note.text('¡Actualización completada con éxito!');
                $btn.prop('disabled', false).removeClass('disabled').css({ opacity: 1, cursor: 'pointer' });
                setTimeout(() => location.reload(), 1500);
            });

            // 6. Devolvemos el widget completamente funcional
            return $widget;
        },

        init: async function () {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('blackwave_') && key !== CACHE_KEY) {
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

            const currentForum = forums[currentIndex];

            if (currentForum.name !== 'el pensadero') {
                console.log(`[Bloque ${currentIndex + 1}/${forums.length}] Procesando: ${currentForum.name}`);
                await scanForum(currentForum.path, currentForum.name);
            }

            this.save();
            localStorage.setItem(INDEX_KEY, currentIndex + 1);
            $(document).trigger("dbBlockFinished");
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

        fullSweep: async function (progressCallback) {
            if (!progressCallback) {
                console.log("%c[DBModule] Iniciando BARRIDO COMPLETO (Modo Consola)...", "color: yellow; font-size: 14px;");
            }

            // === LA MAGIA: VACIAMOS LA MEMORIA RAM ANTES DE EMPEZAR ===
            dynamicData = { topics: {}, dices: [] };
            // ==========================================================

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

            const safeCurrentDices = Array.isArray(currentDices) ? currentDices : [];
            const safeHardDices = Array.isArray(hardcodedDices) ? hardcodedDices : [];

            // --- FIX DADOS DUPLICADOS ---
            const allDices = [...safeHardDices, ...safeCurrentDices];
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
            const mergedTopicsRaw = { ...hardcodedTopics, ...currentTopics };
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
            }

            return {
                topics: cleanTopics,
                dices: Array.from(uniqueDicesMap.values())
            };
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
            const allData = this.getUnifiedData();
            const filterBySpace = (space) => {
                const topics = Object.keys(allData.topics)
                    .filter(url => allData.topics[url].space.toLowerCase() === space)
                    .reduce((obj, key) => { obj[key] = allData.topics[key]; return obj; }, {});
                const dices = allData.dices.filter(d => d.space && d.space.toLowerCase() === space);
                return { topics, dices };
            };

            const pensadero = filterBySpace("el pensadero");
            console.log("%c === COPIA EN hardcodedTopics ===", "color: lime", JSON.stringify(pensadero.topics, null, 2));
            console.log("%c === COPIA EN hardcodedDices ===", "color: cyan", JSON.stringify(pensadero.dices, null, 2));
        }
    };
})();