const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      date: 'July 26 / 2023',
      totalProducts: 4,
      totalPrice: 999,
    },
    {
      date: 'July 27 / 2023',
      totalProducts: 1,
      totalPrice: 9998,
    },
  ]);
});

module.exports = router;
