//Pregunta 2//
//respuesta 1 && 3//
function calcTip (factura,porcentaje){
    let aux=porcentaje/100;
    return factura*aux;    
}
var tip= 20;
var porcen=calcularPorcent(tip);
//imprimirPropina(tip,calcTip(tip,porcen));
//////////////
//respuesta 2//
function imprimirPropina(factura,prop){
    let monTotal = factura+prop;
    return console.log(factura,prop,monTotal);
}
//////////////
function totalTodo(factura,prop){
    return factura+prop;
}
function calcularPorcent(factura){
    let a= (factura>=50 && factura<=300)? 15 : (factura>300)? 20 : 0;
    return a;
}
//respuesta 4 && 5//
var det_fac_prop = {
    facturas :[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
    propinas : [],
    totales : [],
}
//////////////
//respuesta 6//
for(var i=0;i<det_fac_prop.facturas.length;i++){
    let aux1=calcularPorcent(det_fac_prop.facturas[i]);
    console.log(aux1);
    let aux2=calcTip(det_fac_prop.facturas[i],aux1);
    console.log(aux2);
    det_fac_prop.propinas.push(aux2);
    let aux3=totalTodo(det_fac_prop.facturas[i],aux2);
    det_fac_prop.totales.push(aux3);    
}
console.log(det_fac_prop);
/////////////


