function calcularPromedio(primerExamen, segundoExamen, tercerExamen) {
    const promedioPonderado12 = (primerExamen * 0.25) + (segundoExamen * 0.25);
  
    const promedioPonderado3 = tercerExamen * 0.5;
    const promedioFinal = promedioPonderado12 + promedioPonderado3;
  
    return promedioFinal;
  }
  
  
  const examen1 = 80;
  const examen2 = 90; 
  const examen3 = 70; 
  const promedioAlumno = calcularPromedio(examen1, examen2, examen3);
  console.log('El promedio del alumno es:', promedioAlumno);