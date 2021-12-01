(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // getGithubRepo.js
  var require_getGithubRepo = __commonJS({
    "getGithubRepo.js"(exports, module) {
      function getGithubRepo2(repoName, callback) {
        fetch(`https://api.github.com/repos/${repoName}`).then((response) => response.json()).then((jsonData) => {
          callback(jsonData);
        });
      }
      module.exports = getGithubRepo2;
    }
  });

  // index.js
  var getGithubRepo = require_getGithubRepo();
  var button = document.querySelector("#add-post-btn");
  var textInput = document.querySelector("input");
  button.addEventListener("click", () => {
    let newInput = textInput.value;
    getGithubRepo(newInput);
  });
})();
