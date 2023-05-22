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
exports.Checkbox = void 0;
const react_1 = __importStar(require("react"));
const Checkbox = (_a) => {
    var { className, isChecked, onToggle, variant = 'default' } = _a, rest = __rest(_a, ["className", "isChecked", "onToggle", "variant"]);
    const [checkState, setcheckState] = (0, react_1.useState)(isChecked ? isChecked : false);
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
    return (react_1.default.createElement("div", Object.assign({ role: "checkbox", "aria-checked": "mixed", className: `flex justify-center items-center w-8 h-8 rounded-full ${hoverVariant[variant]} cursor-pointer duration-150 ${className ? className : ''}`, onClick: checkStateHandler }, rest),
        react_1.default.createElement("div", { className: `w-4 h-4 border rounded-full ${checkState ? `outline-1 outline ${checkboxVariant[variant]}` : 'bg-white outline-1 outline-offset-2  outline outline-slate-600 border-slate-600'}` })));
};
exports.Checkbox = Checkbox;
exports.Checkbox.displayName = exports.Checkbox;
//# sourceMappingURL=Checkbox.js.map