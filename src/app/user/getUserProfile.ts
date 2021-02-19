import axios from 'axios';
import config from '../../config';
import type { Request, Response, NextFunction } from 'express';

export default async function getUserProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userid: string = req.headers.userId as string;
    const { data } = await axios.request({
      method: 'get',
      url: `${config.userHost}/user/profile`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        userid
      }
    })
    res.send(data);
  } catch (err) {
    next(err);
  }
}
