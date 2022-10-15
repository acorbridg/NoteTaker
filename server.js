const express = require('express');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const noteData = require('./db/db.json');
const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public', {extensions: ["html"]}));

app.get('/api/notes', (req, res) => res.json(noteData));
    //GET /api/notes read the db.json file return all saved notes as JSON

app.post('/api/notes', (req, res) => {
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  }  
  noteData.push(newNote)
  fs.writeFileSync('./db/db.json', JSON.stringify(noteData))
  res.json(newNote)

    //add .post stuff to receive a new note to save on the request body, add it to the db.json file, then return the new note. 
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//GET notes return the notes.html file

//GET * should return the index.html file

