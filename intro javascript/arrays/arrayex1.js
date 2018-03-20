// printReverse()
// write a function that takes an array as an argument 
// and prints out the elements in the array in reverse order.


function printReverse(arr){
    for(var i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// isUniform()
// write a function that takes an array as an argument and 
// returns true if all array elements match prints false if they don't
function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i< arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}
// sumArray()
// Write a function that accepts an array of numbers 
// and returns the sum of all numbers in the array
function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += elemtnl;
    });
    return total;
}
// max()
// write a function that accpets an array of numbers and 
// returns the max of the number. 

function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; 1++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}