function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bodyBox = document.querySelector('body');


const colorOfRandom = () => {
  colorValue.textContent = getRandomHexColor();
  bodyBox.style.backgroundColor = `${colorValue.textContent}`;
  
}

buttonChangeColor.addEventListener('click', colorOfRandom)