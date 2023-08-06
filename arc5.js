function calcularCostoPintura(metrosCuadrados, precioPorMetroCuadrado) {
    // Calcular el costo total
    const costoTotal = metrosCuadrados * precioPorMetroCuadrado;
  
    return costoTotal;
  }
  
  // Ejemplo de uso:
  const metrosCuadrados = 100; // Cambia este valor por la cantidad de metros cuadrados del trabajo de pintura
  const precioPorMetroCuadrado = 2400; // Cambia este valor según el precio por metro cuadrado establecido por la empresa
  const costoTotalPintura = calcularCostoPintura(metrosCuadrados, precioPorMetroCuadrado);
  console.log('El costo total del trabajo de pintura es de', costoTotalPintura, 'pesos.');