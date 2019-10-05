const arr = [1, 2, 3, 4, 5];

//ES5
var changedArr = arr.map(function(el){return el * 2;});
display(changedArr);

//ES6
const changedArr2 = arr.map((n) => n*2);
display(changedArr2);

function display(array){
     for(var i = 0; i < array.length; i++){
        console.log(array[i]);
     }
}

//Access to lexical 'this'
//ES5 -> Cannot access 'this' from inner function disp()
const user = {
    name: 'Vijeth',
    location: 'London',
    display:function(){
        function disp(){
            console.log(this.name + ' is staying in ' + this.location);
        }
        disp();
    }
}
user.display();


//ES6 -> Can access 'this' using Arrow function
const es6User = {
    name: 'Vijeth',
    location: 'London',
    display:function(){
        const disp = () => console.log(this.name + ' is staying in ' + this.location);
        disp();
    }
}
es6User.display();