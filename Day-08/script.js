const fruits = document.getElementsByClassName("fruits");
for(const fruit of fruits){
    console.log(fruit.innerText);
}

const fruitTitle = document.getElementById("fruit-title");
fruitTitle.innerText = 'Inshallah I\'ll try these fruits.'

// querySelectorAll

const someLi = document.querySelectorAll("#fruits-container li")
console.log(someLi);
for(const li of someLi){
    console.log(li.innerText);
    
}


fruitTitle.getAttribute('id')
fruitTitle.setAttribute('title', 'giving a title')