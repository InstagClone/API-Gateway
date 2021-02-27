import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import version from './version';
import account from './account';
import user from './user';
import image from './image';
import errorHandler from '../middlewares/errorHandler';
import tokenValidation from '../middlewares/tokenValidation';
import Multer from 'multer';
import type { Application } from 'express';

export default function create(): Application {
  const app: Application = express();
  const multer = Multer();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/healthcheck', version);
  app.use('/api/account', account);
  app.use(tokenValidation);
  app.use('/api/user', user);
  app.use('/api/image', multer.single('image'), image);
  app.use(errorHandler);
  return app;
}
