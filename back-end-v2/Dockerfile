# base image of node-alpine
FROM node:alpine

# set working directory
WORKDIR /usr/src/app

# copy package.json to working directory
COPY package.json .

# install nodejs and npm
RUN apk add --update nodejs npm

# install dependencies
RUN npm install

# copy all files to working directory
COPY . .

# expose port 8080
EXPOSE 8080

# run the app
CMD  ["npm", "run", "start"]

