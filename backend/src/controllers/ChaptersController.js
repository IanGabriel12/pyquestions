const database = require('../database/connection');

module.exports = {
   async index(request, response){
      const chapters = await database.select().from('chapters');

      return response.json(chapters);
   },

   async show(request, response){
      const chapter_id = request.params.id;
      const difficulty = request.query.difficulty;

      const chapter = await database('chapters')
         .select()
         .where('id', chapter_id)
         .first();
      
      if(!chapter){
         return response.status(404).send({'error': 'Not Found'})
      }
      
      //when difficulty is not passed or is 0, we select all questions from that chapter
      const whereClause = difficulty && difficulty != 0 ? {chapter_id, difficulty} : {chapter_id};

      const questions = await database('questions')
         .select('id', 'title', 'difficulty')
         .where(whereClause);
      
      if(questions.length === 0){
         return response.status(404).send({'error': 'Diffculty should be between 1 and 3'})
      }

      return response.json({
         ...chapter,
         questions,
      });
   }
}