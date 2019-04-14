import { EntryItem } from 'fast-glob/out/types/entries';
import { Pattern } from 'fast-glob/out/types/patterns';
import { Options } from './constants';
export declare function fastMatchToStrings(match: EntryItem): string;
export declare function removeUnusedDeclareFiles({ searchPatterns, cwd, extensions, }: {
    searchPatterns: Pattern[];
    cwd: string;
    extensions: string[];
}): Promise<void>;
export default function creator(options: Options): Promise<void>;
