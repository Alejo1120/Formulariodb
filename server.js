  const path = require('path'); 
  const express = require('express');  // requerimos express
  const morgan = require ('morgan');
  const app =  express(); // app es para inicializar 
  const mongoose = require ('mongoose'); //requerimos mongoose para la base de datos

   //conexion de base de datos mongoose
    mongoose.connect('mongodb+srv://Alejandro:1007703016@cluster0.fok3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser : true , useUnifiedTopology: true,
    }). then(
      db => console.log('base de datos formulario conectada')
    ).catch(err=>console.log (err))
      
      //importar rutas
      const indexroute = require('./src/routes/index');

      //que nuestro servidor escoja el puerto en el que corra en caso de que no, se ejecuta en el puerton 3000
       app.set ('port', process.env.PORT || 4050); 
       app.set('views',path.join(__dirname + '/views')); //carpeta de vistas
       app.set('view engine', 'ejs') //busca arch ejs

       //midelwares
       app.use(morgan('dev'));
       app.use(express.urlencoded({extended: false})); //reconoce el formulario formato json

      //routes
      app.use('/', indexroute);

    
    app.listen (app.get ('port') , ()=>{
      console.log (`servidor en puerto: ${app.get('port')}`);
    });