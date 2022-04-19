const bcrypt = require("bcrypt");
const saltRounds = 10;

const encrypt = async (passwordPlain) => {
  const securedPassword = await bcrypt.hash(passwordPlain, saltRounds);
  return securedPassword;
};

const compare = async (passwordPlain, hashedPassword) => {
  return await bcrypt.compare(passwordPlain, hashedPassword);
};

module.exports = { encrypt, compare };
