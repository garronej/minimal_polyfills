export interface LightSet<T> {
    [Symbol.toStringTag]: string;
    has(value: T): boolean;
    add(value: T): this;
    values(): Iterable<T>;
    delete(value: T): boolean;
}
export declare class LightSetImpl<T> implements LightSet<T> {
    [Symbol.toStringTag]: string;
    private readonly map;
    constructor(values?: T[]);
    has(value: T): boolean;
    add(value: T): this;
    values(): Iterable<T>;
    delete(value: T): boolean;
}
export declare const Polyfill: {
    new <T>(values?: T[]): LightSet<T>;
};
