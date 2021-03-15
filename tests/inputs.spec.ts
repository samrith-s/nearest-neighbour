import { readFileSync } from 'fs';

import { Data } from '../src/interfaces';
import { NearestNeighbour as SolutionOne } from '../src/nearest-neighbour/solution-one';
import { NearestNeighbour as SolutionTwo } from '../src/nearest-neighbour/solution-two';
import { parseInput } from '../src/parse-input';

import { resolveInputNumber } from './test-utils';

const content: [string, Data, number][] = [];

for (let i = 0; i < 10; i++) {
    content.push([
        i.toString().padStart(3, '0'),
        parseInput(readFileSync(resolveInputNumber(i + 1)).toString()),
        i + 1,
    ]);
}

describe('Results of Solution One', () => {
    describe.each(content)('Input file: %s.txt', (_, data, index) => {
        test.each(data.images)(`Image ${index}`, (image) => {
            const [rows, columns] = image.size;
            const result = SolutionOne(image).split('\n');

            expect(result.length).toEqual(rows);
            expect(result.every((line) => line.replace(/\s+/, '').length === columns));
        });
    });
});

describe('Results of Solution Two', () => {
    describe.each(content)('Input file: %s.txt', (_, data, index) => {
        test.each(data.images)(`Image ${index}`, (image) => {
            const [rows, columns] = image.size;
            const result = SolutionTwo(image).split('\n');

            expect(result.length).toEqual(rows);
            expect(result.every((line) => line.replace(/\s+/, '').length === columns));
        });
    });
});
