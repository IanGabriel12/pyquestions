const express = require('express');
const cors = require('cors');
const path = require('path');
const ChaptersController = require('./controllers/ChaptersController');
const QuestionsController = require('./controllers/QuestionsController');

const app = express();
app.use(cors());
app.use(express.json());
app.use(
   '/downloads',
   express.static(path.resolve(__dirname, '..', 'assets'))
)

app.get('/chapters', ChaptersController.index) //list all chapters
app.get('/chapters/:id', ChaptersController.show) //get a chapter and return the questions from it
app.get('/questions/:id', QuestionsController.show) //get detail from a question

app.listen(3307);