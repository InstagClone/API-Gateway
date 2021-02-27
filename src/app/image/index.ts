import Express, { Router } from 'express';
import uploadImage from './uploadImage';

const router: Router = Express.Router();

router.post('/', uploadImage);

export default router;
