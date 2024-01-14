export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';
export type ModeTypes = typeof DEVELOPMENT | typeof PRODUCTION;
export const MODE: ModeTypes = import.meta.env.MODE as ModeTypes;
