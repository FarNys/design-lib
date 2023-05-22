import React from 'react';
export const Loading = ({ className }) => {
    return (React.createElement("div", { className: "w-60 relative h-2 bg-slate-200 rounded overflow-hidden" },
        React.createElement("div", { className: `absolute -left-60 top-0 w-full h-full bg-green-500 animate-getfill ${className}` })));
};
Loading.displayName = 'Loading';
//# sourceMappingURL=Loading.js.map