const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sumRoute = require('./routes/sum.route');
const subtractionRoute = require('./routes/subtraction.route');
const multiplicationRoute = require('./routes/multiplication.route');
const divisionRoute = require('./routes/division.route');

const app = express();

app.use(bodyParser.json());
//  no permitira objetos anidados
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/calculator', sumRoute);
app.use('/api/calculator', subtractionRoute);
app.use('/api/calculator', multiplicationRoute);
app.use('/api/calculator', divisionRoute);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

module.exports = app;