const express = require('express');
const path = require('path');

const app = express();
let port = process.env.PORT || 3001;
<<<<<<< HEAD
console.log(port);

app.use(express.static(path.resolve(__dirname, './platform/build')));
=======
>>>>>>> origin/main

app.get('/upload', (req, res, next) => {
    res.status(201).json({msg: "Welcome to the serve page"})
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
<<<<<<< HEAD
    console.log(`listening on port ${port}`);
=======
    console.log(`listening on port ${port}`)
>>>>>>> origin/main
})