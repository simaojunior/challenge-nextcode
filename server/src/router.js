import { Router } from 'express';
import UploadController from './controllers/UploadController';

const router = Router();

router.post('/', UploadController.upload);

export default router;
