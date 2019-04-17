FROM node:10.14-alpine

WORKDIR /app

COPY package.json /app/

RUN yarn install

COPY . /app/

EXPOSE 4000

CMD ["yarn", "start"]
