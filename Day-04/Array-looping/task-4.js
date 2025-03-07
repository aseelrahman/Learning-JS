const statement = 'I am a hard working person'

let reversedStatement = [];

for(word of statement.split(" ")){
    reversedStatement.unshift(word);
}
reversedStatement = reversedStatement.join(" ");
console.log(reversedStatement);
