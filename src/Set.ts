
import { Polyfill as MapPolyfill } from "./Map";

export interface LightSet<T> {
    [Symbol.toStringTag]: string;
    has(value: T): boolean;
    add(value: T): this;
    values(): Iterable<T>;
    delete(value: T): boolean;
}

export class LightSetImpl<T> implements LightSet<T> {

    [Symbol.toStringTag]!: string;

    private readonly map= new MapPolyfill<T, true>();

    constructor(values?: T[]){

        if( values === undefined ){
            return;
        }

        for( let value of values ){
            this.add(value);
        }

    }

    public has(value: T): boolean{
        return this.map.has(value);
    }

    public add(value: T): this {
        this.map.set(value, true);
        return this;
    }

    public values(): Iterable<T> {
        return this.map.keys();
    }

    public delete(value: T): boolean {
        return this.map.delete(value);
    }

}

export const Polyfill: { new<T>(values?: T[]): LightSet<T> } = 
    typeof Set !== "undefined" ? Set : LightSetImpl;
