import React from "react";
import { VariantTypes } from "../sharedTypes";
interface TypographyType extends React.ComponentPropsWithRef<"p"> {
    variant?: TypoVariantType;
    children?: React.ReactNode;
    className?: string;
    colorVariant?: VariantTypes;
}
type TypoVariantType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
export declare const Typography: ({ variant, children, className, colorVariant, ...rest }: TypographyType) => JSX.Element;
export {};
