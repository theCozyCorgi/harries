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
 * Proporción: 1 mes Off-Rol = 6 meses On-Rol.
 */
function calculateAmbientDate() {
    const currentDate = new Date();
    
    // 1. Calculamos la diferencia de meses reales
    // (Años de diferencia * 12) + diferencia de meses
    const realMonthsPassed = (currentDate.getFullYear() - forumOpeningDate.getFullYear()) * 12 + (currentDate.getMonth() - forumOpeningDate.getMonth());
    
    // 2. Aplicamos tu lógica de avance: cada 2 meses reales pasan 6 meses on-rol (o 1 real = 3 on-rol)
    // Según tu código original: yearsInMonth (años * 6) + meses/2
    const yearsDiff = currentDate.getFullYear() - forumOpeningDate.getFullYear();
    const monthsSince = Math.trunc((currentDate.getMonth() - forumOpeningDate.getMonth()) / 2);
    const monthsToAdvance = (yearsDiff * 6) + monthsSince;

    // 3. Seteamos la fecha ambiente
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