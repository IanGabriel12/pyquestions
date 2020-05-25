const mongoose = require('mongoose');
const Chapter = mongoose.model('Chapter');
const Question = mongoose.model('Question');


module.exports = {
   async add(req, res){
      const chapter = await Chapter.create(req.body);

      res.json(chapter);
   },

   async delete(req, res){
      await Chapter.findByIdAndDelete(req.params.id);

      res.send('Success');
   },

   async getAll(req, res){
      const chapters = await Chapter.find();

      res.json(chapters)
   },

   async getOne(req, res){
      const chapter = await Chapter.findById(req.params.id);

      //getting the questions from the chapter
      const questions = await Question.find({chapterId: chapter._id}, '-resolutionCode')

      res.json({ 
         chapter,
         questions 
      });
   },

   async edit(req, res){
      const chapter = await Chapter.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
      });

      res.json(chapter);
   }
}