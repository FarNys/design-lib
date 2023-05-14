import React, { forwardRef, Ref } from "react";
import {
  SizeVariantTypes,
  VariantOutlineTypes,
  VariantTypes,
} from "../sharedTypes";
import { buttonVariants } from "./ButtonVariants";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: SizeVariantTypes;
  variant?: VariantTypes | VariantOutlineTypes;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      title,
      children,
      className,
      size = "md",
      variant = "default",
      ...rest
    } = props;

    const sizeVariants: Record<SizeVariantTypes, string> = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-1",
      lg: "px-6 py-1.5 font-bold",
    };

    return (
      <button
        ref={ref}
        className={`rounded border mx-1 ${sizeVariants[size]} ${
          buttonVariants[variant]
        } ${className ? className : ""}`}
        {...rest}
      >
        {title} {children}
      </button>
    );
  }
);

Button.displayName = "Button";
