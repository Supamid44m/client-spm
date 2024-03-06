FROM node:20.9.0

WORKDIR /client-spm

COPY ./package.json .

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm","run","dev" ]


# map port
# docker ps
# docker rm -f $(docker ps -a -q)
# docker rm -f image_name

# docker run -d -p 8000:8000 --name name image_name