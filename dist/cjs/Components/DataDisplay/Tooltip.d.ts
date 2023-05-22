import React from 'react';
type Position = 'top' | 'bottom';
interface TooltipType {
    children: React.ReactNode;
    label: string;
    position?: Position;
}
export declare const Tooltip: {
    ({ children, label, position, ...rest }: TooltipType): React.JSX.Element;
    displayName: string;
};
export {};
