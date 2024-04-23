const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, rest) => {
  rest.send(`
  <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenidos</title>
    </head>
    <body>
        <ul>
            <li>
                <a href="/QAs">QAs</a>
            </li>
        </ul>
    </body>
    </html>`);
});

app.get("/marketing", (req, res) => {
  const marketing = filtrarPorEspecialidad(users, "marketing");
  res.send(marketing);
});

app.get("/developers", (req, res) => {
  const developers = filtrarPorEspecialidad(users, "developers");
  res.send(developers);
});

app.get("/QAs", (req, res) => {
  const QAs = filtrarPorEspecialidad(users, "QAs");
  const numeroQAs = QAs.length;
  const listaItemsHTML = QAs.map(
    (QA) => `<li>${QA.name} -> ${QA.specialty} -> ${QA.age}</li>`
  ).join("");

  res.send(`
  <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QAs - Usuarios</title>
    </head>
    <body>
        <h3>Número de usuarios</h3>
        <p>${numeroQAs}</p>
        <hr>
        <ul>
            ${listaItemsHTML}
        </ul>
        <hr>
        <a href="/">Ir a Inicio</a>
    </body>
    </html>`);
});

app.get("/design", (req, res) => {
  const design = filtrarPorEspecialidad(users, "design");
  res.send(design);
});

app.get("/ventas", (req, res) => {
  const ventas = filtrarPorEspecialidad(users, "ventas");
  res.send(ventas);
});

app.use((req, res) => {
  res.status(404).send("No se pudo encontrar esa página ");
});

app.listen(port, () => {
  console.log(
    `Servidor Express iniciado en http://localhost:3000/marketing http://localhost:3000/developers `
  );
});

function filtrarPorEspecialidad(usuarios, especialidad) {
  const resultado = usuarios.filter(
    (usuario) => usuario.specialty === especialidad
  );
  return resultado;
}

const users = [
  { id: 1, name: "Alice", age: 28, specialty: "marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "developers" },
  { id: 3, name: "Charlie", age: 30, specialty: "developers" },
  { id: 4, name: "David", age: 25, specialty: "QAs" },
  { id: 5, name: "Emma", age: 32, specialty: "ventas" },
  { id: 6, name: "Frank", age: 28, specialty: "marketing" },
  { id: 7, name: "Grace", age: 34, specialty: "developers" },
  { id: 8, name: "Hank", age: 27, specialty: "QAs" },
  { id: 9, name: "Ivy", age: 31, specialty: "ventas" },
  { id: 10, name: "Jack", age: 29, specialty: "marketing" },
  { id: 11, name: "Karen", age: 36, specialty: "developers" },
  { id: 12, name: "Leo", age: 26, specialty: "QAs" },
  { id: 13, name: "Mia", age: 33, specialty: "ventas" },
  { id: 14, name: "Nathan", age: 30, specialty: "marketing" },
  { id: 15, name: "Olivia", age: 37, specialty: "developers" },
  { id: 16, name: "Paul", age: 24, specialty: "QAs" },
  { id: 17, name: "Quinn", age: 32, specialty: "ventas" },
  { id: 18, name: "Ryan", age: 28, specialty: "marketing" },
  { id: 19, name: "Sara", age: 35, specialty: "developers" },
  { id: 20, name: "Tom", age: 29, specialty: "QAs" },
  { id: 21, name: "Uma", age: 30, specialty: "ventas" },
  { id: 22, name: "Victor", age: 27, specialty: "marketing" },
  { id: 23, name: "Wendy", age: 34, specialty: "developers" },
  { id: 24, name: "Xander", age: 31, specialty: "QAs" },
  { id: 25, name: "Yara", age: 33, specialty: "ventas" },
  { id: 26, name: "Zack", age: 28, specialty: "marketing" },
  { id: 27, name: "Ava", age: 36, specialty: "developers" },
  { id: 28, name: "Bryan", age: 26, specialty: "QAs" },
  { id: 29, name: "Cynthia", age: 32, specialty: "ventas" },
  { id: 30, name: "Derek", age: 30, specialty: "marketing" },
];
