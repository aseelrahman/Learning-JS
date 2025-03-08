// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(user_input) {
    if (user_input%2 == 0) {
        return "even";
    }
    else{
        return "odd";
    }
}

let number = odd_even(53);
console.log(number);
