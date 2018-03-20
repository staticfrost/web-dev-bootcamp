var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y;
    }
}

// to call a function that is inside the object:
// obj.add(10,5); //this will be 15.
// similar when write out console.log();


// Learn about this.

var comments = {};
comments.data = ["Good job", "Bye", "Lame..."];
//This add a method inside the comments object.
comments.print = function(){
    this.data.forEach(function(el){  //This will 
        // refecence the comments object to add (the comments for the print function)
        console.log(el)
    })
}