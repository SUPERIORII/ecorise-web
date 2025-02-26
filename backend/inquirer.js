const inquirer = require("inquirer");


const question = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (input)=>{
            if(input.length<6) return "name must be more that 6 character"

            return true
        } 
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    },
    {
        type: "input",
        name: "username",
        message: "Enter your username."
    },
]

console.log(inquirer.default.prompt(question));
