const profiles = [
    {
        id : 1,
        name: "Jimoh",
        isTall: true,
        age: 20

    },
    {
        id : 2,
        name: "Solomon",
        isTall: false,
        age: 22,
    },
    {
        id : 3,
        name: "Isaac",
        isTall: false,
        age:25
    }


]
/*for (let i = 0; i <profiles.length ; i++) {
    console.log(profiles[i].isTall)
}*/

for(let print of profiles){
    console.log(print.name)
}
//using map
profiles.map(function (list){
    console.log(list.age)
})
 const testing = profiles.map(function (items){
     return profiles.name

});
console.log(testing)
