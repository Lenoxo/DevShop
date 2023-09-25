const express = require('express');
const router = express.Router();
const passport = require('passport');
const OrdersService = require('../services/orders.service');
const service = new OrdersService();

router.get(
  '/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const userId = req.user.sub;
      const orders = await service.findByUser(userId);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
