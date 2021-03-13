import { Image } from './interfaces';

export function NearestNeighbour(imageData: Image): string {
    const { size, bitmap } = imageData;
    const [rows, columns] = size;

    const distanceMap: typeof bitmap = [];

    for (let i = 0; i < rows; i++) {
        distanceMap.push(new Array<number>(columns).fill(0));

        for (let j = 0; j < columns; j++) {
            if (bitmap[i][j]) {
                continue;
            }

            let leastDistance = columns;

            for (let k = 0; k < columns; k++) {
                if (k === j) {
                    continue;
                }

                if (!bitmap[i][k]) {
                    continue;
                }

                const currentDistance = Math.abs(j - k);

                if (currentDistance < leastDistance) {
                    leastDistance = currentDistance;
                    distanceMap[i][j] = leastDistance;
                }
            }
        }
    }

    return distanceMap.map((o) => o.join('')).join('\n');
}
