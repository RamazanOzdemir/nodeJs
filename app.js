const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app);
const port = process.env.PORT || 4000;

app.listen(port);

console.log('You are listening to port 3000');
