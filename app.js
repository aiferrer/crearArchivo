const {crearArchivo} = require('./tabla');
var color = require('colors');

var base = 5;

crearArchivo(base)
    .then( nombreArchivo => console.log(`Se ha creado el archivo ${nombreArchivo}`)
    )
    .catch(e => console.log('ERROR: '.red + e));
