const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    return res.render("activity.ejs");
})

app.listen(80, () => {
    console.log('worked!');
})