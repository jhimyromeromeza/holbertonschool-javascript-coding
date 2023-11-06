const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await fs.readFile('database.csv', 'utf8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line).length;
    res.send(`This is the list of our students\nNumber of students: ${students}`);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);

module.exports = app;
