const express = require('express');
const app = express();
const port = 8080;
const { faker } = require('@faker-js/faker');

const usersList = [
  { id: 1, name: 'Juan', role: 'Admin' },
  { id: 2, name: 'Lucia', role: 'Manager' },
  { id: 3, name: 'Esteban', role: 'Crew' },
  { id: 4, name: 'Emanuel', role: 'Client' },
];

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
  let productsList = [];
  const { size } = req.query;
  const limit = size || 10;
  // Este bucle genera productos dependiendo del valor de limit.
  for (let i = 0; i < limit; i++) {
    productsList.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    });
  }
  res.json(productsList);
});
// Este endpoint es solo de prueba, para mostrar como evitar un colapso de endpoints.
app.get('/products/filter', (req, res) => {
  res.send('Si me puedes leer, hemos evitado un colapso de endpoints');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    'product id': id,
    name: 'Producto de prueba',
    price: 68,
    category: 'others',
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

// Reto: Crear los endpoints para users, categories, orders y los que se te ocurran.
app.get('/users', (req, res) => {
  res.json(usersList);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json(usersList[id - 1]);
});

app.get('/orders', (req, res) => {
  res.json({
    date: 'July 26 / 2023',
    totalProducts: 4,
    totalPrice: 999,
  });
});

app.listen(port, () => {
  console.log('Servidor abierto en el puerto: ' + port);
});
