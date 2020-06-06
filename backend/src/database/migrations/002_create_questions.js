exports.up = function(knex){
   return knex.schema.createTable('questions', table => {
      table.increments();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.integer('difficulty').notNullable(); // from 1 to 3
      table.string('resolutionURL').notNullable();
      table.string('sourceURL')

      table.integer('chapter_id').notNullable();
      table.foreign('chapter_id')
         .references('id')
         .inTable('chapters')
         .onDelete('SET NULL');
   }) 
}

exports.down = function(knex){
   return knex.schema.dropTable('questions');
}