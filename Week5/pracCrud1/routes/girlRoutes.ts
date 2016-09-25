import * as mongoose from 'mongoose';
import * as express from 'express';
import {Girl} from '../models/Girl';
import {Controller} from '../api/girlController';

//loose coupling
const ctrl = Controller(Girl);
const router = express.Router();

// base route: api/v1/girls

// GET: api/v1/girls
router.get('/', ctrl.getAll);

// POST: api/v1/girls
router.post('/', ctrl.create);

export = router;
