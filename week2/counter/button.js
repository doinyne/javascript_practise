const button = document.querySelector('#click-button'); // getting the button with HTML id "click-button"
button.addEventListener('click', () => {
  // this callback function will execute only when the event is triggered
  console.log('The button was clicked!');
});