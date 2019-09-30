
var Person = function(name, location, friends){
                this.name = name;
                this.location = location;
                this.friends = friends;
             };
Person.prototype.lastName = 'Kumar';

var person1 = new Person('Vijeth', 'London', ['Bharath', 'Prasanna', 'Mahesh', 'Jags', 'Sri']);
console.log(person1.name);
console.log(person1.location);
console.log(person1.friends);
console.log(person1.lastName);

console.log(person1.hasOwnProperty('location'));
console.log(person1 instanceof Person);