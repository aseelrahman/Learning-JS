const heights2 = [167, 190, 120, 165, 137];

function lowest(numbers){
    let lowest = numbers[0];

    for(num of numbers){
        if(num < lowest){
            lowest = num;
        }
    }
    return lowest;
}

const lowestnum = lowest(heights2);
console.log(lowestnum);
