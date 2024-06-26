import type { AstPath, ParserOptions, Doc, Printer } from 'prettier';

import { getFormattedNodeBody } from 'core-parts';

function createPrinter(): Printer {
  //
  function print(
    path: AstPath,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options: ParserOptions,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    print: (path: AstPath) => Doc,
  ): Doc {
    return getFormattedNodeBody(path.node);
  }

  return { print };
}

export const printers: { [astFormat: string]: Printer } = {
  'align-obj-prop-ast': createPrinter(),
};
