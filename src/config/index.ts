import 'dotenv/config';

export default {
  port: process.env.PORT,
  jwtKey: process.env.JWT_KEY,
  userHost: process.env.USER_HOST ?? '',
  imageHost: process.env.IMAGE_HOST ?? ''
}
