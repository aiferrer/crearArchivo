const fs = require("fs");
var color = require('colors');

let crearArchivo = async (base) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`La base debe ser un numero`);
      return;
    }

    let data = "";

    for (let i = 1; i <= 10; i++) {
      data += `${base} * ${i} = ${i * base}\n`;
    }

    fs.writeFile(`tabla_${base}.txt`, data, (err) => {
      if (err) {
        reject(err);
      } else resolve(`tabla_${base}.txt`.green);
      
    });
  });
};

//Exportando funciones del modulo
module.exports = {
  crearArchivo
};
