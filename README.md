# github-to-discord
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/copy%20link.PNG">
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/create%20new%20webhook%20in%20discord.PNG">
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/add%20new%20secret.PNG">
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/copy%20and%20paste%20your%20webhook.PNG">
<img src="https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/assets/discord.PNG">

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
```
