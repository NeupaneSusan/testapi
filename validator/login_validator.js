const { check} = require('express-validator');

 const loginValidator = [
    check('email').isEmail().withMessage('Invalid email address'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ];

  module.exports = loginValidator;