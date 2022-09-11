class Robot{

    constructor(name,type){
        this.name = name;
        this.type= type;
        this.greeting = function (){
            return "I'm " + this.name + "I'm a " + this.type + ".";
        }
    }
}