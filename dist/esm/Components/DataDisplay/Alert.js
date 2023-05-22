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
export const Alert = (_a) => {
    var { title, variant = 'default', className, icon } = _a, rest = __rest(_a, ["title", "variant", "className", "icon"]);
    const variants = {
        success: 'bg-green-100 text-green-600',
        danger: 'bg-red-100 text-red-600',
        info: 'bg-sky-100 text-sky-600',
        warning: 'bg-orange-100 text-orange-600',
        default: 'bg-slate-100 text-slate-600'
    };
    return (React.createElement("div", Object.assign({ className: `d-flex justify-start py-3 px-3 rounded-md ${variants[variant]} ${className}` }, rest),
        icon,
        React.createElement("span", { className: "px-2" }, title)));
};
Alert.displayName = 'Alert';
//# sourceMappingURL=Alert.js.map