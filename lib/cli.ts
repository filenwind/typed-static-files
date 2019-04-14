#!/usr/bin/env node

import yargs from 'yargs';
import { EolOptionEnum, EolOption, declareExt } from './constants';
import typedStaticFiles from './index';

export const EolOptions = (
  Object.keys(EolOptionEnum) as (EolOption)[]
).filter(key => Number.isNaN(Number.parseInt(key, 10)));

const { argv } = yargs
  .option('ext', {
    alias: 'e',
    type: 'string',
    describe: 'png,jpg,...',
    demandOption: true,
  })
  .option('searchFolders', {
    alias: 's',
    demandOption: true,
    describe: 'relate to process.cwd [./src/res,./src/static,...]',
    type: 'string',
  })
  .option('delete', {
    alias: 'd',
    describe: `auto delete unused ${declareExt} file`,
    type: 'boolean',
    default: false,
  })
  .option('cwd', {
    type: 'string',
    describe: 'default: process.cwd()',
  })
  .option('eol', {
    describe: 'line break',
    choices: EolOptions,
    default: 'lf',
  })
  .option('watch', {
    alias: 'w',
    default: false,
    type: 'boolean',
  })
  .help()
  .alias('help', 'h');
// end argv


let extensions = argv.ext.split(',').map(ext => ext.trim().replace('.', ''));
let searchFolders = argv.searchFolders.split(',').map(searchFolder => searchFolder.trim());

// get the unique array
extensions = Array.from(new Set(extensions));
searchFolders = Array.from(new Set(searchFolders));

typedStaticFiles({
  cwd: argv.cwd || process.cwd(),
  eol: argv.eol as EolOption,
  extensions,
  searchFolders,
  watch: argv.watch,
  autoDelete: argv.delete,
});
