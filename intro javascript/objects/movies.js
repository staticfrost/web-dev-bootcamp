var movies = [
    {
        title: "Saving Private Ryan",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Black Hawk Down",
        hasWatched: true,
        rating: 5
    }
]

movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
})