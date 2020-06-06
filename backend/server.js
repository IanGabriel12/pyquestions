var express = require('express');
var cors = require('cors');
var requireDir = require('require-dir');

var app = express();
app.use(cors());
app.use(express.json());

app.listen(3307);