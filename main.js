// Vado a prendermi i valori dal form
let nameField = document.getElementById ( "name-field" );
let kmField = document.getElementById ( "km-field" );
let etaField = document.getElementById ( "select-field" );
let form = document.getElementById ( "form" );
// let btnField = document.getElementById ( "btn" )

//Vado a prendermi i valori del biglietto dove stamparli
let nome = document.getElementById ( "name" );
let select = document.getElementById ( "select" )
let carrozza = document.getElementById ( "carrozza" )
let codice = document.getElementById ( "codice" )
let costoBiglietto = document.getElementById ( "costo-biglietto" )

// variabili già presenti
let numeroRandomCarrozza = (Match.floor(Match.random() * 10))
let numeroRandomCodice = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
const euro = 0.21;
let prezzoBiglietto = (km * euro);
let prezzoBigliettoSconto1 = (prezzoBiglietto * 0.8)
let prezzoBigliettoSconto2 = (prezzoBiglietto * 0.6)

//creo la funzione
form.addEventListeren ( 'click', function(){
    
    nome.innerHTML = nameField.value
    select.innerHTML = etaField.value
    carrozza.innerHTML = 



    if (etaField < 18) {
        console.log(`${prezzoBigliettoSconto1.toFixed(2)} € è il prezzo del tuo biglietto`)
    } else if (età >= 65) {
        console.log(`${prezzoBigliettoSconto2.toFixed(2)} € è il prezzo del tuo biglietto`)
    } else {
        console.log(`${prezzoBiglietto.toFixed(2)} € è il prezzo del tuo biglietto`)
    }
})



