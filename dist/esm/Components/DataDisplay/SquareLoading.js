import React from 'react';
export const SquareLoading = () => {
    return (React.createElement("div", { className: "grid grid-cols-2 w-10 h-10 gap-1" },
        React.createElement("div", { className: "border w-full h-full bg-green-500 opacity-10 animate-fadeInOut" }),
        React.createElement("div", { className: "border w-full h-full bg-green-500 opacity-10 animate-fadeInOut animate-delay-500" }),
        React.createElement("div", { className: "border w-full h-full bg-green-500 opacity-10 animate-fadeInOut animate-delay-1500" }),
        React.createElement("div", { className: "border w-full h-full bg-green-500 opacity-10 animate-fadeInOut animate-delay-1000" })));
};
SquareLoading.displayName = 'SquareLoading';
//# sourceMappingURL=SquareLoading.js.map