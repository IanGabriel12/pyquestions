const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   }
})

mongoose.model('Chapter', ChapterSchema);