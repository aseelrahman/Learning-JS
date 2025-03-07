string = "Lorem ipsum  A dolor sit amet, consectetur adipiscing elit, sed do A eiusmod tempor incididunt ut labore et dolore magna aliqua.";

string = string.split("");

countA = 0;

for( a of string){
    if(a === "a" || a === "A"){
        countA += 1;
    }
}

console.log(countA);
