const questions = require("../data/questions.json").questions;

exports.seed = async function(knex) {
   let initialQuestionID = 1;

   // add each question its ID
   const identifiedQuestions = questions.map((question, index) => ({
      ...question,
      id: initialQuestionID + index
   }))
   
   //remove all questions that don't have examples
   const questionsWithExamples = identifiedQuestions.filter(question => Boolean(question.input_examples))

   //serialize examples
   const examplesToSeed = questionsWithExamples.flatMap(question => (
         question.input_examples.map(input_example => ({
            input: input_example.input,
            output: input_example.output,
            question_id: question.id
         }))
      )
   )

   return knex('input_examples').del().then(() => {
      if (examplesToSeed.length === 0 ) return;
      return knex('input_examples').insert(examplesToSeed);
   })
}