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
import React, { useState } from 'react';
import { Typography } from '../Typo';
export const RangeSlider = (_a) => {
    var { initialValue, className, minValue, maxValue, selectedValue } = _a, rest = __rest(_a, ["initialValue", "className", "minValue", "maxValue", "selectedValue"]);
    const [finalValue, setfinalValue] = useState(initialValue || minValue);
    const [sliderCoordinate, setsliderCoordinate] = useState({
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
    return (React.createElement("div", Object.assign({ className: " w-52 relative " }, rest),
        React.createElement("input", { type: "range", min: minValue, max: maxValue, defaultValue: initialValue || (maxValue - minValue) / 2, onChange: changeRangeHandler, 
            // value={rangeValue}
            className: "appearance-none w-full h-3 border rounded-md duration-200 bg-sky-100  cursor-pointer outline-none", onMouseUp: mouseUpHandler }),
        React.createElement(Typography, { className: "absolute right-full px-1 top-0 text-mini ", variant: "small", colorVariant: "info" }, minValue.toLocaleString()),
        React.createElement("span", { className: "absolute -top-3 text-mini px-1 bg-sky-100 rounded-sm text-sky-600 -translate-x-1/2", style: { left: sliderCoordinate.left + 'px' } }, finalValue.toLocaleString()),
        React.createElement(Typography, { className: "absolute left-full px-1 top-0 text-mini ", variant: "small", colorVariant: "info" }, maxValue.toLocaleString())));
};
RangeSlider.displayName = RangeSlider;
//# sourceMappingURL=RangeSlider.js.map