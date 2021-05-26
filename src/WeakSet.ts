

import { Polyfill as SetPolyfill } from "./Set";

export const Polyfill: { new<T extends object>(values?: T[]): WeakSet<T> } = 
    typeof WeakSet !== "undefined" ? WeakSet : SetPolyfill ;

