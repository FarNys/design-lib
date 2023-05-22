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
import React from 'react';
export const Tooltip = (_a) => {
    var { children, label, position = 'bottom' } = _a, rest = __rest(_a, ["children", "label", "position"]);
    const positionHandler = (el) => {
        return el === 'top' ? 'bottom-full' : 'top-full';
    };
    return (React.createElement("div", Object.assign({}, rest, { className: "group w-fit relative" }),
        children,
        React.createElement("div", { className: `opacity-0 z-50 absolute ${positionHandler(position)} left-1/2 -translate-x-1/2 py-0.5 px-2 rounded-md text-sm pointer-events-none bg-slate-800 text-slate-200 group-hover:opacity-100 duration-150` }, label)));
};
Tooltip.displayName = 'Tooltip';
//# sourceMappingURL=Tooltip.js.map