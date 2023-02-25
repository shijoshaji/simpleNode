const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/pathWrapper');

// router.get('/', (req, res, next) => {
//   // console.log(' ********');
//   // console.log(' First Middle ware');
//   next(); //NOTE: we add next() so the request can continue to the next middleware
// });

// router.use((req, res, next) => {
//   // console.log(' Second Middle ware');
//   next();
// });

// router.use((req, res, next) => {
//   // console.log(' Third Middle ware');
//   res.send('<h1>We in 3rd middle wear</h1>');
// });

// NOTE: we created html file so we can send them as file

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
