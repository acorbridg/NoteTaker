const fs = require('fs')
const path = require('path')


module.exports = app 

//api routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  
  app.get('/api/notes', (req, res) => res.json(noteData));
      //GET /api/notes read the db.json file return all saved notes as JSON
  
  app.post('/api/notes', (req, res) => {
      //add .post stuff to receive a new note to save on the request body, add it to the db.json file, then return the new note. 
  
  app.delete('/api/notes', (req, res) => {
      //delete a note. 
   
  })


//html routes

// display notes html

// display index html

// display updated versions when notes are added/deleted
