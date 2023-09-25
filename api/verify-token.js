const jwt = require('jsonwebtoken');
const config = require('./config/config');

// Por buena práctica, se guardan los secretos en variables de entorno.
const secret = config.jwtSecret;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5NTYwNzYyMX0.0wj2UKl5eSep1go5MfT908sRRC-nQypwcd3YdNUN08o';

function signToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = signToken(token, secret);
console.log(payload);
