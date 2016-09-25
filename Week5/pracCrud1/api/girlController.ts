import * as mongoose from 'mongoose';
import * as express from 'express';
import {IGirlModel} from '../models/Girl';

export function Controller(Girl: mongoose.Model<IGirlModel>) {
  return {
    getAll: getAll,
    create: create
  }

  function getAll(req: express.Request, res: express.Response, next: Function) {
    Girl.find({})
      .exec((err, data) => {
        if(err) return next(err);
        res.json(data);
      })
  }

  function create(req: express.Request, res: express.Response, next: Function) {
          console.log('happiness')
    let g = new Girl(req.body);
    g.save((err, girl: IGirlModel) => {
      if(err) return next(err);
      res.json(girl);
    });
  }

}
