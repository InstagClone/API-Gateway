import axios from 'axios';
import config from '../../config';
import qs from 'qs';
import type { Request, Response, NextFunction } from 'express';

export default async function createUserProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userid: string = req.headers.userId as string;
    const { name, email, dateOfBirth } = req.body;
    const { data } = await axios.request({
      method: 'post',
      url: `${config.userHost}/user/profile`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        userid
      },
      data: qs.stringify({
        name,
        email,
        dateOfBirth 
      })
    })
    res.send(data);
  } catch (err) {
    next(err);
  }
}
