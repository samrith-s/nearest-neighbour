import { Data } from './interfaces';
import { NearestNeighbour as SolutionOne } from './nearest-neighbour/solution-one';
import { NearestNeighbour as SolutionTwo } from './nearest-neighbour/solution-two';
import { parseInput } from './parse-input';

const [solutionNumber = 1] = process.argv.slice(2);

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
        if (solutionNumber === 1) {
            console.log(SolutionOne(data.images[i]));
            console.log('');
            continue;
        }

        console.log(SolutionTwo(data.images[i]));
        console.log('');
    }
}
