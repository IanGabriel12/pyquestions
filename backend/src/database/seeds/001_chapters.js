const chapters = require('../data/chapters.json').chapters;

exports.seed = function (knex){
   const serializedChapters = chapters.map((chapter, index) => ({
      id: index + 1,
      name: chapter.name,
      description: chapter.description.join(' ')
   }));

   return knex('chapters').del()
      .then(() => {
         return knex('chapters').insert(serializedChapters)
      })
}