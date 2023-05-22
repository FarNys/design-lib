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
exports.Toggle = void 0;
const react_1 = __importStar(require("react"));
const Toggle = (_a) => {
    var { className, isChecked = false, onToggle, variant = 'default' } = _a, rest = __rest(_a, ["className", "isChecked", "onToggle", "variant"]);
    const [toggleState, settoggleState] = (0, react_1.useState)(isChecked ? isChecked : false);
    const toggleHandler = () => {
        settoggleState((prev) => !prev);
        onToggle(!toggleState);
    };
    const toggleVariant = {
        success: 'bg-green-200 border-green-500',
        danger: 'bg-red-200 border-red-500',
        warning: 'bg-orange-200 border-orange-500',
        info: 'bg-sky-200 border-sky-500',
        default: 'bg-slate-200 border-slate-500'
    };
    const bulletVariant = {
        success: 'bg-green-500',
        danger: 'bg-red-500',
        warning: ' bg-orange-500',
        info: 'bg-sky-500',
        default: 'bg-slate-500'
    };
    return (react_1.default.createElement("div", Object.assign({ role: "checkbox", "aria-checked": "mixed", className: `relative w-10 h-5 border rounded-2xl cursor-pointer ${toggleState ? toggleVariant[variant] : toggleVariant['default']}` }, rest, { onClick: toggleHandler, dir: "ltr" }),
        react_1.default.createElement("div", { className: `absolute rounded-full top-1/2 -translate-y-1/2 h-4 w-4 duration-150  border ${toggleState ? `${bulletVariant[variant]}  translate-x-5 ` : 'translate-x-0.5 bg-slate-600 '}` })));
};
exports.Toggle = Toggle;
exports.Toggle.displayName = exports.Toggle;
//# sourceMappingURL=Toggle.js.map