const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hola que tal, ya funciona!');
});

// uso de routerApi
routerApi(app);

app.listen(port, () => {
  console.log('Servidor abierto en el puerto: ' + port);
});
