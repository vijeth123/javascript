
var calc = function(arr, callBack){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        result.push(callBack(arr[i]));
    }
    return result;
}

var calculateAge = function(yearOfBirth){
    return 2019 - yearOfBirth;
}

var fullAge = function(age){
    return age > 18;
}

var yearOfBirths = [1988, 1990, 1949, 1950, 2015];
var ages = calc(yearOfBirths, calculateAge);
console.log(ages);

var fullAgeArray = calc(ages, fullAge);
console.log(fullAgeArray);




