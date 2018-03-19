console.log("Print all numbers -10 and 19");

for (var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("Print all even numbers between 10 and 40");

for (var i = 10; i <=40; i+=2) {
    console.log(i)
}

//attempt two. Only works cause i start on an even.

for (var i = 10; i <=40; i+=1) {
    if(i % 2 === 0) {
        console.log(i)
    }
}
//3:
console.log("Print all odd numbers bween 300 and 333");


for (var i = 300; i <= 333; i++) {
    if(i % 2 !== 0){
        console.log(i)
    }
}

//4: 

console.log("Print all numbers disible by 5 and 3 between 5 and 50");

for (var i = 5; 1 <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
