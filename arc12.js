function calcularFormasPago(valorCompra) {
    const unaCuota = valorCompra;
  
    const dosCuotas = valorCompra / 2;
    const totalDosCuotas = valorCompra * 1.05;
  
    const seisCuotas = (valorCompra / 6).toFixed(2);
  const totalSeisCuotas = (valorCompra * 1.40).toFixed(2);
  
    return {
      unaCuota,
      dosCuotas,
      totalDosCuotas,
      seisCuotas,
      totalSeisCuotas
    };
  }
  
  const valorCompra = 1000000; 
  const formasPago = calcularFormasPago(valorCompra);
  console.log('Formas de pago posibles:');
  console.log('1 cuota de $', formasPago.unaCuota);
  console.log('2 cuotas de $', formasPago.dosCuotas, 'total $', formasPago.totalDosCuotas);
  console.log('6 cuotas de $', formasPago.seisCuotas, 'total $', formasPago.totalSeisCuotas);