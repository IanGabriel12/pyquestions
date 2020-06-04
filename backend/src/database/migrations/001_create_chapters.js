exports.up = function(knex){
   return knex.schema.createTable('chapters', table => {
      table.increments(); //adds an id with auto_increment
      table.string('name');
      table.text('description');
   }) 
}

exports.down = function(knex){
   return knex.schema.dropTable('chapters');
}