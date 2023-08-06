function calcularMontoCheque(diasViaje, costoHotelDiario, costoComidaDiario) {
    // Calcular los gastos totales para cada concepto
    const gastoHotelTotal = costoHotelDiario * diasViaje;
    const gastoComidaTotal = costoComidaDiario * diasViaje;
    const gastoOtrosTotal = 200 * diasViaje;
  
    // Calcular el monto total del cheque
    const montoTotalCheque = gastoHotelTotal + gastoComidaTotal + gastoOtrosTotal;
  
    return {
      hotel: gastoHotelTotal,
      comida: gastoComidaTotal,
      otros: gastoOtrosTotal,
      total: montoTotalCheque
    };
  }
  
  // Ejemplo de uso:
  const diasViaje = 5; // Cambia este valor por el número de días de viaje
  const costoHotelDiario = 1000; // Cambia este valor por el costo diario del hotel
  const costoComidaDiario = 250; // Cambia este valor por el costo diario de comida
  const montoCheque = calcularMontoCheque(diasViaje, costoHotelDiario, costoComidaDiario);
  console.log('Desglose del monto del cheque:');
  console.log('Gasto de hotel:', montoCheque.hotel, 'pesos');
  console.log('Gasto de comida:', montoCheque.comida, 'pesos');
  console.log('Otros gastos:', montoCheque.otros, 'pesos');
  console.log('Total del cheque:', montoCheque.total, 'pesos');