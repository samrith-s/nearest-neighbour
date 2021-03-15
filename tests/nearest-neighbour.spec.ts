import { readFileSync } from 'fs';

import { Image } from '../src/interfaces';
import { NearestNeighbour as SolutionOne } from '../src/nearest-neighbour/solution-one';
import { NearestNeighbour as SolutionTwo } from '../src/nearest-neighbour/solution-two';
import { parseInput } from '../src/parse-input';

import { resolveInput } from './test-utils';

const content = parseInput(readFileSync(resolveInput('example2')).toString());

const EXPECTED_RESULTS_ONE = [
    '3 2 1 0\n2 1 0 0\n1 0 0 1',
    '0 1 2 3\n0 0 1 2\n1 0 0 1',
    '0 1 1 0 1 1 0\n0 1 2 3 2 1 0',
];

const EXPECTED_RESULTS_TWO = [
    '3 2 1 0\n2 1 0 0\n1 0 0 1',
    '0 1 2 3\n0 0 1 2\n1 0 0 1',
    '0 1 1 0 1 1 0\n0 1 2 1 2 1 0',
];

describe('nearest-neighbour: Solution One', () => {
    it.each(
        content.images.map<[Image, number]>((c, i) => [c, i])
    )('should parse the input correctly for Image %#', (image, index) => {
        const result = SolutionOne(image);
        expect(result).toEqual(EXPECTED_RESULTS_ONE[index]);
    });
});

describe('nearest-neighbour: Solution Two', () => {
    it.each(
        content.images.map<[Image, number]>((c, i) => [c, i])
    )('should parse the input correctly for Image %#', (image, index) => {
        const result = SolutionTwo(image);
        expect(result).toEqual(EXPECTED_RESULTS_TWO[index]);
    });
});
