const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const passport = require('passport');

const secret = config.jwtSecret;

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role,
      };

      function signToken(payload, secret) {
        return jwt.sign(payload, secret);
      }

      const token = signToken(payload, secret);
      res.json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
