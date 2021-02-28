import axios from 'axios';
import config from '../../config';
import type { Request, Response, NextFunction } from 'express';

const prepareUrl = (photoId: string) => {
  const url = photoId === 'all' ? `${config.imageHost}/api/viewAll` : `${config.imageHost}/api/view/${photoId}`;
  return url;
}

export default async function viewSingleImage(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const photoId: string = req.params.photoId as string;
    const userid: string = req.headers.userId as string;
    const url = prepareUrl(photoId);
    const { data } = await axios.request({
      method: 'get',
      url,
      headers: {
        userid: userid
      },
    });
    res.send(data);
  } catch (err) {
    next(err);
  }
}
