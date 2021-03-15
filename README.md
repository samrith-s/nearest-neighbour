# Nearest Neighbour

A simple nearest neighbour solution in TypeScript.

## Table of contents

-   [Problem statement](#problem-statement)
-   [Considerations](#considerations)
-   [Other considerations](#other-considerations)
    -   [Solution 1](#solution-1)
    -   [Solution 2](#solution-2)
-   [Commands](#commands)
-   [Inputs](#inputs)

## Problem statement

Write a program which:

-   reads the description of the bitmap from the standard input
-   for each pixel, computes the distance to the nearest white
-   writes the results to the standard output

## Considerations

A rectangular bitmap with only black and white pixels. Atleast **ONE** pixel is white. All black pixels are represented by `0` and whites by `1`.

-   **Size:** `n * m`
-   **Size constraints:**: `1<=n <=182, 1<=m<=182`
-   **Pixel:** `p(i,j)`
-   **Distance formula:** `d(p1,p2) = |i1-i1|+|j1-j2|`

## Other considerations

Since the problem does not explicitly mention how to find the nearest neighbour, this program addresses two solutions based on the example output provided.

### Solution 1

The first solution scans within the same row and tries to find the closest white pixel, like so:

<img src="https://raw.githubusercontent.com/samrith-s/nearest-neighbour/main/img/solution-one.jpg" alt="solution one" />

### Solution 2

The second solution scans in all four directions and tries to find the closest white pixel, like so:

<img src="https://raw.githubusercontent.com/samrith-s/nearest-neighbour/main/img/solution-two.jpg" alt="solution two" />

## Commands

-   `yarn dev:one` - Run the first solution in dev mode
-   `yarn dev:two` - Run the second solution in dev mode
-   `yarn build` - Build both solutions
-   `yarn start:one < path/to/file.txt` - Run the production build using solution one
-   `yarn start:two < path/to/file.txt` - Run the production build using solution two
-   `yarn lint` - Lint all files and check for errors
-   `yarn test` - Run all test suites
-   `yarn test:generate` - Generate a random new input file in the `generated` folder

## Inputs

All the various input files are located `tests/inputs` folder. You can optionally generate a random file and run it against any solution
