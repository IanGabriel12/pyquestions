exports.up = function(knex){
   // Each question has one or more input examples

   return knex.schema.createTable('input_examples', table => {
      table.increments(); 
      table.text('input');
      table.text('output');
      table.integer('question_id');

      table.foreign('question_id')
         .references('id')
         .inTable('questions')
         .onDelete('CASCADE');
   }) 
}

exports.down = function(knex){
   return knex.schema.dropTable('input_examples');
}