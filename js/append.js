// console.log('append.js')

const placesList = document.getElementById('places-list');
console.log(placesList);


const li = document.createElement('li');
li.innerText = 'PaharToli bon';

placesList.appendChild(li);


const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food List";
section.appendChild(h1);
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'salad';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'borhani';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);


//set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress Section </h1>
<ul> 
<li> jama </li>
<li>payjama </li>
<li> tupi</li>
</ul>
`

mainContainer.appendChild(sectionDress);