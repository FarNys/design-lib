import React from 'react';
import { VariantTypes } from '../sharedTypes';
interface ToggleType extends React.ComponentPropsWithRef<'div'> {
    className?: string;
    isChecked?: boolean;
    variant?: VariantTypes;
    onToggle: (e: boolean) => void;
}
export declare const Toggle: {
    ({ className, isChecked, onToggle, variant, ...rest }: ToggleType): React.JSX.Element;
    displayName: any;
};
export {};
