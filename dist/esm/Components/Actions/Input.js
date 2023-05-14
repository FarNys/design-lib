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
import React from "react";
export const Input = (_a) => {
    var { className } = _a, rest = __rest(_a, ["className"]);
    return React.createElement("input", Object.assign({ className: `px-4 py-2 mx-1 border focus:border-violet-600 focus:outline-none ${className}` }, rest));
};
Input.displayName = "Input";
//# sourceMappingURL=Input.js.map