var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
   async add(req, res){
      const question = await Question.create(req.body);

      res.json(question);
   },

   async delete(req, res){
      await Question.findByIdAndDelete(req.params.id);

      res.json('Success');
   },

   getAll(req, res){
      const questions = Question.find();

      res.json(questions);
   },

   edit(req, res){
      const question = Question.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
      })

      res.json(question);
   }
}