FROM node:20.14.0-alpine3.20
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
#EXPOSE 8080
CMD ["node", "server.js"]
