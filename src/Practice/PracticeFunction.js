function add(num1,num2){
    return num1 + num2;
}
let result = add(3,6);
console.log(result);

//Referencing a variable from inside and outside the function Scope

// sayHello(message){
//     console.log(message, this.chats);
// }
//     const chater = {
//     chats: "Bisi"
// }
// sayHello.call(chater, "Hello  ");
//Using a closure to create private variables
//A closure is a function in another function
// A closure is a way of creating private variable in javascript
const sayHello = function(){
    let greetingMsg = "Greetings ";
    function msgTo(firstName, lastName){
        greetingMsg = greetingMsg + firstName + " " + lastName;
    }
    return {
        sendGreeting: function (firstName, lastName) {
            msgTo(firstName, lastName)
        },

        getMsg: function(){
            return greetingMsg;
        }
    }
}
const createMsg = sayHello();
createMsg.sendGreeting("Professor" , "Falken");
console.log(createMsg.getMsg())

const creator = sayHello();
creator.sendGreeting("David", "Snowman");
console.log(creator.getMsg())