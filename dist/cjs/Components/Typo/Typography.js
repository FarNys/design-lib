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
exports.Typography = void 0;
const react_1 = __importDefault(require("react"));
const Typography = (_a) => {
    var { variant = 'p', children, className, colorVariant = 'default' } = _a, rest = __rest(_a, ["variant", "children", "className", "colorVariant"]);
    return relatedTypography(variant, children, className, colorVariant, rest);
};
exports.Typography = Typography;
const relatedTypography = (variant, children, className, colorVariant = 'default', rest) => {
    const variantStyle = {
        default: 'text-slate-900',
        success: 'text-green-400',
        danger: 'text-red-400',
        info: 'text-sky-400',
        warning: 'text-orange-400'
    };
    const tagElement = {
        h1: (react_1.default.createElement("h1", Object.assign({}, rest, { className: `text-5xl font-extrabold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h2: (react_1.default.createElement("h2", Object.assign({}, rest, { className: ` text-4xl font-extrabold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h3: (react_1.default.createElement("h3", Object.assign({}, rest, { className: ` text-3xl font-bold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h4: (react_1.default.createElement("h4", Object.assign({}, rest, { className: ` text-2xl font-bold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h5: (react_1.default.createElement("h5", Object.assign({}, rest, { className: ` text-xl font-semibold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        h6: (react_1.default.createElement("h6", Object.assign({}, rest, { className: ` font-semibold ${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        p: (react_1.default.createElement("p", Object.assign({}, rest, { className: `${variantStyle[colorVariant]} ${className ? className : ''}` }), children)),
        small: (react_1.default.createElement("p", Object.assign({}, rest, { className: `text-sm ${variantStyle[colorVariant]} ${className ? className : ''}` }), children))
    };
    return tagElement[variant];
};
exports.Typography.displayName = 'Typography';
//# sourceMappingURL=Typography.js.map