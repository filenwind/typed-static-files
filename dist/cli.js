#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var constants_1 = require("./constants");
var index_1 = __importDefault(require("./index"));
exports.EolOptions = Object.keys(constants_1.EolOptionEnum).filter(function (key) { return Number.isNaN(Number.parseInt(key, 10)); });
var argv = yargs_1.default
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
    describe: "auto delete unused " + constants_1.declareExt + " file",
    type: 'boolean',
    default: false,
})
    .option('cwd', {
    type: 'string',
    describe: 'default: process.cwd()',
})
    .option('eol', {
    describe: 'line break',
    choices: exports.EolOptions,
    default: 'lf',
})
    .option('watch', {
    alias: 'w',
    default: false,
    type: 'boolean',
})
    .help()
    .alias('help', 'h').argv;
// end argv
var extensions = argv.ext.split(',').map(function (ext) { return ext.trim().replace('.', ''); });
var searchFolders = argv.searchFolders.split(',').map(function (searchFolder) { return searchFolder.trim(); });
// get the unique array
extensions = Array.from(new Set(extensions));
searchFolders = Array.from(new Set(searchFolders));
index_1.default({
    cwd: argv.cwd || process.cwd(),
    eol: argv.eol,
    extensions: extensions,
    searchFolders: searchFolders,
    watch: argv.watch,
    autoDelete: argv.delete,
});
