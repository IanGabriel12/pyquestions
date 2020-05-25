var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var requireDir = require('require-dir');

var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/pyquestions',
   {useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir('./src/models');


var routers = requireDir('./routes');
app.use('/chapters', routers.chapterRouter);
app.use('/questions', routers.questionRouter);
app.listen(3307);