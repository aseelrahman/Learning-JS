/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

const numbers = [1, 1, 2, 2, 3, 4, 5, 6, 6, 6];

function find(number) {
    count = 0;
    for(num of numbers){
        if(num === number){
            count += 1;
        }
    }
    return count;
}

let output = find(6);
console.log("Output: ", output);
