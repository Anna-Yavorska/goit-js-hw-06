function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const placeForCollection = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

const onCreateButton = () => {
  const enteredNumber = Number(input.value);
  if (enteredNumber > 0 && enteredNumber <= 100) {
    createBoxes(enteredNumber)
  } else {
    alert('Please,enter number in range 1 - 100');
  }
};

const createBoxes = amount => {
  const arrayForDivs = [];
  let defaulSize = 20;
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${defaulSize += 10}px`;
      div.style.height = `${defaulSize += 10}px`;
      div.style.backgroundColor = getRandomHexColor();
      arrayForDivs.push(div);
    };
   placeForCollection.innerHTML = arrayForDivs.map(div => div.outerHTML).join('');
}

const destroyBoxes = () => {
  placeForCollection.innerHTML = '';
  input.value = '';
};
createButton.addEventListener('click', onCreateButton);
destroyButton.addEventListener('click', destroyBoxes);

