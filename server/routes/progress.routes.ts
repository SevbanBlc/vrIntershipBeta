import { Router } from 'express';
import { progressController } from '../controllers/progress.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticateToken);
router.get('/', progressController.getProgress);
router.post('/', progressController.saveProgress);

export const progressRoutes = router;