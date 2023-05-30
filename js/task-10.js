const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesParentRef = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const divCollection = [];
  for (let i = 0; i < amount; i++) {
    const divWidth = (30 + (i * 10)) + 'px';
    const divHeight = (30 + (i * 10)) + 'px';
    const newDiv = `<div style=width:${divWidth};height:${divHeight};background-color:${getRandomHexColor()} ></div>`
    divCollection.push(newDiv);
  }
  return divCollection;
}

createBtn.addEventListener('click', () => {
  const inputFieldValue = document.querySelector('input').value;
  const divLayout = createBoxes(inputFieldValue).join('')
  boxesParentRef.innerHTML += divLayout;
})

destroyBtn.addEventListener('click', () => {
  boxesParentRef.innerHTML = '';
})