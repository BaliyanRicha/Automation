const express = require('express');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.json());


app.use(
    cors({

    })
);
//app.use(express.static('./Backend/'));





const uploadsFolder = path.join(__dirname, 'uploads');
const alarmFolder = path.join(__dirname, 'alarm');


app.get('/files', (req, res) => {
    const files = {
        uploads: [],
        alarm: []
    };

    fs.readdir(uploadsFolder, (err, uploadsFiles) => {
        if (!err) {
            files.uploads = uploadsFiles;
        }

        fs.readdir(alarmFolder, (err, alarmFiles) => {
            if (!err) {
                files.alarm = alarmFiles;
            }

            res.json(files);
        });
    });
});



app.get('/files/:fileName', (req, res) => {
    console.log("inside get api");
    const fileName = req.params.fileName;
    const filePath = path.join(uploadsFolder, fileName);


    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(404).send('File Not Found');
        } else {
            console.log("data is ", data);
            res.setHeader('Content-Type', 'text/plain');
            res.send(data);
        }
    });


});


app.post('/upload', (req, res) => {
    const { content } = req.body;
  
    if (!content) {
      return res.status(400).send('Content is empty.');
    }
  
    
    const fileName = `upload_${Date.now()}.txt`;
    const filePath = path.join(uploadsFolder, fileName);
    console.log(filePath);
  
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error saving the file.');
      }
  
      res.send('File uploaded and saved successfully.');
    });
  });
  




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});