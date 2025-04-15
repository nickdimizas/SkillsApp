const express = require('express');
const router = express.Router();

// Placeholder route to prevent app crash
router.get('/', (req, res) => {
  res.send('Auth routes placeholder');
});

module.exports = router;