function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
  
    const edad = anioActual - anioNacimiento;
  
    return edad;
  }
  
  const anioNacimiento = 1990; 
  const edadPersona = calcularEdad(anioNacimiento);
  console.log('La persona tiene', edadPersona, 'años de edad.');