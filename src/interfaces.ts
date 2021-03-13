export interface Image {
    size: number[];
    bitmap: number[][];
}

export interface Data {
    count: number;
    images: Image[];
}
