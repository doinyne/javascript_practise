function getGithubRepo(repoName, callback) {
  fetch(`https://api.github.com/repos/${repoName}`)
    .then((response) => response.json())
    .then((jsonData) => {
      callback(jsonData);
    });
}

// function getGithubRepo() {
//   console.log('Hello');
// }


module.exports = getGithubRepo;
