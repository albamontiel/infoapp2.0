//importamos
const express = require("express");
const mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
.connect(
  "mongodb+srv://infoapp:6wUHI2YGw0P2kwcO@cluster0-05fyu.mongodb.net/infoapp?retryWrites=true",
  //"mongodb+srv://appinformativa:z8iP2RZW7fyOApg6@cluster0-rqoj2.mongodb.net/test?retryWrites=true",

    // "mongodb://localhost:27017/gouniversity",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var conceptos = require("./lib/conceptos");

app.get("/conceptos", (req, res) => {
  conceptos.getconceptoss(req, res);
});

app.get("/conceptos/:id", (req, res) => {
  conceptos.getconceptos(req, res);
});

app.post("/conceptos", (req, res) => {
  conceptos.newconceptos(req, res);
});
app.put("/conceptos/:id", (req, res) => {
  conceptos.updateconceptos(req, res);
});

app.delete("/conceptos/:id", (req, res) => {
  conceptos.deleteconceptos(req, res);
});

var consultas = require("./lib/consultas");

app.get("/consultas", (req, res) => {
  consultas.getconsultass(req, res);
});

app.get("/consultas/:id", (req, res) => {
  consultas.getconsultas(req, res);
});

app.post("/consultas", (req, res) => {
  consultas.newconsultas(req, res);
});
app.put("/consultas/:id", (req, res) => {
  consultas.updateconsultas(req, res);
});

app.delete("/consultas/:id", (req, res) => {
  consultas.deleteconsultas(req, res);
});

var eventos = require("./lib/eventos");

app.get("/eventos", (req, res) => {
  eventos.geteventoss(req, res);
});

app.get("/eventos/:id", (req, res) => {
  eventos.geteventos(req, res);
});

app.post("/eventos", (req, res) => {
  eventos.neweventos(req, res);
});
app.put("/eventos/:id", (req, res) => {
  eventos.updateeventos(req, res);
});

app.delete("/eventos/:id", (req, res) => {
  eventos.deleteeventos(req, res);
});

var integrantes = require("./lib/integrantes");

app.get("/integrantes", (req, res) => {
  integrantes.getintegrantess(req, res);
});

app.get("/integrantes/:id", (req, res) => {
  integrantes.getintegrantes(req, res);
});

app.post("/integrantes", (req, res) => {
  integrantes.newintegrantes(req, res);
});
app.put("/integrantes/:id", (req, res) => {
  integrantes.updateintegrantes(req, res);
});

app.delete("/integrantes/:id", (req, res) => {
  integrantes.deleteintegrantes(req, res);
});

var preguntas = require("./lib/preguntas");

app.get("/preguntas", (req, res) => {
  preguntas.getpreguntass(req, res);
});

app.get("/preguntas/:id", (req, res) => {
  preguntas.getpreguntas(req, res);
});

app.post("/preguntas", (req, res) => {
  preguntas.newpreguntas(req, res);
});
app.put("/preguntas/:id", (req, res) => {
  preguntas.updatepreguntas(req, res);
});

app.delete("/preguntas/:id", (req, res) => {
  preguntas.deletepreguntas(req, res);
});

var proyectos = require("./lib/proyectos");

app.get("/proyectos", (req, res) => {
  proyectos.getproyectoss(req, res);
});

app.get("/proyectos/:id", (req, res) => {
  proyectos.getproyectos(req, res);
});

app.post("/proyectos", (req, res) => {
  proyectos.newproyectos(req, res);
});
app.put("/proyectos/:id", (req, res) => {
  proyectos.updateproyectos(req, res);
});

app.delete("/proyectos/:id", (req, res) => {
  proyectos.deleteproyectos(req, res);
});

var respuestas = require("./lib/respuestas");

app.get("/respuestas", (req, res) => {
  respuestas.getrespuestass(req, res);
});

app.get("/respuestas/:id", (req, res) => {
  respuestas.getrespuestas(req, res);
});

app.post("/respuestas", (req, res) => {
  respuestas.newrespuestas(req, res);
});
app.put("/respuestas/:id", (req, res) => {
  respuestas.updaterespuestas(req, res);
});

app.delete("/respuestas/:id", (req, res) => {
  respuestas.deleterespuestas(req, res);
});

var usuarios = require("./lib/usuarios");

app.get("/usuarios", (req, res) => {
  usuarios.getusuarioss(req, res);
});

app.get("/usuarios/:id", (req, res) => {
  usuarios.getusuarios(req, res);
});

app.post("/usuarios", (req, res) => {
  usuarios.newusuarios(req, res);
});
app.put("/usuarios/:id", (req, res) => {
  usuarios.updateusuarios(req, res);
});

app.delete("/usuarios/:id", (req, res) => {
  usuarios.deleteusuarios(req, res);
});
// escuchamos
app.listen(9000);
console.log(`Server on %s ${app.settings.env}`);
