#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (!error) {
    let length = 0;
    for (const movie of JSON.parse(body).results) {
      for (const char of movie.characters) {
        if (char.includes(18)) {
          length++;
        }
      }
    }
    console.log(length);
  }
});