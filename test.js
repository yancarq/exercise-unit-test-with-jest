const {sum} = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});



//first
//****************************************************/ /
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})


//second

//****************************************************/ /
test("convertir de Dollar a Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yen = fromDollarToYen(3.5)

    // convertir de Dollar a Yen, usando reversion de dolar a euro para multiplicarlo por el yen
    const expected = (3.5 / 1.2) * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yen);
})


//Third

//****************************************************/ /
test("convertir de Yen a Pound should be 0.0218", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pound = fromYenToPound(3.5)

  // convertir de Yen a Pounf, usando reversion de Yen  a Euro para multiplicarlo por el Pound
    const expected = (3.5 / 127.9) * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pound);
});


///