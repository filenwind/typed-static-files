import path from 'path';

export const declareExt = '.d.ts';

export const debugKey = 'typedSF';

export type _ = typeof path;

export enum EolOptionEnum {
  'lf',
  'crlf',
  'cr',
  'auto',
}

export type EolOption = keyof typeof EolOptionEnum;

export interface Options {
  extensions: string[];
  searchFolders: string[];
  cwd: string;
  eol: EolOption;
  watch: boolean;
  autoDelete: boolean;
}
