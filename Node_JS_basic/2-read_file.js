const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.slice(1).map(line => line.split(',')).filter(student => student.length > 1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  for (let i = 0; i < students.length; i++) {
    const field = students[i][3];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(students[i][0]);
  }

  for (const field in fields) {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }
}

module.exports = countStudents;