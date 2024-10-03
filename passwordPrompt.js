//importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();

const password = "correctPassword";
let userPassword;

do {
    userPassword = prompt("Enter your password: ");
    if (userPassword === password) { 
        console.log("Access granted!");
    }
}while (userPassword === password);

console.log("Incorrect, try again.")
