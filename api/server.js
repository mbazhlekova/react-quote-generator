const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quotes');

const Quote = require('./models/quote');

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

router.get('/quote', (req, res) => {
  Quote.aggregate(
    { $sample: { size: 1 } 
  }, (err, quote) => {
    if (err) {
      console.log(err);
      return;
    };
    res.json(quote);
  });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happening on port ' + port);