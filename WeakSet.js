"use strict";
exports.__esModule = true;
exports.Polyfill = void 0;
var Set_1 = require("./Set");
exports.Polyfill = typeof WeakSet !== "undefined" ? WeakSet : Set_1.Polyfill;
//# sourceMappingURL=WeakSet.js.map