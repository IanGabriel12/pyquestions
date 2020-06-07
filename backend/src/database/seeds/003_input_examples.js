const questions = require("../data/questions.json").questions;

exports.seed = async function(knex) {
   let initialQuestionID = 1;

   const examplesToSeed = questions.flatMap((question, index) => (
      question.input_examples.map(input_example => ({
         input: input_example.input,
         output: input_example.output,
         question_id: initialQuestionID + index,
      }))
   )) 

   return knex('input_examples').del()
      .then(() => {
         return knex('input_examples').insert(examplesToSeed);
      })
}