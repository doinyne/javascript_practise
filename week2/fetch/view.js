function view = (data) => {
  const repoName = document.querySelector('repoName');
  const repoImage = document.querySelector('repoImage');
  const repoLink = document.querySelector('repoLink');
  const repoDescription = document.querySelector('repoDescription');
  const repoLanguage = document.querySelector('repoLanguage'); 
  
  repoName.innerText = data.full_name;
  repoImage.src = data.owner.avatar_url;
  repoLink.setAttribute('href', data.html_url);
  repoDescription.innerText = data.description;
  repoLanguage.innerText = data.language;
}

module.exports = view;
