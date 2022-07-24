FROM node:16.15.1

WORKDIR /server

COPY ["package.json" , "package-lock.json", "./"]

RUN npm ci

COPY . .

CMD [ "npm ", "run", "dev" ]

