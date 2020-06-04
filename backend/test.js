const requireDir = require('require-dir');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pyquestions',
   {useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir('./src/models')
const Chapter = mongoose.model('Chapter');

const chapters = [
   {name: 'Entrada e saída', description:'Entradas e saídas são a forma que o computador tem de se comunicar com o mundo'},
   {name: 'Estruturas condicionais', description: 'Estruturas de decisão'},
   {name: 'Estruturas de repetição', description: 'loops'},
]

for (chapter of chapters){
   Chapter.create(chapter);
}