const age = 21

//const growth = age > 20 ? "Adulthood" : "Adolescence";
//console.log(growth)


const growth = "Baby";
//console.log(growth)
//evaluating a condition
switch(growth){
    case 'Adulthood':
        console.log("Adulthood")
        break;
    case 'Adolescence':
        console.log("Adolescence")
        break;
    default:
        console.log("User is neither an adolescent or adult")
        break;
}