const express = require('express');
const router = express.Router();

// @route    GET api/posts
// @brief    Testing route
// @access   Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
