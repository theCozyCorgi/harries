// CONFIGURACIÓN INICIAL
const forumOpeningDate = new Date(2025, 4, 2);    // 2 de Mayo 2025
const initialAmbientDate = new Date(1952, 8, 1); // 1 de Septiembre 1952
const monthsNamesES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

// VARIABLES GLOBALES (Para usar en otros scripts)
let currentAmbientDate; 
let ambientMonth; 

/**
 * Calcula la fecha On-Rol basada en el tiempo transcurrido Off-Rol.
 */
function calculateAmbientDate() {
    const currentDate = new Date();
    
    // 1. Calculamos la diferencia TOTAL de meses reales desde que la niebla cubrió el foro
    const realMonthsPassed = (currentDate.getFullYear() - forumOpeningDate.getFullYear()) * 12 
                           + (currentDate.getMonth() - forumOpeningDate.getMonth());
    
    // 2. Aplicamos la lógica de avance inquebrantable
    // Al sumar 1 antes de dividir y redondear hacia abajo, forzamos a que 
    // pares de meses (ej. Agosto/Septiembre) caigan en la misma ranura del mes On-Rol.
    const monthsToAdvance = Math.floor((realMonthsPassed + 1) / 2);

    // 3. Seteamos la fecha ambiente y dejamos que el objeto Date maneje el cambio de año
    currentAmbientDate = new Date(initialAmbientDate);
    currentAmbientDate.setMonth(initialAmbientDate.getMonth() + monthsToAdvance);
    
    // 4. Guardamos el nombre del mes
    ambientMonth = monthsNamesES[currentAmbientDate.getMonth()];
    
    return {
        date: currentAmbientDate,
        monthName: ambientMonth,
        year: currentAmbientDate.getFullYear()
    };
}

// Ejecutar inmediatamente para que las variables estén listas
calculateAmbientDate();

// === VARIABLES GLOBALES COMPARTIDAS ===
// Todo lo que empieza con "global" vive acá para que sea fácil rastrear
// de dónde sale cuando se lee el código de backup/codes o backup/pages.
// Este archivo es de git, así que un cambio acá puede tardar unos minutos
// en impactar en FA: esperar antes de actualizar los temas que lo consumen.

const globalNoAdd = ["Black Wave", "Wolfsbane", "Dittany", "Belladonna", "Valerian", "The Familiars"];

const globalCasas = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];

const globalAttrAbbr = {
  'carisma': 'car', 'constitución': 'con', 'destreza': 'des',
  'fuerza': 'fue', 'inteligencia': 'int', 'sabiduría': 'sab'
};

const globalKnowledgeDefaults = {
  "adivinación": 0, "alquimia": 0, "animagia": 0, "aritmancia": 0,
  "arte": 0, "astronomía": 0, "ccm": 0, "combate físico": 0,
  "contrabando": 0, "curación": 0, "dcao": 0, "encantamientos": 0,
  "estudios muggles": 0, "herbología": 0, "historia de la magia": 0,
  "legeremancia": 0, "liderazgo": 0, "magia oscura": 0,
  "magia sin varita": 0, "metamorfomagia": 0, "música": 0,
  "oclumancia": 0, "pociones": 0, "runas antiguas": 0,
  "transformaciones": 0, "videncia": 0, "vuelo": 0
};

// Período de la experiencia de un personaje (characters.js → experiencia[].entre).
// Formatos: "1946-1952", "1946-Actualidad", "07/1953-Actualidad", "09/1946-06/1953" y mezclados ("1946-06/1953").
// Es tolerante para que siempre funcione:
// - un mes que no va (00, 13…) se ignora y queda solo el año ("13/1953" → 1953);
// - un final que no se puede leer como fecha ("act", "hoy", vacío) cuenta como Actualidad;
// - un solo año sin final ("1953") también cuenta como "1953-Actualidad".
// Devuelve { from, fromMonth, to, toMonth } (mes = null si no se escribió o no va; to = null si es Actualidad),
// o null si ni siquiera el inicio tiene un año, o si el final es anterior al inicio.
function globalPeriod(text) {
  const readSide = function (s) {
    s = String(s || '').trim();
    let m = /(\d{1,2})\s*\/\s*(\d{4})/.exec(s);
    if (m) { return { year: +m[2], month: (+m[1] >= 1 && +m[1] <= 12) ? +m[1] : null }; }
    m = /(\d{4})/.exec(s);
    return m ? { year: +m[1], month: null } : null;
  };
  const parts = String(text || '').split('-');
  const start = readSide(parts[0]);
  if (!start) { return null; }
  const end = parts.length > 1 ? readSide(parts.slice(1).join('-')) : null;
  if (end) {
    if (end.year < start.year) { return null; }
    if (end.year === start.year && start.month && end.month && end.month < start.month) { return null; }
  }
  return {
    from: start.year, fromMonth: start.month,
    to: end ? end.year : null, toMonth: end ? end.month : null
  };
}

function globalCalcularEdad(nac, amb, useDay = false) {
  let birthYear = nac.getFullYear();
  let birthMonth = nac.getMonth();
  let birthDay = nac.getDate();

  let currentYear = amb.getFullYear();
  let currentMonth = amb.getMonth();
  let currentDay = amb.getDate();

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (useDay && currentMonth === birthMonth && currentDay <= birthDay)
  ) {
    age--;
  }

  return age;
}