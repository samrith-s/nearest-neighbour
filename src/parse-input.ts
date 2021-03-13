import { Data } from './interfaces';

export function parseInput(inputString: string): Data {
    const inputArray = inputString
        .trim()
        .split('\n')
        .map((string) => {
            return string.trim();
        });

    let isNewTest = true;
    let currentTestIndex = 0;

    return inputArray.reduce<Data>(
        (acc, line) => {
            if (!line.trim()) {
                currentTestIndex++;
                isNewTest = true;
                return acc;
            }

            if (isNewTest) {
                const size = line
                    .trim()
                    .split(/\s*/)
                    .map((number) => parseInt(number.trim(), 10));

                acc.images[currentTestIndex] = {
                    size,
                    bitmap: [],
                };

                isNewTest = false;
                return acc;
            }

            if (!isNewTest) {
                acc.images[currentTestIndex].bitmap.push(
                    line.split('').map((number) => parseInt(number, 10))
                );
            }

            return acc;
        },
        {
            count: parseInt(inputArray[0], 10),
            images: [],
        }
    );
}
