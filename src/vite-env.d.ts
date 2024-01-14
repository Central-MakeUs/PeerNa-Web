/// <reference types="vite/client" />

import { ModeTypes } from './constants/environments';

interface ImportMeta {
  env: ImportMetaEnv;
}

interface ImportMetaEnv {
  MODE: ModeTypes;
  VITE_BASE_URL: string;
}
