// Give me the list numbers between 1 to 30 divisible by 5
let numbers = [];

for(let i = 30; i >= 1; i--){
    if(i%5 === 0){
        numbers.push(i);
    }
}

console.log(numbers.reverse());