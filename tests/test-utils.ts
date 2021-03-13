import { resolve } from 'path';

export function pathFromRoot(...path: string[]): string {
    return resolve(process.cwd(), ...path);
}

export function resolveInput(fileName: string): string {
    return pathFromRoot(`tests/inputs/${fileName}.txt`);
}

export function resolveInputNumber(number: number): string {
    return resolveInput(number.toString().padStart(3, '0'));
}
