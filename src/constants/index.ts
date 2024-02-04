export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';
export type ModeTypes = typeof DEVELOPMENT | typeof PRODUCTION;
export const MODE: ModeTypes = import.meta.env.MODE as ModeTypes;

const KAKAO_AUTH_URL = 'https://kauth.kakao.com';

const CLIENT_ID = import.meta.env.VITE_REST_KEY;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const AUTH_URL = `${KAKAO_AUTH_URL}/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
