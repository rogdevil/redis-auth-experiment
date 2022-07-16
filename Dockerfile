FROM node:16

#create a working dir
WORKDIR /USR/SRC/APP

#install app dependencies 
# a wildcard is used to ensure bot package.hjson and packagelock are cpoied
COPY package*.json ./

RUN npm install

#build app source code
COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]


