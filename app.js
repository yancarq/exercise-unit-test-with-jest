// console.log("Hello World");
//pruebas

const sum =(a,b) =>{
    return a+b;
}


//prueba
/*************************************************************/
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}


//convert to Dollar in Yen
const fromDollarToYen  = function(valueInDollar){

    // convertir de Dollar a Yen, usando reversion de Dolar a Euro para multiplicarlo por  Yen
    let  valueInYen = (valueInDollar / 1.2) * 127.9;
    //retorna valor en yens
    return valueInYen;
}

//convert to Yen in Pound
const fromYenToPound  = function(valueInYen){

    // convertir de Yen a Pounf, usando reversion de Yen  a Euro para multiplicarlo por el Pound
    let  valueInPound = (valueInYen / 127.9) * 0.8;
    //retorna valor en Pound
    return valueInPound;
}



module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };
