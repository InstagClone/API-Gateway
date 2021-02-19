import axios from 'axios';
import config from '../../config';
import qs from 'qs';
import type { Request, Response, NextFunction } from 'express';

export default async function updateUserProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userid: string = req.headers.userId as string;
    const { data } = await axios.request({
      method: 'patch',
      url: `${config.userHost}/user/profile`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        userid
      },
      data: qs.stringify(req.body)
    })
    res.send(data);
  } catch (err) {
    next(err);
  }
}
