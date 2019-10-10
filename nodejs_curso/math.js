const Math = {};

function sumar(x1,x2){
    return x1 + x2;
}

function restar(x1,x2){
    return x1 - x2;
}

function multiplicacion(x1,x2){
    return x1 * x2;
}

function division(x1,x2){
    if(x2 == 0){
        console.log('No se puede dividir por 0');
    }else{
        return x1/x2;
    }
}

Math.suma = sumar;
Math.resta = restar;
Math.multi = multiplicacion;
Math.division = division;

module.exports = Math;