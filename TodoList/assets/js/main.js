//Check off specific todos by clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

//All of this is replaced with a single CSS class... and one line
// $("li").click(function(){
//     //Check if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         //turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }   
//     //else
//     else {
//         // turn it gray
//     $(this).css({
//         color: "gray",
//         textDecoration: "line-through"
//     });
        
//     }
// })

//click on X to delete Todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){ //have to make callback for the remove as .remove 
        //is instant before the fadeout completes.
        $(this).remove(); //this is different this to the one called above. 
    });
    //This is jQuery to stop bubble up properagation when you click a span inside a li 
    // it would have that affect bubble up as well such as the strike through.
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        //Grabbing new todo text from input
        var todo = Text$(this).val();
        //create new li and add to ul
        $("ul").append("")
    }
});