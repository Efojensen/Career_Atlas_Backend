import { Router } from 'express';
import { createNewUser } from './userControllers';
import { createSeekerRecord } from '../../db/seekersSchema';
import { validateData } from '../../middlewares/validationMiddlewares';

const router = Router();

router.post('/new', validateData(createSeekerRecord), createNewUser)

export default router;