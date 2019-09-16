 //Falsy values are: undefined, 0, '', Nan

        let firstName;
        console.log('First name is: ' + firstName);

        let age = 23;

        if(age == '23'){
            console.log('Non-Strict Comparison- Type coerced String to Number');
        }

        if(age === 23){
            console.log('Strict Comparison');
        }