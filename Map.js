"use strict";
exports.__esModule = true;
exports.Polyfill = exports.LightMapImpl = void 0;
var LightMapImpl = /** @class */ (function () {
    function LightMapImpl() {
        this.record = [];
    }
    LightMapImpl.prototype.has = function (key) {
        return this.record
            .map(function (_a) {
            var _key = _a[0];
            return _key;
        })
            .indexOf(key) >= 0;
    };
    LightMapImpl.prototype.get = function (key) {
        var entry = this.record
            .filter(function (_a) {
            var _key = _a[0];
            return _key === key;
        })[0];
        if (entry === undefined) {
            return undefined;
        }
        return entry[1];
    };
    LightMapImpl.prototype.set = function (key, value) {
        var entry = this.record
            .filter(function (_a) {
            var _key = _a[0];
            return _key === key;
        })[0];
        if (entry === undefined) {
            this.record.push([key, value]);
        }
        else {
            entry[1] = value;
        }
        return this;
    };
    LightMapImpl.prototype["delete"] = function (key) {
        var index = this.record.map(function (_a) {
            var key = _a[0];
            return key;
        }).indexOf(key);
        if (index < 0) {
            return false;
        }
        this.record.splice(index, 1);
        return true;
    };
    LightMapImpl.prototype.keys = function () {
        return this.record.map(function (_a) {
            var key = _a[0];
            return key;
        });
    };
    return LightMapImpl;
}());
exports.LightMapImpl = LightMapImpl;
exports.Polyfill = typeof Map !== "undefined" ? Map : LightMapImpl;
//# sourceMappingURL=Map.js.map