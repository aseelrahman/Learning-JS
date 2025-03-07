const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let reversedColors = []

for(i of colors){
    reversedColors.unshift(i);
}

console.log(reversedColors);
