FROM node:16-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install -g npm@latest
RUN npm i -g --save nodemon ts-node typescript
RUN npm i -D @types/node @types/express

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]