const path = require('path'); 
  const express = require('express');  // requerimos express
  const morgan = require ('morgan');
  const app =  express(); // app es para inicializar 
  const mongoose = require ('mongoose'); //requerimos mongoose para la base de datos


  mongoose.connect('mongodb+srv://Alejandro:1007703016@cluster0.fok3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{

    useNewUrlParser : true , useUnifiedTopology: true,
  }). then(db => console.log('base de datos formulario conectada'))
  .catch(err=>console.log (err))

//que nuestro servidor escoja el puerto en el que corra en caso de que no, se ejecuta en el puerton 3000
app.set ('port', process.env.PORT || 8080); 

 app.listen (app.get ('port') , ()=>{
    console.log (`servidor en puerto: ${app.get('port')}`);
  });