FROM node:19
WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install --prod --frozen-lockfile

COPY . .

CMD [ "node", "server.js" ]



