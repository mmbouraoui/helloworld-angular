import { environment } from '../../../environments/environment';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const BASE_PATH = environment.basePath;
/**
* Get the access token from local storage
* @returns {string} the refresh token
*/
export function accessTokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN);
}
/**
* Clear the access token from local storage
* @returns {string} the refresh token
*/
export function accessTokenRemover() {
  return clearStorage();
}
/**
* Get the refresh token from local storage
* @returns {string} the refresh token
*/
export function refreshTokenGetter(): string {
  return localStorage.getItem('refresh_token');
}
/**
* Set the access token in the local storage and set the
* refresh token if enabled in the local storage also
* @returns {boolean}
*/
export function refreshTokenSetter(res: any): boolean {
  if (res) {
    if (!res['token']) {
      clearStorage();
     return false;
    }
    localStorage.setItem(ACCESS_TOKEN, res['token']);
    if (res['refreshToken']) {
      localStorage.setItem(REFRESH_TOKEN, res['refreshToken']);
    }
  }
  return true;
}
/**
* Remove the tokens from local storage
* @returns {boolean}
*/
export function refreshTokenRemover(): boolean {
  return clearStorage();
}
/**
* Clear the tokens stored within the local storage
*/
function clearStorage(): boolean {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  return true;
}
/**
* Define the manager of the tokens
*/
export const refreshTokenOpt = {
  endPoint: `${BASE_PATH}security/refreshToken`,
  headers: [{ Accept: '*/*' }, { 'Cache-control': 'no-cache' }, { 'Cache-control': 'no-store' }, { Expires: '0' }, { Pragma: 'no-cache' }],
  ignorablePathList: [`${BASE_PATH}security/refreshToken`,
  `${BASE_PATH}security/authenticate`,
  `${BASE_PATH}security/logout`],
  payload: [],
  tokenName: 'refreshToken',
  offsetSeconds: 15, // 604740,
  tokenGetter: refreshTokenGetter,
  tokenSetter: refreshTokenSetter,
  tokenRemover: refreshTokenRemover
};
export const accessTokenOpt = {
  config: {
    tokenGetter: accessTokenGetter,
    tokenRemover: accessTokenRemover
  }
};
