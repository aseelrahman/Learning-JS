const laptop = 35000;
const tablet = 15000;
const mobile = 20000; 


function calculateElectronicsBudget(laptop, tablets, mobile){
    const sum = laptop + tablets + mobile;
    return sum;
}

let totalCost = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(totalCost);
