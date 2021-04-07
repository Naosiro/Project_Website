const express = require('express');
const chalk = require('chalk');
const cors = require('cors');

const listadoCapitulos = require('./data/capitulos.json')

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

/* --------------------------- endpoint principal --------------------------- */
app.get('/', (req,res)=>{
    res.send('Bienvenido a la última App de: <nombre y apellido> ✔');
});

/* --------------------------- listado de usuarios -------------------------- */
app.get('/the-mandalorian', (req,res)=>{
    res.json(listadoCapitulos);
    console.log(chalk.yellowBright(`-->http://localhost:3000/usuarios LISTADO DE CAPITULOS`));
});

/* ---------------------- mostrar 1 usuario determinado --------------------- */
app.get('/the-mandalorian/:id',(req,res)=>{
    //devolver solo el usuario buscado por ID
    const idBusc = req.params.id;
    let buscado = null;
    listadoCapitulos.forEach(cap => {
        if (cap.id == idBusc) {
            buscado = cap
        };
    });
    res.json(buscado);
    console.log(chalk.cyanBright(`-->http://localhost:3000/usuarios/${idBusc}`));
});



app.listen(port, ()=>{
    console.log(chalk.bgGreenBright.black(`--> Escuchando en http://localhost:${port}`))
});