FROM cgr.dev/chainguard/node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
USER node
EXPOSE 8080
CMD ["node", "server.js"]
