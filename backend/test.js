const Axios = require('axios');

const chapter = {
   name: 'Capítulo 1',
   description: 'Capítulo de teste',
};

for(let i=0; i<5; i++){
   Axios.post('http://localhost:3307/chapters/', JSON.stringify(chapter), () => {
      console.log('alo')
   })
}