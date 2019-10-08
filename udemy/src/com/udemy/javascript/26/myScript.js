//ES5 style
var Person = function(name, age){
                this.name = name;
                age === undefined ? this.age = 25 : this.age = age;
             };
var user1 = new Person('Vijeth', 30);
console.log(user1);
console.log(user1.name);
console.log(user1.age);

var user2 = new Person('Menaka');
console.log(user2);
console.log(user2.name);
console.log(user2.age);


//ES6 Style - Default Parameters
var Car = function(name = 'Benz', model = 2019){
                this.name = name;
                this.model = model;
          };

var car1 = new Car();
console.log(car1);

var car2 = new Car('Honda City');
console.log(car2);

var car3 = new Car('Maruti', 2000);
console.log(car3);