const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
const defaultName = 'Anonymous';

const handler = event => {
    const userInput = event.currentTarget.value;
    if (!userInput) {
        userName.textContent = defaultName;
        return;
    }
    userName.textContent = userInput;
}

input.addEventListener('input', handler);