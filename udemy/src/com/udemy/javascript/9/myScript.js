const bills = [124, 48, 268];
//[142.6, 57.6, 294.8]

const tipCalculator = (x) => {
    if(x < 50){
        return x * 0.2;
    }else if(x >= 50 && x <= 200){
        return x * 0.15;
    }else{
        return x * 0.10;
    }
};

const finalBillCalculator = (x) => x + tipCalculator(x);

const tipArray = bills.map(tipCalculator);
console.log(tipArray);

const finalBillArray = bills.map(finalBillCalculator);
console.log(finalBillArray);