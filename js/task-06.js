const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', (event) => {
    if (Number(event.target.dataset.length) === event.target.value.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid')
    }
})