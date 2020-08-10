"use strict";
exports.__esModule = true;
var isDeno = false;
if (typeof global !== "undefined") {
    delete global["Set"];
}
else {
    isDeno = true;
}
//NOTE: Cannot delete Map as used by import().
var Map_1 = require("../Map");
var Set_1 = require("../Set");
if (isDeno) {
    console.log("Deno does not need web polyfills. PASS");
    Deno.exit(0);
}
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
{
    var m = new Map_1.LightMapImpl();
    var o1 = ["o1"];
    var o2 = ["o2"];
    m
        .set(o1, 1)
        .set(o2, 2);
    {
        var keys = Array.from(m.keys());
        assert(keys[0] === o1 && keys[1] === o2);
    }
    assert(m.get(o1) === 1);
    m.set(o1, 666);
    assert(m.get(o1) === 666);
    assert(m["delete"](o1) === true);
    assert(m.get(o1) === undefined);
}
{
    var s = new Set_1.Polyfill();
    assert(s instanceof Set_1.LightSetImpl);
    var o1 = ["o1"];
    var o2 = ["o2"];
    s
        .add(o1)
        .add(o2);
    {
        var values = Array.from(s.values());
        assert(values[0] === o1 && values[1] === o2);
    }
    assert(s.has(o1) === true);
    assert(s["delete"](o1) === true);
    assert(s.has(o1) === false);
}
console.log("PASS");
//# sourceMappingURL=index.js.map