import express from 'express';
import colors from 'colors';
import * as queries from '../queries/userQueries';

let router = express.Router();

// signup
router.post('/', (req, res) => {
  queries.post(req.body);
  // console.log(req.body);
  res.send("req OK");
});

export default router;
