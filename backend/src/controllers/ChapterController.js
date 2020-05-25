var mongoose = require('mongoose');
var Chapter = mongoose.model('Chapter');

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

      res.json(chapter);
   },

   async edit(req, res){
      const chapter = await Chapter.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
      });

      res.json(chapter);
   }
}