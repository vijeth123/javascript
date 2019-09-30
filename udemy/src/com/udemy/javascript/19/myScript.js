
var vijeth = {
    name: 'Vijeth',
    age: 30,
    location: 'London',
    presentation: function(){
        console.log('Good morning ' + this.name + ', How is ' + this.location);
    }
};

vijeth.presentation();

var prasanna = {
    name: 'Prasanna',
    age: 31,
    location: 'Bangalore'
};


vijeth.presentation.call(prasanna);