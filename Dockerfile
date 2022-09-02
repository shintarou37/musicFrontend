FROM node:16

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

COPY package*.json ./

# アプリケーションのソースをバンドルする
COPY . .

RUN npm install

RUN npm run build

ENV NODE_ENV production

CMD [ "npm", "start" ]