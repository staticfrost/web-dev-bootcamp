// window.setTimeout(function() {
//     // put all of your JS code from the lecture here
//   }, 500);


  
var todos = ["Buy new turtle"];
window.setTimeout(function() {
  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if(input === "list") {
        listTodos               
    } else if (input === "new") {
        addTodo
    } else if (input === "delete") {
        deleteTodo
    }
    var input = prompt("What would you like to do?")
  }
  console.log("Ok, you've quit the app");

  function listTodos(){
    console.log("************")
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("************") 
  }

  function addTodo(){
      //ask the new todo
      var newTodo = prompt("Enter new todo");
      //add to todos array
      todos.push(newTodo);
  }

  function deleteTodo(){
      //ask for which todo index they want to delete
      var deleteTodo = prompt ("Eneter the index to delete");
      // todos.pop(deleteTodo); this don't work need to use splice()
      todos.splice(deleteTodo,1);
      console.log("Deleted Todo");
  }
}, 500);


// // For Each:
// Array.forEach(someFunction)

// var colors = ["red", "orange", "yellow", "green"];

// colors.forEach(function(color) {
//     //color is a paceholder, call it wheever you want
//     console.log(color);
// })

// //Exersise
// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var colors = ["red", "orange", "yellow", "green"];

// numbers.forEach(function(color){
//     if(color % 3 === 0) {
//         console.log(color)
//     }
// })