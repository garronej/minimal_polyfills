
declare const console: any;
declare const global: any;

delete global["Set"];

//NOTE: Cannot delete Map as used by import().
import { LightMapImpl } from "../lib/Map";
import { Polyfill as Set, LightSetImpl } from "../lib/Set";

function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        throw new Error(msg);
    }
}

{

    const m = new LightMapImpl<Object, number>();

    const o1 = ["o1"];
    const o2 = ["o2"];

    m
        .set(o1, 1)
        .set(o2, 2)
        ;

    {

        const keys = Array.from(m.keys());

        assert(keys[0] === o1 && keys[1] === o2);

    }


    assert(m.get(o1) === 1);

    m.set(o1, 666);

    assert(m.get(o1) === 666);

    assert(m.delete(o1) === true);

    assert(m.get(o1) === undefined);

}


{

    const s = new Set<Object>();

    assert(s instanceof LightSetImpl);

    const o1 = ["o1"];
    const o2 = ["o2"];

    s
        .add(o1)
        .add(o2)
        ;

    {
        const values = Array.from(s.values());

        assert(values[0] === o1 && values[1] === o2);
    }

    assert(s.has(o1) === true);

    assert(s.delete(o1) === true);

    assert(s.has(o1) === false);

}

console.log("PASS");
