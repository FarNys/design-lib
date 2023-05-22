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
const react_1 = __importStar(require("react"));
const Typo_1 = require("../Typo");
const Tabs = (_a) => {
    var { className, tabsValue, variant } = _a, rest = __rest(_a, ["className", "tabsValue", "variant"]);
    const [activeTabId, setactiveTabId] = (0, react_1.useState)(tabsValue[0].id);
    const changeActiveHandler = (item) => {
        setactiveTabId(item.id);
    };
    const bgItems = {
        info: 'bg-sky-50',
        danger: 'bg-red-50',
        success: 'bg-green-50',
        warning: 'bg-orange-50',
        default: 'bg-slate-50'
    };
    return (react_1.default.createElement("div", Object.assign({}, rest, { className: "block" }),
        react_1.default.createElement("div", { className: "flex rounded-md overflow-hidden w-fit" }, tabsValue.map((el, index) => (react_1.default.createElement("div", { className: `w-fit px-3 py-1 border-r-2 last-of-type:border-r-0 cursor-pointer duration-150 ${el.id === activeTabId ? bgItems[variant] : 'bg-slate-50'} `, key: `tab-header-${el.id}-${index}`, onClick: () => changeActiveHandler(el) },
            react_1.default.createElement(Typo_1.Typography, { variant: "h6", colorVariant: el.id === activeTabId ? variant : 'default' }, el.title))))),
        react_1.default.createElement("div", { className: "my-2" },
            react_1.default.createElement("div", { className: "translate-y-5" }, tabsValue.map((el, index) => (react_1.default.createElement("div", { key: `active-tab-${index}`, className: `${el.id === activeTabId ? 'block duration-500 -translate-y-5 opacity-100' : 'max-h-0 invisible pointer-events-none opacity-0'}` }, el.content)))))));
};
Tabs.displayName = Tabs;
//# sourceMappingURL=Tabs.js.map