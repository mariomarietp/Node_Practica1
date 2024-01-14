const express = require ("express");
const bodyParser = require ("body-parser");
const path = require("path");
const fs = require ("fs");

var app = express();
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + '/formulario.html'))
})
app.post('/formulario', function (req, res){    
    const nombre = req.body.nombre
    const password = req.body.password
    console.log(nombre);
    console.log(password);
    if(nombre === "Mario" && password === "P308"){
        res.send("Contraseña correcta.")
    } else {  
        setTimeout(() => {
            res.sendFile(path.join(__dirname + '/incorrecta.html'))
            // Redirigir a otra página con boton de vuelta
        }, 2000);
    }
})

app.listen(3000, function(){
    console.log("Servidor funcionando en localhost:3000")
})