const express = require('express');
const app = express();
const routerApi = require('./routes');
const config = require('./config/config');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  sequelizeErrorHandler,
} = require('./middlewares/error.handler');
const cors = require('cors');
const { checkApiKey } = require('./middlewares/auth.handler');
const port = config.port;
const fs = require('fs');
const YAML = require('yaml');
const swaggerUi = require('swagger-ui-express');

// Parseo de archivo de swagger yaml a json
const file = fs.readFileSync(`${__dirname}/swagger.yaml`, 'utf8');
const swaggerDocument = YAML.parse(file);

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log('Servidor abierto en el puerto: ' + port);
});
