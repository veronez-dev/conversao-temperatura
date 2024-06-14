FROM node:20.14.0-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
USER node
EXPOSE 8080
CMD ["node", "server.js"]
