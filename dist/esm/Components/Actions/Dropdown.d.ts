import React from "react";
export interface OptionType {
    label: string;
    value: string | boolean | number;
}
interface DropdownType {
    options: OptionType[];
    value?: OptionType;
    onSelect: (e: OptionType) => void;
}
export declare const Dropdown: React.MemoExoticComponent<({ options, value, onSelect, ...rest }: DropdownType) => React.JSX.Element>;
export {};
