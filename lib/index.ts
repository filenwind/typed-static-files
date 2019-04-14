import { Options } from './constants';
import creator from './creator';
import watchCreator from './watchCreator';

export default async function typedStaticFiles(options: Options): Promise<void> {
  if (options.watch) {
    watchCreator(options);
  } else {
    creator(options);
  }
}
