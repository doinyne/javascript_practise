const addNewNote = (title) => {
  const newNoteEl = document.createElement('div');
  // calculate the new number for the html ID
  const newId = document.querySelectorAll('.post').length + 1;

  newNoteEl.innerText = title;
  newNoteEl.className = 'post';
  newNoteEl.id = 'post-' + newId;
  document.body.appendChild(newNoteEl);
}

module.exports = addNewNote;