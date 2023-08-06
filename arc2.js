function dolaresConPesos(cantidadPesos, tipoCambio) {

    const cantidadDolares = Math.floor(cantidadPesos / tipoCambio);
  
    return cantidadDolares;
  }
  
  const cantidadPesos = 1000000; 
  const tipoCambio = 4140.21; 
  const cantidadDolares = dolaresConPesos(cantidadPesos, tipoCambio);
  console.log('Con', cantidadPesos, 'pesos, puedes adquirir', cantidadDolares, 'dólares.');