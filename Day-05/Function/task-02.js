// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number(num) {
    if (num%2 === 1) {
        return num*2;
    }
    else{
        return num/2;
    }
}

let asd = number(6);
console.log(asd);
