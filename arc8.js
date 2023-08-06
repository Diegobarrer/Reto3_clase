function calcularAhorroAnual(sueldo) {
    // Calcular el ahorro semanal (15% del sueldo)
    const ahorroSemanal = sueldo * 0.15;
  
    // Calcular el ahorro mensual (ahorro semanal * 4 semanas)
    const ahorroMensual = ahorroSemanal * 4;
  
    // Calcular el ahorro anual (ahorro mensual * 12 meses)
    const ahorroAnual = ahorroMensual * 12;
  
    return ahorroAnual;
  }
  
  // Ejemplo de uso:
  const sueldoMensual = 1000; // Cambia este valor por el sueldo mensual de la persona
  const ahorroTotalAnual = calcularAhorroAnual(sueldoMensual);
  console.log('El ahorro total anual es:', ahorroTotalAnual, 'pesos.');