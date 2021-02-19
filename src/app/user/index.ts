import Express, { Router } from 'express';
import getUserProfile from './getUserProfile';
import createUserProfile from './createUserProfile';
import updateUserProfile from './updateUserProfile';

const router: Router = Express.Router();

router.get('/', getUserProfile);
router.post('/', createUserProfile);
router.patch('/', updateUserProfile);

export default router;

