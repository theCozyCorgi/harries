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