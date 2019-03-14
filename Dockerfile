FROM node:alpine
EXPOSE 8000

RUN mkdir /code
COPY . /code


WORKDIR /code
RUN npm install

CMD ["npm", "start"]