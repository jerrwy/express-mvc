FROM node:6.9

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g pm2

WORKDIR /var/workspace
COPY package.json /var/workspace/package.json
RUN npm install && npm cache clean
COPY . /var/workspace

EXPOSE 3000
CMD ["pm2-docker", "./bin/www"]