//importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();

let grade =  prompt("Enter your grade: ");

grade >= 90 ? console.log ("Your grade is: Excellent")
        : grade >= 80 ? console.log ("Your grade is: Good")
        : grade >= 70 ? console.log ("Your grade is: Fair")
        : console.log ("Your grade Needs Improvement")