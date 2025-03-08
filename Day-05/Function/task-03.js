// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    let sum = 0;
    for(num of numbers){
        sum = sum + num;
    }
    let avg = sum/numbers.length;

    return avg;
}

let average = make_avg([5,5,6,6,7,7]);
console.log(average);
