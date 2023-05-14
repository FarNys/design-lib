import React from "react";
import { OptionType } from "./Dropdown";
interface DropdownType {
    options: OptionType[];
    values?: OptionType[];
    onSelect: (e: OptionType[]) => void;
}
export interface CoodrinateType {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
}
export declare const DropdownMulti: {
    ({ options, values, onSelect, ...rest }: DropdownType): React.JSX.Element;
    displayName: string;
};
export {};
