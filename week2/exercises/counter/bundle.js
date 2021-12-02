(() => {
  // index.js
  var counter = 0;
  var counterEl = document.querySelector("#counter");
  var button = document.querySelector("#inc-button");
  button.addEventListener("click", () => {
    counter += 1;
    counterEl.innerText = counter;
  });
})();
