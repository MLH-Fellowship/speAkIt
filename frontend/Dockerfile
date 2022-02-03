FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm install

CMD ["npm", "run", "start"]