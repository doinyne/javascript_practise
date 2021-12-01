
const addNewPost = require('./addNewPost');
const getPostsContents = require('./getPostsContents');
getPostsContents();

addNewPost('Hello is this working?');

const button = document.querySelector('#add-post-btn');
const textInput = document.querySelector('input');

button.addEventListener('click', () => {
  let newInput = textInput.value;
  addNewPost(newInput);
});

