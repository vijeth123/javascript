
var yearsLeftTillRetirement = function(retirementAge){
    var message = 'Years left till your retirement is: ';
    return function(yearOfBirth){
        console.log(message + (retirementAge - (2019 - yearOfBirth)));
        /*
            This inner function can access the the parameter 'retirementAge' and 'message' variable
            of the Outer function with the power of Closures.
        */
    }
};

yearsLeftTillRetirement(66)(1988);