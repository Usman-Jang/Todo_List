#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const Add = await inquirer.prompt([
        { message: "What would you like to add?", type: "input", name: "todo" },
        { message: "Would you like to add another todo?", type: "confirm", name: "confirm", default: "false" }
    ]);
    todos.push(Add.todo);
    condition = Add.confirm;
    console.log(todos);
}
