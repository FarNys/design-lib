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
export const Card = (_a) => {
    var { children, className } = _a, rest = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: `w-11/12 border shadow-sm my-4 p-4 mx-auto ${className ? className : ''}` }, rest), children));
};
Card.displayName = Card;
//# sourceMappingURL=Card.js.map