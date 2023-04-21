const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const createSignToken = (id) => jwt.sign({ id }, JWT_SECRET, {
  expiresIn: JWT_EXPIRES_IN,
});

module.exports = createSignToken;