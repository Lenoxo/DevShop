const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthService = require('../services/auth.service');
const validatorHandler = require('../middlewares/validator.handler');
const { updatePasswordSchema } = require('../schemas/auth.schema');
const service = new AuthService();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const response = await service.signToken(user);
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
);

router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    await service.sendRecovery(email);
    res.json({ message: 'Recovery Email Sent, Check Your Inbox' });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/change-password',
  validatorHandler(updatePasswordSchema, 'body'),
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const response = await service.updatePassword(token, newPassword);
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
