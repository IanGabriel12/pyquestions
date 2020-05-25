const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
   chapterId:{
      type: mongoose.Types.ObjectId,
      required: true,
   },
   text: {
      type: String,
      required: true,
   },
   resolutionCode: {
      type: String,
      required: true,
   },
   difficulty: {
      type: Number,
      min: 1,
      max: 3,
   },
   title: String,
   sourceUrl: String,
   
})

mongoose.model('Question', QuestionSchema);