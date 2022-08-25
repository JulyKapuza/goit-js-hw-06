const decrBtn = document.querySelector('button[data-action="decrement"]')
let counterValue = 0;

const amounOfValue = document.querySelector('#value')



decrBtn.addEventListener('click', handleTargetButtonClick)

function handleTargetButtonClick() {
    counterValue -= 1;
    amounOfValue.textContent = counterValue;
    console.log("Зменшення")
}
const incrBtn = document.querySelector('button[data-action="increment"]')
incrBtn.addEventListener('click', handleTargetButtonClickl)

function handleTargetButtonClickl() {
    counterValue += 1;
    amounOfValue.textContent = counterValue;
    console.log("Збільшення")
}


