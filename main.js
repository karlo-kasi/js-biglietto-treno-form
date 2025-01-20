// Vado a prendermi i valori dal form
let nameField = document.getElementById ( "name-field" );
let kmField = document.getElementById ( "km-field" );
let etaField = document.getElementById ( "select-field" );
let btn = document.getElementById ( "btn" );
// let btnField = document.getElementById ( "btn" )

//Vado a prendermi i valori del biglietto dove stamparli
let nome = document.getElementById ( "name" );
let select = document.getElementById ( "select" )
let carrozza = document.getElementById ( "carrozza" )
let codice = document.getElementById ( "codice" )
let costoBiglietto = document.getElementById ( "costo-biglietto" )

// variabili già presenti
let numeroRandomCarrozza = (Math.floor(Math.random() * 10))
let numeroRandomCodice = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
const euro = 0.21;



//creo la funzione
btn.addEventListener ( 'click', function(event){
    
    event.preventDefault()

    let nomePassegero = nameField.value
    let eta = etaField.value
    let km = parseFloat(kmField.value)
    console.log (km)

    let prezzoBiglietto = km * euro;
    let prezzoBigliettoSconto1 = prezzoBiglietto * 0.8
    let prezzoBigliettoSconto2 = prezzoBiglietto * 0.6
    let prezzoFinale 
    
    console.log (prezzoFinale)

    //condizione
    if (eta == "min") {
         prezzoFinale = prezzoBigliettoSconto1
    } else if (eta == "over") {
         prezzoFinale = prezzoBigliettoSconto2
    } else {
         prezzoFinale = prezzoBiglietto
    }

    

    // inserisco i dati che mi ha dato il form
    nome.innerHTML = nomePassegero
    select.innerHTML = etaField.value
    carrozza.innerHTML = numeroRandomCarrozza
    codice.innerHTML = numeroRandomCodice
    costoBiglietto.innerHTML = `${prezzoFinale} €`

})



