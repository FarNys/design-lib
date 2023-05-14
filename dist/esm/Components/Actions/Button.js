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
import React, { forwardRef } from "react";
import { buttonVariants } from "./ButtonVariants";
export const Button = forwardRef((props, ref) => {
    const { title, children, className, size = "md", variant = "default" } = props, rest = __rest(props, ["title", "children", "className", "size", "variant"]);
    const sizeVariants = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-1",
        lg: "px-6 py-1.5 font-bold",
    };
    return (React.createElement("button", Object.assign({ ref: ref, className: `rounded border mx-1 ${sizeVariants[size]} ${buttonVariants[variant]} ${className ? className : ""}` }, rest),
        title,
        " ",
        children));
});
Button.displayName = "Button";
//# sourceMappingURL=Button.js.map