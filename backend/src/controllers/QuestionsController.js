const database = require('../database/connection');

module.exports = {
   async show(request, response){
      const questionId = request.params.id;

      const question = await database('questions')
         .select()
         .where('id', questionId)
         .first();
      
      const inputExamples = await database('input_examples')
         .select('input', 'output')
         .where('question_id', questionId);
      
      return response.json({
         ...question,
         input_examples: inputExamples
      })
   }
}