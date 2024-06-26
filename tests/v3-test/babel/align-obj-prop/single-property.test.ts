import { Fixture, runTest } from '../../run-test';
import { parser } from '../parser';

const desc = '--align-single-property';
const name = 'single property';

const fixtures: Fixture[] = [
    {
        name: `${name} (1) default false`,
        input: `\
//---------------------------------------- (1)
a = {
    b: true,
};

c = {
    d: true,
    ee: false,
};
`,
        output: `\
//---------------------------------------- (1)
a = {
    b: true,
};

c = {
    d  : true,
    ee : false,
};
`
    },
    {
        name: `${name} (2) true`,
        options: { alignSingleProperty: true },
        input: `\
//---------------------------------------- (2)
a = {
    b: true,
};

c = {
    d: true,
    ee: false,
};
`,
        output: `\
//---------------------------------------- (2)
a = {
    b : true,
};

c = {
    d  : true,
    ee : false,
};
`
    },
];

runTest({ desc, parser, fixtures });
