const bcrypt = require('bcrypt');

async function verifyPassword() {
  const hash = '$2b$10$Zw1tonOw3UtGkjA8EeFFvO2sERw1LeQDoutA9Pd6i5rCYh1jny5KS';
  const isMatch = await bcrypt.compare('This is an example 2023', hash);
  console.log(isMatch);
}

verifyPassword();
