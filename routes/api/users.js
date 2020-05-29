const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route    POST api/users
// @brief    Register user
// @access   Public
router.post(
  '/',
  /* Using express-validator for clean error handling */
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    /* Destructuring */
    const { name, email, password } = req.body;

    try {
      /* Checking if a user exists */
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      /* Obtaining gravatar associated with email */
      const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });

      /* Creating user using the User Model */
      user = new User({
        name,
        email,
        password,
        avatar,
      });

      /* Encrypting the password using bcrypt */
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(password, salt);

      /* Saving the user to MongoDB */
      await user.save();

      /* Setting payload for JWT */
      const payload = {
        user: {
          id: user.id,
        },
      };

      /* Creating and returning JWT */
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
