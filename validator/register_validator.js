const { check} = require('express-validator');

 const registerValidator = [
    check('email').isEmail().withMessage('Invalid email address'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    check('fullname').notEmpty().withMessage('Username is required'),
  ];

  module.exports = registerValidator;