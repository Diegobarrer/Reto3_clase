function calcularHipotenusa(cateto1, cateto2) {


    // Calcular la hipotenusa utilizando la fórmula de Pitágoras
    const hipotenusa = Math.round(cateto1 * 2 + cateto2 * 2);
  
    return hipotenusa;
  }
  
  // Ejemplo de uso:
  const cateto1 = 3; 
  const cateto2 = 4; 
  const hipotenusaTriangulo = calcularHipotenusa(cateto1, cateto2);
  console.log('La hipotenusa del triángulo rectángulo es:', hipotenusaTriangulo);