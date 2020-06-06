const questions = require("../data/questions.json").questions;

exports.seed = async function(knex) {
   let initialQuestionID = 1;

   // each question has an array of input examples, we reduce to a single array
   // representing all input examples 
   const examplesToSeed = questions.reduce((examplesArray, question, questionIndex) => {
      const serializedInputExamples = question.input_examples.map(example => ({
         input: example.input,
         output: example.output,
         question_id: initialQuestionID + questionIndex
      }));

      return examplesArray.concat(serializedInputExamples);
   }, []);

   return knex('input_examples').del()
      .then(() => {
         return knex('input_examples').insert(examplesToSeed);
      })
}