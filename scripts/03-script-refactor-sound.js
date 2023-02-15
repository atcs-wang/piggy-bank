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