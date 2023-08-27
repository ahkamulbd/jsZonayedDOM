//console.log('Script to address DOM in JS.')

let boxOne = document.querySelector('#box-1');
//console.dir(boxOne);

let boxTwo = document.getElementById('box-2');

let boxNodeList = document.querySelectorAll('.box');
//console.dir(boxNodeList);
let boxArray = Array.prototype.slice.call(boxNodeList);
//console.dir(boxArray);

let boxHtmlSelection = document.getElementsByClassName('div');
//console.log(boxHtmlSelection);

let sectionContainer = document.getElementById('section-container');

/* ====== Create Element and Append Child ====== */

let newDiv = document.createElement('div');
newDiv.innerText = 'New Div';
newDiv.classList.add('box');
sectionContainer.appendChild(newDiv);
//console.log(newDiv);

/* ====== Adding Style ====== */

boxTwo.style.backgroundColor = 'lightGreen';
boxTwo.style.color = 'orange';
boxTwo.style.fontSize = '40px';

/* ====== Adding id in newly created Element ====== */

let addedDiv = document.createElement('div');
addedDiv.classList.add('box');
addedDiv.id = 'added-id';
addedDiv.innerHTML = `
    <div>Added Div</div>
`;
addedDiv.style.color = 'yellow';
sectionContainer.appendChild(addedDiv);

/* ====== Adding Element by insertAdjacentElement() method ====== */

let insertedDiv = document.createElement('div');
insertedDiv.classList.add('box');
insertedDiv.innerHTML = `
    <div>Inserted Div</div>
`;
insertedDiv.style.backgroundColor = '#fea700';
//sectionContainer.insertAdjacentElement('beforeend', insertedDiv);
//sectionContainer.insertAdjacentElement('afterend', insertedDiv);
//sectionContainer.insertAdjacentElement('beforebegin', insertedDiv);
sectionContainer.insertAdjacentElement('afterbegin', insertedDiv);

/* ====== Removing Element ====== */
//document.getElementById('box-1').remove();

