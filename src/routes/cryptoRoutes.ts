import { Router } from 'express';
import getCryptoPrice from '../controllers/cryptoController';

const router = Router();

router.get('/price', getCryptoPrice);

export default router;
