(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addNewNote.js
  var require_addNewNote = __commonJS({
    "addNewNote.js"(exports, module) {
      var addNewNote2 = (title) => {
        const newNoteEl = document.createElement("div");
        const newId = document.querySelectorAll(".post").length + 1;
        newNoteEl.innerText = title;
        newNoteEl.className = "post";
        newNoteEl.id = "post-" + newId;
        document.body.appendChild(newNoteEl);
      };
      module.exports = addNewNote2;
    }
  });

  // getNotesContents.js
  var require_getNotesContents = __commonJS({
    "getNotesContents.js"(exports, module) {
      var getNotesContents2 = () => {
        const elements = document.querySelectorAll(".div");
        const contents = [];
        elements.forEach((element) => {
          contents.push(element.innerText);
        });
        return contents;
      };
      module.exports = getNotesContents2;
    }
  });

  // index.js
  var addNewNote = require_addNewNote();
  var getNotesContents = require_getNotesContents();
  getNotesContents();
  var button = document.querySelector("#button");
  var textInput = document.querySelector("#input");
  button.addEventListener("click", () => {
    let newInput = textInput.value;
    console.log(newInput);
    addNewNote(newInput);
  });
})();
