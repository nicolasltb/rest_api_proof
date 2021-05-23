FROM node:alpine

WORKDIR /usr/Node_API

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]