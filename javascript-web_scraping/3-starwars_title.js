#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(url, (err, response, body) => {
  if (!err) {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});