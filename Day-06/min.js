let numbersA = [8,3,5,6,4,9];



function minimum(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = minimum(numbersA);
console.log(min);

