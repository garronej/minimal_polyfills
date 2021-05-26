"use strict";
exports.__esModule = true;
if (!Object.fromEntries) {
    Object.defineProperty(Object, "fromEntries", {
        "value": function (entries) {
            if (!entries || !entries[Symbol.iterator]) {
                throw new Error('Object.fromEntries() requires a single iterable argument');
            }
            var o = {};
            Object.keys(entries).forEach(function (key) {
                var _a = entries[key], k = _a[0], v = _a[1];
                o[k] = v;
            });
            return o;
        }
    });
}
//# sourceMappingURL=Object.fromEntries.js.map