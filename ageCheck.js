//importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();

let age = prompt("Enter your age: ");
console.log("Enter your age: " + age)
if (age <= 13) {
console.log("You're a child.");
} else if (age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are a adult.");
}