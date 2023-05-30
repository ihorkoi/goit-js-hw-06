const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createLiGroup(arr) {
  const liGroupRef = [];
  arr.forEach(item => {
    const liRef = document.createElement('li');
    liRef.textContent = item;
    liRef.classList.add('item');
    liGroupRef.push(liRef);
  })
  return liGroupRef;
}
  
const liGroupRef = createLiGroup(ingredients);
document.querySelector('ul#ingredients').append(...liGroupRef);