
console.log("Welcome to my JavaScript Practice Package\n")

function add (x, y){
    return x + y
}
addition = add(5,6)
console.info(addition);


const browse = {};
browse.firstName = "Ola"
browse.age = 19
console.info(browse)

browse.firstName = "John"
browse.age = 23
console.log(browse)

//a let statement only has a value while inside the code block, when the variable is outside the code block it displays
// an error.
for (let i = 0; i <11 ; i++) {
    console.log(i)
    console.log()
}
console.log([i])

// a var statement retains it value after code block has been executed
       for (var i = 0; i <11 ; i++) {
         // console.log(i)
}
console.log([i])

//creating  a var variable using the var keyword inside a function

function gLoop(){
    for (var i = 0; i <= 15; i++) {
        console.log(i)
    }

}
gLoop();
console.log();

// variable hoisting
username = "Lola"
console.log(username)
// variable hoisting takes effect when the variable has been declared, not when it has been assigned a value

function  browser(){
    "use strict";
    var lastname;
    lastname = "WIlls"
    console.log(lastname)
}
browser()

console.dir('Hey')

