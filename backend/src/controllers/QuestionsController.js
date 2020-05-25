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

   async getAll(req, res){
      const questions = await Question.find();

      res.json(questions);
   },

   async getOne(req, res){
      const question = await Question.findById(req.params.id);

      res.json(question);
   },

   async edit(req, res){
      const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
      })

      res.json(question);
   }
}