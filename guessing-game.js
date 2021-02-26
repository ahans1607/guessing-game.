const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 2;

// rl.question('Enter a max number:', (answer1) => {
//     rl.question('Enter a min number:', (answer2) => {
//      console.log( `I'm thinking of a number between ${answer1} and ${answer2}...`)
//         rl.pause();
//     });
// });

function askGuess(){
    rl.question('Enter a guess:', (answer3) => {
        if (checkGuess(Number(answer3))){
            console.log("YOU WON") 
            rl.close();
        } else {
        askGuess();
        }
       
    })
}

function checkGuess(numberGuessed) {
    if (numberGuessed > secretNumber) {
        console.log("Too high.")
        return false;
    }

    if (numberGuessed < secretNumber) {
        console.log("Too low.")
        return false;
    }
    if (numberGuessed === secretNumber) {
        console.log("Correct!")
        return true;
    }
}


askGuess();









// checkGuess(77);
// checkGuess(-1);
// checkGuess(2);

// Enter a max number: *20*
// Enter a min number: *11*
// I'm thinking of a number between 11 and 20...
// Enter a guess: *15*
// Too high.
// Enter a guess: *11*
// Too low.
// Enter a guess: *13*
// Too high.
// Enter a guess: *12*
// Correct!
// YOU WON.
