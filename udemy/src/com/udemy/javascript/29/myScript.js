
class Person{
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    display(){
        console.log(`${this.name} stays in ${this.location}`)
    }
}

class Cricketer extends Person{
    constructor(name, location, playerType){
        super(name, location);
        this.playerType = playerType;
    }

    display(){
        super.display();
        console.log(`${this.name} is a ${this.playerType}`);
    }
}


const cricketer1 = new Cricketer('Vijeth', 'UK', 'Batsman');
cricketer1.display();