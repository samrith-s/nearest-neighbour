import { Data } from './interfaces';
import { NearestNeighbour } from './nearest-neighbour';
import { parseInput } from './parse-input';

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
        console.log('');
        console.log(NearestNeighbour(data.images[i]));
        console.log('');
    }
}
