const database = require('../database/connection');

module.exports = {
   async index(request, response){
      const chapters = await database.select().from('chapters');

      return response.json(chapters);
   },

   async show(request, response){
      const chapterId = request.params.id;

      const chapter = await database('chapters')
         .select()
         .where('id', chapterId)
         .first();

      const questions = await database('questions')
         .select('id', 'title', 'difficulty')
         .where('chapter_id', chapterId)

      return response.json({
         ...chapter,
         questions,
      });
   }
}