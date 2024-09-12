const http = require('http');
const url = require('http');
const fs = require('fs');

/////////////////////////////////
// Server

const data = fs.readFileSync('./starter/dev-data/data.json', 'utf-8');
const dataToObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('this is the overview');
  } else if (pathName === '/product') {
    res.end('this is the product');
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(data);
  } else {
    res.writeHead(400, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Page not Found</h1>');
  }
});

server.listen(8000, 'localhost', () => {
  console.log('Listening from port 8000');
});
