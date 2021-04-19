const axios = require('axios');

axios.get(`https://api.github.com/repos/${process.env.GITHUB_NAME}/${process.env.REPO_NAME}/releases/latest`)
.then(function (response) {
  axios.post(`${process.env.WEBHOOK}`, {
    username: process.env.USERNAME,
    avatar_url: process.env.AVATAR,
    content: `NEW VERSION: ${response['data']['tag_name']} ${response['data']['body']}`
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})
.catch(function (error) {
  console.log(error);
});