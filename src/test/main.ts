
declare const console: any;
declare const global: any;

delete global["Map"];
delete global["Set"];

import { Polyfill as Map } from "../lib/Map";
import { Polyfill as Set } from "../lib/Set";

{

    const m = new Map<Object, number>();


    const o1 = ["o1"];
    const o2 = ["o2"];

    m
        .set(o1, 1)
        .set(o2, 2);


    console.log(m.keys());

    console.log(m.get(o1) === 1);

    m.set(o1, 666);

    console.log(m.get(o1) === 666);

    console.log(m.delete(o1) === true);

    console.log(m.get(o1) === undefined);

}


{

    const s = new Set<Object>();

    const o1 = ["o1"];
    const o2 = ["o2"];

    s
        .add(o1)
        .add(o2);

    console.log(s.values());

    console.log(s.has(o1) === true);

    console.log(s.delete(o1) === true);

    console.log(s.has(o1) === false);

}







