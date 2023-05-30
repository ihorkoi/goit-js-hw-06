let counterValue = 0;
const decButton = document.querySelector('[data-action=decrement]');
const incButton = document.querySelector('[data-action=increment]');
const counterValueRef = document.querySelector('#value');

incButton.addEventListener('click', () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
})
decButton.addEventListener('click', () => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
})
