/*--------------------------------------------------------------------------------------\
|  _______    _    _____ _             _ _           ________     ___   ___ ___  __     |
| |__   __|  (_)  / ____| |           | (_)         /  ____  \   |__ \ / _ \__ \/_ |    |
|    | | __ _ _  | (___ | |_ _   _  __| |_  ___    /  / ___|  \     ) | | | | ) || |    |
|    | |/ _` | |  \___ \| __| | | |/ _` | |/ _ \  |  | |       |   / /| | | |/ / | |    |
|    | | (_| | |  ____) | |_| |_| | (_| | | (_) | |  | |___    |  / /_| |_| / /_ | |    |
|    |_|\__,_|_| |_____/ \__|\__,_|\__,_|_|\___/   \  \____|  /  |____|\___/____||_|    |
|                                                   \________/                          |
\--------------------------------------------------------------------------------------*/

const request = require('request');

var repo = process.env.GITHUB_REPOSITORY || "LeGitHubDeTai/github-to-discord",
    webhook = process.env.DISCORD_WEBHOOK || null,
    username = process.env.DISCORD_USERNAME || "Tai Studio Bot",
    avatar_url = process.env.DISCORD_AVATAR || "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/icon.png",
    content =  process.env.CONTENT || null,
    title = process.env.MESSAGE_TITLE || "New Version",
    description = process.env.MESSAGE_DESCRIPTION || "Tai Studio",
    url = process.env.MESSAGE_URL || `https://github.com/${repo}`,
    color = process.env.MESSAGE_COLOR || 5814783,
    section_name = process.env.SECTION_NAME || "ChangeLog",
    author_name = process.env.AUTHOR_NAME || "Tai Studio",
    author_url = process.env.AUTHOR_URL || "https://tai-studio.ml",
    author_avatar = process.env.AUTHOR_AVATAR || "https://tai-studio.ml/img/icons/Tai_Studio_discord.png",
    footer_text = process.env.FOOTER_TEXT || "- Tai Studio © 2021 -",
    footer_url = process.env.FOOTER_URL || "https://tai-studio.ml/img/icons/Tai_Studio_discord.png",
    image = process.env.IMAGE || null;

var getRepo = {
  url: `https://api.github.com/repos/${repo}/releases/latest`,
  headers: {
    'User-Agent': 'request'
  }
}
request.get(getRepo, function(err, response, body){
  var tag_name = "",
      embed = 
        {
          "title": `${title} ${tag_name}`,
          "description": `${description}`,
          "url": `${url}`,
          "color": `${color}`,
          "fields": [
            {
              "name": `${section_name}`,
              "value": `${name(JSON.parse(response['body']).body, '##', '')}`
            }
          ],
          "author": {
            "name": `${author_name}`,
            "url": `${author_url}`,
            "icon_url": `${author_avatar}`
          },
          "footer": {
            "text": `${footer_text}`,
            "icon_url": `${footer_url}`
          },
          "thumbnail": {
            "url": `https://raw.githubusercontent.com/${repo}/icon.png`
          }
        },
        bodyE = {
          "username": `${username}`,
          "avatar_url": `${avatar_url}`
        };
  
  if(response['body'] == null){
    tag_name = response['body']['tag_name'];
  }
  if(content != null){
    bodyE.content = content;
  }
  if(image != null){
    embed.image = {"url": `${image}`}
  }

  bodyE.embeds = [embed];

  var options = {
    url: `${webhook}`,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'request'
    },
    body: JSON.stringify(bodyE)
  };
  console.log(options);
  request.post(options, function (error, response, body) {
      if(error) console.log(error);
      console.log(body);
  })
})


function name(str,replaceWhat,replaceTo){
    replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var re = new RegExp(replaceWhat, 'g');
    return str.replace(re,replaceTo);
}