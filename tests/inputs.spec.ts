import { readFileSync } from 'fs';

import { Data } from '../src/interfaces';
import { NearestNeighbour } from '../src/nearest-neighbour';
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

describe.each(content)('Input file: %s.txt', (_, data) => {
    test.each(data.images)(`Image %#`, (image) => {
        const [rows, columns] = image.size;
        const result = NearestNeighbour(image).split('\n');

        expect(result.length).toEqual(rows);
        expect(result.every((line) => line.length === columns));
    });
});
