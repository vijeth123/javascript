 const firstName = prompt('What is your first name?');
 const lastName = prompt('What is your last name?');
 console.log(firstName + ' '+ lastName);
 console.log('Hi', firstName, lastName, 'How are you?');
 document.getElementById('d1').innerHTML = 'Your full name is: ' + firstName + ' ' + lastName;