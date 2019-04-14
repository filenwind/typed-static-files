import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';
import creator from './creator';
import createDeclareFile from './createDeclareFile';
import { Options } from './constants';
import isTargetFile from './isTargetFile';
import getDeclareFilePath from './getDeclareFilePath';
import logger from './logger';

export default async function watchCreator(options: Options): Promise<void> {
  await creator(options);

  const {
    searchFolders,
    extensions,
    cwd,
    eol,
    autoDelete,
  } = options;

  const watcher = chokidar.watch(searchFolders, { cwd, ignoreInitial: true });

  searchFolders.forEach(searchFolder => logger.watching(searchFolder));

  watcher.on('add', (file) => {
    if (!isTargetFile({ extensions, filePath: file })) {
      return;
    }
    const declareFilePath = getDeclareFilePath({ filePath: file, cwd });
    if (!fs.existsSync(declareFilePath)) {
      createDeclareFile({ filePath: path.resolve(cwd, file), eol });
    }
  });

  watcher.on('unlink', (file) => {
    if (isTargetFile({ extensions, filePath: file })) {
      if (autoDelete) {
        const declareFilePath = getDeclareFilePath({ filePath: file, cwd });
        fs.unlink(declareFilePath, (error) => {
          if (!error) {
            logger.deleted(declareFilePath);
          }
        });
      }
    }
  });
}
