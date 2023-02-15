const balanceElm = document.querySelector(".balance");
const balanceAmountElm = document.querySelector("#balance-amount");

const pennyElm = document.querySelector("#penny");
const nickelElm = document.querySelector("#nickel");
const dimeElm = document.querySelector("#dime");
const quarterElm = document.querySelector("#quarter");

const coinAddSoundElm = document.querySelector("audio.coin-add");
const coinRemoveSoundElm = document.querySelector("audio.coin-remove");

const historyElm = document.querySelector(".history");

//event is a MouseEvent object
pennyElm.addEventListener("click", function (event) {
    let balance = Number(balanceAmountElm.textContent);
    if (event.shiftKey) {
        balance -= 0.01;
    }
    else {
        balance += 0.01;
    }
    balanceAmountElm.textContent = balance.toFixed(2);
});


nickelElm.addEventListener("click", function (event) {
    let balance = Number(balanceAmountElm.textContent);
    if (event.shiftKey) {
        balance -= 0.05;
    }
    else {
        balance += 0.05;
    }
    balanceAmountElm.textContent = balance.toFixed(2);
});

dimeElm.addEventListener("click", function (event) {
    let balance = Number(balanceAmountElm.textContent);
    if (event.shiftKey) {
        balance -= 0.10;
    }
    else {
        balance += 0.10;
    }
    balanceAmountElm.textContent = balance.toFixed(2);
});

quarterElm.addEventListener("click", function (event) {
    let balance = Number(balanceAmountElm.textContent);
    if (event.shiftKey) {
        balance -= 0.25;
    }
    else {
        balance += 0.25;
    }
    balanceAmountElm.textContent = balance.toFixed(2);
});