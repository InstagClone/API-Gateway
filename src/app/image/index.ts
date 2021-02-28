import Express, { Router } from 'express';
import Multer from 'multer';
import uploadImage from './uploadImage';
import viewImage from './viewImage';
import deleteImage from './deleteImage';

const router: Router = Express.Router();
const multer = Multer();

router.get('/:photoId', viewImage);
router.post('/', multer.single('photo'), uploadImage);
router.delete('/', deleteImage);

export default router;
