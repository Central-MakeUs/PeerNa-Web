/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { ModeTypes } from './constants/environments';

interface ImportMeta {
  env: ImportMetaEnv;
}

interface ImportMetaEnv {
  MODE: ModeTypes;
}
