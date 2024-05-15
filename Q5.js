import inquirer from "inquirer";
let user = await inquirer.prompt([{
        name: "firstNumber",
        type: "number",
        message: "enter your firstnumber number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "enter your second number"
    },
    {
        name: "operator",
        type: "list",
        message: "select one of the operator to perform the operation ",
        choices: ["Addition", "Substration"]
    }]);
let { firstNumber, secondNumber, operator } = user;
function num(num1, num2, operation) {
    switch (operation) {
        case "Addition":
            return `The sum of ${num1} && ${num2} is ${num1 + num2}`;
            break;
        case "Substration":
            return `The sum of ${num1} && ${num2} is ${num1 - num2}`;
            break;
        default: {
            console.log("please select right number");
        }
    }
}
let response = num(firstNumber, secondNumber, operator);
console.log(response);
