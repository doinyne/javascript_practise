const addNewNote = require('./addNewNote');
const getNotesContents = require('./getNotesContents');
getNotesContents();

const button = document.querySelector('#button');
const textInput = document.querySelector('#input');

button.addEventListener('click', () => {
  let newInput = textInput.value;
  console.log(newInput);
  addNewNote(newInput);
});