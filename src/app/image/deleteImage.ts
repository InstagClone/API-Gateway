import axios from 'axios';
import config from '../../config';
import FormData from 'form-data';
import type { Request, Response, NextFunction } from 'express';

export default async function deleteImage(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const photoId: string = req.query.photoId as string;
    const userid: string = req.headers.userId as string;
    const { data } = await axios.request({
      method: 'delete',
      url: `${config.imageHost}/api/delete/?photoId=${photoId}`,
      headers: {
        userid: userid
      }
    });
    res.send(data);
  } catch (err) {
    next(err);
  }
}
