
 // Converting arrays to String
//
// const names = ["Shola", "Eva", "Ada", "Ade", "Williams", "Seun"];
//   document.getElementById("names").innerHTML=names.toString();
//   document.getElementById("demo").innerHTML = names.toString();

 //adding to and removing from an array
 // const nam = ["Shola", "Eva", "Ada", "Ade", "Williams", "Seun"];
 names.pop()
 console.log(names)
 names.push("Bola")
 console.log(names)
 names.unshift("Lex")
 console.log(names)
 // delete names[2]
 // console.log(names)

 // Merging two arrays
 const fruits = ["Orange", "Mango"]
 const region = ["Lagos", "Kwara"]
 const fruitRegions = fruits.concat(region)
 console.log(fruitRegions)

  //splicing an array
 names.splice(2,0, "Demola", "Pelumi" )
 //where 2 specifies where new element should be added
 // where 0 defines how many element should be removed
 //where " " defines the new element to be added
 console.log(names)
 //slicing an array
 region.slice(1);
 console.log(region)
names.sort()

//
//  let d = new Date()
// console.log(date)