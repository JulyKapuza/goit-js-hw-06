const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");
let nameTemplate = 'Anonymous'


const typeOfNameInput = (event) => {
    if (event.currentTarget.value === '') {
        nameOutput.textContent = nameTemplate;
    }
    else {
   nameOutput.textContent = event.currentTarget.value;
    }
}

nameInput.addEventListener("input", typeOfNameInput);
