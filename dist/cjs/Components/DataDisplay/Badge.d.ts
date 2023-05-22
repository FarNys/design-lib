import React from 'react';
import { VariantTypes } from '../sharedTypes';
interface BadgeType {
    readonly [index: string]: string | undefined;
    className?: string;
    variant?: VariantTypes;
    text: string;
}
export declare const Badge: {
    ({ className, variant, text, ...rest }: BadgeType): React.JSX.Element;
    displayName: string;
};
export {};
