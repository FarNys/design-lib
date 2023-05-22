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
exports.DataCard = void 0;
const react_1 = __importDefault(require("react"));
const Typo_1 = require("../Typo");
const DataCard = (_a) => {
    var { className, title, content, imageUrl } = _a, rest = __rest(_a, ["className", "title", "content", "imageUrl"]);
    return (react_1.default.createElement("div", Object.assign({}, rest, { className: `w-full max-w-sm rounded-lg border overflow-hidden mx-auto ${className ? className : ''}` }),
        react_1.default.createElement("img", { src: imageUrl, alt: title, className: "aspect-video object-cover" }),
        react_1.default.createElement("div", { className: "mt-2 px-4 pb-4" },
            react_1.default.createElement(Typo_1.Typography, { variant: "h4", colorVariant: "info" }, title),
            react_1.default.createElement(Typo_1.Typography, { className: "line-clamp-2" }, content))));
};
exports.DataCard = DataCard;
exports.DataCard.displayName = 'DataCard';
//# sourceMappingURL=DataCard.js.map