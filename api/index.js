const express = require('express');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

// Este middleware permite manejar peticiones con formato JSON.
app.use(express.json());

// Habilito uso de cors para todos los origenes
app.use(cors());
// Habilito uso de cors para los origenes dentro de la allowList
// const allowList = ['http://localhost', 'https://tupruebadedominioinexistenteparacors-esperoquenoexista.co']
// const options = {
//   origin: (origin, callback) => {
//     if (allowList.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('Origin Not Allowed.'))
//     }
//   }
// }
// app.use(cors(options))

app.get('/api', (req, res) => {
  res.send('Hola que tal, ya funciona!');
});

// uso de routerApi
routerApi(app);

// Siempre se usa después del llamado de routerApi los middleware.
// El orden en el que los llamas importa.
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Servidor abierto en el puerto: ' + port);
});
