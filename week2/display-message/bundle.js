(() => {
  // index.js
  var button = document.querySelector("#button");
  var paragraph = document.querySelector("#message");
  button.addEventListener("click", () => {
    paragraph.innerText = "Hello, Jest";
  });
})();
