const express = require('express');
const router = express.Router();

const categoriesList = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Clothes' },
  { id: 3, name: 'Furnitures' },
  { id: 4, name: 'others' },
];

router.get('/', (req, res) => {
  res.status(200).json(categoriesList);
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = categoriesList.find((category) => (category.id = id));
  res.status(200).json(category);
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  res.status(200).json({
    message: 'edited',
    data: body,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
