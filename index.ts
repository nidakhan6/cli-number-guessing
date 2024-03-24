#! /usr/bin/env node 
//#shabang

import inquirer from "inquirer";

console.log("\n\twellcome to codewithnida - CLI Number Guessing Game\n");
// 1 computer will generate a random number 

// 2 user input for guessing number 

// 3 compare  user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log ("Welcome to number Guesing Game");

const answers = await inquirer.prompt([
     {
     name : "userGuessedNumber",
     type : "number",
     message : " Please guess a number between 1 - 10:",
    },
]);

///if (agar condition true hai )

if (answers.userGuessedNumber === randomNumber) {
    console.log ("Congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}



