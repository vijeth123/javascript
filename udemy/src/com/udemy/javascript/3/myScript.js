 const markWeight = 50;
 const markHeight = 165;

 const johnWeight = 75;
 const johnHeight = 159;

 const bmiFormula = (weight, height) => weight/(height * height);

 const markBmi = bmiFormula(markWeight, markHeight);
 const johnBmi = bmiFormula(johnWeight, johnHeight);

 console.log('markBmi = ', markBmi);
 console.log('johnBmi = ', johnBmi);

 const isMarkBmiGreater = markBmi < johnBmi;

 console.log('Is Mark\'s BMI lesser than John\'s? '+ isMarkBmiGreater);
