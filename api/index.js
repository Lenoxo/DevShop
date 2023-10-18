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
const { checkApiKey } = require('./middlewares/auth.handler');
const app = express();
const port = config.port;
const jsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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

// Configuración de Swagger e inicialización del endpoint de /api-docs
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DevShop API',
      version: '1.0.0',
      description:
        'API de prueba para simular el comportamiento de un e-commerce',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
      contact: {
        name: 'Emanuel Padilla (Lenoxo)',
        github: 'https://github.com/Lenoxo',
      },
    },
  },
  apis: ['./routes/*.js'],
};
const specs = jsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log('Servidor abierto en el puerto: ' + port);
});
