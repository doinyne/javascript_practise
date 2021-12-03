const addNewNote = require("./addNewNote");
const getNotesContents = require("./getNotesContents");
const updateHtml = require("./updateHtml");

getNotesContents();

const button = document.querySelector("#button");
const textInput = document.querySelector("#input");
const textContent = document.querySelector("#content")

updateHtml();

button.addEventListener("click", () => {
  let newInput = textInput.value;
  let newContent = textContent.value;
  let data = {
    title: newInput,
    content: newContent,
  };

  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
});
