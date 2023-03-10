const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.router');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todo', todoRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('app running on port ', PORT);
})
