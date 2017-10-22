'use strict';

var Person = require('./person.js');
var axios = require('axios');

var p1 = new Person('Peter', 30);

console.log(p1.name);

axios.get('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  var datos = response.data.results;
  var i = 0;
  while (i < datos.length) {
    console.log(datos[i].name);
    i++;
  }
}).catch(function (error) {
  return console.log(error);
});