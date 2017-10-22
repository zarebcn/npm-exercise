
const Person = require('./person.js');
const axios = require('axios');

let p1 = new Person('Peter', 30);

console.log(p1.name);

axios
  .get('https://pokeapi.co/api/v2/pokemon/')
  .then(function (response) {
    let datos = response.data.results;
    let i = 0;
    while (i < datos.length) {
      console.log(datos[i].name);
      i++;
    }
  })
  .catch(error => console.log(error));
