import path from 'path';
import { declareExt } from './constants';

export default function getDeclareFilePath({
  filePath,
  cwd,
}: {
  filePath: string;
  cwd: string;
}): string {
  if (filePath.endsWith(declareExt)) {
    return filePath;
  }

  return path.resolve(cwd, `${filePath}${declareExt}`);
}
