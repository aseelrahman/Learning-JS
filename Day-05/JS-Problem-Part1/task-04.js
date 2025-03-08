/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

let sentence = "I am learning Programming to become a programmer";

function l_word(sentence) {
    let sentenceArray = sentence.split(" ");
    let wordLengths  = [];

    for (let a of sentenceArray){
        wordLengths .push(a.length)
    }

    let indexOfMaxNum = wordLengths.indexOf(Math.max(...wordLengths));

    return sentenceArray[indexOfMaxNum];
    
}


let word = l_word(sentence);
console.log(word);
