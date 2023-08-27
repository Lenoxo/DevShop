const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenid@ a este proyecto!!');
});

module.exports = router;
