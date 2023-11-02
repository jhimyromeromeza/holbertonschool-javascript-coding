const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        let lines = data.split('\n');
        lines = lines.filter((line) => line.length > 0);
        const students = lines.slice(1).map((line) => line.split(','));
        console.log(`Number of students: ${students.length}`);
        const fields = {};
        for (const student of students) {
          const field = student[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        }
        for (const [field, studentsField] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${studentsField.length}. List: ${studentsField.join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
