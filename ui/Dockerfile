FROM node:10

WORKDIR /usr/src/app/newsfacts_ui

COPY package.json ./
COPY package-lock.json ./

RUN npm install

EXPOSE 80

CMD ["npm", "run", "build"]