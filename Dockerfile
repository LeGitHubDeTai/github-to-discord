FROM mhart/alpine-node:12.19.1

LABEL "com.github.actions.name"="Actions for Discord"
LABEL "com.github.actions.description"="Outputs a message to Discord."
LABEL "com.github.actions.icon"="message-square"
LABEL "com.github.actions.color"="gray-dark"

LABEL "repository"="https://github.com/LeGitHubDeTai/github-to-discord"
LABEL "homepage"="https://github.com/LeGitHubDeTai/github-to-discord"
LABEL "maintainer"="Tai Studio <tai.studio@outlook.fr>"
LABEL "version"="1.0.0"

ADD package.json package-lock.json /
RUN npm ci --production
ADD main.js /
RUN chmod +x /main.js

ENTRYPOINT ["node", "/main.js"]
