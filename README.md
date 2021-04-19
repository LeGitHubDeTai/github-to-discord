# github-to-discord
# Use:
```
    - name: Discord notification
      env:
        DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
        DISCORD_USERNAME: Tai Studio
        DISCORD_AVATAR: https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/bot.jpg
        MESSAGE_TITLE: New Version
        MESSAGE_DESCRIPTION: Github Action By Tai Studio
        MESSAGE_URL: ${{ secrets.DISCORD_WEBHOOK }}
        MESSAGE_COLOR: 5814783
        uses: LeGitHubDeTai/github-to-discord@v1.2.0
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
      env:
        DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
        DISCORD_USERNAME: Tai Studio
        DISCORD_AVATAR: https://raw.githubusercontent.com/LeGitHubDeTai/github-to-discord/main/bot.jpg
        MESSAGE_TITLE: New Version
        MESSAGE_DESCRIPTION: Github Action By Tai Studio
        MESSAGE_URL: ${{ secrets.DISCORD_WEBHOOK }}
        MESSAGE_COLOR: 5814783
        uses: LeGitHubDeTai/github-to-discord@v1.2.0
```
