import isTargetFile from '../isTargetFile';

test('isTargetFile', () => {
  expect(isTargetFile({
    extensions: ['png'],
    filePath: 'test.png',
  })).toBe(true);

  expect(isTargetFile({
    extensions: ['jpg'],
    filePath: 'test.png',
  })).toBe(false);

  expect(isTargetFile({
    extensions: ['jpg'],
    filePath: 'test.jpg.d.ts',
  })).toBe(false);
});
