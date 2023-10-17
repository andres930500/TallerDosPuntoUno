const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config();
const morgan = require('morgan');


const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'My app';

const { readFile, writeFile } = require('./src/files.js');

const FILE_NAME = './DB/products.json';
app.use(morgan('combined'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/products', (req, res) => {
    const data = readFile(FILE_NAME);
    res.render('index', { products: data });
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} is running on http://localhost:${PORT}`);
});
