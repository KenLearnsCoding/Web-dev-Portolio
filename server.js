const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/img", express.static(path.join(__dirname, 'img')));

// here is where we will add our routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/work', (req, res) => {
    res.render('work');
});

app.get('/healthcare', (req, res) => {
    res.render('Healthcare');
});

app.get('/cryptoExchange', (req, res) => {
    res.render('crypto');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});