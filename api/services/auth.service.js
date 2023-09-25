const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UsersService = require('../services/users.service');
const service = new UsersService();
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const secret = config.jwtSecret;
const nodemailer = require('nodemailer');

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    // Borro del user el hash puesto en password, para hacerlo seguro.
    delete user.dataValues.password;
    return user;
  }

  async signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, secret);
    return {
      user,
      token,
    };
  }

  async sendEmail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      // Secure Port: 465, Not Secure Port: 587
      port: 465,
      secure: true, // True for port 465, false for the rest.
      auth: {
        user: config.nodemailerEmail,
        pass: config.nodemailerPassword,
      },
    });
    // send mail with defined transport object
    await transporter.sendMail({
      from: `${config.nodemailerEmail}`, // sender address
      to: `${email}`, // list of receivers
      subject: 'Recovery Password', // Subject line
      text: 'Coming Soon!', // plain text body
      html: '<b>Coming Soon!</b>', // html body
    });
  }
}

module.exports = AuthService;
