const user = {
    name: 'Vijeth',
    location: 'UK',
    salary: 100,
    friends: ['Bharath', 'Prasanna', 'Mahesh', 'Jagadish', 'Mahesh']
};

console.log('\nDisplaying again using for loop');
for(var i = 0; i < user.friends.length; i++){
    console.log(user.friends[i]);
}

console.log('\nDisplaying again using while loop');
var i = 0;
while(i < user.friends.length){
    console.log(user.friends[i++]);
}


//Advanced for each loop
console.log('\nUsing for each loop')

for(const friend of user.friends){
    console.log('Hi ' + friend);
}