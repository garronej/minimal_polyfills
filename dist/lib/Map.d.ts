export interface LightMap<K, V> {
    [Symbol.toStringTag]: string;
    has(key: K): boolean;
    get(key: K): V | undefined;
    set(key: K, value: V): this;
    delete(key: K): boolean;
    keys(): Iterable<K>;
}
export declare class LightMapImpl<K, V> implements LightMap<K, V> {
    [Symbol.toStringTag]: string;
    private readonly record;
    constructor();
    has(key: K): boolean;
    get(key: K): V | undefined;
    set(key: K, value: V): this;
    delete(key: K): boolean;
    keys(): Iterable<K>;
}
export declare const Polyfill: {
    new <K, V>(): LightMap<K, V>;
};
