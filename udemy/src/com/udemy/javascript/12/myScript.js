const johnBills = [124, 48, 268, 180, 42];
let johnTipContainer = johnTipCalculator(johnBills);
console.log(johnTipContainer);

let johnTips = johnTipContainer.tip;

function johnTipCalculator(bills){
    var tipContainer = {
        tip: [],
        finalBill: []
    };

    for(var i = 0; i < bills.length; i++){
        if(bills[i] < 50){
            tipContainer.tip[i] = 0.2 * bills[i];
        } else if(bills[i] >=50 && bills[i] < 200){
            tipContainer.tip[i] = 0.15 * bills[i];
        }else{
            tipContainer.tip[i] = 0.10 * bills[i];
        }
        tipContainer.finalBill[i] = bills[i] + tipContainer.tip[i];
    }
    return tipContainer;
}

const markBills = [77, 375, 110, 45];
let markTipContainer = markTipCalculator(markBills);
console.log(markTipContainer);

let markTips = markTipContainer.tip;

console.log('\nJohns average tip is: '+ averageTipCalculator(johnTips));
console.log('\nMarks average tip is: '+ averageTipCalculator(markTips));

function averageTipCalculator(tips){
    var sum = 0, count = 0;
    for(var i = 0; i < tips.length; i++){
        sum += tips[i];
        count++;
    }
    return sum/count;
}


function markTipCalculator(bills){
    var tipContainer = {
        tip: [],
        finalBill: []
    };

    for(var i = 0; i < bills.length; i++){
        if(bills[i] < 100){
            tipContainer.tip[i] = 0.2 * bills[i];

        }else if(bills[i] >= 100 && bills[i] < 300){
            tipContainer.tip[i] = 0.1 * bills[i];
        }else{
            tipContainer.tip[i] = 0.25 * bills[i];
        }
        tipContainer.finalBill[i] = bills[i] + tipContainer.tip[i];
    }
    return tipContainer;
}
