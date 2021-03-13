import * as chalk from 'chalk';

import { Data } from './interfaces';
import { parseInput } from './parse-input';
import { NearestNeighbour } from './nearest-neighbour';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let inputArray: string[] = [];

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputArray = inputString
        .trim()
        .split('\n')
        .map((string) => {
            return string.trim();
        });

    const tests = parseInt(inputArray[0], 10);

    const testData = parseInput(inputArray.slice(1), {
        count: tests,
        images: [],
    });

    main(testData);
});

function main(data: Data) {
    for (let i = 0, len = data.count; i < len; i++) {
        // console.log(chalk.yellow('Test', i + 1, 'output:'));
        console.log(NearestNeighbour(data.images[i], i));
        console.log('');
    }
}
