# github-to-discord
<p align='center'>
  <a href="https://buymeacoffee.com/taistudio" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>
</p>
<p align="center">
    <a href="https://tai-studio.ml/">
        <img src="https://img.shields.io/github/v/release/LeGitHubDeTai/github-to-discord">
        <img src="https://img.shields.io/website?url=https://tai-studio.ml/">
        <img src="https://img.shields.io/github/release-date/LeGitHubDeTai/github-to-discord">
        <img src="https://img.shields.io/github/license/LeGitHubDeTai/github-to-discord">
     </a>
     <a href="https://discord.gg/Sd9afX9jNU">
       <img src="https://img.shields.io/discord/756920945691721759">
     </a>
     <br/>
     <a href="https://www.youtube.com/watch?v=MX3XQ6rgV78">
       <img src="https://img.shields.io/youtube/views/MX3XQ6rgV78?style=social">
     </a>
     <a href="https://github.com/LeGitHubDeTai/">
       <img src="https://img.shields.io/github/followers/LeGitHubDeTai?style=social">
     </a>
     <a href="https://www.youtube.com/channel/UCZiVWB8_UNH4NLzr7XbaI8A">
       <img src="https://img.shields.io/youtube/channel/subscribers/UCZiVWB8_UNH4NLzr7XbaI8A?style=social">
     </a>
     <a href="https://github.com/LeGitHubDeTai/github-to-discord">
       <img src="https://img.shields.io/github/stars/LeGitHubDeTai/github-to-discord?style=social">
     </a>
</p>
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/copy%20link.PNG">
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/create%20new%20webhook%20in%20discord.PNG">
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/add%20new%20secret.PNG">
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/copy%20and%20paste%20your%20webhook.PNG">
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/discord.PNG">

# TuTo Video:
<a href="https://youtu.be/MX3XQ6rgV78">Tutorial And Demo</a>

# Use:
```
    - name: Discord notification
      uses: LeGitHubDeTai/github-to-discord@main
      env:
        DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
        DISCORD_USERNAME: Tai Studio
        DISCORD_AVATAR: https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/icon.png
        MESSAGE_TITLE: New Version
        MESSAGE_DESCRIPTION: Github Action By Tai Studio
        MESSAGE_URL: https://github.com/LeGitHubDeTai/AnimeBack
        MESSAGE_COLOR: 5814783
```
# Complete:
```
name: Notification on push

on:
  release:
    types: [published]

jobs:
  sending:
    runs-on: ubuntu-latest
    steps:
    - name: Discord notification
      uses: LeGitHubDeTai/github-to-discord@main
      env:
        DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
        DISCORD_USERNAME: Tai Studio
        DISCORD_AVATAR: https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/icon.png
        MESSAGE_TITLE: New Version
        MESSAGE_DESCRIPTION: Github Action By Tai Studio
        MESSAGE_URL: https://github.com/LeGitHubDeTai/AnimeBack
        MESSAGE_COLOR: 5814783
        CONTENT: null
        MESSAGE_TITLE: "New Version"
        MESSAGE_DESCRIPTION: "Tai Studio"
        MESSAGE_URL: 'https://github.com/LeGitHubDeTai/github-to-discord'
        SECTION_NAME: "ChangeLog"
        AUTHOR_NAME: "Tai Studio"
        AUTHOR_URL: "https://tai-studio.ml"
        AUTHOR_AVATAR: "https://tai-studio.ml/img/icons/Tai_Studio_discord.png"
        FOOTER_TEXT: "- Tai Studio © 2021 -"
        FOOTER_URL: "https://tai-studio.ml/img/icons/Tai_Studio_discord.png"
        IMAGE: null;
```
