const got = require('got');

const handleReceiveResponse = (response) => {
  console.log(JSON.parse(response.body));
}

// got('https://api.github.com/repos/sinatra/sinatra').then(handleReceiveResponse);


// // const fetchRepoInfo = (repoName, callBack) => {
// //   got(`https://api.github.com/repos/${repoName}`).then((response) => {
// //     callBack(response)
// //   });
// // }

// // fetchRepoInfo('sinatra/sinatra'); 

// const fetchRepoInfo = (repoName, callBack) => {
//   got(`https://api.github.com/repos/${repoName}`).then((response) => {
//     // send back the response to fetchRepoInfo's caller
//   });
// }

// fetchRepoInfo('sinatra/sinatra', (repoResponse) => {
//   console.log(repoResponse);
// });

const got = require('got');

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    callback(response);
  });
}