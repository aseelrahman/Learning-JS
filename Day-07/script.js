const fruits = document.getElementsByClassName("fruits");
for(const fruit of fruits){
    console.log(fruit.innerText);
}

const fruitTitle = document.getElementById("fruit-title");
fruitTitle.innerText = 'Inshallah I\'ll try these fruits.'