const express = require('express');
const app = express();
const port = 8080;

const productsList = [
  {
    'product id': 1,
    name: 'Chaqueta de cuero',
    price: 70,
    category: 'clothes',
  },
  {
    'product id': 2,
    name: 'Pantalones azules',
    price: 30,
    category: 'clothes',
  },
  {
    'product id': 3,
    name: 'Telefono Nokia antiguo',
    price: 20,
    category: 'electronics',
  },
  {
    'product id': 4,
    name: 'Chocolatina Jet Grande',
    price: 99999,
    category: 'others',
  },
  {
    'product id': 5,
    name: 'Funko de Spider-Man',
    price: 48,
    category: 'others',
  },
];

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
  res.json(productsList);
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
