
const questionMap = new Map();
questionMap.set('Question', 'What is the name of the latest version of the Javascript?');
questionMap.set(1, 'ES5');
questionMap.set(2, 'ES6');
questionMap.set(3, 'ES7');
questionMap.set('Correct', 2);
questionMap.set(true, 'Correct Answer!!');
questionMap.set(false, 'Wrong Answer');

console.log(questionMap.get('Question'));

for(let[key, value] of questionMap.entries()){
    if(typeof(key) === 'number') {
        console.log(`${key}  ${value}`);
    }
}

const answer = parseInt(prompt('What is your answer?'));
console.log(questionMap.get(answer === questionMap.get('Correct')));