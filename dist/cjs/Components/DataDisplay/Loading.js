"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
const react_1 = __importDefault(require("react"));
const Loading = ({ className }) => {
    return (react_1.default.createElement("div", { className: "w-60 relative h-2 bg-slate-200 rounded overflow-hidden" },
        react_1.default.createElement("div", { className: `absolute -left-60 top-0 w-full h-full bg-green-500 animate-getfill ${className}` })));
};
exports.Loading = Loading;
exports.Loading.displayName = 'Loading';
//# sourceMappingURL=Loading.js.map