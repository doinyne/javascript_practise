const getNotesContents = () => {
  const elements = document.querySelectorAll('.div');
  const contents = [];
  elements.forEach(element => {
    contents.push(element.innerText);
  });

  return contents;
}

module.exports = getNotesContents;