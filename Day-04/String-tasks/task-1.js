string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

string = string.split("");

countA = 0;

for( a of string){
    if(a === "a"){
        countA += 1;
    }
}

console.log(countA);
