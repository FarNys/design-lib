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
import { Typography } from '../Typo';
export const DataCard = (_a) => {
    var { className, title, content, imageUrl } = _a, rest = __rest(_a, ["className", "title", "content", "imageUrl"]);
    return (React.createElement("div", Object.assign({}, rest, { className: `w-full max-w-sm rounded-lg border overflow-hidden mx-auto ${className ? className : ''}` }),
        React.createElement("img", { src: imageUrl, alt: title, className: "aspect-video object-cover" }),
        React.createElement("div", { className: "mt-2 px-4 pb-4" },
            React.createElement(Typography, { variant: "h4", colorVariant: "info" }, title),
            React.createElement(Typography, { className: "line-clamp-2" }, content))));
};
DataCard.displayName = 'DataCard';
//# sourceMappingURL=DataCard.js.map