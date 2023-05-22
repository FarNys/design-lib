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
export const Checkbox = (_a) => {
    var { className, isChecked, onToggle, variant = 'default' } = _a, rest = __rest(_a, ["className", "isChecked", "onToggle", "variant"]);
    const [checkState, setcheckState] = useState(isChecked ? isChecked : false);
    const checkStateHandler = () => {
        setcheckState((prev) => !prev);
        onToggle(!checkState);
    };
    const hoverVariant = {
        success: 'hover:bg-green-100',
        danger: 'hover:bg-red-100',
        warning: 'hover:bg-orange-100',
        info: 'hover:bg-sky-100',
        default: 'hover:bg-slate-200'
    };
    const checkboxVariant = {
        success: 'bg-green-500 outline-green-500',
        danger: 'bg-red-500 outline-red-500',
        warning: 'bg-orange-500 outline-orange-500',
        info: 'bg-sky-500 outline-sky-500',
        default: 'bg-slate-600 outline-slate-600'
    };
    return (React.createElement("div", Object.assign({ role: "checkbox", "aria-checked": "mixed", className: `flex justify-center items-center w-8 h-8 rounded-full ${hoverVariant[variant]} cursor-pointer duration-150 ${className ? className : ''}`, onClick: checkStateHandler }, rest),
        React.createElement("div", { className: `w-4 h-4 border rounded-full ${checkState ? `outline-1 outline ${checkboxVariant[variant]}` : 'bg-white outline-1 outline-offset-2  outline outline-slate-600 border-slate-600'}` })));
};
Checkbox.displayName = Checkbox;
//# sourceMappingURL=Checkbox.js.map