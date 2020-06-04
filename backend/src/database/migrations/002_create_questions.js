exports.up = function(knex){
   return knex.schema.createTable('questions', table => {
      table.increments();
      table.string('title');
      table.text('description');
      table.integer('difficulty'); // from 1 to 3
      table.string('resolutionURL');

      table.integer('chapter_id');
      table.foreign('chapter_id')
         .references('id')
         .inTable('chapters')
         .onDelete('SET NULL');
   }) 
}

exports.down = function(knex){
   return knex.schema.dropTable('questions');
}