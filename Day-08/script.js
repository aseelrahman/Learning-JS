// const fruits = document.getElementsByClassName("fruits");
// for(const fruit of fruits){
//     console.log(fruit.innerText);
// }

// const fruitTitle = document.getElementById("fruit-title");
// fruitTitle.innerText = 'Inshallah I\'ll try these fruits.'

// // querySelectorAll

// const someLi = document.querySelectorAll("#fruits-container li")
// console.log(someLi);
// for(const li of someLi){
//     console.log(li.innerText);
    
// }


// fruitTitle.getAttribute('id')
// fruitTitle.setAttribute('title', 'giving a title')


const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = "5px";
    section.style.borderRadius = '10px';
    section.style.padding = "10px";
    section.style.backgroundColor = "lightgray";
}
// const fruitContainer = document.getElementById('fruits-to-try');
// fruitContainer.classList.add('text-center');
// fruitContainer.classList.remove('large-text')

