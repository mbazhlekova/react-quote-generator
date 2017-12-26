const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quotes');

const app = express();

const port = process.env.PORT || 8080;

const router = express.Router();

router.use((req, res, next) => {
  console.log('something is happening');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'hooray! it works!' });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happening on port ' + port);