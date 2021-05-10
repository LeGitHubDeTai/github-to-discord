const axios = require('axios');

axios.get(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/releases/latest`)
.then(function (response) {
  if(response['data']['body']){
    axios.post(`${process.env.DISCORD_WEBHOOK}`, {
      username: process.env.DISCORD_USERNAME,
      avatar_url: process.env.DISCORD_AVATAR,
      content: null,
      embeds: [
        {
          "title": `${process.env.MESSAGE_TITLE} ${response['data']['tag_name']}`,
          "description": `${process.env.MESSAGE_DESCRIPTION}`,
          "url": `${process.env.MESSAGE_URL}`,
          "color": process.env.MESSAGE_COLOR,
          "fields": [
            {
              "name": "ChangeLog",
              "value": `${name(response['data']['body'], '##', '')}`
            }
          ],
          "author": {
            "name": "Tai Studio",
            "url": "https://tai-studio.ml",
            "icon_url": "https://tai-studio.ml/img/icons/Tai_Studio_discord.png"
          },
          "footer": {
            "text": "- Tai Studio © 2021 -",
            "icon_url": "https://tai-studio.ml/img/icons/Tai_Studio_discord.png"
          },
          "image": {
            "url": null
          },
          "thumbnail": {
            "url": `https://raw.githubusercontent.com/${process.env.GITHUB_REPOSITORY}/icon.png`
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
  }else{
    axios.post(`${process.env.DISCORD_WEBHOOK}`, {
      username: process.env.DISCORD_USERNAME,
      avatar_url: process.env.DISCORD_AVATAR,
      content: null,
      embeds: [
        {
          "title": `${process.env.MESSAGE_TITLE} ${response['data']['tag_name']}`,
          "description": `${process.env.MESSAGE_DESCRIPTION}`,
          "url": `${process.env.MESSAGE_URL}`,
          "color": process.env.MESSAGE_COLOR,
          "fields": [
            {
              "name": "ChangeLog",
              "value": `${response['data']['body']}`
            }
          ],
          "author": {
            "name": "Tai Studio",
            "url": "https://tai-studio.ml",
            "icon_url": "https://tai-studio.ml/img/icons/Tai_Studio_discord.png"
          },
          "footer": {
            "text": "- Tai Studio © 2021 -",
            "icon_url": "https://tai-studio.ml/img/icons/Tai_Studio_discord.png"
          },
          "image": {
            "url": null
          },
          "thumbnail": {
            "url": `https://raw.githubusercontent.com/${process.env.GITHUB_REPOSITORY}/icon.png`
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
  }
})
.catch(function (error) {
  console.log(error);
});

function name(str,replaceWhat,replaceTo){
    replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var re = new RegExp(replaceWhat, 'g');
    return str.replace(re,replaceTo);
}