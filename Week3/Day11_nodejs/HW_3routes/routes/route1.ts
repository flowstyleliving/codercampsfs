import * as controller1 from '../api/controller1';
import * as express from 'express';
const router1 = express.Router();

router1.get('/', controller1.getAll1);

export = router1;
