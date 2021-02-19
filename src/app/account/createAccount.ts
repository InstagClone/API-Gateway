import axios from 'axios';
import config from '../../config';
import qs from 'qs';
import type { Request, Response, NextFunction } from 'express';

export default async function createAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { username, password } = req.body;
    const { data } = await axios.request({
      method: 'post',
      url: `${config.userHost}/account`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        username,
        password
      })
    })
    res.send(data);
  } catch (err) {
    next(err);
  }
}
