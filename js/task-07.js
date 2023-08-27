const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

const handler = () => text.style.fontSize = `${Number(input.value)}px`;

input.addEventListener('input', handler);
