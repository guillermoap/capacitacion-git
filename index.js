const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

app.get('/', (req, res) => {
  res.send('PIS 2020');
});

app.get('/version', (req, res) => {
  res.send('1.0.0')
});

app.get('/name', (req, res) => {
  res.send('SeptemberLabs')
})

app.listen(3000, () => console.log('Server listening on port 3000'));
