import * as controller2 from '../api/controller2';
import * as express from 'express';
const router2 = express.Router();

router2.get('/', controller2.getAll2);

export = router2;
