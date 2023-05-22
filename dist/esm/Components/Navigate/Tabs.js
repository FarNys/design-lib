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
import React, { useState } from 'react';
import { Typography } from '../Typo';
const Tabs = (_a) => {
    var { className, tabsValue, variant } = _a, rest = __rest(_a, ["className", "tabsValue", "variant"]);
    const [activeTabId, setactiveTabId] = useState(tabsValue[0].id);
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
    return (React.createElement("div", Object.assign({}, rest, { className: "block" }),
        React.createElement("div", { className: "flex rounded-md overflow-hidden w-fit" }, tabsValue.map((el, index) => (React.createElement("div", { className: `w-fit px-3 py-1 border-r-2 last-of-type:border-r-0 cursor-pointer duration-150 ${el.id === activeTabId ? bgItems[variant] : 'bg-slate-50'} `, key: `tab-header-${el.id}-${index}`, onClick: () => changeActiveHandler(el) },
            React.createElement(Typography, { variant: "h6", colorVariant: el.id === activeTabId ? variant : 'default' }, el.title))))),
        React.createElement("div", { className: "my-2" },
            React.createElement("div", { className: "translate-y-5" }, tabsValue.map((el, index) => (React.createElement("div", { key: `active-tab-${index}`, className: `${el.id === activeTabId ? 'block duration-500 -translate-y-5 opacity-100' : 'max-h-0 invisible pointer-events-none opacity-0'}` }, el.content)))))));
};
Tabs.displayName = Tabs;
//# sourceMappingURL=Tabs.js.map