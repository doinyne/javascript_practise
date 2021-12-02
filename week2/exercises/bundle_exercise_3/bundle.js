(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addNewPost.js
  var require_addNewPost = __commonJS({
    "addNewPost.js"(exports, module) {
      var addNewPost2 = (title) => {
        const newPostEl = document.createElement("div");
        const newId = document.querySelectorAll(".post").length + 1;
        newPostEl.innerText = title;
        newPostEl.className = "post";
        newPostEl.id = "post-" + newId;
        document.body.appendChild(newPostEl);
      };
      module.exports = addNewPost2;
    }
  });

  // getPostsContents.js
  var require_getPostsContents = __commonJS({
    "getPostsContents.js"(exports, module) {
      var getPostsContents2 = () => {
        const elements = document.querySelectorAll(".div");
        const contents = [];
        elements.forEach((element) => {
          contents.push(element.innerText);
        });
        return contents;
      };
      module.exports = getPostsContents2;
    }
  });

  // index.js
  var addNewPost = require_addNewPost();
  var getPostsContents = require_getPostsContents();
  getPostsContents();
  addNewPost("Hello is this working?");
  var button = document.querySelector("#add-post-btn");
  var textInput = document.querySelector("input");
  button.addEventListener("click", () => {
    let newInput = textInput.value;
    addNewPost(newInput);
  });
})();
