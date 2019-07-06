"use strict";
exports.__esModule = true;
delete global["Map"];
delete global["Set"];
var Map_1 = require("../lib/Map");
var Set_1 = require("../lib/Set");
{
    var m = new Map_1.Polyfill();
    var o1 = ["o1"];
    var o2 = ["o2"];
    m
        .set(o1, 1)
        .set(o2, 2);
    console.log(m.keys());
    console.log(m.get(o1) === 1);
    m.set(o1, 666);
    console.log(m.get(o1) === 666);
    console.log(m["delete"](o1) === true);
    console.log(m.get(o1) === undefined);
}
{
    var s = new Set_1.Polyfill();
    var o1 = ["o1"];
    var o2 = ["o2"];
    s
        .add(o1)
        .add(o2);
    console.log(s.values());
    console.log(s.has(o1) === true);
    console.log(s["delete"](o1) === true);
    console.log(s.has(o1) === false);
}
