function calcularPrecioFinal(precioOriginal) {
    // Calcular el descuento y el precio con descuento
    const descuento = precioOriginal * 0.2; // 20% de descuento
    const precioConDescuento = precioOriginal - descuento;
  
    // Calcular el impuesto (IVA) y el precio final
    const impuestoIVA = precioConDescuento * 0.15; // 15% de IVA
    const precioFinal = precioConDescuento + impuestoIVA;
  
    return {
      precioConDescuento,
      precioFinal
    };
  }
  
  // Ejemplo de uso:
  const precioOriginalArticulo = 100000; // Cambia este valor por el precio original del artículo
  const precios = calcularPrecioFinal(precioOriginalArticulo);
  console.log('Precio con descuento:', precios.precioConDescuento);
  console.log('Precio final (con descuento e IVA):', precios.precioFinal);