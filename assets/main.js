// -------------------- VARIABLES ------------------------

let ammount = prompt("Ingrese el monto a pagar");
let ammountParsed = parseInt(ammount);
console.log(ammountParsed)

// -------------------- FUNCIONES ------------------------


function calcIva() {
    iva = ((ammountParsed*21)/100);
    finalPrice = ammountParsed + iva;
    alert(`El precio final con iva es ${finalPrice}`)
    console.log(finalPrice);
};

function numeroPar() {
    if ((ammountParsed % 2 === 0)){
        alert("EL NUMERO INGRESADO ES PAR")
    } else {
        alert("EL NUMERO INGRESADO ES IMPAR")
    };
};

function discount () {
    if (ammountParsed > 500) {
        let newPriceDisc = (finalPrice*10)/100;
        let newPrice = finalPrice - newPriceDisc;
        alert(`Tenemos una sorpresa para voss!!!!. Te hemos regalado un 10% de descuento, el precio final del producto con iva es: ${newPrice}`);
    };
};

// -------------------- LLAMADA DE FUNCIONES ------------------------

// 1 - Calculo el iva 
calcIva();
// 2 - Detecto si es numero par
numeroPar();
// 3 - Ofrezco descuento
discount();



