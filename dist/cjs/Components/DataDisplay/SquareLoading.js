"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareLoading = void 0;
const react_1 = __importDefault(require("react"));
const SquareLoading = () => {
    return (react_1.default.createElement("div", { className: "grid grid-cols-2 w-10 h-10 gap-1" },
        react_1.default.createElement("div", { className: "border w-full h-full bg-green-500 opacity-10 animate-fadeInOut" }),
        react_1.default.createElement("div", { className: "border w-full h-full bg-green-500 opacity-10 animate-fadeInOut animate-delay-500" }),
        react_1.default.createElement("div", { className: "border w-full h-full bg-green-500 opacity-10 animate-fadeInOut animate-delay-1500" }),
        react_1.default.createElement("div", { className: "border w-full h-full bg-green-500 opacity-10 animate-fadeInOut animate-delay-1000" })));
};
exports.SquareLoading = SquareLoading;
exports.SquareLoading.displayName = 'SquareLoading';
//# sourceMappingURL=SquareLoading.js.map