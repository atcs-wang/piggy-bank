const balanceElm = document.querySelector(".balance");
const balanceAmountElm = document.querySelector("#balance-amount");

const pennyElm = document.querySelector("#penny");
const nickelElm = document.querySelector("#nickel");
const dimeElm = document.querySelector("#dime");
const quarterElm = document.querySelector("#quarter");

const coinAddSoundElm = document.querySelector("audio.coin-add");
const coinRemoveSoundElm = document.querySelector("audio.coin-remove");

const historyElm = document.querySelector(".history");


function updateBalance(amount, isNegative){

    let balance = Number(balanceAmountElm.textContent);
    if (isNegative) {
        balance -= amount;
        coinRemoveSoundElm.currentTime = 0; //start the sound over.
        coinRemoveSoundElm.play();
    }
    else {
        balance += amount;
        coinAddSoundElm.currentTime = 0; //start the sound over.
        coinAddSoundElm.play();
    }
    balanceAmountElm.textContent = balance.toFixed(2);

    if (balance < 0) {
        balanceElm.classList.add("negative");
    } else {
        balanceElm.classList.remove("negative");
    }
    
    //Use localStorage to save the updated balance
    localStorage.setItem("savedBalance", balance);
}

pennyElm.addEventListener("click", function (event) {
    updateBalance(0.01, event.shiftKey);
});

nickelElm.addEventListener("click", function (event) {
    updateBalance(0.05, event.shiftKey);
});

dimeElm.addEventListener("click", function (event) {
    updateBalance(0.10, event.shiftKey);
});

quarterElm.addEventListener("click", function (event) {
    updateBalance(0.25, event.shiftKey);
});

document.addEventListener("keydown", function (event) {
    if (event.repeat) { 
        return
    }

    if(event.key === "p"){
        pennyElm.classList.add("keypress");
        updateBalance(0.01, false);
    }
    if(event.key === "n"){
        nickelElm.classList.add("keypress");
        updateBalance(0.05, false);
    }
    if(event.key === "d"){
        dimeElm.classList.add("keypress");
        updateBalance(0.10, false);
    }
    if(event.key === "q"){
        quarterElm.classList.add("keypress");
        updateBalance(0.25, false);
    }
    if(event.key === "P"){
        pennyElm.classList.add("keypress");
        updateBalance(0.01, true);
    }
    if(event.key === "N"){
        nickelElm.classList.add("keypress");
        updateBalance(0.05, true);
    }
    if(event.key === "D"){
        dimeElm.classList.add("keypress");
        updateBalance(0.10, true);
    }
    if(event.key === "Q"){
        quarterElm.classList.add("keypress");
        updateBalance(0.25, true);
    }
});

document.addEventListener("keyup", function (event) {
    // The || is an "OR" logical statement
    if(event.key === "p" || event.key === "P"){
        pennyElm.classList.remove("keypress");
    }
    if(event.key === "n" || event.key === "N"){
        nickelElm.classList.remove("keypress");
    }
    if(event.key === "d" || event.key === "D"){
        dimeElm.classList.remove("keypress");
    }
    if(event.key === "q" || event.key === "Q"){
        quarterElm.classList.remove("keypress");
    }
});

/* Run at the start to load previously stored item*/
let balance = Number(localStorage.getItem("savedBalance"));
// Note that getItem returns null if no such item stored.
// However, Number converts null into 0
balanceAmountElm.textContent = balance.toFixed(2);
if (balance < 0){
    balanceElm.classList.add("negative");
} else {
    balanceElm.classList.remove("negative");
}
