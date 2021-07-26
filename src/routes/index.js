 const express = require('express'); //llamamos express

 const router = express.Router(); //iniciamos ruta

  //const user = require('../models/user'); //consumimos ruta de los user de la bd


//recogemos los datos de la bd

 router.get('/', (req,res)=>{
     res.send('si funciona');
});


//agregar datos del formulario 
 //router.post('/add',async (req,res) =>{ 
//     const newuser = new user (req.body); //datos del formulario
//     await newuser.save(); //guardar el obj en la database
//     res.redirect('/'); //recargar pag
 //});

//exportar ruta
module.exports = router;