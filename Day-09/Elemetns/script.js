// Where to add
const placesList = document.getElementById("places-list");
console.log(placesList);
// What to be added
const li = document.createElement('li');
li.innerText = "Dhaka";

// Add the child
placesList.appendChild(li);

const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.append(section);

// Set innerHTML directly

const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1> My Dress sectiohn</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);