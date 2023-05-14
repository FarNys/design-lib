"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importStar(require("react"));
const ButtonVariants_1 = require("./ButtonVariants");
exports.Button = (0, react_1.forwardRef)((props, ref) => {
    const { title, children, className, size = "md", variant = "default" } = props, rest = __rest(props, ["title", "children", "className", "size", "variant"]);
    const sizeVariants = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-1",
        lg: "px-6 py-1.5 font-bold",
    };
    return (react_1.default.createElement("button", Object.assign({ ref: ref, className: `rounded border mx-1 ${sizeVariants[size]} ${ButtonVariants_1.buttonVariants[variant]} ${className ? className : ""}` }, rest),
        title,
        " ",
        children));
});
exports.Button.displayName = "Button";
//# sourceMappingURL=Button.js.map