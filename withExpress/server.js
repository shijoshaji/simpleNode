// const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// custom imports
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const rootDir = require('./util/pathWrapper');

// using for parse the req.body sent from forms
app.use(bodyParser.urlencoded({ extended: false }));

// NOTE: middle ware runs top to bottom, if no path mentioned it goes to all  middle ware
//  if we want specific middleware we can achieve it via path

app.use('/pathEg', (req, res) => {
  console.log('path');
  res.send('<h1>Middle wear via path</h1>');
});

// add new product
// app.use('/addProduct', (req, res, next) => {
//   console.log('we are in add product');
//   res.send(
//     '<form action="/product" method="POST"> <input type="text" name="prdName"><button type="submit">Add Product</button></form>'
//   );
// });

// app.post('/product', (req, res, next) => {
//   console.log('we are redirected', req.body);
//   res.redirect('/');
// });

app.use('/admin', admin);
app.use(shop);

// capture for 404 error
app.use((req, res, next) => {
  // res.status(404).send('<h1>Page Not Found</h1>');
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// app.use((req, res, next) => {
//   // console.log(' ********');
//   // console.log(' First Middle ware');
//   next(); //NOTE: we add next() so the request can continue to the next middleware
// });

// app.use((req, res, next) => {
//   // console.log(' Second Middle ware');
//   next();
// });

// app.use((req, res, next) => {
//   // console.log(' Third Middle ware');
//   res.send('<h1>We in 3rd middle wear</h1>');
// });

// const server = http.createServer(app);
// server.listen(PORT);

// NOTE: this code can be replaced as below using express

app.listen(PORT);
