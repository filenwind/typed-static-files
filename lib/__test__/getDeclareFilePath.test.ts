import path from 'path';
import getDeclareFilePath from '../getDeclareFilePath';
import { declareExt } from '../constants';

const cwd = process.cwd();
test('getDeclareFilePath', () => {
  const declareFilePath = getDeclareFilePath({
    filePath: './test.png',
    cwd,
  });

  expect(declareFilePath).toEqual(path.resolve(cwd, `./test.png${declareExt}`));
});
