"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGroup = void 0;
const react_1 = __importDefault(require("react"));
const InputGroup = (_a) => {
    var { label, name, className, onChange } = _a, rest = __rest(_a, ["label", "name", "className", "onChange"]);
    return (react_1.default.createElement("div", { className: `flex flex-col max-w-sm mt-2 ${className}` },
        react_1.default.createElement("label", { htmlFor: name, className: "mb-1" }, label),
        react_1.default.createElement("input", { name: name, 
            // {...rest}
            className: "border rounded px-3 py-1 outline-offset-1 focus:outline-green-700", onChange: onChange })));
};
exports.InputGroup = InputGroup;
exports.InputGroup.displayName = exports.InputGroup;
//# sourceMappingURL=InputGroup.js.map