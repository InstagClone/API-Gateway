import { readJwtToken } from '../services/jwtService';
import type { Request, Response, NextFunction } from 'express';

export default function tokenAuthentiation(req: Request, res: Response, next: NextFunction) {
  const bearerToken = req.headers.authorization;
  try {
    if (!bearerToken) {
      res.status(401).send({ status: 'error', message: 'Missing JWT Token Information' });
    } else {
      const filteredToken = bearerToken.split(' ');
      const jwtToken = filteredToken[1];
      req.headers.userId = readJwtToken(jwtToken);
      next();
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
