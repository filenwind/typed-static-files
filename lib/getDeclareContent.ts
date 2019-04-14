import outdent from 'outdent';
import EOL from 'eol';
import { EolOption } from './constants';

const eolContent = {
  lf: '',
  cr: '',
  crlf: '',
  auto: '',
};

export default function getDeclareContent({
  eol,
}: {
  eol: EolOption;
}): string {
  if (!eolContent[eol]) {
    eolContent[eol] = EOL[eol](outdent`
      declare const value: string;
      export default value;

    `);
  }

  return eolContent[eol];
}
