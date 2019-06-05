import { NextFunction, Request, Response, Router } from 'express';

export const router: Router = Router();

// tslint:disable-next-line: only-arrow-functions
router.get('/carros', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const allCarros = 'localhost:3000/carros';
    res.send(allCarros);
  } catch (err) {
    return next(err);
  }
});

// tslint:disable-next-line: only-arrow-functions
router.post('/carros', async function( req , res , next ) {
  res.send();
})
