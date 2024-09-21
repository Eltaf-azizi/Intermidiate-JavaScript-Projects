// 1. Deposit some money
// 2. Dtermine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


const prompt = require("prompt-sync")();


const deposit = () => {
    while(Ture){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount >= 0){
            console.log("Invalid deposit amount, try Again!")
        }
        else{
            return numberDepositAmount;
        }
    }
};


const depositAmount = deposit();
console.log(depositAmount);