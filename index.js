const min = 1;
const max = 100;
const result = Math.floor(Math.random() * (max - min + 1)) + min;

let guess;
let start = true;
let attempts = 0;

while(start){

    guess = window.prompt(`Guess a number between ${min} to ${max}:`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert('Kindly enter a valid number.');
    }
    else if(guess < min || guess > max){
        window.alert(`Kindly enter a valid number.`);
    }
    else{
        attempts++;
        if(guess < result){
            window.alert(`Your guess number is too low. Try again!`);
        }
        else if(guess > result){
            window.alert(`Your guess number is too high. Try again!`);
        }
        else{
            window.alert(`Nice! You guessed the correct number "${result}" in ${attempts} attempts.`);
            start = false;
        }
    }
}