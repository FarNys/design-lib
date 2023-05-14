import React from "react";
import { SizeVariantTypes, VariantOutlineTypes, VariantTypes } from "../sharedTypes";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    size?: SizeVariantTypes;
    variant?: VariantTypes | VariantOutlineTypes;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
