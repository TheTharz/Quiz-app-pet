const dotenv = require('dotenv').config();
const express = require('express');
const {db} = require('./configs/db.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const Port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Controllers
const loginAuth = require('./controller/auth.controller.js');
const registerAuth = require('./controller/auth.controller.js');
const quizAdd = require('./controller/quizAdd.controller.js');
const quiz = require('./controller/displayQuiz.controller.js');
const getQuiz = require('./controller/quizAdd.controller.js');
const user = require('./controller/auth.controller.js');
const userResult = require('./controller/userData.controller.js');

// Routes
app.use('/', loginAuth);
app.use('/', registerAuth);
app.use('/admin', quizAdd);
app.use('/quiz', quiz);
app.use('/quiz', getQuiz);
app.use('/user', user);
app.use('/userResult', userResult);

// Start server
app.listen(Port, async function () {
    try {
        await db();
        console.log(`Listening on ${Port}`);
    } catch (error) {
        console.error(error); // Corrected the error logging
    }
});
