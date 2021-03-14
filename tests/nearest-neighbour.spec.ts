import { readFileSync } from 'fs';

import { Image } from '../src/interfaces';
import { NearestNeighbour } from '../src/nearest-neighbour';
import { parseInput } from '../src/parse-input';

import { resolveInput } from './test-utils';

const content = parseInput(readFileSync(resolveInput('example2')).toString());

const EXPECTED_RESULTS = ['3210\n2100\n1001', '0123\n0012\n1001', '0110110\n0123210'];

describe('nearest-neighbour', () => {
    it.each(
        content.images.map<[Image, number]>((c, i) => [c, i])
    )('should parse the input correctly for Image %#', (image, index) => {
        const result = NearestNeighbour(image);
        expect(result).toEqual(EXPECTED_RESULTS[index]);
    });
});
