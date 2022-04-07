//DICHIARAZIONE VARIABILI
const userDistance = parseInt(prompt('Quanti chilometri deve percorrere?'));
const userAge = parseInt(prompt('Quanti anni ha?'));
const kmPrice = 0.21;
//CALCOLO COSTO VIAGGIO
let journeyCost = userDistance * kmPrice;

//CALCOLO COSTO VIAGGIO RISPETTO ALL'ETA'
let finalCost;

if(userAge < 18){
    finalCost = Math.floor((journeyCost / 100) * 20); 
}else if (userAge > 65) {
    finalCost = Math.floor((journeyCost / 100) * 40);
} else {
    finalCost = journeyCost;
}

//STAMPA RISULTATO SULLE SCHERMO

document.getElementById('demo').innerHTML = `IL COSTO DEL BIGLIETTO E' ${finalCost} €`;



