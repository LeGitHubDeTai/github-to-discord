const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

axios.get(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/releases`)
.then(function (response) {
  // var format = []

  // var test = response['data']['body'].split('\r\n');
  // var buffer_title = [];
  // var buffer_content = [];
  // var buffer_index = [1];
  // buffer_title.push(test[0]);
  // for(i=0;i < test.length;i++){
  //   if(test[i] == ""){
  //     buffer_title.push(test[i+1]);
  //     buffer_index.push(i+2);
  //   }
  // }
  // buffer_index.push(test.length);
  // for(i=0;i < buffer_index.length;i++){
  //   myChunk = test.slice(buffer_index[i], buffer_index[i + 1]);
  //   if(i != (buffer_index.length - 2)){
  //     myChunk.pop();
  //     myChunk.pop();
  //   }
  //   buffer_content.push(myChunk);
  // }
  // for(i=0;i < buffer_content.length;i++){
  //   var waw = '';
  //   for(r=0;r < buffer_content[i].length;r++){
  //     waw = buffer_content[i][r] + '\n';
  //     if(buffer_content[i].length){
  //       format.push({"name": buffer_title[i], "value": waw});
  //     }
  //   }
  // }
  // console.log(test);
  // console.log(buffer_title);
  // console.log(buffer_content);
  // console.log(buffer_index);
  // console.log(format);

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
          "url": "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/icon.png"
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
})
.catch(function (error) {
  console.log(error);
});

function name(str,replaceWhat,replaceTo){
    replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var re = new RegExp(replaceWhat, 'g');
    return str.replace(re,replaceTo);
}