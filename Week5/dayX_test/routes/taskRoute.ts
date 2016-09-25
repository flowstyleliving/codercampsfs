import * as mongoose from 'mongoose';
import * as express from 'express';
import {Test} from '../models/Test';
import {Controller} from '../api/testController';

//loose coupling
let ctrl = Controller(Test);
let router = express.Router();

//base route: api/v1/tests


// GET: api/v1/tests
router.get('/', ctrl.getAll)


export = router;
