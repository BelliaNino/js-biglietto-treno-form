const ageEl = document.getElementById(`age`);
const kmEl = document.getElementById(`km`);
const btnEl = document.querySelector(`btn`);

const formEl = document.querySelector(`form`)

//aggiungere submit al form

//aggiungere la proprietà .value agli elementi input 
//per restituire ciò che l'utente andrà a digitare
formEl.addEventListener(`submit`, function(e){
    e.preventDefault()
    console.log(ageEl.value);
    console.log(kmEl.value);
    
console.log(ageEl, ageEl.value);
console.log(kmEl, kmEl.value);

// definire il rapporto km/euro
const exkm = 0.21
console.log(exkm);


// definire il prezzo moltiplicando km/euro per la distanza 
const price = (kmEl.value * exkm);
console.log (price);

// definire i parametri per gli sconti in base all'età
if(ageEl.value < 18){

message = `Get 20% off`
total = price - (price * 0.2) 

} else if (ageEl.value > 64){

message = `Get 40% off`
total = price - (price * 0.4)

} else {

message = `You don't have any discount`
total = price
}

console.log(message);
console.log(total.toFixed(2) + " " + `€`);

})

