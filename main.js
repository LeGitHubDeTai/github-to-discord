const axios = require('axios');

axios.get(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/releases/latest`)
.then(function (response) {
  axios.post(`${process.env.DISCORD_WEBHOOK}`, {
    username: process.env.DISCORD_USERNAME,
    avatar_url: process.env.DISCORD_AVATAR,
    content: `NEW VERSION: ${response['data']['tag_name']} ${response['data']['body']}`,
    embeds: [
      {
        "title": "New Version",
        "description": "So WAW",
        "url": "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord",
        "color": 5814783,
        "fields": [
          {
            "name": "Add",
            "value": "- cc\n- cc\n- cc\n- cc"
          }
        ],
        "author": {
          "name": "Tai Studio",
          "url": "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord",
          "icon_url": "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/bot.jpg"
        },
        "footer": {
          "text": "- Tai Studio © 2021 -",
          "icon_url": "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/bot.jpg"
        },
        "image": {
          "url": "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/bot.jpg"
        },
        "thumbnail": {
          "url": "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/bot.jpg"
        }
      }
    ]
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