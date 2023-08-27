let counterValue = 0;
const number = 1;
const value = document.querySelector('#value');

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

const incrementValue = () =>  {
    counterValue = Number(value.textContent) + number;
    value.textContent = counterValue;
};

const decrementValue = () => {
    counterValue = Number(value.textContent) - number;
    value.textContent = counterValue;
};

incrementButton.addEventListener('click', incrementValue);
decrementButton.addEventListener('click', decrementValue );