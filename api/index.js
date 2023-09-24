const express = require('express');
const routerApi = require('./routes');
const config = require('./config/config');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  sequelizeErrorHandler,
} = require('./middlewares/error.handler');
const cors = require('cors');
const checkApiKey = require('./middlewares/auth.handler');
const app = express();
const port = config.port;

// Este middleware permite manejar peticiones con formato JSON.
app.use(express.json());

// Habilito uso de cors para todos los origenes
app.use(cors());

app.get('/api', checkApiKey, (req, res) => {
  res.send('Hola que tal, ya funciona!');
});
// Import dinámico para usar passport.
require('./utils/auth');

// uso de routerApi
routerApi(app);

// Siempre se usa después del llamado de routerApi los middleware.
// El orden en el que los llamas importa.
app.use(logErrors);
app.use(sequelizeErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Servidor abierto en el puerto: ' + port);
});
