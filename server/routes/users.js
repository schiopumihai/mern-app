const users = require('./users.json');
const express = require('express');
const router = express.Router();

const initialData = [...users];

router
  .route('/')
  .get((req, res) => {
    res.json(initialData);
  })
  .post((req, res) => {
    initialData.push(req.body);
    res.json({ ...req.body });
  })
  .put((req, res) => {
    const idx = initialData.findIndex((user) => user.id === req.body?.id);

    if (idx !== -1) {
      initialData[idx] = req.body;
      res.json(req.body);
    } else {
      res.send('Error');
    }
  })
  .delete((req, res) => {
    const idx = initialData.findIndex((user) => user.id === req.body?.id);
    console.log(req.body);
    if (idx !== -1) {
      delete initialData[idx];
      res.send(`${req.body.id} was deleted`);
    } else {
      res.send('Error');
    }
  });

// get by query params
router.route('/:id').get((req, res) => {
  const user = initialData.find((user) => user.id === Number(req.params?.id));
  if (user) {
    res.json([user]);
  } else {
    res.send('Error');
  }
});

module.exports = router;
