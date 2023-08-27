const express = require('express');
// const { faker } = require('@faker-js/faker');
const router = express.Router();

const usersList = [
  { id: 1, name: 'Juan', role: 'Admin' },
  { id: 2, name: 'Lucia', role: 'Manager' },
  { id: 3, name: 'Esteban', role: 'Crew' },
  { id: 4, name: 'Emanuel', role: 'Client' },
];

router.get('/', (req, res) => {
  res.json(usersList);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(usersList[id - 1]);
});

module.exports = router;
