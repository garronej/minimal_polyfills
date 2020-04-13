

import { Polyfill as MapPolyfill } from "./Map/index.ts";

export const Polyfill: { new<K extends object,V>(): WeakMap<K,V> } = 
    typeof WeakMap !== "undefined" ? WeakMap : MapPolyfill;

