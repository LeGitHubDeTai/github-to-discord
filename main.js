/*-----------------------------------------------------------------------------------------\
|  _______                 _____  .               _                ___    ___/  ___    __  |
| '   /      ___  `       (      _/_   ,   .   ___/ `   __.       /   \ .'  /\ /   \ .'    |
|     |     /   ` |        `--.   |    |   |  /   | | .'   \        _-' |  / |   _-' |---. |
|     |    |    | |           |   |    |   | ,'   | | |    |       /    |,'  |  /    |   | |
|     /    `.__/| /      \___.'   \__/ `._/| `___,' /  `._.'      /___, /`---' /___, `._.' |
|                                                 `                                        |                                                                                                                                                                                                                                                 
\-----------------------------------------------------------------------------------------*/
const axios = require('axios');

var repo = process.env.GITHUB_REPOSITORY || "LeGitHubDeTai/github-to-discord",
    webhook = process.env.DISCORD_WEBHOOK || null,
    username = process.env.DISCORD_USERNAME || "Tai Studio Bot",
    avatar_url = process.env.DISCORD_AVATAR || "https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/icon.png",
    content = process.env.CONTENT || null,
    title = process.env.MESSAGE_TITLE || "New Version",
    description = process.env.MESSAGE_DESCRIPTION || "Tai Studio",
    url = process.env.MESSAGE_URL || `https://github.com/${repo}`,
    color = process.env.MESSAGE_COLOR || 5814783,
    section_name = process.env.SECTION_NAME || "ChangeLog",
    author_name = process.env.AUTHOR_NAME || "Tai Studio",
    author_url = process.env.AUTHOR_URL || "https://tai-studio.netlify.app/",
    author_avatar = process.env.AUTHOR_AVATAR || "https://tai-studio.netlify.app/img/logo/Tai_Studio.png",
    footer_text = process.env.FOOTER_TEXT || "- Tai Studio © 2022 -",
    footer_url = process.env.FOOTER_URL || "https://tai-studio.netlify.app/img/logo/Tai_Studio.png",
    image = process.env.IMAGE || null;

async function sendDiscordWebhook() {
  try {
    // Récupération de la dernière release GitHub
    const releaseResponse = await axios.get(
      `https://api.github.com/repos/${repo}/releases/latest`,
      {
        headers: {
          'User-Agent': 'axios'
        }
      }
    );

    const bodyJson = releaseResponse.data;
    const tag_name = bodyJson.tag_name || "";

    const embed = {
      title: `${title} ${tag_name}`,
      description: `${description}`,
      url: `${url}`,
      color: Number(color),
      fields: [
        {
          name: `${section_name}`,
          value: `${name(bodyJson.body, '##', '')}`
        }
      ],
      author: {
        name: `${author_name}`,
        url: `${author_url}`,
        icon_url: `${author_avatar}`
      },
      footer: {
        text: `${footer_text}`,
        icon_url: `${footer_url}`
      },
      thumbnail: {
        url: `https://raw.githubusercontent.com/${repo}/icon.png`
      }
    };

    const bodyE = {
      username: `${username}`,
      avatar_url: `${avatar_url}`,
      embeds: [embed]
    };

    if (content != null) {
      bodyE.content = content;
    }

    if (image != null) {
      embed.image = { url: `${image}` };
    }

    // Envoi au webhook Discord
    const webhookResponse = await axios.post(
      webhook,
      bodyE,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log("Webhook envoyé avec succès");
    console.log(webhookResponse.data);

  } catch (error) {
    console.error("Erreur :", error.response?.data || error.message);
  }
}

sendDiscordWebhook();

function name(str, replaceWhat, replaceTo) {
  if (str && replaceWhat != null) {
    replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const re = new RegExp(replaceWhat, 'g');
    return str.replace(re, replaceTo);
  }
  return str;
}
