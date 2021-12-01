const getGithubRepo = require('./getGithubRepo');
const view = require('./view');

const button = document.querySelector('#add-post-btn');
const textInput = document.querySelector('input');

button.addEventListener('click', () => {
  let newInput = textInput.value;
  getGithubRepo(newInput, (data) => {
    view(data);
  });
});