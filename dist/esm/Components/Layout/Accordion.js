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
export const Accordion = (_a) => {
    var { className, data } = _a, rest = __rest(_a, ["className", "data"]);
    // const [urlText, seturlText] = useState<string>('');
    const urlText = '';
    const [activeTab, setactiveTab] = useState(-1);
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
    return (React.createElement("nav", Object.assign({ className: "border w-52" }, rest),
        React.createElement("ul", { className: "w-full", tabIndex: 0 }, data.map((el, index) => (React.createElement("li", { key: `list-${index}`, className: "overflow-hidden cursor-pointer" },
            React.createElement("div", { className: `px-3 py-2 flex justify-between ${activeTab === index ? 'bg-slate-200 font-semibold' : ''}`, onClick: () => activeHandler(index) },
                React.createElement(Typography, { variant: "p" }, el.title),
                React.createElement(Typography, { variant: "p", className: `flex items-center duration-300 ${activeTab === index ? 'rotate-90' : ''}` },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", onClick: (e) => e.preventDefault() },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" })))),
            React.createElement("div", { className: heightCalc(index) }, el.children.map((child, id) => (
            // <Link
            //   to="/component/button"
            //   onClick={() => seturlText(child.title)}
            //   key={`sidebar-child-${id}`}
            // >
            React.createElement(Typography, { variant: "small", className: `py-2 px-4 rounded hover:bg-slate-400 active:bg-slate-500 ${activeLink(child.title)}` }, child.title)
            // </Link>
            )))))))));
};
Accordion.displayName = Accordion;
//# sourceMappingURL=Accordion.js.map