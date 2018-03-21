var button = document.querySelector("button");
var isPurple = false;

// button.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
//     //or add this out side isPurple = !isPurple;
//     // if white 
//         //make purple
//     //else
//         //make it white
    
//     });

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
    });
