//An object consists of properties and methods, the properties describes the object
//methods are functions the object uses to process data
//example of adding data to an array
let myArray = new Array();
    myArray.push('some data');
     myArray.push('some other data')



console.log(myArray[1])
// how to create an  array and to add values
let myOtherArray = ["Books"];
     myOtherArray.push("Wendy");
      myOtherArray.push("Fems");
      myOtherArray.push("Shola")
  myOtherArray.unshift("Jake");
      //unshift add to the beginning of the array
console.log(myOtherArray)
       // myOtherArray.shift();
       // console.log(myOtherArray)


     // console.log(myOtherArray[0])
     // console.log(myOtherArray[1])
// console.log(myOtherArray.shift())
// console.log(myOtherArray)

//
// let numbers = myOtherArraylength;
//        console.log(numbers)

const names = ["Noah","Bisi", "Ore" ]
console.log(names.find((curr,index, array)=> curr.endsWith('r')))
console.log(names.find((curr,index, array)=> curr.startsWith('o')))

//using arrow function
const compareFunc = (a,b) =>{
    if (a>b) return 1
    if (a<b) return -1

}
console.log(names.sort(compareFunc))


let filler = new Array (10)
console.log(filler.fill(4))
console.log(filler.fill(5,2,4))

// OR
// //Run in terminal/console
// Array from({length:10} () => 1,
//
//     Array.from({length 10}, (_,i) => (i +1)