const productsRoutes = require('./products.routes.js');
const usersRoutes = require('./users.routes.js');
const ordersRoutes = require('./orders.routes.js');
const categoriesRoutes = require('./categories.routes.js');
const homeRoute = require('./home.routes.js');

function routerApi(app) {
  app.use('/products', productsRoutes);
  app.use('/users', usersRoutes);
  app.use('/orders', ordersRoutes);
  app.use('/categories', categoriesRoutes);
  app.use('/home', homeRoute);
}

module.exports = routerApi;
