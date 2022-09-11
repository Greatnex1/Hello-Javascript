
// class  Robot{
//
//     constructor(name,type){
//         super(name,type);
//     }
// }
//Creating a class that extends functiions from a parent class
class BendingUnit extends Robot{

    constructor(name,type){
        super(name,type);
    }
    come(){
        console.log("Comes often")
    }
    primaryFunction(){

console.log(this.name + "bends things");
    }
}

const b = new BendingUnit("Motorola", 200)
console.log(b)