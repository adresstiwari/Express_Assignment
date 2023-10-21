const http = require("http");

const PORT = 3023;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/random") {
    let x = Math.floor(Math.random() * 100 + 1);

    let data = { random: `${x}` };
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 400;
    res.setHeader("Content-type", "text/plain");
    res.end("Srever Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at ${HOSTNAME}: ${PORT}`);
});
