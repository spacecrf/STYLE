document.getElementById('routineForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se recargue al enviarlo

    // Obtener valores de los campos del formulario
    const goal = document.getElementById('goal').value;
    const activityLevel = document.getElementById('activity').value;

    // Generar rutina según los valores seleccionados
    let routineText = '';

    if (goal === 'perder peso') {
        if (activityLevel === 'bajo') {
            routineText = '<p><strong>Objetivo: Perder peso</strong><br>Realiza caminatas de 30 minutos 3 veces por semana y ejercicios de fuerza ligeros (pesas o resistencia) 2 veces por semana.</p>';
        } else if (activityLevel === 'medio') {
            routineText = '<p><strong>Objetivo: Perder peso</strong><br>Haz ejercicio cardiovascular de 45 minutos (como correr o nadar) 4 veces a la semana, combinado con ejercicios de fuerza 3 veces por semana.</p>';
        } else if (activityLevel === 'alto') {
            routineText = '<p><strong>Objetivo: Perder peso</strong><br>Entrenamientos HIIT (entrenamiento de alta intensidad) 4 veces por semana, con rutinas de fuerza pesadas 3 veces a la semana para maximizar la quema de grasa.</p>';
        }
    } else if (goal === 'ganar músculo') {
        if (activityLevel === 'bajo') {
            routineText = '<p><strong>Objetivo: Ganar músculo</strong><br>Realiza entrenamientos de fuerza de 2-3 veces por semana con pesas ligeras y una dieta rica en proteínas para estimular el crecimiento muscular.</p>';
        } else if (activityLevel === 'medio') {
            routineText = '<p><strong>Objetivo: Ganar músculo</strong><br>Entrenamientos de fuerza de 3-4 veces por semana, utilizando pesas moderadas. Come un excedente calórico con proteínas de alta calidad para la recuperación muscular.</p>';
        } else if (activityLevel === 'alto') {
            routineText = '<p><strong>Objetivo: Ganar músculo</strong><br>Realiza entrenamientos de fuerza 4-5 veces por semana con pesas pesadas, añadiendo ejercicios de aislamiento. Asegúrate de seguir una dieta altamente calórica para maximizar el crecimiento muscular.</p>';
        }
    } else if (goal === 'mantener forma') {
        if (activityLevel === 'bajo') {
            routineText = '<p><strong>Objetivo: Mantener forma</strong><br>Haz ejercicios moderados como caminatas o bicicleta 2-3 veces por semana y ejercicios de fuerza 1-2 veces a la semana.</p>';
        } else if (activityLevel === 'medio') {
            routineText = '<p><strong>Objetivo: Mantener forma</strong><br>Realiza ejercicios cardiovasculares de 30 minutos 3-4 veces por semana y entrenamiento de fuerza moderado 2-3 veces por semana.</p>';
        } else if (activityLevel === 'alto') {
            routineText = '<p><strong>Objetivo: Mantener forma</strong><br>Entrenamientos HIIT 3-4 veces por semana, combinados con ejercicios de fuerza 2-3 veces por semana. Mantén una dieta equilibrada.</p>';
        }
    }

    // Mostrar la rutina generada
    document.getElementById('routineDetails').innerHTML = routineText;
    document.getElementById('routineOutput').style.display = 'block';
});
