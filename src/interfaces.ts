export interface Image {
    size: number[];
    bitmap: number[][];
}

export interface Data {
    count: number;
    images: Image[];
}

export interface Pixel<T = 'white' | 'black'> {
    x: number;
    y: number;
    type: T;
}
