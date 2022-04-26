const express = require('express');
const fileUpload = require('express-fileupload');

const path = require('path');



const app = express();

app.use(fileUpload());
let port = process.env.PORT || 3001;

// console.log(port);

app.use(express.static(path.resolve(__dirname, '..', 'build')));
// console.log(path.resolve(__dirname, "..",'build'));

app.get('/uploadVideo', (req, res, next) => {
    res.status(201).json({msg: "Welcome to the serve page"})
})

app.post('/uploadVideo', (req, res, next) => {
    if(!req.files){
        return res.status(400).json({msg: 'No file uploaded'});
    }

    // console.log("The request files --- ", req.files.file);

    const file = req.files.file;

    file.mv(`${__dirname}/../public/uploads/${file.name}`, err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    })
})

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

// console.log("Welcome to the Server: ", path.join(__dirname, "..", "build", "index.html"))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})