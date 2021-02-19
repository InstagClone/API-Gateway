import jwtToken from 'jsonwebtoken';
import config from '../config';

// eslint-disable-next-line @typescript-eslint/ban-types
type AccessTokenObject = object;

interface IAccessToken extends AccessTokenObject {
  iss?: string;
  sub?: string;
  scopes?: Array<string>;
  token_type?: string;
  grant_type?: string;
}

export function readJwtToken(token: string): string{
  // eslint-disable-next-line @typescript-eslint/ban-types
  const access_token: IAccessToken = jwtToken.verify(token, config.jwtKey!) as IAccessToken;
  if (!access_token.sub) {
    throw new Error('Access Token Not Found');
  }
  const userId: string = access_token.sub;
  return userId;
}
