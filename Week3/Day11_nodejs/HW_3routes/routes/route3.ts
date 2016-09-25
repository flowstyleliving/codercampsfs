import * as controller3 from '../api/controller3';
import * as express from 'express';
const router3 = express.Router();

router3.get('/', controller3.getAll3);

export = router3;
