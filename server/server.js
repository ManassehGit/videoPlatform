const express = require('express');
const path = require('path');

const app = express();
let port = process.env.PORT || 3001;

console.log(port);

app.use(express.static(path.resolve(__dirname, '..', 'build')));
console.log(path.resolve(__dirname, "..",'build'));

app.get('/api', (req, res, next) => {
    res.status(201).json({msg: "Welcome to the serve page"})
})

app.post('/api', (req, res, next) => {
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

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

console.log("Welcome to the Server: ", path.join(__dirname, "..", "build", "index.html"))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})