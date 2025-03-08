// Write a function to count the number of vowels in a string.

const string = "Programming Hero";

function find(vowels) {
    count = 0;
    for (let char = 0; char < string.length; char++) {
        if (string[char] === "a") {
            count++;
        }
        else  if (string[char] === "e") {
            count++;
        }
        else  if (string[char] === "i") {
            count++;
        }
        else  if (string[char] === "o") {
            count++;
        }
        else  if (string[char] === "u") {
            count++;
        }
    }
    return count;
}

let output = find(string);
console.log("Output: ", output);
