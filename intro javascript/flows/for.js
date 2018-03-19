var str = "hello";

for(var i = 0; i < str.length; i++) {
    console.log(str[i])
}

// compare to a while loop

var str = "hello";
var count = 0;

while(count < str.length) {
    console.log(str[count]);
    count++;
}

for(var i =0; i < 16; i+=8) {
    console.log(i);
}

var str = "ahceclwlxo";

for (var i = 1; i < str.length; i+=2) {
    console.log(str[i]);
}

// print every second char... hello.
