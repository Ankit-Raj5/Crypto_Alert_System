import { Router } from 'express';
import setAlert from '../controllers/alertController';

const router = Router();

router.post('/set', setAlert);

export default router;
