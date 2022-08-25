
const form = document.querySelector(".login-form");

const onFormSubmit = (event) =>{
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if ((mail && password) === "") {
        console.log(event.currentTarget.value)
        alert("Заповніть, будь ласка, всі поля")
    }
     
    else {

    const formData = {
        mail,
        password,
    };

    console.log(formData)
    }
    
   form.reset()

/* -------------------------------------------------------------------------- */
/*                        Для великої кількості данних                        */
/* -------------------------------------------------------------------------- */
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //      console.log('onFormSubmit -> name', name);
    //     console.log('onFormSubmit -> value', value);
        

    // })
}

form.addEventListener('submit', onFormSubmit);