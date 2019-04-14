/// <reference types="node" />
import path from 'path';
export declare const declareExt = ".d.ts";
export declare const debugKey = "typedSF";
export declare type _ = typeof path;
export declare enum EolOptionEnum {
    'lf' = 0,
    'crlf' = 1,
    'cr' = 2,
    'auto' = 3
}
export declare type EolOption = keyof typeof EolOptionEnum;
export interface Options {
    extensions: string[];
    searchFolders: string[];
    cwd: string;
    eol: EolOption;
    watch: boolean;
    autoDelete: boolean;
}
