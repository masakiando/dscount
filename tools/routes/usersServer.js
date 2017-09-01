import express from 'express';
import colors from 'colors';

let router = express.Router();

// signup
router.post('/', (req, res) => {
  console.log(req.body);
  res.send("req OK");
});

export default router;
