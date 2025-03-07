string = "Xorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

string = string.split("");


for( let a = 0; a < string.length; a++){
    if(string[a] === "x"){
        string[a] = 'y';
    }
    else if(string[a] === "X"){
        string[a] = 'Y';
    }
    else if(string[a] === "y"){
        string[a] = 'x';
    }
    else if(string[a] === "Y"){
        string[a] = 'X';
    }
}

string = string.join("")

console.log(string);
