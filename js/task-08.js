const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputFields = event.currentTarget.elements;
    
    if (!inputFields.email.value || !inputFields.password.value) {
        alert('Please, fill all neccessary fields')

    } else {
        const userLoginData = {
            [inputFields.email.type]: inputFields.email.value,
            [inputFields.password.type]: inputFields.password.value,
        }
        console.log(userLoginData)
    }
    formRef.reset()
})

