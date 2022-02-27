import { Router } from 'express';
import { convertMiddleware } from '../middleware/convertMiddleware';
import testRouter from './test/index';

const router = Router();
router.use(convertMiddleware);
router.use('/test', testRouter);

export default router;
