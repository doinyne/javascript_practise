let counter = 0;
const counterEl = document.querySelector('#counter');

const button = document.querySelector('#inc-button');

button.addEventListener('click', () => {
  counter += 1;
  counterEl.innerText = counter;
});


