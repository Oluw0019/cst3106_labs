const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received:', req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello! Server is working!\n');
});

server.listen(3000, 'localhost', () => {
    console.log('✅ Simple server running on http://localhost:3000');
    console.log('Try visiting http://localhost:3000 in your browser');
});