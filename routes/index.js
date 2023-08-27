const productsRoutes = require('./products.routes.js');
const usersRoutes = require('./users.routes.js');
const ordersRoutes = require('./orders.routes.js');
const categoriesRoutes = require('./categories.routes.js');
const apiRoute = require('./api.routes.js');

function routerApi(app) {
  app.use('/api/products', productsRoutes);
  app.use('/api/users', usersRoutes);
  app.use('/api/orders', ordersRoutes);
  app.use('/api/categories', categoriesRoutes);
  app.use('/api', apiRoute);
}

module.exports = routerApi;
