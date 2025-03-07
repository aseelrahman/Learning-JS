string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

string = string.split("");
const vowels = ['a', 'e', 'i', 'o', 'u'];
countA = true;

for(let i = 0; i < vowels.length; i++){
    if(string.includes(vowels[i])){
        countA = true;
    }
    else{
        countA = false;
    }
}

console.log(countA);
