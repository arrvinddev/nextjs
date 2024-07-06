FROM node:18-alpine
WORKDIR /app

COPY . .

RUN npm install 
RUN npm install keystone
#RUN npm install "@prisma/client": "3.13.0"
#RUN npm prisma generate
EXPOSE 3000

CMD ["npm", "run", "dev"]
