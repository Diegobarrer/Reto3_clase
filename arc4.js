function calcularCobroEstacionamiento(horas) {
    
    const tarifaPorHora = 10000; 
  
    
    const horasCompletas = Math.ceil(horas);
  
    const cobroTotal = horasCompletas * tarifaPorHora;
  
    return cobroTotal;
  }
  
  const horasDeUso = 4;
  const cobroTotalEstacionamiento = calcularCobroEstacionamiento(horasDeUso);
  console.log('El cobro por', horasDeUso, 'horas de uso del estacionamiento es de', cobroTotalEstacionamiento, 'pesos.');