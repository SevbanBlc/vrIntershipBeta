import { Request, Response } from 'express';
import { progressService } from '../services/progress.service';

export const progressController = {
  async saveProgress(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const progress = await progressService.saveProgress(userId, req.body);
      res.json(progress);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async getProgress(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const progress = await progressService.getProgress(userId);
      res.json(progress);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};