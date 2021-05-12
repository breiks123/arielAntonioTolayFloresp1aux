//pregunta 1 and 3//
function calcTip(factura, porcentaje) {
    var aux = porcentaje / 100;
    return factura * aux;
}
var tip = 20;
var porcen = calcularPorcent(tip);
//imprimirPropina(tip,calcTip(tip,porcen));
//////////////
//pregunta 2//
function imprimirPropina(factura, prop) {
    var monTotal = factura + prop;
    return console.log(factura, prop, monTotal);
}
function Total(factura, prop) {
    return factura + prop;
}
/////////////
function calcularPorcent(factura) {
    var a = (factura >= 50 && factura <= 300) ? 15 : (factura > 300) ? 20 : 0;
    return a;
}
//pregunta 4 and 5//
var det_fac_prop = {
    facturas: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
    propinas: [],
    totales: []
};
//////////////
//pregunta 6//
for (var i = 0; i < det_fac_prop.facturas.length; i++) {
    var aux1 = calcularPorcent(det_fac_prop.facturas[i]);
    console.log(aux1);
    var aux2 = calcTip(det_fac_prop.facturas[i], aux1);
    console.log(aux2);
    det_fac_prop.propinas.push(aux2);
    var aux3 = Total(det_fac_prop.facturas[i], aux2);
    det_fac_prop.totales.push(aux3);
}
console.log(det_fac_prop);
/////////////
