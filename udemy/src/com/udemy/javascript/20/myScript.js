/**
    An example to demonstrate the below:
        1) 'var' variables are function scoped
        2) 'let' and 'const' variables are block scoped
*/

console.log('var demo');
function testVar(condition){
    var message = 'Hello';
    if(condition){
        var message = 'Hi';
        console.log(message);
    }
    console.log(message);
}
testVar(true);

console.log('\nES6 let or const demo');
function testLetOrConst(condition){
    let message = 'Hello';
    if(condition){
        let message = 'Hi';
        console.log(message);
    }
    console.log(message);
}
testLetOrConst(true);