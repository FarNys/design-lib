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
export const InputGroup = (_a) => {
    var { label, name, className, onChange } = _a, rest = __rest(_a, ["label", "name", "className", "onChange"]);
    return (React.createElement("div", { className: `flex flex-col max-w-sm mt-2 ${className}` },
        React.createElement("label", { htmlFor: name, className: "mb-1" }, label),
        React.createElement("input", { name: name, 
            // {...rest}
            className: "border rounded px-3 py-1 outline-offset-1 focus:outline-green-700", onChange: onChange })));
};
InputGroup.displayName = InputGroup;
//# sourceMappingURL=InputGroup.js.map