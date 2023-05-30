const inputRef = document.querySelector('#name-input');

inputRef.addEventListener('input', (event) => {
    if (event.target.value !== ''){
        document.querySelector('#name-output').textContent = event.target.value;
    } else {
        document.querySelector('#name-output').textContent = 'Anonymous';
    }
}) 