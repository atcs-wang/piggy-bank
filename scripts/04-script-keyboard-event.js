const balanceElm = document.querySelector(".balance");
const balanceAmountElm = document.querySelector("#balance-amount");

const pennyElm = document.querySelector("#penny");
const nickelElm = document.querySelector("#nickel");
const dimeElm = document.querySelector("#dime");
const quarterElm = document.querySelector("#quarter");

const coinAddSoundElm = document.querySelector("audio.coin-add");
const coinRemoveSoundElm = document.querySelector("audio.coin-remove");

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

//event here is a KeyboardEvent object
document.addEventListener("keydown", function (event) {
    //If key is held down, causes rapid fire repeat events
    //The KeyboardEvent will tell us if that's what caused this 
    if (event.repeat) { 
        return
    }

    if(event.key === "p"){
        updateBalance(0.01, false);
    }
    if(event.key === "n"){
        updateBalance(0.05, false);
    }
    if(event.key === "d"){
        updateBalance(0.10, false);
    }
    if(event.key === "q"){
        updateBalance(0.25, false);
    }
    if(event.key === "P"){
        updateBalance(0.01, true);
    }
    if(event.key === "N"){
        updateBalance(0.05, true);
    }
    if(event.key === "D"){
        updateBalance(0.10, true);
    }
    if(event.key === "Q"){
        updateBalance(0.25, true);
    }
});