let items = ['Orange','mango','pear', 'apple'];
items.forEach((value,index,array) => {
    console.log(value);
    console.log(index);
   console.log(array);
});

//filter method
let numberArray = [1,2,3,4,5,6,7,8,9];
let oddNumbers = numberArray.filter((value, index, array) => {
    if (value % 2) {
        console.log(value);
        return value;
    }
});
//map method, this type of method loops through the elements of the array and perform specific action on each element
let mappedValue = [1,2,3].map((value,currentValue, currentIndex,array) =>
{
    return value*10;
});
console.log(mappedValue)
//reduced method
let reducedValue = [10,1,2,3,4,5,6,7,8,9].reduce((value,currentValue,index,array)=>{
    return value + currentValue;

});
console.log(reducedValue);

//removing duplicates
let  alphabet = ['A', 'B','A', 'B', 'C', 'D']

let uniqueAlpha = [];
alphabet.forEach((repeat) => {
    if(!uniqueAlpha.includes(repeat)){
        uniqueAlpha.push(repeat);
    }
});
console.log(uniqueAlpha);

