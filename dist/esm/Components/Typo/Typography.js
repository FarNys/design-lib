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
export const Typography = (_a) => {
    var { variant = 'p', children, className, colorVariant = 'default' } = _a, rest = __rest(_a, ["variant", "children", "className", "colorVariant"]);
    return relatedTypography(variant, children, className, colorVariant, rest);
};
const relatedTypography = (variant, children, className, colorVariant = 'default', rest) => {
    const variantStyle = {
        default: 'text-slate-900',
        success: 'text-green-400',
        danger: 'text-red-400',
        info: 'text-sky-400',
        warning: 'text-orange-400'
    };
    const tagElement = {
        h1: (React.createElement("h1", Object.assign({}, rest, { className: `text-5xl font-extrabold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h2: (React.createElement("h2", Object.assign({}, rest, { className: ` text-4xl font-extrabold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h3: (React.createElement("h3", Object.assign({}, rest, { className: ` text-3xl font-bold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h4: (React.createElement("h4", Object.assign({}, rest, { className: ` text-2xl font-bold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h5: (React.createElement("h5", Object.assign({}, rest, { className: ` text-xl font-semibold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h6: (React.createElement("h6", Object.assign({}, rest, { className: ` font-semibold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        p: (React.createElement("p", Object.assign({}, rest, { className: `${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        small: (React.createElement("p", Object.assign({}, rest, { className: `text-sm ${variantStyle[colorVariant]} ${className ? className : ''}` }), children))
    };
    return tagElement[variant];
};
Typography.displayName = 'Typography';
//# sourceMappingURL=Typography.js.map