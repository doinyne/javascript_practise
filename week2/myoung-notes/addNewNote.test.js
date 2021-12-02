/**
 * @jest-environment jsdom
 */

// tests/addNewNote.test.js
const addNewNote = require('./addNewNote');


test('displays a note', () => {
  // given we're calling addNewNote...
  // addNewNote('New test note');

  document.body.innerHTML = `<button id="button">Add post</button> div class="post" id="post-1">
    A first post
  </div>
  <div class="post" id="post-2">
    A second post
  </div>
  <div class="post" id="post-3">
    A third post
  </div>
  <script type="text/javascript" src="bundle.js"></script>`;

  const button = document.querySelector('#button');
  button.click();

  // ...there should now be 4 posts on the page
  expect(document.querySelectorAll('.post').length).toBe(2);
});