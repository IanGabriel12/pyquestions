const questions = require("../data/questions.json").questions;

exports.seed = async function(knex) {
   let initialID = 1;

   const serializedQuestions = questions.map((question, index) => ({
      id: initialID + index,
      title: question.title,
      description: question.description.join(' '),
      difficulty: question.difficulty,
      resolutionURL: `http://localhost:3307/resolutions/chapter${question.chapter_id}/${question.resolution_file}`,
      sourceURL: question.sourceURL,
      chapter_id: question.chapter_id,
   }));

   return knex('questions').del()
      .then(() => {
         return knex('questions').insert(serializedQuestions)
      })
}