import fs from 'fs';
import mockFs from 'mock-fs';
import createDeclareFile from '../createDeclareFile';
import getDeclareFilePath from '../getDeclareFilePath';

const mockDir = './test';
const mockFileName = 'test.png';
const mockFilePath = `${mockDir}/${mockFileName}`;
const mockDeclarePath = getDeclareFilePath({ filePath: mockFilePath, cwd: './' });

mockFs({
  [mockDir]: {
    [mockFileName]: '',
  },
});


test('createDeclareFile', () => {
  createDeclareFile({
    filePath: mockFilePath,
    eol: 'lf',
  });

  expect(fs.existsSync(mockDeclarePath)).toBe(true);
});

afterAll(() => {
  mockFs.restore();
});
