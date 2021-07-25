const path = require('path'); 
  const express = require('express');  // requerimos express
  const morgan = require ('morgan');
  const app =  express(); // app es para inicializar 
  const mongoose = require ('mongoose'); //requerimos mongoose para la base de datos



//que nuestro servidor escoja el puerto en el que corra en caso de que no, se ejecuta en el puerton 3000
app.set ('port', process.env.PORT || 8080); 

 app.listen (app.get ('port') , ()=>{
    console.log (`servidor en puerto: ${app.get('port')}`);
  });