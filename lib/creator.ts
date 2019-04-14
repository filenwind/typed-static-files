import fastGlob from 'fast-glob';
import { EntryItem } from 'fast-glob/out/types/entries';
import { Pattern } from 'fast-glob/out/types/patterns';
import fs from 'fs';
import createDeclareFile from './createDeclareFile';
import { Options, declareExt } from './constants';
import isTargetFile from './isTargetFile';
import logger from './logger';

export function fastMatchToStrings(match: EntryItem): string {
  if (typeof match === 'string') {
    return match;
  }
  return match.path;
}

export async function removeUnusedDeclareFiles({
  searchPatterns,
  cwd,
  extensions,
}: {
  searchPatterns: Pattern[];
  cwd: string;
  extensions: string[];
}): Promise<void> {
  const declarePatterns = searchPatterns.map(searchPattern => `${searchPattern}${declareExt}`);
  const declareFiles = fastGlob.sync(declarePatterns, { cwd }).map(fastMatchToStrings);
  declareFiles.forEach((declareFile) => {
    const dtsIndex = declareFile.lastIndexOf(declareExt);
    const originFilePath = declareFile.substring(0, dtsIndex);

    if (!isTargetFile({ extensions, filePath: originFilePath })) {
      return;
    }

    if (!fs.existsSync(originFilePath)) {
      fs.unlink(declareFile, (error) => {
        if (!error) {
          logger.deleted(declareFile);
        }
      });
    }
  });
}

export default async function creator(options: Options): Promise<void> {
  const {
    extensions,
    searchFolders,
    eol,
    cwd,
  } = options;

  extensions.forEach((extension) => {
    searchFolders.forEach((_searchFolder) => {
      const searchFolder = _searchFolder.endsWith('/') ? _searchFolder : `${_searchFolder}/`;

      const searchPatterns = [`${searchFolder}**/*.${extension}`];
      const ignorePatterns = [`!*${declareExt}`];

      if (options.autoDelete) {
        removeUnusedDeclareFiles({ searchPatterns, cwd, extensions });
      }

      fastGlob([...searchPatterns, ...ignorePatterns], { cwd: options.cwd }).then((_matches) => {
        const matches = _matches.map(fastMatchToStrings);

        matches.forEach((match) => {
          createDeclareFile({
            filePath: match,
            eol,
          });
        });
      }).catch((e) => {
        throw e;
      });
    });
  });
}
