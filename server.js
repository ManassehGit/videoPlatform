const express = require('express');

const app = express();
let port = 5000;

app.get('/upload', (req, res, next) => {
    res.status(201).send("Welcome")
})

app.post('/upload', (req, res, next) => {
    if(req.files === null){
        return res.status(400).json({msg: 'No file uploaded'});
    }

    const file = req.files.file;
    file.mv(`${__dirname}/videoPlatform/public/uploads/${file.name}`, err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ filename: file.name, filePath: `/uploads/${file.name}` })
    })
})

app.listen(port, () => {
    console.log("listening on port 5000")
})