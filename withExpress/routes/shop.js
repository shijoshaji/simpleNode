const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(' ********');
  // console.log(' First Middle ware');
  next(); //NOTE: we add next() so the request can continue to the next middleware
});

router.use((req, res, next) => {
  // console.log(' Second Middle ware');
  next();
});

router.use((req, res, next) => {
  // console.log(' Third Middle ware');
  res.send('<h1>We in 3rd middle wear</h1>');
});

module.exports = router;
