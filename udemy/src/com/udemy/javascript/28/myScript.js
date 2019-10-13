
class Person{
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    display(){
        console.log(`${this.name} is staying in ${this.location}`);
    }
}


const person1 = new Person('Vijeth', 'UK');
person1.display();