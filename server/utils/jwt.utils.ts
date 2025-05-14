import jwt from 'jsonwebtoken';
import { config } from '../config/environment';

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '7d' });
};

export const verifyToken = (token: string): { userId: string } | null => {
  try {
    return jwt.verify(token, config.jwtSecret) as { userId: string };
  } catch (error) {
    return null;
  }
};