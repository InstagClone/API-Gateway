import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import version from './version';
import account from './account';
import user from './user';
import errorHandler from '../middlewares/errorHandler';
import tokenValidation from '../middlewares/tokenValidation';
import type { Application } from 'express';

export default function create(): Application {
  const app: Application = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/healthcheck', version);
  app.use('/api/account', account);
  app.use(tokenValidation);
  app.use('/api/user', user);
  app.use(errorHandler);
  return app;
}
