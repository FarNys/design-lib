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
exports.Accordion = void 0;
const react_1 = __importStar(require("react"));
const Typo_1 = require("../Typo");
const Accordion = (_a) => {
    var { className, data } = _a, rest = __rest(_a, ["className", "data"]);
    // const [urlText, seturlText] = useState<string>('');
    const urlText = '';
    const [activeTab, setactiveTab] = (0, react_1.useState)(-1);
    const activeHandler = (index) => {
        if (activeTab === index) {
            setactiveTab(-1);
        }
        else {
            setactiveTab(index);
        }
    };
    const heightCalc = (index) => {
        if (activeTab === index)
            return `h-auto max-h-36 transition-all rounded duration-300`;
        return 'max-h-0 transition-all  rounded duration-300';
    };
    const activeLink = (item) => {
        if (item === urlText)
            return `bg-slate-300 rounded border-r-4  border-slate-500 duration-300 font-semibold `;
        return '';
    };
    return (react_1.default.createElement("nav", Object.assign({ className: "border w-52" }, rest),
        react_1.default.createElement("ul", { className: "w-full", tabIndex: 0 }, data.map((el, index) => (react_1.default.createElement("li", { key: `list-${index}`, className: "overflow-hidden cursor-pointer" },
            react_1.default.createElement("div", { className: `px-3 py-2 flex justify-between ${activeTab === index ? 'bg-slate-200 font-semibold' : ''}`, onClick: () => activeHandler(index) },
                react_1.default.createElement(Typo_1.Typography, { variant: "p" }, el.title),
                react_1.default.createElement(Typo_1.Typography, { variant: "p", className: `flex items-center duration-300 ${activeTab === index ? 'rotate-90' : ''}` },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", onClick: (e) => e.preventDefault() },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" })))),
            react_1.default.createElement("div", { className: heightCalc(index) }, el.children.map((child, id) => (
            // <Link
            //   to="/component/button"
            //   onClick={() => seturlText(child.title)}
            //   key={`sidebar-child-${id}`}
            // >
            react_1.default.createElement(Typo_1.Typography, { variant: "small", className: `py-2 px-4 rounded hover:bg-slate-400 active:bg-slate-500 ${activeLink(child.title)}` }, child.title)
            // </Link>
            )))))))));
};
exports.Accordion = Accordion;
exports.Accordion.displayName = exports.Accordion;
//# sourceMappingURL=Accordion.js.map