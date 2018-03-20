// Declare the function
function doSomething() {
    console.log("Hello World!!");
}

// NOW CALL THE FUNCTION!
doSomething();

function singSong() {
    console.log("Twinkle, twinkle, little start,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}

singSong();

// Arguments!
// they are how a function takes an imput!
function square(num) {
    console.log(num * num);
}

// now can call a function with the argument of a number.
square(10); //prints 100
square(3); //prints 9
square(4); //prints 16 (4*4*4)

function sayHello(name) {
    console.log("Hello there " + name + "!");
}

// function with more than one argument. 
function area(length, width) {
    console.log(length * width);
}
area(9,2); //18

// This function captalizes the first char in a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);

// we can capture the returned value in a variable.

// return keyword stops the function from contuining.
function capitalize(str) {
    if(typeof str === "number") {  //short cricut
        return "thats not a string!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";                 //paris
var capital = capitalize(city);     //Paris

var num = 38;
var capital = capitalize(num); //"thats not a string"

// Function Declaration vs Function expression
//Declaration
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}