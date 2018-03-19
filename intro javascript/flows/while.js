var count = 1;

while (count < 6) {
    console.log("Count is: " + count);
    count++;
}

var str = "hello";

var count = 0; //this is an index to count the string

while(count < str.length) {
    console.log(str[count]);
    count++
}

// h
// e
// l
// l
// o

// infinite loop ; they bad.

// As the count doesn't increment it will contuinute to print 0
// var count = 0;
// while(count < 10) {
//     console.log(count);
// }

// Exersie 1:
// This will print 1 , 3 , 5, 7, 9
// As the num += 2 means it will add two to the num variable.
var num = 1;
while(num <= 10) {
    console.log(num);
    num += 2;
}

// Exersise 2:
//checks if the number can be devided by 4. and what number that is
// prints to the screen up until 20.

//(num % 4 === 0)  does 4 divide evenly.. i.e is it on the 4 times table.
var num = 1;

while(num <= 20) {
    if(num % 4 === 0) {
        console.log(num);
    }
    num++;
}

//Exersie 3:
//infinite loop.

var num = 100;
while(num <150) {
    console.log(num + 1);
    num--;
}