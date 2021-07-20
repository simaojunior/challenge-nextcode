import { Router } from 'express';
import UploadController from './controllers/UploadController';

const router = Router();

router.post('/upload', UploadController.upload);

export default router;
