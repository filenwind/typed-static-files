import fs from 'fs';
import getDeclareContent from './getDeclareContent';
import { EolOption, declareExt } from './constants';
import logger from './logger';

export default async function createDeclareFile({
  filePath,
  eol,
}: {
  filePath: string;
  eol: EolOption;
}): Promise<void> {
  if (filePath.endsWith(declareExt)) {
    return;
  }

  const declareFilePath = `${filePath}${declareExt}`;
  if (fs.existsSync(declareFilePath)) {
    return;
  }

  await (new Promise((resolve, reject) => {
    fs.writeFile(declareFilePath, getDeclareContent({ eol }), null, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });

    logger.created(declareFilePath);
  }));
}
