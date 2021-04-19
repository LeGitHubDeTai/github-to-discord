const axios = require('axios');

axios.get(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/releases/latest`)
.then(function (response) {
  axios.post(`${process.env.DISCORD_WEBHOOK}`, {
    username: process.env.DISCORD_USERNAME,
    avatar_url: process.env.DISCORD_AVATAR,
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