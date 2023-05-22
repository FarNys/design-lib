"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeSlider = void 0;
const react_1 = __importStar(require("react"));
const Typo_1 = require("../Typo");
const RangeSlider = (_a) => {
    var { initialValue, className, minValue, maxValue, selectedValue } = _a, rest = __rest(_a, ["initialValue", "className", "minValue", "maxValue", "selectedValue"]);
    const [finalValue, setfinalValue] = (0, react_1.useState)(initialValue || minValue);
    const [sliderCoordinate, setsliderCoordinate] = (0, react_1.useState)({
        width: 131,
        left: 0
    });
    const mouseUpHandler = (e) => {
        selectedValue(e.target.value);
    };
    const changeRangeHandler = (e) => {
        const coordinate = e.target.getBoundingClientRect();
        setsliderCoordinate({
            width: coordinate.width,
            left: ((e.target.value - minValue) * coordinate.width) / (maxValue - minValue)
        });
        setfinalValue(+e.target.value);
    };
    return (react_1.default.createElement("div", Object.assign({ className: " w-52 relative " }, rest),
        react_1.default.createElement("input", { type: "range", min: minValue, max: maxValue, defaultValue: initialValue || (maxValue - minValue) / 2, onChange: changeRangeHandler, 
            // value={rangeValue}
            className: "appearance-none w-full h-3 border rounded-md duration-200 bg-sky-100  cursor-pointer outline-none", onMouseUp: mouseUpHandler }),
        react_1.default.createElement(Typo_1.Typography, { className: "absolute right-full px-1 top-0 text-mini ", variant: "small", colorVariant: "info" }, minValue.toLocaleString()),
        react_1.default.createElement("span", { className: "absolute -top-3 text-mini px-1 bg-sky-100 rounded-sm text-sky-600 -translate-x-1/2", style: { left: sliderCoordinate.left + 'px' } }, finalValue.toLocaleString()),
        react_1.default.createElement(Typo_1.Typography, { className: "absolute left-full px-1 top-0 text-mini ", variant: "small", colorVariant: "info" }, maxValue.toLocaleString())));
};
exports.RangeSlider = RangeSlider;
exports.RangeSlider.displayName = exports.RangeSlider;
//# sourceMappingURL=RangeSlider.js.map