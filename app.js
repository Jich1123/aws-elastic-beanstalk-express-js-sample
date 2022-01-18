const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Jich v3.0 手动执行'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
