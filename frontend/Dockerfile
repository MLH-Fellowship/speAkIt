# Stage 1
FROM node:14-alpine as build

WORKDIR /app

ARG REACT_APP_APIURL

RUN export REACT_APP_APIURL=$REACT_APP_APIURL

RUN printenv > /app/.env

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm install
RUN npm run build

# Stage 2
FROM nginx:1.13-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]