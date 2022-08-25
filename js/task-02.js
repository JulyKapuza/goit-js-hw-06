const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const foodIngredients = document.querySelector('#ingredients');

const putIngredients = (options) => {
  return options.map(option => {
    const itemEl = document.createElement('li')
    itemEl.classList.add('item')
    itemEl.textContent = option;
    return itemEl
  });
};

const elements = putIngredients(ingredients);
foodIngredients.append(...elements)