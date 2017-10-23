// var obj = {
//     name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew", "age": 23}';
// var person = JSON.parse(personString);
// console.log(person.name, " ", person.age);

const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
