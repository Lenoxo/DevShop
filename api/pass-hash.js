const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'This is an example 2023';
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();
