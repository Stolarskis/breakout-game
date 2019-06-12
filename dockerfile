FROM node  AS builder
ADD . /tmp
WORKDIR /tmp/breakout-game
#RUN npm install webpack -g
#RUN webpack
WORKDIR /tmp/node-server
ENTRYPOINT ["node","server.js"]




