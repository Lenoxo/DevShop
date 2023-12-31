const { User, userSchema } = require('./user.model');
const { Product, productSchema } = require('./product.model');
const { Category, categorySchema } = require('./category.model');
const { Order, orderSchema } = require('./order.model');
const { Customer, customerSchema } = require('./customer.model');
const { OrderProduct, orderProductSchema } = require('./order-product.model');

// Función que recibe config y tambien hace un init
function initModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
  Category.init(categorySchema, Category.config(sequelize));
  Order.init(orderSchema, Order.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
  OrderProduct.init(orderProductSchema, OrderProduct.config(sequelize));

  // Las relaciones siempre se declaran después de las inicializaciones.
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = initModels;
