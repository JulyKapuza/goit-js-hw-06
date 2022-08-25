const textInput = document.querySelector("#validation-input");

const amountOflendth = document.querySelector('input[data-length="6"]');
const minLength = Number(amountOflendth.dataset.length)
// console.log(minLength); 


textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length !== minLength) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid')
   
      
    }
    else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid')
    }
}
);