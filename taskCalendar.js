//importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();

let day = prompt("Enter a day of the week: ")
switch (day) {
    case "Sunday":
        console.log ("It's family day!");
        break;
    case "Monday":
        console.log ("Finish your assignments.");
        break;
    case "Tuesday":
        console.log ("Make your own reviewer.");
        break;
    case "Wednesday":
        console.log ("You need to review for the quiz tomorrow.");
        break;
    case "Thursday":
        console.log ("Practice your speech.")
        break;
    case "Friday":
        console.log ("Thanks God It's Friday");
        break;
    default:
        console.log ("Saturday day is laundry day.");
}