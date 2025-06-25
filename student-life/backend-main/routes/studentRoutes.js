import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Student routes are working!');
});

export default router;
