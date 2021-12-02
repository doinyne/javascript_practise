(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // getGithubRepo.js
  var require_getGithubRepo = __commonJS({
    "getGithubRepo.js"(exports, module) {
      var getGithubRepo2 = (repoName, callback) => {
        fetch("https://api.github.com/repos/" + repoName).then((response) => response.json()).then((jsonData) => callback(jsonData));
      };
      module.exports = getGithubRepo2;
    }
  });

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var view2 = (data) => {
        let repoName = document.querySelector("#repoName");
        let repoImage = document.querySelector("#repoImage");
        let repoLink = document.querySelector("#repoLink");
        let repoDescription = document.querySelector("#repoDescription");
        let repoLanguage = document.querySelector("#repoLanguage");
        repoName.innerText = data.full_name;
        repoImage.src = data.owner.avatar_url;
        repoLink.setAttribute("href", data.html_url);
        repoDescription.innerText = data.description;
        repoLanguage.innerText = data.language;
      };
      module.exports = view2;
    }
  });

  // index.js
  var getGithubRepo = require_getGithubRepo();
  var view = require_view();
  var button = document.querySelector("#add-post-btn");
  var textInput = document.querySelector("#input");
  button.addEventListener("click", () => {
    let newInput = textInput.value;
    getGithubRepo(newInput, (data) => {
      view(data);
    });
  });
})();
