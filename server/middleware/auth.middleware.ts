import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const payload = verifyToken(token);
  if (!payload) {
    return res.status(403).json({ error: 'Invalid token' });
  }

  req.user = { id: payload.userId };
  next();
};

export const setupAuth = (app: Express) => {
  app.use((req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      const payload = verifyToken(token);
      if (payload) {
        req.user = { id: payload.userId };
      }
    }
    next();
  });
};