import React from "react";
import { Button } from "./Button";
import { Typography } from "../Typo/Typography";
export const Modals = ({ children, className, isOpen, setisOpren, title }) => {
    const clickToCloseModalHandler = () => {
        setisOpren(false);
    };
    if (!isOpen)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'fixed top-0 left-0 min-w-full min-h-screen bg-slate-800 opacity-50', id: 'modal-state', onClick: clickToCloseModalHandler }),
        React.createElement("div", { className: `fixed top-1/4 left-2/4 -translate-x-2/4 flex flex-col justify-center items-center bg-slate-200 min-h-min p-4 rounded-md max-w-md animate-fadeOut w-full ${className}` },
            React.createElement("div", { className: 'flex justify-between w-full' },
                React.createElement(Typography, { variant: 'h6', className: 'pt-1' }, title),
                React.createElement(Button, { onClick: clickToCloseModalHandler, 
                    // className="border-red-500 text-red-500 hover:bg-red-500 hover:border-slate-100 hover:text-slate-100"
                    size: 'sm', variant: 'default' }, "X")),
            React.createElement("div", { className: 'mt-2  w-full' }, children))));
};
Modals.displayName = "Modals";
//# sourceMappingURL=Modals.js.map