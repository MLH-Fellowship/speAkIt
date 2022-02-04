FROM node:14-alpine

WORKDIR /app

ARG REACT_APP_APIURL

RUN export REACT_APP_APIURL=$REACT_APP_APIURL

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN printenv > ./.env

RUN npm install

CMD ["npm", "run", "start"]