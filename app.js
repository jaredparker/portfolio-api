
const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.JSON({ message: 'Hello World' });
});

module.exports = app;