function add(a, b, c){
    return a + b + c;
}


const numbers = [10, 20, 30];
const sum = add(...numbers);
console.log('Sum is: ' + sum);