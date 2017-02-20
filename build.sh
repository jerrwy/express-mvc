#!/bin/sh

date="$(date +%Y%m%d%H%M%S)"
image='daocloud.io/xxx/app-name:'${date}

docker login daocloud.io -p xxxx -u xxxx

docker build . -t ${image}

docker push ${image}