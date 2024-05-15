//task #3
import inquirer from "inquirer";
let user = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "enter your name"
    }]);
let { name } = user;
let userName = name.toLowerCase();
switch (userName) {
    case "imran":
        console.log("this is your known friend");
        break;
    case "saad":
        console.log("this is your known friend");
        break;
    case "Abdullah":
        console.log("this is your known friend");
        break;
    case "tariq":
        console.log("this is your known friend");
        break;
    default: console.log("deault response");
}
;
