const express = require('express');
const productsRoutes = require('./products.routes.js');
const usersRoutes = require('./users.routes.js');
const ordersRoutes = require('./orders.routes.js');
const categoriesRoutes = require('./categories.routes.js');
const customersRoutes = require('./customers.routes.js');
const authRoutes = require('./auth.routes.js');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRoutes);
  router.use('/users', usersRoutes);
  router.use('/orders', ordersRoutes);
  router.use('/categories', categoriesRoutes);
  router.use('/customers', customersRoutes);
  router.use('/auth', authRoutes);
}

module.exports = routerApi;
