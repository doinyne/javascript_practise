/**
 * @jest-environment jsdom
 */

// tests/addNewPost.test.js
const addNewPost = require('./addNewPost');
require('../index');

test('displays a post', () => {
  // given we're calling addNewPost...
  // addNewPost('New test post');

  document.body.innerHTML = `<button id="add-post-btn">Add post</button> div class="post" id="post-1">
    A first post
  </div>
  <div class="post" id="post-2">
    A second post
  </div>
  <div class="post" id="post-3">
    A third post
  </div>
  <script type="text/javascript" src="bundle.js"></script>`;

  const button = document.querySelector('#add-post-btn');
  button.click();

  // ...there should now be 4 posts on the page
  expect(document.querySelectorAll('.post').length).toBe(2);
});