# Prerequisites
- install node.js
  - https://nodejs.org/en/download/
- install yarn
  - npm install --global yarn
- type command "yarn install"
  - make sure your working directory is where the yarn.lock file is
  - as long as you download the correct package.json and yarn.lock this will download every package for you

# To start the Front-End

- cd to CPSC-491-Group-1
- yarn start

# To start the Back-End

- cd to CPSC-491-Group-1/server
- nodemon server.js
  - nodemon allows you to restart the server when saving the file
- if nodemon doesn't work
  - node server.js

# test backend

- install REST Client in vscode extensions
- open /server/test.http and add http requests seperated by ###
- press Send Request to test
- https://marketplace.visualstudio.com/items?itemName=humao.rest-client
