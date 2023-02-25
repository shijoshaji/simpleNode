const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;

  //   will send response to html
  if (url === '/') {
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Welcome</h1>');
    res.write(
      '<form action="/test" method="POST"> <input type="text" name="msg"><button type="submit">Test</button></form>'
    );
    res.write('</body>');
    res.write('</html>');
  }

  if (url === '/test') {
    const val = [];
    //   parse request body
    req.on('data', (chunk) => {
      console.log('chucnk', chunk);
      val.push(chunk);
    });

    req.on('end', () => {
      const parseVal = Buffer.concat(val).toString();
      const msg = parseVal.split('=')[1];
      fs.writeFileSync('msg.txt', msg.replaceAll('+', ' '));
    });
  }

  return res.end();
};

module.exports = {
  requestHandler: requestHandler,
};
