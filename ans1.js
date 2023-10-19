const http = require('http');

const menProducts = [
  { id: 1, name: 'Men T shirt 1', brand:"Puma",color:"Black",Size:"M" },
  { id: 2, name: 'Men T shirt 2', brand:"Puma",color:"Black",Size:"L" },
  { id: 3, name: 'Men T shirt 3', brand:"Puma",color:"Black",Size:"M" },
  { id: 4, name: 'Men T shirt 4', brand:"Puma",color:"Black",Size:"XL" },
  { id: 5, name: 'Men T shirt 5', brand:"Puma",color:"Black",Size:"M" },
  { id: 6, name: 'Men T shirt 6', brand:"Puma",color:"Black",Size:"XXL" },
  { id: 7, name: 'Men T shirt 7', brand:"Puma",color:"Black",Size:"M" },
  { id: 8, name: 'Men T shirt 8', brand:"Puma",color:"Black",Size:"S" },
  { id: 9, name: 'Men T shirt 9', brand:"Puma",color:"Black",Size:"M" },
  
];

const womenProducts = [
    { id: 1, name: 'Women T shirt 1', brand:"Puma",color:"Black",Size:"M" },
    { id: 2, name: 'Women T shirt 2', brand:"Puma",color:"Black",Size:"L" },
    { id: 3, name: 'Women T shirt 3', brand:"Puma",color:"Black",Size:"M" },
    { id: 4, name: 'Women T shirt 4', brand:"Puma",color:"Black",Size:"XL" },
    { id: 5, name: 'Women T shirt 5', brand:"Puma",color:"Black",Size:"M" },
    { id: 6, name: 'Women T shirt 6', brand:"Puma",color:"Black",Size:"XXL" },
    { id: 7, name: 'Women T shirt 7', brand:"Puma",color:"Black",Size:"M" },
    { id: 8, name: 'Women T shirt 8', brand:"Puma",color:"Black",Size:"S" },
    { id: 9, name: 'Women T shirt 9', brand:"Puma",color:"Black",Size:"M" },
  
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    res.writeHead(200);
    res.end(JSON.stringify(menProducts.slice(0, 10))); 
  } else if (req.url === '/women') {
    res.writeHead(200);
    res.end(JSON.stringify(womenProducts.slice(0, 10))); 
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

const port = 3123; 

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
