"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modals = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = require("./Button");
const Typography_1 = require("../Typo/Typography");
const Modals = ({ children, className, isOpen, setisOpren, title }) => {
    const clickToCloseModalHandler = () => {
        setisOpren(false);
    };
    if (!isOpen)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'fixed top-0 left-0 min-w-full min-h-screen bg-slate-800 opacity-50', id: 'modal-state', onClick: clickToCloseModalHandler }),
        react_1.default.createElement("div", { className: `fixed top-1/4 left-2/4 -translate-x-2/4 flex flex-col justify-center items-center bg-slate-200 min-h-min p-4 rounded-md max-w-md animate-fadeOut w-full ${className}` },
            react_1.default.createElement("div", { className: 'flex justify-between w-full' },
                react_1.default.createElement(Typography_1.Typography, { variant: 'h6', className: 'pt-1' }, title),
                react_1.default.createElement(Button_1.Button, { onClick: clickToCloseModalHandler, 
                    // className="border-red-500 text-red-500 hover:bg-red-500 hover:border-slate-100 hover:text-slate-100"
                    size: 'sm', variant: 'default' }, "X")),
            react_1.default.createElement("div", { className: 'mt-2  w-full' }, children))));
};
exports.Modals = Modals;
exports.Modals.displayName = "Modals";
//# sourceMappingURL=Modals.js.map