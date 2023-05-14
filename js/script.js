function calPrecioFinal() {
    console.log("ingreso a calcular precio");

    //Cantidad de entradas
    let cantEnt=document.getElementById("Cantidad").value; 
    console.log("cantEnt: " + cantEnt);

    // Porcentaje de descuento
    let porcDesc=document.getElementById("porcDescuento").value;
    console.log("porcDesc: " + porcDesc);

    //Pesos totales a descontar
    let descuento=(cantEnt*200) * porcDesc/100;
    console.log("descuento: " + descuento);

    //Valor de las entradas x Cantidad - Descuento
    let precioTotal=(cantEnt*200) - descuento;
    console.log("preciototal: " + precioTotal);

    
    //Precio final
    document.getElementById("valorTotal").value=precioTotal;
}
