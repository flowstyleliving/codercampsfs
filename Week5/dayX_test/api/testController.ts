import * as mongoose from 'mongoose';

export function Controller(Test) {
  return {
    getAll: getAll
  };


  function getAll(req: express.Request, res: express.Response, next: Function) {
    Test.find({})
      .exec((err, test) => {
        if(err) return next(err);
        res.json(test);
      })
  }

}
