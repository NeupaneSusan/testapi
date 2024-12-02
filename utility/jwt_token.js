const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key';
// Function to generate a token
function generateToken(user) {
  const payload = {
    id: user.id,
    name: user.fullname,
  };
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
  return token;
}

module.exports = generateToken;