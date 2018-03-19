//create secrectNumber
var secrectNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number"));


//check guess
//user Number to cast the string of the prompt to the number.
if (guess === secrectNumber) {
    alert("YOU GOT IT RIGHT!");
}

//otherwise check if higher
else if (guess > secrectNumber) {
    alert("Too high. Guess again!");
}
//otherwise check if lower
else {
    alert("Too low. Guess again!");
}