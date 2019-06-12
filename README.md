# Breakout-game

### Steps to play game (without docker):

1. Download webpack `npm install webpack -g`
2. cd into game directory
3. Run command `webpack`
4. cd into node-server directory
5. Run `node server.js`

### Steps to play game with Docker

Note: Still working on the dockerfile to run webpack as well. Ran into some trouble with it, will fix in future.

1. Follow steps 1-3 above
2. cd out of game, into the main directory 
3. Run `docker build -t <name of image>:<tag> .`
4. Run the image with `docker run -p 8080:8080 <name of image>:<tag>`




