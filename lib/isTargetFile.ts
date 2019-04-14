import { declareExt } from './constants';

export default function isTargetFile({
  extensions,
  filePath,
}: {
  extensions: string[];
  filePath: string;
}): boolean {
  return extensions.some((extension) => {
    if (filePath.endsWith(declareExt)) {
      return false;
    }
    return extension === '*' || filePath.endsWith(`.${extension}`);
  });
}
