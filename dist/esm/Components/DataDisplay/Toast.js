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
import React, { useEffect } from 'react';
import { Button } from '../Actions';
import { Typography } from '../Typo';
export const Toast = (_a) => {
    var { toastText, showToast, setshowToast, variant } = _a, rest = __rest(_a, ["toastText", "showToast", "setshowToast", "variant"]);
    useEffect(() => {
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
    return (React.createElement("div", Object.assign({ className: `fixed rounded-md top-10 right-10 flex flex-col py-2 px-1 items-end  border-l-4 max-w-xs animate-spring ${allVariants[variant]}` }, rest),
        React.createElement(Button, { variant: variant, size: "sm", className: "w-fit border-none ", onClick: () => setshowToast(false) }, "x"),
        React.createElement("div", { className: "p-2" },
            React.createElement(Typography, { variant: "h6" }, toastText))));
};
Toast.displayName = 'Toast';
//# sourceMappingURL=Toast.js.map