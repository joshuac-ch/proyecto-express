FROM node:20-alpine

WORKDIR /tarea1

COPY package*.json ./ 

RUN npm install

EXPOSE 3000 

COPY . .

CMD [ "node" , "server.js" ]