const ageEl = document.getElementById(`age`);
const kmEl = document.getElementById(`km`);
const btnEl = document.querySelector(`btn`);

const formEl = document.querySelector(`form`)

const prezzoEl = document.getElementById(`prezzo`)
const cardPriceEl = document.getElementById(`cardPrice`)
const amountEl = document.getElementById(`amount`)


//aggiungere submit al form

//aggiungere la proprietà .value agli elementi input 
//per restituire ciò che l'utente andrà a digitare
formEl.addEventListener(`submit`, function (e) {
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
    console.log(price);

    // definire i parametri per gli sconti in base all'età
    if (ageEl.value < 18) {

        message = `Offerta Under18. (-20%)`
        total = price - (price * 0.2)

    } else if (ageEl.value > 64) {

        message = `Offerta Over65 (-40%)`
        total = price - (price * 0.4)

    } else {

        message = `Biglietto standard`
        total = price
    }


    console.log(message);
    console.log(total.toFixed(2) + " " + `€`);


    const amountEl = document.getElementById("amount");
    amountEl.textContent = `Tratta: €${price} - ${message} - Totale: €${total.toFixed(2)}`;

})


//input element
const nomEl = document.getElementById(`nom`)
const surEl = document.getElementById(`sur`)
const depEl = document.getElementById(`dep`)
const destEl = document.getElementById(`dest`)

//da sostituire
const firstEl = document.getElementById(`first`)
const surnameEl = document.getElementById(`surname`)
const fromEl = document.getElementById(`from`)
const toEl = document.getElementById(`to`)
const ticketEl = document.getElementById(`ticket`)

const codEl = document.getElementById(`cod`)
const coachEl = document.getElementById(`coach`)
const seatEl = document.getElementById(`seat`)



//aggiungere output seconda card
formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nomEl.value;
    const surname = surEl.value;
    const departure = depEl.value;
    const destination = destEl.value;

    firstEl.textContent = name;
    surnameEl.textContent = surname;
    fromEl.textContent = departure;
    toEl.textContent = destination;

    //calcolo casuale 
    const train = Math.floor(Math.random() * 5000) + 1000;
    const spot = Math.floor(Math.random() * 50) + 1;
    const vag = Math.floor(Math.random() * 8) + 1;

    codEl.textContent = train;
    seatEl.textContent = spot;
    coachEl.textContent = vag;

});



