# Downloading the code

- Clone the respository by typing this command in the terminal (make sure you have git installed)
  - git clone https://github.com/prateekgupta24/CPSC-491-Group-1
- Alternatively, download the zip.
  - go to https://github.com/prateekgupta24/CPSC-491-Group-1 on a web browser
  - press the green button that says "Code"
  - press download zip
  - unzip the file
  
# Prerequisites

- Install node.js
  - https://nodejs.org/en/download/
- Install yarn
  - npm install --global yarn
- Type command "yarn install"
  - make sure your working directory is where the yarn.lock file is
  - as long as you download the correct package.json and yarn.lock this will download every package for you

# Start the program

- Change directories to where the folder was downloaded to (where the yarn.lock file is)
- To start the front-end and the back-end at the same time type the command:
  - yarn start

# To start each part seperately

- Start the Front-End
  - change directories to CPSC-491-Group-1
  - yarn start

- Start the Back-End
  - change directories to CPSC-491-Group-1/server
  - type command "nodemon server.js"
  - if nodemon doesn't work type "node server.js"



