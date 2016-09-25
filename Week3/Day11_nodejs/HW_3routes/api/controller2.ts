import * as express from 'express';

let designShit = [];
seedShit2(designShit);

export function getAll2(re: express.Request, res: express.Response, next: express.NextFunction) {
  res.json(designShit);
}

export function seedShit2(designShit) {
  designShit.push('IOT', 'Apparel', 'Accessories', 'Utility Belts',
  'Lifestyle Products', 'Painting', 'Digital Media');
}
