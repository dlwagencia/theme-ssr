FROM node:20-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY . .
USER node
EXPOSE 8001
CMD ["node", "server.js"]