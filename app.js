const express = require('express');
const routemanger = require('./routes/route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routemanger);

app.get('/health', (req, res) => {
  res.status(200).json('Server up!');
});

app.get('*', (req, res) => {
  res.status(404).json('PAGE NOT FOUND');
});

module.exports = app;
