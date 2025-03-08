// Write a function to convert temperature from Celsius to Fahrenheit.

function converter(celsius) {
    let temp_f = (celsius * 9/5) + 32;
    return temp_f;
}

let temparatureInFah = converter(20);

console.log(temparatureInFah);
