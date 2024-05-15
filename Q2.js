//Task #2
import inquirer from "inquirer";
let dynamicNumber = 10; //Math.floor(Math.random() *10+1)
//Prompt the user to  enter  enter a number 
let userNumber = await inquirer.prompt([{
        name: "game",
        type: "number",
        message: "Enter a your number"
    }]);
let name = userNumber.game;
if (name > dynamicNumber) {
    console.log(`your number is greater than the dynamicNumber value`);
}
else if (name < dynamicNumber) {
    console.log("your number is less than the daynmicNumber");
}
else {
    console.log("your number is equal to the Dynamic value ");
}
