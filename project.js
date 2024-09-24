// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLSCOUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}


const SYMBOLVALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}


// Deposit some money

const deposit = () => {
    while(Ture){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try Again!");
        }

        else{
            return numberDepositAmount;
        }
    }
};


// Determine number of lines to bet on

const getNumberOfLines = () => {
    while(Ture){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid deposit amount, try Again!");
        }

        else{
            return numberOfLines;
        }
    }
}

// Collect a bet amount


const getBet = (balance, lines) => {
    while(True){
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log("Invalid bet, try again!");
        }

        else{
            return numberBet;
        }
    }

};

// Spin the slot machine


const spin = () => {
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLSCOUNT)) {
        for(let i=0; i<count; i++) {
            symbols.push(symbol);
        }
    }
    

    const reels = [];
    for(let i=0; i<COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j=0; j<ROWS; j++){

            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];

            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};


// Check if the user won


const transpose = (reels) => {
    const rows = [];

    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j=0; j< COLS; j++){
            rows[i].push(reels[j][i])
        }
    }

    return rows;
};


const printRows = (rows) => {

    for(const row of rows) {
        let rowString = "A";

        for(const [i, symbol] of row.entries()) {
            rowString += symbol

            if(i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};

// Give the user their winnings


const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for(let row=0; row<lines;row++) {
        const symbols = rows[row];
        let allSame = true;

        for(const symbol of symbols) {
            if(symbol != symbols[0]) {
                allSame = false;
                break; 
            }
        }

        if (allSame) {
            winnings += bet * SYMBOLVALUES[symbols[0]]
        }
         
    }
    return winnings;
};


// Play again


const game = () => {

    let balance = deposit();

    while(true){

        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        console.log("You won, $" + winnings.toString());

        if(balance <= 0) {
            console.log("You ran out of money!");
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)? ");

        if(playAgain != "y") break;

    }


};


game();



