import { Router } from 'express';
import { createEmployer } from './empControllers';
import { createEmployerRecord } from '../../db/employersSchema';
import { validateData } from '../../middlewares/validationMiddlewares';

const router = Router();

router.post('/new', validateData(createEmployerRecord), createEmployer)

export default router;