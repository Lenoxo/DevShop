const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthService = require('../services/auth.service');
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

module.exports = router;
