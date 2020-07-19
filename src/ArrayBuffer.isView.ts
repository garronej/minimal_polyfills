
if (!ArrayBuffer["isView"]) {
  ArrayBuffer.isView = function isView(a): a is ArrayBufferView {
    return a !== null && typeof(a) === "object" && a["buffer"] instanceof ArrayBuffer;
  };
}

export {};