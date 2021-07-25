 //usuarios de la base de datos
 //(LO MISMO DE BASE DE DATOS)

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const userSchema = new Schema ({
     nombre : String,
     apellido : String,
     numero_de_cedula : String,
     ciudad : String
 });

 //mandamos datos 
 //lo mismo de la base de datos
 module.exports = mongoose.model('Datos de usuarios', userSchema);


 //nota: consumir la ruta en la carpeta routes