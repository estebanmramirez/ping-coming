/*let user = {
    name: 'Jhon',
    age: 30
};

let userP = new Object();
userP.name = 'Jhon';
userP.surname = 'Smith';
userP.name = 'Pete';
delete userP.name;

console.log(userP);

document.getElementById("demo").innerHTML = user.name + "," + user.age; */
/*
const nombre = "Juan";
const ticket = 2162019;

let winner = "Pedro";
let numTicket = 2162019;

function raffle (nameWinner, ticketWinner) {
    if (nameWinner === nombre || ticketWinner === ticket) {
        console.log("Tu ticket es el ganador");
    } else {
        console.log("tu ticket no es el ganador");
    }
};

raffle(winner, numTicket);*/


/*-------------------

const strings = ['perro', 'gato', 'piedad', 'chepe', 'juan'];
let targetStr = 'chepe';


function searchStr (str) {
    if (str === strings ) {
        let position = strings.indexOf(targetStr);
        console.log(position);
    }
}

searchStr(targetStr);
*/

/*

const strings = ['perro', 'gato', 'piedad', 'chepe', 'juan'];
let targetStr = strings.findIndex(searchStr);

function searchStr (value) {
    if (value === 'chepe') {
        return true;
    } 
    return false;
}

console.log(targetStr);
*/
/*
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let position = fruits.indexOf("Piña", 0);
console.log(position); */

/*
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

document.getElementById("demo").innerHTML = fruits;

function order () {
    fruits.sort();
    document.getElementById("demo").innerHTML = fruits;
}*/
/*
function mOut(obj) {
    obj.value = "Your email address..." /* si el usuario no escribe nada y aleja el mouse vuelve a colocarse el value
}*/

document.getElementById("email").addEventListener('click', function(){
    this.value = '';
}); /* listener para quitar el value por defecto en el input*/

document.getElementById("miBtn").addEventListener("click", function(){
    let valorInput = document.getElementById('email').value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mensaje = document.getElementById('message');

    if (regex.test(valorInput)) {
        mensaje.textContent = 'el correo es válido';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'el correo no es válido.';
        mensaje.style.color = 'red';
    }
})











