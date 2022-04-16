const express = require('express');

const app = express();
let port = 3000;

app.get('/', (req, res, next) => {
    res.status(201).send("Welcome")
})


app.listen(port, () => {
    console.log("listening on port 3000")
})