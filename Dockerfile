FROM nginx:stable-alpine as production-stage
WORKDIR /nuxtjs-app

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

RUN apk update && apk add nodejs

EXPOSE 80
CMD  ["nginx", "-g", "daemon off;"]