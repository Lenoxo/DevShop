const bcrypt = require('bcrypt');

async function verifyPassword() {
  const hash = '$2b$10$UKzFkpsrqVcc7u7b.TBUIu9KEuoaPje6chLlCDqKK/i.4OwAbH/hK';
  const isMatch = await bcrypt.compare('This is an example 2023', hash);
  console.log(isMatch);
}

verifyPassword();
