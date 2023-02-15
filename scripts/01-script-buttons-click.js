const balanceElm = document.querySelector(".balance");
const balanceAmountElm = document.querySelector("#balance-amount");

const pennyElm = document.querySelector("#penny");
const nickelElm = document.querySelector("#nickel");
const dimeElm = document.querySelector("#dime");
const quarterElm = document.querySelector("#quarter");

const coinAddSoundElm = document.querySelector("audio.coin-add");
const coinRemoveSoundElm = document.querySelector("audio.coin-remove");

const historyElm = document.querySelector(".history");

//Technique #1: Write a named function, then register as event listener

function addPenny() {
    //The Number() function converts a string to a number
    let balance = Number(balanceAmountElm.textContent); 
    balance += 0.01;
    //num.toFixed() converts from Number to String, using a set number of decimal places
    balanceAmountElm.textContent = balance.toFixed(2); 
}

pennyElm.addEventListener("click", addPenny);

function addNickel() {
    let balance = Number(balanceAmountElm.textContent); 
    balance += 0.05;
    balanceAmountElm.textContent = balance.toFixed(2); 
}

nickelElm.addEventListener("click", addNickel);

//Technique #2: Write an anonymous function to register as event listener

dimeElm.addEventListener("click", function(){
    let balance = Number(balanceAmountElm.textContent);
    balance += 0.10;
    balanceAmountElm.textContent = balance.toFixed(2); 
});

//Technique #2.5: Write an anonymous ARROW function to register as event listener
// There are differences between using ARROW and "function" functions, but they don't matter much now
quarterElm.addEventListener("click", () => {
    let balance = Number(balanceAmountElm.textContent); 
    balance += 0.25;
    balanceAmountElm.textContent = balance.toFixed(2); 
});