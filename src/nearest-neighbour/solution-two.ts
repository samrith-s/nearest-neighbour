import { Image } from '../interfaces';

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

            for (let l = 0; l < columns; l++) {
                if (l === j) {
                    continue;
                }

                if (!bitmap[i][l]) {
                    continue;
                }

                const currentDistance = Math.abs(j - l);

                if (currentDistance < leastDistance) {
                    leastDistance = currentDistance;
                    distanceMap[i][j] = leastDistance;

                    if (leastDistance === 1) {
                        break;
                    }
                }
            }

            if (leastDistance > 1) {
                for (let m = 0; m < rows; m++) {
                    if (m === i) {
                        continue;
                    }

                    if (!bitmap[m][j]) {
                        continue;
                    }

                    const currentDistance = Math.abs(i - m);

                    if (currentDistance < leastDistance) {
                        leastDistance = currentDistance;
                        distanceMap[i][j] = leastDistance;

                        if (leastDistance === 1) {
                            break;
                        }
                    }
                }
            }
        }
    }

    return distanceMap.map((o) => o.join(' ')).join('\n');
}
