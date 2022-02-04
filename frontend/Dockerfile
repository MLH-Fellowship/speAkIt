FROM node:14-alpine

WORKDIR /app

ARG REACT_APP_APIURL

RUN export REACT_APP_APIURL=$REACT_APP_APIURL

RUN printenv > /app/.env

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm install

CMD ["npm", "run", "start"]