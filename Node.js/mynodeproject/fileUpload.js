const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
const upload = multer({storage: storage}).single('file');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.send(`Error: ${err}`);
      } else {
        if (req.file === undefined) {
          res.send('Error: No File Selected!');
        } else {
          res.send(`File Uploaded: ${req.file.filename}`);
        }
      }
    });
  });

app.listen(port, ()=> {
    console.log("Server running on http://localhost:3000");
    
})