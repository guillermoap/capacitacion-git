const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
      res.send('Capacitación Git');
});

app.listen(3000, () => console.log('Server listening on port 3000'));
