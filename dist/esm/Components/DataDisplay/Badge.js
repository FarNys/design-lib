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
export const Badge = (_a) => {
    var { className, variant = 'default', text } = _a, rest = __rest(_a, ["className", "variant", "text"]);
    const badgeElement = {
        success: 'bg-green-100  text-green-600 px-2',
        danger: 'bg-red-100  text-red-600 px-2',
        info: 'bg-sky-100  text-sky-600 px-2',
        warning: 'bg-orange-100  text-orange-600 px-2',
        default: 'bg-slate-100  text-slate-600 px-2'
    };
    return (React.createElement("div", Object.assign({}, rest, { className: `w-fit flex text-sm rounded ${badgeElement[variant]} ${className}` }), text));
};
// const findVariant = ({ className, variant, text, ...rest }: BadgeType) => {
//   const badgeElement: BadgeElementType = {
//     success: (
//       <div
//         {...rest}
//         className={`w-fit flex text-sm bg-green-100 rounded text-green-600 px-2  ${className}`}
//       >
//         {text}
//       </div>
//     ),
//     danger: (
//       <div
//         {...rest}
//         className={`w-fit flex text-sm bg-red-100 rounded text-red-600 px-2  ${className}`}
//       >
//         {text}
//       </div>
//     ),
//     info: (
//       <div
//         {...rest}
//         className={`w-fit flex text-sm bg-sky-100 rounded text-sky-600 px-2  ${className}`}
//       >
//         {text}
//       </div>
//     ),
//     warning: (
//       <div
//         {...rest}
//         className={`w-fit flex text-sm bg-orange-100 rounded text-orange-600 px-2  ${className}`}
//       >
//         {text}
//       </div>
//     ),
//   };
//   return badgeElement[variant as keyof BadgeElementType];
// };
Badge.displayName = 'Badge';
//# sourceMappingURL=Badge.js.map