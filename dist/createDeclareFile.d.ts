import { EolOption } from './constants';
export default function createDeclareFile({ filePath, eol, }: {
    filePath: string;
    eol: EolOption;
}): Promise<void>;
