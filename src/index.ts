import * as chalk from 'chalk';

import { Data } from './interfaces';
import { parseInput } from './parse-input';
import { NearestNeighbour } from './nearest-neighbour';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

function parseAndExecute() {
    const testData = parseInput(inputString);
    main(testData);
}

process.stdin.on('end', () => {
    parseAndExecute();
});

function main(data: Data) {
    for (let i = 0, len = data.count; i < len; i++) {
        // console.log(chalk.yellow('Test', i + 1, 'output:'));
        console.log('');
        console.log(NearestNeighbour(data.images[i], i));
        console.log('');
    }
}
