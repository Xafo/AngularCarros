import { NextFunction, Request, Response, Router } from 'express';

export const router: Router = Router();

router.get('/mantenimientos', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const allProducts = 'localhost:3000/mantenimientos';
    res.send(allProducts);
  }catch(err) {
    return next(err);
  }
});
