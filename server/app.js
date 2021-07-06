const express = require('express')
const Controlador = require('./agradecimientosLogica.js')
const bodyParser = require ("body-parser");

const app = express();

app.use (bodyParser.urlencoded ({extendido: false}));
app.use (bodyParser.json ());


const controladorObject = new Controlador([
    {
      id: 10,
      fecha: '27 / 1 / 97',
      items: [
        'Agradezco tener muchas ganas de hacer esto',
        'Agradezco a pesar de la adversidad no rendirme',
        'Esto esta re dificil la verdad...',
        'Odio hacer las cosas de nuevo, pero mejor que me vaya acostumbrando',
        'Por lo menos puedo Agradecer tener a alguien que me ayude.',
      ],
    },
  ]);

app.get("/agradecimientos", (request, response) => {
    response.send(controladorObject.showAll())
})

app.delete('/agradecimientos/:id', (request, response) => {
    const id = request.params.id
    controladorObject.deleteOne(id)
    response.send("El Agradecimiento fue eliminado.")
})

app.post("/agradecimientos/new", (request, response) => {
    controladorObject.addNew(id, fecha, items)
})

app.listen(5000, () => {
    console.log("Todo esta corriendo bien.")
})