import * as express from 'express';

let selfDevShit = [];
seedShit3(selfDevShit);

export function getAll3(re: express.Request, res: express.Response, next: express.NextFunction) {
  res.json(selfDevShit);
}

export function seedShit3(selfDevShit) {
  selfDevShit.push('NVC', 'Pragmatic Spirituality', 'Game', 'Holistic Living',
'Rituals', 'Community Cultivation', 'Practical Enlightenment');
}
