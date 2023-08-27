const input = document.querySelector('#validation-input');
const requiredQuantity = parseInt(input.dataset.length);

const handler = event => {
    const inputLength = event.currentTarget.value.length;
    
    if (inputLength === requiredQuantity) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        return
    };
    input.classList.remove('valid');
    input.classList.add('invalid');
};

input.addEventListener('blur', handler);