var express = require('express');
var cors = require('cors');
var requireDir = require('require-dir');

var app = express();
app.use(cors());
app.use(express.json());

var routers = requireDir('./routes');
app.use('/chapters', routers.chapterRouter);
app.use('/questions', routers.questionRouter);
app.listen(3307);