import axios from 'axios';
import config from '../../config';
import FormData from 'form-data';
import type { Request, Response, NextFunction } from 'express';

export default async function uploadImage(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userid: string = req.headers.userId as string;
    const form = new FormData();
    form.append('photo', req.file.buffer, {
      contentType: req.file.mimetype,
      filename: req.file.originalname
    });
    const { data } = await axios.request({
      method: 'post',
      url: `${config.imageHost}/api/upload`,
      headers: {
        'Content-Type': `multipart/form-data; boundary=${form.getBoundary()}`,
        userid: userid
      },
      data: form
    });
    res.send(data);
  } catch (err) {
    next(err);
  }
}
