import { readFileSync } from 'fs';

import { parseInput } from '../src/parse-input';

import { resolveInput } from './test-utils';

describe('parse-input', () => {
    it('should parse the input correctly', () => {
        const content = readFileSync(resolveInput('example')).toString();
        expect(parseInput(content)).toEqual({
            count: 1,
            images: [
                {
                    size: [3, 4],
                    bitmap: [
                        [0, 0, 0, 1],
                        [0, 0, 1, 1],
                        [0, 1, 1, 0],
                    ],
                },
            ],
        });
    });
});
