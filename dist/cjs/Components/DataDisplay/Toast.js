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
exports.Toast = void 0;
const react_1 = __importStar(require("react"));
const Actions_1 = require("../Actions");
const Typo_1 = require("../Typo");
const Toast = (_a) => {
    var { toastText, showToast, setshowToast, variant } = _a, rest = __rest(_a, ["toastText", "showToast", "setshowToast", "variant"]);
    (0, react_1.useEffect)(() => {
        let timeOut = setTimeout(() => {
            setshowToast(false);
        }, 3000);
        return () => clearTimeout(timeOut);
    }, [showToast, setshowToast]);
    const allVariants = {
        default: 'border-slate-700',
        danger: 'border-red-500 bg-red-100',
        info: 'border-sky-500 bg-sky-100',
        success: 'border-green-500 bg-green-100',
        warning: 'border-orange-500 bg-orange-100'
    };
    if (!showToast)
        return null;
    return (react_1.default.createElement("div", Object.assign({ className: `fixed rounded-md top-10 right-10 flex flex-col py-2 px-1 items-end  border-l-4 max-w-xs animate-spring ${allVariants[variant]}` }, rest),
        react_1.default.createElement(Actions_1.Button, { variant: variant, size: "sm", className: "w-fit border-none ", onClick: () => setshowToast(false) }, "x"),
        react_1.default.createElement("div", { className: "p-2" },
            react_1.default.createElement(Typo_1.Typography, { variant: "h6" }, toastText))));
};
exports.Toast = Toast;
exports.Toast.displayName = 'Toast';
//# sourceMappingURL=Toast.js.map