const view = (data) => {
  let repoName = document.querySelector('repoName');
  let repoImage = document.querySelector('repoImage');
  let repoLink = document.querySelector('repoLink');
  let repoDescription = document.querySelector('repoDescription');
  let repoLanguage = document.querySelector('repoLanguage'); 
  
  repoName.innerText = data.full_name;
  repoImage.src = data.owner.avatar_url;
  repoLink.setAttribute('href', data.html_url);
  repoDescription.innerText = data.description;
  repoLanguage.innerText = data.language;
};

module.exports = view;
