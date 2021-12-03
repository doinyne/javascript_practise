(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addNewNote.js
  var require_addNewNote = __commonJS({
    "addNewNote.js"(exports, module) {
      var addNewNote2 = (title, content) => {
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

  // updateHtml.js
  var require_updateHtml = __commonJS({
    "updateHtml.js"(exports, module) {
      var updateHtml2 = () => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
          data.forEach((item) => {
            const note = document.createElement("p");
            note.innerText = item.title;
            note.innerText = item.content;
            document.body.append(note);
          });
        });
      };
      module.exports = updateHtml2;
    }
  });

  // index.js
  var addNewNote = require_addNewNote();
  var getNotesContents = require_getNotesContents();
  var updateHtml = require_updateHtml();
  getNotesContents();
  var button = document.querySelector("#button");
  var textInput = document.querySelector("#input");
  var textContent = document.querySelector("#content");
  updateHtml();
  button.addEventListener("click", () => {
    let newInput = textInput.value;
    let newContent = textContent.value;
    let data = {
      title: newInput,
      content: newContent
    };
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json());
  });
})();
