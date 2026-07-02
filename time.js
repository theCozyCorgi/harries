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