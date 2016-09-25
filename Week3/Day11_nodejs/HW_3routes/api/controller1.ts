//why import express here?
//because typings
import * as express from 'express';

let musicShit = [];
seedShit1(musicShit);

export function getAll1(re: express.Request, res: express.Response, next: express.NextFunction) {
  res.json(musicShit);
}

export function seedShit1(musicShit) {
  musicShit.push('Radiohead', 'Kendrick Lamar', 'RHCP', 'Oldies',
  'Classical', 'Theatre', 'Nature Sounds', 'Disney');
}
