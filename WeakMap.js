"use strict";
exports.__esModule = true;
exports.Polyfill = void 0;
var Map_1 = require("./Map");
exports.Polyfill = typeof WeakMap !== "undefined" ? WeakMap : Map_1.Polyfill;
//# sourceMappingURL=WeakMap.js.map