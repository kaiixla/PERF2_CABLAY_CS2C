//importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();

//generating a random number from 1 to 10
const Number = Math.floor(Math.random() * 10) + 1;
let guess = 0;

//while loop 
while (guess !== Number) {
    guess = parseInt(prompt("Guess the number between 1 to 10:"));

    //check the guess if it is right or wrong
    if (guess > Number) {
        console.log("Too high!");
    }else if (guess < Number) {
        console.log("Too low!");
    }
    else{
        console.log("Correct!");
    }
}