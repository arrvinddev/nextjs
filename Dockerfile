FROM node:16-alpine
WORKDIR /app
# COPY package.json yarn.lock ./
COPY package.json ./
RUN npm install 
RUN npm install keystone
RUN ["npx", "prisma", "generate"]
COPY . .
EXPOSE 3000
# EXPOSE 80
RUN ["npm","run", "build"]
CMD ["npm", "run", "start"]