const minNum = 0;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attemps = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
      window.alert("Please enter a valid number");
    }

    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("Too low. Please try again!");
        }
        else if(guess > answer){
            window.alert("Too high. Please try again!");
        }
        else{
            window.alert(`Correct! The answer is ${answer}. It took ${attemps} attemps to guess the right number!`);
            running = false;
        }
    }

  }
  