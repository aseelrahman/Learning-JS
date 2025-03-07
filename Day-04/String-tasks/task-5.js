let string = "Hi, this is your new team member.";

string = string.split(" ");

for(let i = 0; i < string.length; i++){
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
}
string = string.join(" ")

console.log(string);