let original = [1,1,132,3,35,56,7,56,5,5,4,4,5,7];

let duplicate = [];
for(n of original){

    if(duplicate.includes(n) === false){
        duplicate.push(n);
    }
}

console.log(duplicate);