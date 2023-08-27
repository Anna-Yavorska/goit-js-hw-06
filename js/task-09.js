function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

const handler = () => {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  color.textContent = `${currentColor};`;
};

button.addEventListener('click', handler);