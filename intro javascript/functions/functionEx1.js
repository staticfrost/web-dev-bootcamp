function isEven(num) {
    if(num % 2 === 0) { //check if it has a remiander when divied by 2. if not its even
        return "true"
    }
    return "false"; //if its not even return false.
}

isEven(1)

// Short answer!
function isEvenShort(num) {
    return num % 2 === 0; //boolean so it will always return a true of false.
}


// number 4 means 4! x 4 x 3 x 2 x 1 
// 0 means 0! is 1.
// function factorial(num) {
//     // (num.length = num2) num2 * num while num.length > 0.
//     // num-- 
// }
// This one works:
// https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38
function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorial(5);

  // Other soultion to this.

  function factorial1(num) {
      var result = 1;
      for (var i = 2; i <= num; i++) {
          result *=i;
      }
      return result;
  }


//replace - with _ in a string
// hello-world with hello_world
//https://appendto.com/2016/02/replace-spaces-underscores-javascript/
function kebabToSnake(string) {
    var i = 0, length = string.length;
    
    for (i; i < length; i++) {
      string = string.replace("-", "_");
    }
    
    return string;
}

kebabToSnake("Hello-world");

// soultion with regexp

function kebabToSnake2(str) {
    var newStr = str.replace(/-/g , "_");
    return newStr;
}
kebabToSnake2("Hello-world");

//SCOPE
var num = 8;
function doMath() {
    num +=1;
    if(num % 5 == 0) {
        return true
    } else {
        return false
    }
}

num += 1
doMath()

// 10, so true.