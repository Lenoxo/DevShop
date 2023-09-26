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

  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }

    const payload = { sub: user.id };

    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });
    await service.update(user.id, { recoveryToken: token });
    const link = `http://elfrontendlomaneja.com/recovery?token=${token}`;
    const mail = {
      from: `${config.nodemailerEmail}`, // sender address
      to: `${email}`, // list of receivers
      subject: 'Recovery Password', // Subject line
      text: 'This is your recovery password link, click it and use it to change your password. This link expires in 15 minutes.', // plain text body
      html: `<b>Link: ${link}</b>`, // html body
    };
    await this.sendEmail(mail);
  }

  async sendEmail(infoEmail) {
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
    await transporter.sendMail(infoEmail);
  }
}

module.exports = AuthService;
