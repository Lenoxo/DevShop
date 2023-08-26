const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hola que tal, ya funciona!');
});

app.get('/home', (req, res) => {
  res.send('Bienvenid@ a este proyecto!!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send(
    'Este debería ser un mensaje diferente, pero no lo es mucho en un nivel fundamental.',
  );
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Chaqueta de cuero',
    price: 70,
    category: 'clothes',
  });
});

app.listen(port, () => {
  console.log('Servidor abierto en el puerto: ' + port);
});
