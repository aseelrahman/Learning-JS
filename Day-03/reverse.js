const sentence ="I am learning Web Dev."

console.log(sentence);

let reverse = '';
for(const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);


let rev = sentence.split("").reverse().join("");
console.log(rev);
console.log(typeof(rev));

