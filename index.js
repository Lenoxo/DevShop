const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error.handler');
const app = express();
const port = 8080;

// Este middleware permite manejar peticiones con formato JSON.
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola que tal, ya funciona!');
});

// uso de routerApi
routerApi(app);

// Siempre se usa después del llamado de routerApi los middleware.
// El orden en el que los llamas importa.
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Servidor abierto en el puerto: ' + port);
});
