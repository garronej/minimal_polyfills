"use strict";
exports.__esModule = true;
if (!ArrayBuffer["isView"]) {
    ArrayBuffer.isView = function isView(a) {
        return a !== null && typeof (a) === "object" && a["buffer"] instanceof ArrayBuffer;
    };
}
//# sourceMappingURL=ArrayBuffer.isView.js.map