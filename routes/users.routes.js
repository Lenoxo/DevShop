const express = require('express');
const usersService = require('../services/users.service');
const service = new usersService();
const router = express.Router();

router.get('/', (req, res) => {
  const usersList = service.users;
  res.status(200).json(usersList);
});

router.post('/', (req, res) => {
  const body = req.body;
  const result = service.createOne(body);
  res.status(201).json(result);
});
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = service.edit(id, body);
  res.status(200).json(result);
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = service.delete(id);
  res.status(200).json(result);
});

module.exports = router;
